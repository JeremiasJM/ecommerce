"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ShoppingCart,
  Building2,
  Briefcase,
} from "lucide-react";

const services = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tienda online completa",
  },
  {
    id: "institucional",
    icon: Building2,
    title: "Institucional",
    description: "Sitio corporativo",
  },
  {
    id: "empresarial",
    icon: Briefcase,
    title: "Empresarial",
    description: "Solución empresarial",
  },
];

const ecommerceFeatures = [
  "Gestión de productos",
  "Carrito de compras",
  "Pasarela de pagos",
  "Panel de administración",
  "Gestión de stock",
  "Sistema multi-sucursal",
  "Facturación electrónica",
  "Dashboard de analytics",
];

const institucionalFeatures = [
  "Diseño corporativo",
  "CMS integrado",
  "Blog",
  "Formulario de contacto",
  "SEO optimizado",
  "Multiidioma",
  "Galería de imágenes",
  "Integración con redes sociales",
];

const empresarialFeatures = [
  "Dashboard personalizado",
  "Integración con ERP",
  "Sistema de usuarios y roles",
  "API REST",
  "Reportes automáticos",
  "Automatización de procesos",
  "Alta disponibilidad",
  "Soporte dedicado",
];

const step3Schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  company: z.string().optional(),
});

type Step3FormData = z.infer<typeof step3Schema>;

interface MultiStepFormProps {
  onComplete?: () => void;
}

export default function MultiStepForm({ onComplete }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3FormData>({
    resolver: zodResolver(step3Schema),
  });

  const totalSteps = 4;

  const getFeaturesByService = () => {
    switch (selectedService) {
      case "ecommerce":
        return ecommerceFeatures;
      case "institucional":
        return institucionalFeatures;
      case "empresarial":
        return empresarialFeatures;
      default:
        return [];
    }
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmitStep3 = async (data: Step3FormData) => {
    setIsSubmitting(true);

    const quoteData = {
      service: selectedService,
      features: selectedFeatures,
      contactInfo: data,
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Quote data:", quoteData);
      handleNext();
    } catch (error) {
      console.error("Error submitting quote:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step < currentStep
                    ? "bg-primary-600 text-white"
                    : step === currentStep
                      ? "bg-primary-600 text-white ring-4 ring-primary-200"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < totalSteps && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    step < currentStep ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Servicio</span>
          <span>Detalles</span>
          <span>Contacto</span>
          <span>Agendar</span>
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Selecciona el tipo de servicio
              </h2>
              <p className="text-gray-600 mb-8">
                Elige el servicio que mejor se adapte a tus necesidades
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedService === service.id
                        ? "border-primary-600 bg-primary-50 shadow-glow"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        selectedService === service.id
                          ? "bg-gradient-primary"
                          : "bg-gray-100"
                      }`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${
                          selectedService === service.id
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Features Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Selecciona las funcionalidades
              </h2>
              <p className="text-gray-600 mb-8">
                Marca las características que necesitas para tu proyecto
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getFeaturesByService().map((feature) => (
                  <motion.button
                    key={feature}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleFeature(feature)}
                    className={`p-4 rounded-lg border-2 transition-all text-left flex items-center gap-3 ${
                      selectedFeatures.includes(feature)
                        ? "border-primary-600 bg-primary-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedFeatures.includes(feature)
                          ? "border-primary-600 bg-primary-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedFeatures.includes(feature) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{feature}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Información de contacto
              </h2>
              <p className="text-gray-600 mb-8">
                Completa tus datos para que podamos contactarte
              </p>

              <form
                onSubmit={handleSubmit(onSubmitStep3)}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+54 11 1234-5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa (opcional)
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Mi Empresa S.A."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    icon={<ChevronLeft className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    Anterior
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    isLoading={isSubmitting}
                    icon={<ChevronRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Continuar
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Calendar Integration */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Agenda una reunión
              </h2>
              <p className="text-gray-600 mb-8">
                Selecciona un horario conveniente para discutir tu proyecto
              </p>

              <div className="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Aquí se integrará Cal.com o Calendly
                  </p>
                  <p className="text-sm text-gray-500">
                    Configura tu enlace de calendario en las variables de
                    entorno
                  </p>
                  {/* Calendar embed will go here */}
                  <div className="mt-6 p-8 bg-white rounded-lg">
                    <p className="text-gray-400">Calendar Widget Placeholder</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">
                      ¡Cotización enviada con éxito!
                    </h3>
                    <p className="text-green-700 text-sm">
                      Hemos recibido tu solicitud. Te contactaremos pronto para
                      discutir los detalles de tu proyecto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  icon={<ChevronLeft className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Anterior
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons (for steps 1 and 2) */}
      {currentStep < 3 && (
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
              icon={<ChevronLeft className="w-5 h-5" />}
              iconPosition="left"
            >
              Anterior
            </Button>
          )}
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
            disabled={currentStep === 1 && !selectedService}
            className="flex-1"
            icon={<ChevronRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Continuar
          </Button>
        </div>
      )}
    </div>
  );
}


import { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import {
  ShoppingCart,
  Database,
  CreditCard,
  BarChart3,
  Building2,
  CheckCircle,
} from "lucide-react";
import HeroEcommerce from "./HeroEcommerce";

export const metadata: Metadata = {
  title: "E-commerce Avanzado | DevAgency",
  description:
    "Plataformas de e-commerce completas con gestión de stock, multi-sucursal, facturación electrónica y analytics en tiempo real.",
};

const features = [
  {
    icon: Database,
    title: "Gestión Integral de Stock",
    description:
      "Control completo de inventario con alertas automáticas, seguimiento de productos y gestión de variantes.",
  },
  {
    icon: Building2,
    title: "Sistema Multi-Sucursal",
    description:
      "Administra múltiples sucursales desde un solo panel con sincronización en tiempo real.",
  },
  {
    icon: CreditCard,
    title: "Facturación Electrónica",
    description:
      "Integración con AFIP y sistemas de facturación electrónica para cumplimiento legal.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de Ventas",
    description:
      "Estadísticas y métricas en tiempo real para tomar decisiones informadas.",
  },
];

const benefits = [
  "Pasarelas de pago integradas (Mercado Pago, Stripe, PayPal)",
  "Carrito de compras optimizado para conversión",
  "Sistema de cupones y descuentos",
  "Gestión de envíos y tracking",
  "Panel de administración intuitivo",
  "Optimización SEO para productos",
  "Responsive design para todos los dispositivos",
  "Integración con redes sociales",
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <HeroEcommerce />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Características Principales
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 * index}>
                <Card hover className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Todo lo que necesitas para vender online
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestras soluciones de e-commerce incluyen todas las
                herramientas necesarias para gestionar y hacer crecer tu negocio
                digital.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <FadeIn key={benefit} delay={0.05 * index}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/e-commerce.png"
                  alt="Dashboard de E-commerce"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section (centrado, fondo blanco, texto oscuro, botón dark) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para lanzar tu tienda online?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear el e-commerce perfecto para tu negocio.
            </p>
            <Link href="/cotizacion">
              <Button className="!bg-dark-900 !bg-none text-white" size="lg">
                Solicitar Cotización
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

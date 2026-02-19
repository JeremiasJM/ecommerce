import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import MultiStepForm from "@/components/quote/multi-step-form";

export const metadata: Metadata = {
  title: "Cotización | DevAgency",
  description:
    "Solicita una cotización personalizada para tu proyecto digital. Proceso simple y rápido.",
};

export default function CotizacionPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              Solicita tu Cotización
            </h1>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              Completa el formulario y agenda una reunión para discutir tu
              proyecto
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <MultiStepForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

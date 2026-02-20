import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import HeroCotizacion from "./HeroCotizacion";
import MultiStepForm from "@/components/quote/multi-step-form";

export const metadata: Metadata = {
  title: "Cotización | LunAgency",
  description:
    "Solicita una cotización personalizada para tu proyecto digital. Proceso simple y rápido.",
};

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroCotizacion />

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

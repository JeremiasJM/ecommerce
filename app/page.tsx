import HeroSection from "@/components/home/hero-section";
import ServicesPreview from "@/components/home/services-preview";
import PortfolioPreview from "@/components/home/portfolio-preview";
import ProcessTimeline from "@/components/home/process-timeline";
import FadeIn from "@/components/ui/fade-in";
import Button from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessTimeline />

      {/* Final CTA Section - Fondo oscuro con gradientes sutiles */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-950 to-primary-950">
        {/* Detalles visuales sutiles */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-secondary-500/20 to-transparent rounded-full blur-2xl animate-pulse-slower" />
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-gradient-to-br from-accent-500/20 to-transparent rounded-full blur-2xl opacity-70 animate-pulse" style={{transform:'translate(-50%,-50%)'}} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Agenda una reunión gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos digitales.
            </p>
            <Link href="/cotizacion">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-400 text-primary-100 hover:bg-primary-400 hover:text-dark-900 shadow-xl"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Solicitar Cotización
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

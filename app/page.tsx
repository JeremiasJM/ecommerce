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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agenda una reunión gratuita y descubre cómo podemos ayudarte a
              alcanzar tus objetivos digitales.
            </p>
            <Link href="/cotizacion">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
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

import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Image from "next/image";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Building2, Globe, Search, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitios Institucionales | DevAgency",
  description:
    "Diseño corporativo profesional con CMS integrado y optimización SEO para fortalecer la presencia digital de tu empresa.",
};

const features = [
  {
    icon: Globe,
    title: "Diseño Corporativo",
    description:
      "Diseños profesionales que reflejan la identidad y valores de tu empresa.",
  },
  {
    icon: Zap,
    title: "CMS Integrado",
    description: "Gestiona tu contenido fácilmente sin conocimientos técnicos.",
  },
  {
    icon: Search,
    title: "SEO Optimizado",
    description:
      "Posicionamiento en buscadores para aumentar tu visibilidad online.",
  },
];

const benefits = [
  "Diseño responsive para todos los dispositivos",
  "Carga rápida y optimización de rendimiento",
  "Formularios de contacto personalizados",
  "Integración con redes sociales",
  "Blog corporativo integrado",
  "Galería de imágenes y videos",
  "Sección de noticias y novedades",
  "Multiidioma (opcional)",
];

export default function InstitucionalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Building2 className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              Sitios Institucionales
            </h1>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              Fortalece la presencia digital de tu empresa con sitios web
              corporativos profesionales y optimizados.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Características Principales
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 * index}>
                <Card hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 mx-auto">
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
            <FadeIn delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/institucional.png"
                  alt="Sitio institucional"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Presencia digital profesional
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transmite confianza y profesionalismo con un sitio web que
                representa fielmente los valores de tu empresa.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <FadeIn key={benefit} delay={0.05 * index}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">
              Mejora la presencia digital de tu empresa
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos para crear un sitio institucional que refleje la
              profesionalidad de tu organización.
            </p>
            <Link href="/cotizacion">
              <Button variant="secondary" size="lg">
                Solicitar Cotización
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Image from "next/image";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Server, Layers, Lock, CheckCircle } from "lucide-react";
import HeroEmpresarial from "./HeroEmpresarial";

export const metadata: Metadata = {
  title: "Sitios Empresariales | DevAgency",
  description:
    "Soluciones escalables con integración de sistemas empresariales, dashboards personalizados y arquitectura robusta.",
};

const features = [
  {
    icon: Server,
    title: "Arquitectura Escalable",
    description:
      "Infraestructura robusta que crece con tu negocio sin comprometer el rendimiento.",
  },
  {
    icon: Layers,
    title: "Integraciones Empresariales",
    description:
      "Conexión con sistemas ERP, CRM y otras herramientas empresariales.",
  },
  {
    icon: Lock,
    title: "Seguridad Avanzada",
    description:
      "Protección de datos y cumplimiento de normativas de seguridad.",
  },
];

const benefits = [
  "Dashboards personalizados con métricas en tiempo real",
  "API REST para integraciones",
  "Sistema de autenticación y permisos",
  "Gestión de usuarios y roles",
  "Reportes y analytics avanzados",
  "Automatización de procesos",
  "Alta disponibilidad y redundancia",
  "Soporte técnico dedicado",
];

export default function EmpresarialPage() {
  return (
    <div className="min-h-screen">
      <HeroEmpresarial />

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
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 mx-auto">
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
                Tecnología empresarial de vanguardia
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Implementamos soluciones tecnológicas que impulsan la eficiencia
                y productividad de tu organización.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <FadeIn key={benefit} delay={0.05 * index}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/empresarial.png"
                  alt="Sitio empresarial"
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
              Transforma tu empresa con tecnología
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Descubre cómo nuestras soluciones empresariales pueden optimizar tus procesos y aumentar tu productividad.
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

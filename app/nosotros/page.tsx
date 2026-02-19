import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import { Users, Target, Zap, Award } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | DevAgency",
  description:
    "Conoce al equipo detrás de DevAgency y nuestra misión de transformar ideas en soluciones digitales excepcionales.",
};

const values = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description:
      "Nos comprometemos a entregar soluciones que generen valor real para tu negocio.",
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description:
      "Utilizamos las últimas tecnologías y mejores prácticas del mercado.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description:
      "Colaboramos estrechamente contigo en cada etapa del proyecto.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos esforzamos por superar las expectativas en cada proyecto.",
  },
];

const stats = [
  { value: "150+", label: "Proyectos Completados" },
  { value: "120+", label: "Clientes Satisfechos" },
  { value: "8+", label: "Años de Experiencia" },
  { value: "15+", label: "Profesionales" },
];

const team = [
  {
    name: "Juan Martínez",
    role: "CEO & Fundador",
    description: "10+ años liderando proyectos digitales",
  },
  {
    name: "María González",
    role: "Directora de Diseño",
    description: "Especialista en UX/UI y diseño de producto",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO",
    description: "Arquitecto de soluciones empresariales",
  },
  {
    name: "Ana López",
    role: "Project Manager",
    description: "Experta en metodologías ágiles",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              Somos un equipo apasionado por crear soluciones digitales que
              transforman negocios
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En DevAgency, nos dedicamos a transformar ideas en soluciones
                digitales excepcionales. Creemos que cada negocio merece una
                presencia digital que refleje su verdadero potencial.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Con más de 8 años de experiencia, hemos ayudado a más de 120
                empresas a alcanzar sus objetivos digitales, desde startups
                hasta grandes corporaciones.
              </p>
              <p className="text-lg text-gray-600">
                Nuestro enfoque combina diseño excepcional, tecnología de
                vanguardia y un profundo entendimiento de las necesidades del
                negocio para crear soluciones que realmente funcionan.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>Team Photo</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Nuestros Números
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.1 * index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Nuestros Valores
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.1 * index}>
                <Card hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Profesionales apasionados dedicados a tu éxito
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={0.1 * index}>
                <Card hover className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y descubre cómo podemos ayudarte a alcanzar tus
              objetivos digitales.
            </p>
            <Link href="/cotizacion">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Solicitar Cotización
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

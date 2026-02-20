import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import { Users, Target, Zap, Award } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";
import HeroNosotros from "./HeroNosotros";

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
    name: "Emanuel Ruiz",
    role: "CEO & Fundador",
    description: "Más de 3 años liderando proyectos digitales, impulsando la visión y el crecimiento de la agencia con pasión y compromiso.",
  },
  {
    name: "Sebastián Orosco",
    role: "Director de Desarrollo",
    description: "Responsable de la arquitectura técnica y la calidad de las soluciones, siempre enfocado en la mejora continua y la innovación.",
  },
  {
    name: "Jeremías Juarez",
    role: "Project Manager",
    description: "Organiza y coordina los proyectos, asegurando la comunicación efectiva y la entrega a tiempo, con enfoque en la satisfacción del cliente.",
  },
  {
    name: "Francisco Frascona",
    role: "Director Comercial",
    description: "Encargado de las relaciones con clientes y el desarrollo de nuevas oportunidades de negocio, aportando visión estratégica y cercanía.",
  },
  {
    name: "Adriano Escacena",
    role: "Analista Funcional",
    description: "Especialista en entender las necesidades de los clientes y traducirlas en soluciones digitales efectivas y escalables.",
  },
  // Equipo joven, pero con gran potencial y dedicación
  {
    name: "Equipo DevAgency",
    role: "Talento Multidisciplinario",
    description: "Nuestro equipo combina juventud, creatividad y una fuerte vocación de aprendizaje. Nos apoyamos en la colaboración, la honestidad y la búsqueda constante de la excelencia para crecer junto a nuestros clientes.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <HeroNosotros />

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

      {/* Empresas con las que trabajamos */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-12">
              Empresas con las que trabajamos
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <img
                src="/isur.jpeg"
                alt="Isur"
                className="h-16 object-contain transition"
              />
              <img
                src="/myb.png"
                alt="Yerbabuena"
                className="h-16 object-contain transition"
              />
              <img
                src="/comodoro.png"
                alt="Comodoro Rivadavia"
                className="h-16 object-contain transition"
              />
              <img
                src="/pnud.svg"
                alt="PNUD"
                className="h-16 object-contain transition"
              />
              <img
                src="/gdi.jpeg"
                alt="GDI Latam"
                className="h-16 object-contain transition"
              />
            </div>
          </FadeIn>
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
                <Card hover className="h-full min-h-[360px] flex flex-col justify-between text-center">
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
    </div>
  );
}

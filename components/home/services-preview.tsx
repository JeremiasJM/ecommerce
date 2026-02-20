"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Building2, Briefcase, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/card";
import FadeIn from "@/components/ui/fade-in";
import Button from "@/components/ui/button";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas con gestión avanzada",
    href: "/servicios/ecommerce",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    icon: Building2,
    title: "Institucionales",
    description: "Sitios corporativos profesionales y optimizados",
    href: "/servicios/institucional",
    gradient: "from-secondary-500 to-secondary-700",
  },
  {
    icon: Briefcase,
    title: "Empresariales",
    description: "Soluciones escalables para grandes empresas",
    href: "/servicios/empresarial",
    gradient: "from-accent-500 to-accent-700",
  },
  {
    icon: Bot,
    title: "IA & Chatbots",
    description: "Asistentes inteligentes y atención automatizada",
    href: "/servicios/ia",
    gradient: "from-purple-500 to-indigo-700",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Soluciones digitales personalizadas para tu negocio
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index}>
              <div className="relative h-full group">
                <Card
                  hover
                  className="h-full group text-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.03]"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-primary-400" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  {/* Tooltip/resumen animado */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-20 w-60 bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-gray-700 text-sm">
                    Más información sobre {service.title}. Aquí puedes poner un resumen o detalle adicional.
                  </div>

                  <Link href={service.href} className="inline-flex items-center justify-center mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium text-sm hover:bg-primary-700 transition-colors">
                    Ver más
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Link href="/servicios">
              <Button variant="primary" size="lg">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

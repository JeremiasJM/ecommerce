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
              <Link href={service.href}>
                <Card hover className="h-full group text-center">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  <div className="flex items-center justify-center text-primary-600 font-medium group-hover:gap-1 transition-all text-sm">
                    Ver más
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
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

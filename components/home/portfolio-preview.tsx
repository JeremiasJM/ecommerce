"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import Card from "@/components/ui/card";
import FadeIn from "@/components/ui/fade-in";
import Button from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Plus",
    category: "E-commerce",
    description:
      "Plataforma de e-commerce completa con gestión de inventario multi-sucursal y facturación electrónica integrada, caja de ventas y estadísticas.",
    image: "/e-commerce.png",
    link: "https://erp-phi-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Comodoro Rivadavia Salud ",
    category: "Institucional",
    description:
      "Sitio institucional para el Ministerio de Salud de Comodoro Rivadavia, con información sobre salud sexual + un chatbot de atención automatizada.",
    image: "/mara.png",
    link: "https://www.comodoro.gov.ar/saludsexual",
  },
  {
    id: 3,
    title: "Yiba",
    category: "Asistentes IA",
    description:
      "Asistente virtual con IA avanzada para atención al cliente, capaz de manejar consultas complejas y proporcionar respuestas personalizadas en tiempo real.",
    image: "/yiba.png",
    link: "https://yerbabuena.gob.ar/contacto/",
  },
  {
    id: 4,
    title: "Fashion Boutique",
    category: "E-commerce",
    description:
      "Tienda online de moda con experiencia de compra premium y pasarela de pagos integrada.",
    image: "/placeholder-project-4.jpg",
    link: "#",
  },
];

export default function PortfolioPreview() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce algunos de nuestros trabajos más recientes
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <Card
                hover
                className="overflow-hidden cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative h-80 bg-gradient-to-br from-primary-100 to-secondary-100 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedProject.description}
                </p>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver proyecto completo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

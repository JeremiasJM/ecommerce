"use client";

import { useState, useEffect, useRef } from "react";
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
    image: "/ecommerce/e-commerce.png",
    link: "https://erp-phi-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Comodoro Rivadavia Salud ",
    category: "Institucional",
    description:
      "Sitio institucional para el Ministerio de Salud de Comodoro Rivadavia, con información sobre salud sexual + un chatbot de atención automatizada.",
    image: "/ecommerce/mara.png",
    link: "https://www.comodoro.gov.ar/saludsexual",
  },
  {
    id: 3,
    title: "Yiba",
    category: "Asistentes IA",
    description:
      "Asistente virtual con IA avanzada para atención al cliente, capaz de manejar consultas complejas y proporcionar respuestas personalizadas en tiempo real.",
    image: "/ecommerce/yiba.png",
    link: "https://yerbabuena.gob.ar/contacto/",
  },
  {
    id: 4,
    title: "Fewai",
    category: "E-commerce",
    description:
      "Tienda online de moda con experiencia de compra premium y pasarela de pagos integrada.",
    image: "/ecommerce/fewai.png",
    link: "https://jeremiasjm.github.io/Fewai/index.html",
  },
];

export default function PortfolioPreview() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [current, setCurrent] = useState(0);
  const visibleProjects = projects;

  // Carrusel automático
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === visibleProjects.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visibleProjects.length]);

  // Slider handlers manuales
  const prev = () => setCurrent((prev) => (prev === 0 ? visibleProjects.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === visibleProjects.length - 1 ? 0 : prev + 1));

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

        {/* Slider visual */}
        <div className="relative flex items-center justify-center mb-12">
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition"
            aria-label="Anterior"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="w-full max-w-2xl overflow-hidden">
            <motion.div
              key={visibleProjects[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                hover
                glow={current === 0}
                className={`overflow-hidden cursor-pointer h-full transition-shadow duration-300 ${current === 0 ? 'ring-4 ring-primary-300 shadow-glow' : ''}`}
                onClick={() => setSelectedProject(visibleProjects[current])}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={visibleProjects[current].image}
                    alt={visibleProjects[current].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-400">
                      {visibleProjects[current].category}
                    </span>
                  </div>
                  {current === 0 && (
                    <span className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Destacado</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {visibleProjects[current].title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {visibleProjects[current].description}
                </p>
              </Card>
            </motion.div>
          </div>
          <button
            onClick={next}
            className="absolute right-0 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition"
            aria-label="Siguiente"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
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

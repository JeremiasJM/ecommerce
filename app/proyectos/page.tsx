

"use client";

import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const categories = ["Todos", "E-commerce", "Institucional", "Empresarial", "Asistentes IA"];

const allProjects = [
  {
    id: 1,
    title: "E-commerce Plus",
    category: "E-commerce",
    description:
      "Plataforma de e-commerce completa con gestión de inventario multi-sucursal y facturación electrónica integrada, caja de ventas y estadísticas.",
    image: "/ecommerce/e-commerce.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    link: "https://erp-phi-seven.vercel.app/",
    results: [
      "Gestión multi-sucursal",
      "Facturación electrónica",
      "Estadísticas en tiempo real",
    ],
  },
  {
    id: 2,
    title: "Comodoro Rivadavia Salud ",
    category: "Institucional",
    description:
      "Sitio institucional para el Ministerio de Salud de Comodoro Rivadavia, con información sobre salud sexual + un chatbot de atención automatizada.",
    image: "/ecommerce/mara.png",
    technologies: ["Next.js", "Chatbot", "Tailwind CSS"],
    link: "https://www.comodoro.gov.ar/saludsexual",
    results: [
      "Información de salud sexual",
      "Chatbot automatizado",
      "Accesibilidad mejorada",
    ],
  },
  {
    id: 3,
    title: "Yiba",
    category: "Asistentes IA",
    description:
      "Asistente virtual con IA avanzada para atención al cliente, capaz de manejar consultas complejas y proporcionar respuestas personalizadas en tiempo real.",
    image: "/ecommerce/yiba.png",
    technologies: ["IA", "Next.js", "Tailwind CSS"],
    link: "https://yerbabuena.gob.ar/contacto/",
    results: [
      "Respuestas personalizadas",
      "Atención 24/7",
      "Integración multicanal",
    ],
  },
  {
    id: 4,
    title: "Fewai",
    category: "E-commerce",
    description:
      "Tienda online de moda con experiencia de compra premium y pasarela de pagos integrada.",
    image: "/ecommerce/fewai.png",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://jeremiasjm.github.io/Fewai/index.html",
    results: [
      "Compra premium",
      "Pasarela de pagos",
      "Diseño moderno",
    ],
  },
];

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<
    (typeof allProjects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-secondary-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Proyectos
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-2xl text-white mb-6 max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más destacados y los resultados que hemos logrado para nuestros clientes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-primary text-white shadow-glow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.id} delay={0.05 * index}>
                  <Card
                    hover
                    className="overflow-hidden cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 mb-4 rounded-lg overflow-hidden">
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

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

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
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
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
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="relative h-80 bg-gradient-to-br from-primary-100 to-secondary-100 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-600 mb-6 text-lg">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    Resultados:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-lg"
                >
                  Ver proyecto completo
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

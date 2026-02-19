"use client";

import { useState } from "react";
import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const categories = ["Todos", "E-commerce", "Institucional", "Empresarial"];

const allProjects = [
  {
    id: 1,
    title: "TechStore E-commerce",
    category: "E-commerce",
    description:
      "Plataforma de e-commerce completa con gestión de inventario multi-sucursal, facturación electrónica integrada y dashboard de analytics en tiempo real.",
    image: "/placeholder-project-1.jpg",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    link: "#",
    results: [
      "300% aumento en ventas online",
      "50% reducción en tiempo de gestión",
      "98% satisfacción de clientes",
    ],
  },
  {
    id: 2,
    title: "Corporación Global",
    category: "Institucional",
    description:
      "Sitio corporativo con CMS personalizado, sistema multiidioma y optimización SEO avanzada para presencia internacional.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React", "Strapi CMS", "Tailwind CSS", "i18next"],
    link: "#",
    results: [
      "200% aumento en tráfico orgánico",
      "Presencia en 15 países",
      "5x mejora en engagement",
    ],
  },
  {
    id: 3,
    title: "Enterprise Dashboard",
    category: "Empresarial",
    description:
      "Dashboard empresarial con analytics en tiempo real, integración con sistemas ERP y gestión de múltiples sucursales.",
    image: "/placeholder-project-3.jpg",
    technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Chart.js"],
    link: "#",
    results: [
      "70% reducción en tiempo de reporting",
      "Integración con 5 sistemas",
      "Tiempo real para 1000+ usuarios",
    ],
  },
  {
    id: 4,
    title: "Fashion Boutique",
    category: "E-commerce",
    description:
      "Tienda online de moda con experiencia de compra premium, pasarela de pagos integrada y sistema de recomendaciones.",
    image: "/placeholder-project-4.jpg",
    technologies: ["Shopify", "React", "GraphQL", "Stripe"],
    link: "#",
    results: [
      "150% crecimiento en conversiones",
      "40% aumento en ticket promedio",
      "95% retención de clientes",
    ],
  },
  {
    id: 5,
    title: "Universidad Digital",
    category: "Institucional",
    description:
      "Portal educativo con sistema de inscripciones, gestión de cursos y plataforma de aprendizaje online.",
    image: "/placeholder-project-5.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    link: "#",
    results: [
      "10,000+ estudiantes activos",
      "500+ cursos disponibles",
      "99.9% uptime",
    ],
  },
  {
    id: 6,
    title: "FinTech Platform",
    category: "Empresarial",
    description:
      "Plataforma financiera con gestión de transacciones, reportes automáticos y cumplimiento normativo.",
    image: "/placeholder-project-6.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
    results: [
      "$10M+ en transacciones procesadas",
      "Certificación PCI DSS",
      "24/7 disponibilidad",
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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos
              digitales
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
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Imagen del proyecto</span>
                      </div>
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
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Imagen del proyecto</span>
                  </div>
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

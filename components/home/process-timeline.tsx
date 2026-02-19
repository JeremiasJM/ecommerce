"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code, Rocket, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Descubrimiento",
    description:
      "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
  },
  {
    icon: PenTool,
    title: "Diseño",
    description:
      "Creamos prototipos y diseños que reflejan la identidad de tu marca.",
  },
  {
    icon: Code,
    title: "Desarrollo",
    description:
      "Construimos tu solución con las mejores tecnologías y prácticas.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto y lo optimizamos para máximo rendimiento.",
  },
  {
    icon: CheckCircle,
    title: "Soporte",
    description:
      "Brindamos mantenimiento continuo y actualizaciones según necesites.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar el éxito de tu proyecto
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={0.1 * index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all"
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} justify-center md:justify-start`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 items-center justify-center flex-shrink-0 shadow-glow z-10">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <span className="text-primary-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

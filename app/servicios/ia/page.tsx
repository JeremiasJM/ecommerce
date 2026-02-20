import { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Bot, MessageCircle, Brain, CheckCircle } from "lucide-react";
import Image from "next/image";
import HeroIa from "./HeroIa";

export const metadata: Metadata = {
  title: "Chatbots & Asistentes IA | DevAgency",
  description:
    "Automatiza la atención y potencia tu negocio con chatbots y asistentes inteligentes personalizados para tu empresa.",
};

const features = [
  {
    icon: Bot,
    title: "Chatbots Automatizados",
    description:
      "Responde consultas frecuentes y brinda atención 24/7 de forma eficiente y amigable.",
  },
  {
    icon: MessageCircle,
    title: "Integración Multicanal",
    description:
      "Conecta tu chatbot con WhatsApp, web, Facebook, Instagram y más.",
  },
  {
    icon: Brain,
    title: "Asistentes con IA",
    description:
      "Soluciones avanzadas que comprenden lenguaje natural y realizan tareas complejas.",
  },
];

const benefits = [
  "Atención instantánea y sin pausas",
  "Reducción de costos operativos",
  "Mejora de la experiencia del usuario",
  "Recopilación y análisis de datos de clientes",
  "Personalización de respuestas",
  "Escalabilidad para grandes volúmenes de consultas",
  "Integración con sistemas internos",
  "Entrenamiento y mejora continua",
];

export default function ChatbotIaPage() {
  return (
    <div className="min-h-screen">
      <HeroIa />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              ¿Qué ofrecemos?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 * index}>
                <Card hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center mb-4 mx-auto">
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
            <FadeIn delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/chatbot.png"
                  alt="Chatbot y asistente IA"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Diferencia entre Chatbot y Asistente IA
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Un <b>chatbot</b> responde preguntas frecuentes y automatiza tareas simples, mientras que un <b>asistente con IA</b> comprende el lenguaje natural, aprende y puede ejecutar procesos complejos, integrándose con tus sistemas internos.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <FadeIn key={benefit} delay={0.05 * index}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </FadeIn>
                ))}
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
              ¿Listo para automatizar tu atención?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Agenda una demo y descubre cómo un chatbot o asistente IA puede transformar la experiencia de tus clientes.
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

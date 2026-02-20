"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import FadeIn from "@/components/ui/fade-in";

export default function HeroContacto() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      <Navbar />
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
            Contáctanos
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-2xl text-white mb-6 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a hacer realidad tu proyecto digital.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

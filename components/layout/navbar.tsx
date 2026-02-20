"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

const serviceLinks = [
  { href: "/servicios/ecommerce", label: "E-commerce" },
  { href: "/servicios/institucional", label: "Institucional" },
  { href: "/servicios/empresarial", label: "Empresarial" },
  { href: "/servicios/ia", label: "IA" },
];

const navLinks = [
  { href: "/", label: "Inicio" },
  { label: "Servicios", dropdown: true },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Aplicar efecto de scroll en todas las páginas
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Navbar transparente al inicio, fondo oscuro al hacer scroll
  const navClass = isScrolled
    ? "bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 shadow-lg"
    : "bg-transparent";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              LunAgency
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link, idx) =>
              link.dropdown ? (
                <div key="servicios-dropdown" className="relative group">
                  <button
                    className={`text-white hover:text-primary-400 transition-colors duration-200 font-medium flex items-center gap-1 focus:outline-none`}
                    type="button"
                  >
                    Servicios
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-dark-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-auto transition-all duration-200 z-30">
                    <ul className="py-2">
                      {serviceLinks.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors duration-200"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                link.href ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      `${
                        isScrolled
                          ? "text-white hover:text-primary-400"
                          : "text-white hover:text-primary-600"
                      } transition-colors duration-200 font-medium`
                    }
                  >
                    {link.label}
                  </Link>
                ) : null
              )
            )}
            <Link href="/cotizacion">
              <Button variant="primary" size="sm">
                Cotizar Proyecto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/95 border-t border-dark-900/60"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.href ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-white hover:text-primary-400 transition-colors duration-200 font-medium py-2`}
                  >
                    {link.label}
                  </Link>
                ) : null
              ))}
              <Link
                href="/cotizacion"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="primary" size="md" className="w-full">
                  Cotizar Proyecto
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

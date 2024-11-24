"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Rodolfo De Las Salas
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-600 mb-8"
        >
          Desarrollador Frontend & Creador de Experiencias Web
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-gray-600"
      >
        {[
          {
            icon: Code,
            title: "Desarrollo Web",
            description: "Creación de sitios web modernos y responsivos"
          },
          {
            icon: Layout,
            title: "Diseño UI/UX",
            description: "Interfaces intuitivas y atractivas"
          },
          {
            icon: Zap,
            title: "Optimización",
            description: "Mejora de rendimiento y velocidad"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1 + index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <item.icon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center"
        >
          <Link href="/SobreMi">Conoceme</Link>
          <ArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </div>
  );
}

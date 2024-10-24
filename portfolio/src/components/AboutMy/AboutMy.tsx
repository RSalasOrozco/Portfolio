import React from "react";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";
import ContactameAqui from "../Buttons/Buttons";

export default function AboutMy() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MySQL",
    "Git",
    "Figma"
  ];

  return (
    <section className="py-20 bg-gradient-to-b text-gray-800 from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 text-justify">
              Hola, soy Rodolfo, un apasionado desarrollador frontend con un ojo
              para el diseño y una mente para el código. Con más de 1 año de
              experiencia, me caracterizo por crear paginas web atractivas y
              altamente funcionales.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              Mi enfoque se centra en la construcción de interfaces de usuario
              intuitivas y responsivas que no solo se ven geniales, sino que
              también ofrecen un rendimiento excepcional. Siempre estoy buscando
              nuevas formas de empujar los límites de lo que es posible en el
              navegador.
            </p>
            <div className="flex space-x-4">
              <Coffee className="text-blue-500" size={24} />
              <Lightbulb className="text-yellow-500" size={24} />
              <Rocket className="text-red-500" size={24} />
              <Code className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Mis tecnologías mas usadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Le puedo aportar a tu equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="text-yellow-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">
                Innovación Constante
              </h4>
              <p className="text-gray-600">
                Siempre estoy al día con las últimas tendencias y tecnologías en
                desarrollo frontend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="text-green-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Código Limpio</h4>
              <p className="text-gray-600">
                Me enorgullezco de escribir código limpio, eficiente y fácil de
                mantener.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Rocket className="text-red-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Resultados Rápidos</h4>
              <p className="text-gray-600">
                Creo proyectos de alta calidad en tiempos idoneos y sin
                comprometer la calidad.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Mis estudios y certificaciones
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="text-yellow-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Soy HENRY</h4>
              <p className="text-gray-600">
                Completé un bootcamp intensivo de desarrollo web full stack, con
                un enfoque especial en frontend. Adquirí habilidades prácticas
                en HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, Vite y
                Next.js, desarrollando aplicaciones web responsivas, optimizadas
                y de alto rendimiento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="text-green-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Código Limpio</h4>
              <p className="text-gray-600">
                Me enorgullezco de escribir código limpio, eficiente y fácil de
                mantener.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Rocket className="text-red-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-2">Resultados Rápidos</h4>
              <p className="text-gray-600">
                Creo proyectos de alta calidad en tiempos idoneos y sin
                comprometer la calidad.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-12">
            <ContactameAqui />
          </div>
        </div>
      </div>
    </section>
  );
}

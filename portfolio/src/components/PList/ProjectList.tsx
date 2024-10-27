"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  projectLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con carrito de compras.",
    images: ["/1.png", "/2.png", "/3.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    projectLink: "https://github.com/RSalasOrozco/EcomerceTecnologico"
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Sitio web personal mostrando proyectos y habilidades.",
    images: ["/PF1.png", "/PF2.png", "/PF3.png"],
    technologies: ["Next.js", "Emailjs", "TypeScript", "Tailwind CSS"],
    projectLink: "https://github.com/RSalasOrozco/Portfolio"
  }
];

export default function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <div className="px-4 py-16 bg-gradient-to-b text-gray-800 bg-gray-100 mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-48 cursor-pointer">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    Ver Proyecto
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => openLightbox(project)}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Ver Imágenes
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X size={24} />
            </button>
            <div className="relative h-96 md:h-[32rem]">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${
                  currentImageIndex + 1
                }`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition-opacity duration-300"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition-opacity duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

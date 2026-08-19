import type { Metadata } from "next";
import ProjectList from "@/components/PList/ProjectList";
import React from "react";

export const metadata: Metadata = {
  title: "Mis Proyectos",
  description:
    "Explora los proyectos de Rodolfo De Las Salas: e-commerce, aplicaciones con Next.js, WordPress y más."
};

export default function MisProjectos() {
  return (
    <div>
      <ProjectList />
    </div>
  );
}

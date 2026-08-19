import type { Metadata } from "next";
import AboutMy from "@/components/AboutMy/AboutMy";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce más sobre Rodolfo De Las Salas: mi experiencia como desarrollador frontend, las tecnologías que uso y mis estudios."
};

export default function SobreMi() {
  return (
    <div>
      <AboutMy />
    </div>
  );
}

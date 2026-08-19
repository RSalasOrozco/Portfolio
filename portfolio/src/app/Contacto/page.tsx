import type { Metadata } from "next";
import Contact from "../../components/Contact/Contact";
import React from "react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Rodolfo De Las Salas para proyectos, colaboraciones o cualquier consulta."
};

export default function Contacto() {
  return (
    <div>
      <Contact />
    </div>
  );
}

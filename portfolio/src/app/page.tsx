import type { Metadata } from "next";
import HomeComponent from "@/components/Home/HomeComponent";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Rodolfo De Las Salas, desarrollador frontend especializado en React, Next.js y TypeScript."
};

export default function Home() {
  return (
    <div>
      <HomeComponent />
      
    </div>
  );
}

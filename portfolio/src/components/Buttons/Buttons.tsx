import { SendHorizonal } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function ContactameAqui() {
  return (
    <Link
      type="submit"
      href="/Contacto"
      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <SendHorizonal className="mr-2 h-4 w-4" />
      Contactame Aquí
    </Link>
  );
}

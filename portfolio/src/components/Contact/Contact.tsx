"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Smartphone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setStatusMessage("¡Mensaje enviado con éxito!");
          setIsLoading(false);
          form.current?.reset(); // Limpia el formulario
        },
        (error) => {
          setStatusMessage(`Hubo un error: ${error.text}`);
          setIsLoading(false);
        }
      );
  };

  const sendWhatsAppMessage = () => {
    const name = (
      form.current?.elements.namedItem("user_name") as HTMLInputElement
    )?.value;
    const email = (
      form.current?.elements.namedItem("user_email") as HTMLInputElement
    )?.value;
    const message = (
      form.current?.elements.namedItem("message") as HTMLTextAreaElement
    )?.value;

    const whatsappUrl = getWhatsAppUrl(
      `Hola, vi tu portfolio y me gustaría contactarte${name}, mi correo es ${email}. ${message}`
    );

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contáctame
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-lg block font-medium text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Tu correo"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="text-gray-800 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                  isLoading
                    ? "bg-gray-500"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
              <button
                type="button"
                onClick={sendWhatsAppMessage}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Enviar a WhatsApp
              </button>
            </div>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-gray-600">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-gray-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 ">
            RD
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/SobreMi"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="/MisProyectos"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/Contacto"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

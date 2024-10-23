import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rodolfo De las Salas. Todos los
            derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                  <g fill="#fff">
                    <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                    <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                  </g>
                </mask>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="32"
                    strokeDashoffset="32"
                    d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                  >
                    <animate
                      fill="freeze"
                      attributeName="strokeDashoffset"
                      dur="1.05s"
                      values="32;0"
                    />
                  </path>
                  <path
                    strokeDasharray="10"
                    strokeDashoffset="10"
                    d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                  >
                    <animate
                      attributeName="d"
                      dur="4.5s"
                      repeatCount="indefinite"
                      values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
                    />
                    <animate
                      fill="freeze"
                      attributeName="strokeDashoffset"
                      begin="1.2s"
                      dur="0.3s"
                      values="10;0"
                    />
                  </path>
                </g>
                <rect
                  width="8"
                  height="4"
                  x="8"
                  y="11"
                  fill="currentColor"
                  mask="url(#lineMdGithubLoop0)"
                >
                  <animate
                    attributeName="y"
                    dur="4s"
                    keyTimes="0;0.45;0.46;0.54;0.55;1"
                    repeatCount="indefinite"
                    values="11;11;7;7;11;11"
                  />
                </rect>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
                  <animate
                    fill="freeze"
                    attributeName="fillOpacity"
                    dur="0.225s"
                    values="0;1"
                  />
                </circle>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10">
                    <animate
                      fill="freeze"
                      attributeName="strokeDashoffset"
                      begin="0.225s"
                      dur="0.3s"
                      values="12;0"
                    />
                  </path>
                  <path
                    strokeDasharray="12"
                    strokeDashoffset="12"
                    d="M10 10v10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="strokeDashoffset"
                      begin="0.675s"
                      dur="0.3s"
                      values="12;0"
                    />
                  </path>
                  <path
                    strokeDasharray="24"
                    strokeDashoffset="24"
                    d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="strokeDashoffset"
                      begin="0.975s"
                      dur="0.3s"
                      values="24;0"
                    />
                  </path>
                </g>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                  color="currentColor"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

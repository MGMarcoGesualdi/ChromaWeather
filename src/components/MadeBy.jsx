import { useState } from "react";
import "../components/styles/MadeBy.css";

export default function MadeBy() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="made-by-wrapper">
        {show && (
          <div className="made-by-card">
            {/* Autore */}
            <div className="made-by-label">Realizzato da</div>
            <div className="made-by-name">
              MG<span>Marco</span>Gesualdi
            </div>
            <div className="made-by-divider" />

            {/* GitHub */}
            <a
              href="https://github.com/mgmarcogesualdi"
              target="_blank"
              rel="noopener noreferrer"
              className="made-by-github"
            >
              <svg
                className="github-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              github.com/mgmarcogesualdi
            </a>

            <div className="made-by-divider" />

            {/* API Credits */}
            <div className="api-section-label">API utilizzate</div>
            <div className="flex flex-col gap-4">
              {" "}
              {/* Contenitore che crea lo spazio tra i badge */}
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="api-badge flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="api-badge-icon mr-3 text-2xl">🌤️</span>
                <span className="api-badge-text flex flex-col">
                  <span className="api-badge-name font-bold text-sm">
                    OpenWeatherMap
                  </span>
                  <span className="api-badge-sub text-xs text-gray-500">
                    Weather API
                  </span>
                </span>
              </a>
              <a
                href="https://www.openstreetmap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="api-badge flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="api-badge-icon mr-3 text-2xl">🗺️</span>
                <span className="api-badge-text flex flex-col">
                  <span className="api-badge-name font-bold text-sm">
                    OpenStreetMap
                  </span>
                  <span className="api-badge-sub text-xs text-gray-500">
                    OpenStreetMap API
                  </span>
                </span>
              </a>
            </div>
          </div>
        )}

        <div
          className={`made-by-trigger${show ? " active" : ""}`}
          onClick={() => setShow(!show)}
          title="Info"
        >
          👨🏻‍💻
        </div>
      </div>
    </>
  );
}
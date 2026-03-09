import { useEffect, useState } from "react";
import "../components/styles/MeteoHeader.css";

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 0.8,
  dur: `${Math.random() * 4 + 2}s`,
  delay: `${Math.random() * 4}s`,
}));

export default function MeteoHeader({ logo }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header className="meteo-header">
        {/* Stars */}
        <div className="stars" aria-hidden="true">
          {stars.map((s) => (
            <span
              key={s.id}
              className="star"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                "--dur": s.dur,
                "--delay": s.delay,
              }}
            />
          ))}
        </div>

        <div className="moon-glow" aria-hidden="true" />
        <div className="aurora" aria-hidden="true" />

        <div className="header-content">
          <div className="logo-wrapper">
            <div className="logo-ring" />
            {logo ? (
              <img src={logo} alt="logo" className="logo-img" />
            ) : (
              <span className="logo-icon">🌤</span>
            )}
          </div>

          <div className="text-group">
            <h1 className="title">Meteo</h1>
            <p className="subtitle">Condizioni in tempo reale</p>
          </div>

          <div className="live-badge">
            <span className="live-dot" />
            <span className="live-text">{time || "Live"}</span>
          </div>
        </div>

        <div className="header-divider" />
      </header>
    </>
  );
}


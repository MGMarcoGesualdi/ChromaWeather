import { motion, AnimatePresence } from "framer-motion";
import "../components/styles/WeatherCard.css";
import WeatherMap from "./WeatherMap";

const WEATHER_ICONS = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "⛅",
  "02n": "⛅",
  "03d": "☁️",
  "03n": "☁️",
  "04d": "☁️",
  "04n": "☁️",
  "09d": "🌧️",
  "09n": "🌧️",
  "10d": "🌦️",
  "10n": "🌧️",
  "11d": "⛈️",
  "11n": "⛈️",
  "13d": "❄️",
  "13n": "❄️",
  "50d": "🌫️",
  "50n": "🌫️",
};

const getBgColor = (t) => {
  if (t <= 10) return "bg-gradient-to-br from-blue-900 to-slate-800";
  if (t > 10 && t <= 25) return "bg-gradient-to-br from-blue-500 to-cyan-400";
  return "bg-gradient-to-br from-orange-500 to-red-600";
};

// Componente per lo slider orario
function HourlyForecast({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="hourly-container">
      <div className="hourly-title">Prossime ore</div>
      <div className="hourly-scroll">
        {data.map((item, index) => {
          const time = new Date(item.dt * 1000).getHours();
          const temp = Math.round(item.main.temp);
          const icon = item.weather[0].icon;

          return (
            <motion.div
              key={index}
              className="hourly-item"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <span className="hourly-time">{time}:00</span>
              <span className="hourly-icon">{WEATHER_ICONS[icon]}</span>
              <span className="hourly-temp">{temp}°</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function WeatherCard({ weather, hourly }) {
  // <-- aggiunto 'hourly' qui
  if (!weather) return null;

  const { name, main, weather: w, wind, visibility, sys } = weather;
  const icon = w[0].icon;

  const stats = [
    { label: "Umidità", value: `${main.humidity}%`, icon: "💧" },
    { label: "Vento", value: `${Math.round(wind.speed)} km/h`, icon: "💨" },
    { label: "Pressione", value: `${main.pressure} hPa`, icon: "🔵" },
    {
      label: "Visibilità",
      value: `${Math.round((visibility || 10000) / 1000)} km`,
      icon: "👁️",
    },
  ];

  return (
    <motion.div
      className={`card-wrap ${getBgColor(main.temp)}`}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card">
        {/* ── Header ── */}
        <div className="card-header">
          <div>
            <div className="city-name">{name}</div>
            <div className="country">{sys.country}</div>
          </div>
          <span className="weather-icon">{WEATHER_ICONS[icon] || "🌡️"}</span>
        </div>

        {/* ── Temperature ── */}
        <div className="temp-section">
          <AnimatePresence mode="wait">
            <motion.div
              key={main.temp}
              className="temp-main"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4 }}
            >
              {Math.round(main.temp)}°
            </motion.div>
          </AnimatePresence>

          <div className="temp-detail">
            <span className="feels text-sm opacity-80">
              Percepita {Math.round(main.feels_like)}°
            </span>
            <div className="minmax font-medium">
              ↑{Math.round(main.temp_max)}°&nbsp;&nbsp;↓
              {Math.round(main.temp_min)}°
            </div>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="description italic capitalize opacity-90 mb-4 text-lg">
          {w[0].description}
        </div>

        {/* ── NUOVO: Forecast Orario inserito qui ── */}
        <HourlyForecast data={hourly} />

        {/* ── Stats grid ── */}
        <div className="stats-grid mt-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-tile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07 }}
            >
              <span className="stat-icon text-xl">{s.icon}</span>
              <span className="stat-value font-bold">{s.value}</span>
              <span className="stat-label text-xs uppercase opacity-60">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Map ── */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-inner border border-white/10">
          <WeatherMap coord={weather.coord} city={name} />
        </div>
      </div>
    </motion.div>
  );
}

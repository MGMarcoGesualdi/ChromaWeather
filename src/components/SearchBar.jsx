import { useState } from "react";
import "../components/styles/SearchBar.css";

const apiKey = process.env.APP_WEATHER_API_KEY;

export default function SearchBar({
  onWeather,
  setHourly,
  loading,
  setLoading,
}) {
  const [input, setInput] = useState("");

  const fetchByCity = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        input,
      )}&appid=${apiKey}&units=metric&lang=it`;

      const resW = await fetch(weatherUrl);
      const dataW = await resW.json();

      if (dataW.cod !== 200) throw new Error("Città non trovata");

      const { lat, lon } = dataW.coord;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`;

      const resF = await fetch(forecastUrl);
      const dataF = await resF.json();

      onWeather(dataW);
      setHourly(dataF.list.slice(0, 8));

      setInput("");
    } catch (err) {
      alert("Città non trovata o errore nel caricamento dei dati.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchByLocation = () => {
    if (!navigator.geolocation)
      return alert("Geolocalizzazione non supportata");

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=it`;
          const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=it`;

          const [resW, resF] = await Promise.all([
            fetch(weatherUrl),
            fetch(forecastUrl),
          ]);

          const dataW = await resW.json();
          const dataF = await resF.json();

          onWeather(dataW);
          setHourly(dataF.list.slice(0, 8));
        } catch (err) {
          alert("Errore nel recuperare il meteo dalla tua posizione.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        alert(
          "Permesso negato o errore GPS. Controlla le impostazioni del browser.",
        );
        setLoading(false);
      },
    );
  };

  return (
    <div className="search-row">
      <div className="input-wrap">
        <span className="input-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Inserisci una città…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchByCity()}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={fetchByCity}
        disabled={loading}
      >
        {loading ? <span className="spinner" /> : "Cerca"}
      </button>

      <button
        className="btn btn-ghost"
        onClick={fetchByLocation}
        disabled={loading}
        title="Posizione attuale"
      >
        📍
      </button>
    </div>
  );
}

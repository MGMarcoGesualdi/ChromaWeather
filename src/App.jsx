import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Particles from "./components/Particles";
import MadeBy from "./components/MadeBy";
import MeteoHeader from "./components/MeteoHeader";
import logo from "./assets/LogoNuovo.png";
import "./App.css";

const apiKey = process.env.APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(false);

  const condition = weather?.weather?.[0]?.main;

  const fetchAllWeatherData = async (lat, lon) => {
    setLoading(true);
    try {
      // Chiamata Meteo Attuale
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`;
      // Chiamata Previsioni (Forecast)
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`;

      const [weatherRes, forecastRes] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
      ]);

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      // Prendiamo i primi 8 elementi (coprono le prossime 24 ore, dato che sono ogni 3 ore)
      setHourly(forecastData.list.slice(0, 8));
    } catch (error) {
      console.error("Errore nel recupero dati:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        fetchAllWeatherData(latitude, longitude);
      },
      () => setLoading(false),
    );
  }, []);

  return (
    <>
      <Particles condition={condition} />
      <div style={{ margin: 0, padding: 0 }} className="app">
        <MeteoHeader logo={logo}/>
        <SearchBar
          onWeather={setWeather}
          setHourly={setHourly}
          loading={loading}
          setLoading={setLoading}
        />

        {/* Passiamo i dati orari alla WeatherCard */}
        {weather && <WeatherCard weather={weather} hourly={hourly} />}
      </div>
      <MadeBy />
    </>
  );
}

export default App;

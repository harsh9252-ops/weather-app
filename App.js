import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getCoordinates, getWeather } from "./services/weatherAPI";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeatherHandler = async (location) => {
    try {
      setError("");
      setWeather(null);

      const coords = await getCoordinates(location);
      if (!coords) {
        setError("Location not found. Please check spelling.");
        return;
      }

      const weatherData = await getWeather(coords.lat, coords.lon);
      setWeather(weatherData);
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
  };

  return (
    <div className="app">
      <h1>🌦 Weather Application</h1>
      <SearchBar onSearch={fetchWeatherHandler} />

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;

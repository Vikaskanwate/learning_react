import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WheatherCard';
import WeatherDetails from './components/WheatherDetails';
import './App.css';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (cityName) => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      // Step 1: Geocoding lookup to translate city names to coordinate metrics
    
      const geoRes = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=" + cityName + "&count=1&language=en&format=json"      );
      // const geoRes = await fetch("https://open-meteo.com");
      const geoData = await geoRes.json();
      console.log("API Response Data:", geoData);

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found. Please check spelling.');
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Fetch detailed weather metrics using coordinates
      const weatherRes = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=" + latitude +
        "&longitude=" + longitude +
        "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"      );

      const data = await weatherRes.json();

      setWeatherData({
        cityName: `${name}, ${country}`,
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code,
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Determine dynamic temperature wrapper styling class
  const themeClass = weatherData?.temp > 20 ? 'theme-warm' : 'theme-cold';

  return (
    <div className={`app-container ${weatherData ? themeClass : 'theme-default'}`}>
      <div className="card-wrapper">
        <h1 className="app-title">Weather Now</h1>
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="status-msg">Loading data tracking...</div>}
        {error && <div className="status-msg error-msg">{error}</div>}

        {weatherData && (
          <>
            <WeatherCard data={weatherData} />
            <WeatherDetails humidity={weatherData.humidity} windSpeed={weatherData.windSpeed} />
          </>
        )}
      </div>
    </div>
  );
}

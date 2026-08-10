import { Sun, Cloud, CloudRain, Snowflake, CloudLightning, HelpCircle } from 'lucide-react';

export default function WeatherCard({ data }) {
  // Convert Open-Meteo codes to dynamic visual icons
  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun size={64} color="#f59e0b" />;
    if ([1, 2, 3].includes(code)) return <Cloud size={64} color="#94a3b8" />;
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return <CloudRain size={64} color="#3b82f6" />;
    if ([71, 73, 75, 77, 85, 86].includes(code)) return <Snowflake size={64} color="#38bdf8" />;
    if ([95, 96, 99].includes(code)) return <CloudLightning size={64} color="#7c3aed" />;
    return <HelpCircle size={64} color="#64748b" />;
  };

  return (
    <div className="weather-card">
      <h2 className="location-name">{data.cityName}</h2>
      <div className="icon-wrapper">
        {getWeatherIcon(data.weatherCode)}
      </div>
      <div className="main-temp">{Math.round(data.temp)}°C</div>
    </div>
  );
}
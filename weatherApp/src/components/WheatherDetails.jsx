import { Droplets, Wind } from 'lucide-react';

export default function WeatherDetails({ humidity, windSpeed }) {
  return (
    <div className="details-grid">
      <div className="detail-item">
        <Droplets size={20} color="#06b6d4" />
        <div>
          <span className="label">Humidity</span>
          <span className="value">{humidity}%</span>
        </div>
      </div>
      <div className="detail-item">
        <Wind size={20} color="#10b981" />
        <div>
          <span className="label">Wind Speed</span>
          <span className="value">{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}

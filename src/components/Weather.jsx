import React, { useState, useEffect } from 'react';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Isle of Arran coordinates
        const lat = 55.5819;
        const lon = -5.2123;
        const API_KEY = '33180eb70b4778f17b8aaca9485bd8ad'; // Replace this with your actual API key from OpenWeatherMap
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="weather-loading">Loading weather data...</div>;
  if (error) return <div className="weather-error">{error}</div>;
  if (!weatherData) return null;

  // Get one forecast per day (at noon)
  const dailyForecasts = weatherData.list.filter(forecast => 
    forecast.dt_txt.includes('12:00:00')
  ).slice(0, 5);

  return (
    <div className="weather-container">
      <h2>5-Day Weather Forecast for Isle of Arran</h2>
      <div className="weather-grid">
        {dailyForecasts.map((forecast, index) => {
          const date = new Date(forecast.dt_txt);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          
          return (
            <div key={index} className="weather-card">
              <div className="weather-day">{dayName}</div>
              <div className="weather-icon">
                <img 
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                />
              </div>
              <div className="weather-temp">
                {Math.round(forecast.main.temp)}°C
              </div>
              <div className="weather-desc">
                {forecast.weather[0].description}
              </div>
              <div className="weather-details">
                <div>Wind: {Math.round(forecast.wind.speed)} m/s</div>
                <div>Humidity: {forecast.main.humidity}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather; 
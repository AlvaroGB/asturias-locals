import { useState, useEffect } from 'react'

/**
 * useWeather — fetches current weather from Open-Meteo (free, no API key).
 *
 * WMO weather interpretation codes:
 *   0        → clear sky
 *   1–3      → mainly clear / partly cloudy / overcast
 *   45, 48   → fog
 *   51–67    → drizzle / rain
 *   71–77    → snow
 *   80–82    → rain showers
 *   95–99    → thunderstorm
 */

const WMO_LABELS = {
  0:  { label: 'Despejado',     icon: '☀️',  outdoor: true  },
  1:  { label: 'Casi despejado',icon: '🌤',  outdoor: true  },
  2:  { label: 'Parcialmente nublado', icon: '⛅', outdoor: true },
  3:  { label: 'Cubierto',      icon: '☁️',  outdoor: true  },
  45: { label: 'Niebla',        icon: '🌫',  outdoor: false },
  48: { label: 'Niebla helada', icon: '🌫',  outdoor: false },
  51: { label: 'Llovizna',      icon: '🌦',  outdoor: false },
  53: { label: 'Llovizna',      icon: '🌦',  outdoor: false },
  55: { label: 'Llovizna intensa', icon: '🌧', outdoor: false },
  61: { label: 'Lluvia ligera', icon: '🌧',  outdoor: false },
  63: { label: 'Lluvia',        icon: '🌧',  outdoor: false },
  65: { label: 'Lluvia intensa',icon: '🌧',  outdoor: false },
  71: { label: 'Nieve ligera',  icon: '🌨',  outdoor: false },
  73: { label: 'Nieve',         icon: '❄️',  outdoor: false },
  75: { label: 'Nieve intensa', icon: '❄️',  outdoor: false },
  80: { label: 'Chubascos',     icon: '🌦',  outdoor: false },
  81: { label: 'Chubascos',     icon: '🌧',  outdoor: false },
  82: { label: 'Chubascos fuertes', icon: '⛈', outdoor: false },
  95: { label: 'Tormenta',      icon: '⛈',  outdoor: false },
  96: { label: 'Tormenta con granizo', icon: '⛈', outdoor: false },
  99: { label: 'Tormenta fuerte', icon: '⛈', outdoor: false },
}

function getWmo(code) {
  return WMO_LABELS[code] ?? { label: 'Variable', icon: '🌥', outdoor: true }
}

export function useWeather(lat, lng) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (lat == null || lng == null) return

    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${lat}&longitude=${lng}` +
      `&current=temperature_2m,precipitation,weathercode,windspeed_10m` +
      `&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min` +
      `&timezone=Europe%2FMadrid&forecast_days=1`

    setLoading(true)
    setError(null)

    fetch(url)
      .then(r => r.json())
      .then(data => {
        const cur  = data.current
        const day  = data.daily
        const wmo  = getWmo(cur.weathercode)

        setWeather({
          temp:        Math.round(cur.temperature_2m),
          tempMax:     Math.round(day.temperature_2m_max[0]),
          tempMin:     Math.round(day.temperature_2m_min[0]),
          precip:      Math.round(cur.precipitation),
          precipProb:  day.precipitation_probability_max[0],  // 0-100
          windspeed:   Math.round(cur.windspeed_10m),
          code:        cur.weathercode,
          label:       wmo.label,
          icon:        wmo.icon,
          isGoodOutdoor: wmo.outdoor && day.precipitation_probability_max[0] < 40,
        })
      })
      .catch(() => setError('No se pudo cargar el tiempo'))
      .finally(() => setLoading(false))
  }, [lat, lng])

  return { weather, loading, error }
}

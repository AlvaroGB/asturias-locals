/**
 * WeatherBanner — shows current weather and a contextual recommendation.
 *
 * Recommendation logic:
 *  - Rain likely (precipProb >= 50%)  → suggest indoor activities
 *  - Good weather (isGoodOutdoor)     → suggest outdoor activities
 *  - Otherwise                        → neutral
 */

export default function WeatherBanner({ weather, loading, locationName, isRealLocation }) {
  if (loading) {
    return (
      <div className="bg-stone-800/50 text-stone-300 px-4 py-2 text-sm flex items-center gap-2">
        <span className="animate-pulse">⏳</span>
        <span>Cargando tiempo…</span>
      </div>
    )
  }

  if (!weather) return null

  const isRainy = weather.precipProb >= 50
  const isNice  = weather.isGoodOutdoor

  // Recommendation message
  let rec = null
  if (isRainy) {
    rec = { text: 'Día de lluvia — destacamos actividades de interior', icon: '🏠', color: 'text-blue-300' }
  } else if (isNice && weather.temp > 16) {
    rec = { text: 'Buen tiempo — ideal para salir al aire libre', icon: '👌', color: 'text-green-300' }
  }

  return (
    <div className="bg-stone-900/80 text-white border-b border-stone-700">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4 flex-wrap">

        {/* Weather snapshot */}
        <div className="flex items-center gap-3 text-sm">
          <span className="text-2xl leading-none">{weather.icon}</span>
          <div>
            <span className="font-semibold text-white">{weather.temp}°C</span>
            <span className="text-stone-300 ml-1.5">{weather.label}</span>
            {weather.precipProb > 0 && (
              <span className="text-stone-400 ml-2 text-xs">
                💧 {weather.precipProb}%
              </span>
            )}
          </div>
          <span className="text-stone-500 text-xs hidden sm:inline">
            {isRealLocation ? '📍 Tu ubicación' : `📍 ${locationName ?? 'Gijón'}`}
          </span>
        </div>

        {/* Contextual recommendation */}
        {rec && (
          <div className={`text-xs flex items-center gap-1.5 ${rec.color}`}>
            <span>{rec.icon}</span>
            <span>{rec.text}</span>
          </div>
        )}
      </div>
    </div>
  )
}

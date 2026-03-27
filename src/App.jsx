import { useState, useMemo, useCallback } from 'react'
import { activities } from './data/activities'
import { useGeolocation } from './hooks/useGeolocation'
import { useWeather }     from './hooks/useWeather'
import WeatherBanner      from './components/WeatherBanner'
import FilterBar          from './components/FilterBar'
import ActivityCard       from './components/ActivityCard'
import ActivityMap        from './components/ActivityMap'
import './index.css'

export default function App() {
  // ── Filters ───────────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState(null)
  const [searchQuery,    setSearchQuery]    = useState('')
  const [familyOnly,     setFamilyOnly]     = useState(false)
  const [transportMode,  setTransportMode]  = useState('all') // 'all' | 'walk' | 'car'
  const [view,           setView]           = useState('list') // 'list' | 'map'
  const [focusedId,      setFocusedId]      = useState(null)  // activity to focus on map

  // ── Location + weather ────────────────────────────────────────────────────
  const { coords, isReal, status: geoStatus, requestLocation } = useGeolocation()
  const { weather, loading: weatherLoading } = useWeather(coords.lat, coords.lng)

  // Hide location prompt once user has responded
  const [promptDismissed, setPromptDismissed] = useState(false)
  const showLocationPrompt = geoStatus === 'idle' && !promptDismissed

  const handleAllowLocation = () => {
    requestLocation()
    setPromptDismissed(true)
  }
  const handleDismissPrompt = () => setPromptDismissed(true)

  // ── Weather-based highlight ────────────────────────────────────────────────
  // If rain likely → highlight indoor; if nice → highlight outdoor
  const weatherHighlight = useMemo(() => {
    if (!weather) return null
    if (weather.precipProb >= 50) return 'indoor'
    if (weather.isGoodOutdoor)    return 'outdoor'
    return null
  }, [weather])

  // ── Filtered activities ────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = activities

    if (activeCategory) {
      result = result.filter(a => a.category === activeCategory)
    }
    if (familyOnly) {
      result = result.filter(a => a.familyFriendly)
    }
    if (transportMode !== 'all') {
      result = result.filter(a => a.transport === transportMode)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      )
    }

    return result
  }, [activeCategory, familyOnly, transportMode, searchQuery])

  // ── Map interaction ────────────────────────────────────────────────────────
  const handlePinClick = useCallback((activity) => {
    setFocusedId(activity.id)
    setView('map')
  }, [])

  const handleCategoryToggle = (key) => {
    setActiveCategory(prev => (prev === key ? null : key))
  }

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#faf8f3' }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header style={{ backgroundColor: '#1a3c25' }}>
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-5 sm:pt-8 sm:pb-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium mb-1.5 tracking-widest uppercase" style={{ color: '#86c99a' }}>
                <span>🌿</span>
                <span>Para los de aquí</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1.5">
                Asturias de Verdad
              </h1>
              <p className="text-sm sm:text-base max-w-lg leading-relaxed" style={{ color: '#c3dfc9' }}>
                Sin guías turísticas. Actividades y lugares para quienes vivimos aquí todo el año.
              </p>
            </div>

            {/* Location status pill */}
            <div className="shrink-0 mt-1">
              {geoStatus === 'granted' && (
                <span className="text-xs bg-green-800/60 text-green-200 border border-green-700/50 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Ubicación activa
                </span>
              )}
              {geoStatus === 'denied' && (
                <span className="text-xs bg-stone-700/60 text-stone-300 border border-stone-600/50 px-2.5 py-1 rounded-full">
                  📍 Gijón (defecto)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Weather banner */}
        <WeatherBanner
          weather={weather}
          loading={weatherLoading}
          isRealLocation={isReal}
        />
      </header>

      {/* ── Location permission prompt ─────────────────────────────────────── */}
      {showLocationPrompt && (
        <div className="max-w-5xl mx-auto px-4 pt-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <p className="text-stone-800 text-sm font-semibold">¿Estás en Asturias?</p>
                <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">
                  Permite el acceso a tu ubicación para ver el tiempo real de tu zona y encontrar actividades cerca.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={handleAllowLocation}
                className="flex-1 sm:flex-none text-sm font-medium bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl transition-colors"
              >
                Permitir
              </button>
              <button
                onClick={handleDismissPrompt}
                className="flex-1 sm:flex-none text-sm text-stone-500 hover:text-stone-700 px-4 py-2 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors"
              >
                Ahora no
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Filter bar ─────────────────────────────────────────────────────── */}
      <FilterBar
        searchQuery={searchQuery}        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}  onCategoryToggle={handleCategoryToggle}
        familyOnly={familyOnly}          onFamilyToggle={() => setFamilyOnly(f => !f)}
        transportMode={transportMode}    onTransportChange={setTransportMode}
        view={view}                      onViewChange={setView}
        resultCount={filtered.length}    totalCount={activities.length}
      />

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-6">

        {/* ── MAP VIEW ────────────────────────────────────────────────────── */}
        {view === 'map' && (
          <div className="flex flex-col gap-4">
            <ActivityMap
              activities={filtered}
              userCoords={coords}
              isRealLocation={isReal}
              focusedId={focusedId}
              onPinClick={(activity) => {
                // Clicking a pin scrolls below to the card in list — switch to list view
                setFocusedId(activity.id)
              }}
            />
            {/* Mini card list below map so context isn't lost */}
            {filtered.length > 0 && (
              <div className="mt-2">
                <p className="text-stone-400 text-xs mb-3">
                  Clica un pin para más detalle · {filtered.length} lugar{filtered.length !== 1 ? 'es' : ''} en el mapa
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filtered.map(activity => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      weatherHighlight={weatherHighlight}
                      onPinClick={handlePinClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── LIST VIEW ───────────────────────────────────────────────────── */}
        {view === 'list' && (
          <>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(activity => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    weatherHighlight={weatherHighlight}
                    onPinClick={handlePinClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-stone-400">
                <div className="text-5xl mb-4">🌧</div>
                <p className="text-lg font-medium text-stone-500">Ningún resultado</p>
                <p className="text-sm mt-1">Prueba con otro término o quita los filtros</p>
              </div>
            )}
          </>
        )}
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-stone-500 text-sm">
            <span className="font-semibold text-stone-700">Asturias de Verdad</span>
            {' '}— Hecho por y para asturianos.{' '}
            <span className="text-stone-400 text-xs">v2 · Leaflet + Open-Meteo</span>
          </p>
          <p className="text-stone-400 text-xs mt-1">
            ¿Conoces un sitio que falta? Próximamente podrás sugerirlo.
          </p>
        </div>
      </footer>
    </div>
  )
}

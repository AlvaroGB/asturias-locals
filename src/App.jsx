import { useState, useMemo } from 'react'
import { activities, CATEGORIES } from './data/activities'
import './index.css'

// ─── Category pill colours (inactive / badge) ────────────────────────────────
const PILL_STYLES = {
  naturaleza:  'bg-green-100  text-green-800  border-green-200',
  gastronomia: 'bg-amber-50   text-amber-800  border-amber-200',
  cultura:     'bg-stone-100  text-stone-700  border-stone-300',
  deporte:     'bg-teal-50    text-teal-800   border-teal-200',
  ninos:       'bg-orange-50  text-orange-800 border-orange-200',
  eventos:     'bg-purple-50  text-purple-800 border-purple-200',
}

// Active filter button colours
const ACTIVE_STYLES = {
  naturaleza:  'bg-green-700  text-white border-green-700',
  gastronomia: 'bg-amber-700  text-white border-amber-700',
  cultura:     'bg-stone-600  text-white border-stone-600',
  deporte:     'bg-teal-700   text-white border-teal-700',
  ninos:       'bg-orange-600 text-white border-orange-600',
  eventos:     'bg-purple-700 text-white border-purple-700',
}

// Top accent stripe colour per category
const STRIPE_STYLES = {
  naturaleza:  'bg-green-600',
  gastronomia: 'bg-amber-600',
  cultura:     'bg-stone-500',
  deporte:     'bg-teal-600',
  ninos:       'bg-orange-500',
  eventos:     'bg-purple-600',
}

// ─── Activity Card ─────────────────────────────────────────────────────────────
function ActivityCard({ activity }) {
  const pillStyle   = PILL_STYLES[activity.category]  ?? 'bg-stone-100 text-stone-700 border-stone-300'
  const stripeStyle = STRIPE_STYLES[activity.category] ?? 'bg-stone-400'
  const cat         = CATEGORIES[activity.category]

  return (
    <article className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
      {/* Coloured top stripe */}
      <div className={`h-1 w-full ${stripeStyle}`} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title + category badge */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-stone-900 font-semibold text-base leading-snug flex-1">
            {activity.title}
          </h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${pillStyle}`}>
            {cat?.emoji}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-stone-500 text-sm">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span>{activity.location}</span>
        </div>

        {/* Description */}
        <p className="text-stone-600 text-sm leading-relaxed flex-1">
          {activity.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {activity.tags.map(tag => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
          {activity.season && activity.season !== 'todo el año' && (
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100">
              🗓 {activity.season}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState(null) // null = show all
  const [searchQuery, setSearchQuery]       = useState('')

  const filtered = useMemo(() => {
    let result = activities

    if (activeCategory) {
      result = result.filter(a => a.category === activeCategory)
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
  }, [activeCategory, searchQuery])

  const toggleCategory = (key) => {
    setActiveCategory(prev => (prev === key ? null : key))
  }

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#faf8f3' }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header style={{ backgroundColor: '#1a3c25' }} className="text-white">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-2 text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: '#86c99a' }}>
            <span>🌿</span>
            <span>Para los de aquí</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Asturias de Verdad
          </h1>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: '#c3dfc9' }}>
            Sin guías turísticas. Sin listas genéricas. Actividades, lugares y tradiciones
            para quienes vivimos aquí todo el año.
          </p>
        </div>
      </header>

      {/* ── Sticky filter bar ──────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-10 border-b border-stone-200"
        style={{ backgroundColor: 'rgba(250, 248, 243, 0.92)', backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3">

          {/* Search input */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por lugar, actividad o palabra clave…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': '#3f7234' }}
            />
          </div>

          {/* Category filter pills */}
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            {/* "All" button */}
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 text-sm px-3 py-1.5 rounded-full border font-medium transition-colors ${
                activeCategory === null
                  ? 'text-white border-stone-800'
                  : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
              }`}
              style={activeCategory === null ? { backgroundColor: '#3a362f', borderColor: '#3a362f' } : {}}
            >
              Todas
            </button>

            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => toggleCategory(key)}
                className={`shrink-0 text-sm px-3 py-1.5 rounded-full border font-medium transition-colors whitespace-nowrap ${
                  activeCategory === key
                    ? ACTIVE_STYLES[key]
                    : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* Results count */}
        <p className="text-stone-500 text-sm mb-5">
          {filtered.length === activities.length
            ? `${activities.length} actividades y lugares`
            : `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''}`}
          {activeCategory && ` · ${CATEGORIES[activeCategory].label}`}
          {searchQuery.trim() && ` · "${searchQuery.trim()}"`}
        </p>

        {/* Activity grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-stone-400">
            <div className="text-5xl mb-4">🌧</div>
            <p className="text-lg font-medium text-stone-500">Ningún resultado</p>
            <p className="text-sm mt-1">Prueba con otro término o quita los filtros</p>
          </div>
        )}
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-stone-500 text-sm">
            <span className="font-semibold text-stone-700">Asturias de Verdad</span>
            {' '}— Hecho por y para asturianos.{' '}
            <span className="text-stone-400 text-xs">v1 · datos estáticos</span>
          </p>
          <p className="text-stone-400 text-xs mt-1">
            ¿Conoces un sitio que falta? Próximamente podrás sugerirlo.
          </p>
        </div>
      </footer>
    </div>
  )
}

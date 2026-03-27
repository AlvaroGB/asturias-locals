import { CATEGORIES, CATEGORY_COLORS } from '../data/activities'

/**
 * ActivityCard — displays a single activity.
 *
 * Props:
 *   activity      — activity object from activities.js
 *   highlight     — 'outdoor' | 'indoor' | null — from weather context
 *   isHighlighted — true when this card matches the weather recommendation
 *   onPinClick    — called when "Ver en mapa" is clicked
 */
export default function ActivityCard({ activity, weatherHighlight, onPinClick }) {
  const cat    = CATEGORIES[activity.category]
  const colors = CATEGORY_COLORS[activity.category] ?? CATEGORY_COLORS.naturaleza

  // Weather-driven visual cue
  const isWeatherMatch =
    (weatherHighlight === 'indoor'   && activity.indoor) ||
    (weatherHighlight === 'outdoor'  && !activity.indoor)

  const isWeatherMismatch =
    (weatherHighlight === 'indoor'   && !activity.indoor) ||
    (weatherHighlight === 'outdoor'  && activity.indoor)

  return (
    <article
      className={`bg-white rounded-2xl border shadow-sm flex flex-col overflow-hidden transition-all duration-200
        ${isWeatherMatch   ? 'border-green-300 shadow-green-100 ring-1 ring-green-200' : 'border-stone-200'}
        ${isWeatherMismatch ? 'opacity-50' : 'hover:shadow-md'}
      `}
    >
      {/* Coloured top stripe */}
      <div className={`h-1 w-full ${colors.stripe}`} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-stone-900 font-semibold text-base leading-snug">
              {activity.title}
            </h3>
          </div>
          {/* Category badge */}
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${colors.bg} ${colors.text} ${colors.border}`}>
            {cat?.emoji} {cat?.label}
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

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {activity.familyFriendly && (
            <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-2 py-0.5 rounded-full font-medium">
              👨‍👩‍👧 familiar
            </span>
          )}
          {activity.indoor && (
            <span className="text-xs bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded-full">
              🏠 interior
            </span>
          )}
          {activity.tags.map(tag => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
          {activity.season && activity.season !== 'todo el año' && (
            <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full">
              🗓 {activity.season}
            </span>
          )}
        </div>

        {/* Weather match badge */}
        {isWeatherMatch && (
          <div className="mt-1 text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 font-medium">
            ✓ Ideal para hoy según el tiempo
          </div>
        )}

        {/* Map link */}
        {onPinClick && (
          <button
            onClick={() => onPinClick(activity)}
            className="mt-auto pt-2 text-xs text-stone-400 hover:text-green-700 flex items-center gap-1 transition-colors self-start"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            Ver en mapa
          </button>
        )}
      </div>
    </article>
  )
}

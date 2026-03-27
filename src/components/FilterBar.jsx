import { CATEGORIES, CATEGORY_COLORS } from '../data/activities'

/**
 * FilterBar — sticky bar with search input, category pills, and family toggle.
 *
 * Props:
 *   searchQuery      / onSearchChange
 *   activeCategory   / onCategoryToggle
 *   familyOnly       / onFamilyToggle
 *   view             — 'list' | 'map'
 *   onViewChange
 *   resultCount
 *   totalCount
 */
export default function FilterBar({
  searchQuery, onSearchChange,
  activeCategory, onCategoryToggle,
  familyOnly, onFamilyToggle,
  view, onViewChange,
  resultCount, totalCount,
}) {
  return (
    <div
      className="sticky top-0 z-10 border-b border-stone-200"
      style={{ backgroundColor: 'rgba(250, 248, 243, 0.95)', backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2.5">

        {/* Top row: search + view toggle */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar actividad, lugar o palabra…"
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Map / List toggle */}
          <div className="flex rounded-xl border border-stone-300 overflow-hidden shrink-0 bg-white text-sm">
            <button
              onClick={() => onViewChange('list')}
              className={`px-3 py-2 flex items-center gap-1.5 transition-colors ${
                view === 'list'
                  ? 'bg-stone-800 text-white'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
              title="Vista lista"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="hidden sm:inline">Lista</span>
            </button>
            <button
              onClick={() => onViewChange('map')}
              className={`px-3 py-2 flex items-center gap-1.5 transition-colors border-l border-stone-300 ${
                view === 'map'
                  ? 'bg-stone-800 text-white'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
              title="Vista mapa"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              <span className="hidden sm:inline">Mapa</span>
            </button>
          </div>
        </div>

        {/* Category pills row */}
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {/* All */}
          <button
            onClick={() => onCategoryToggle(null)}
            className={`shrink-0 text-sm px-3 py-1.5 rounded-full border font-medium transition-colors ${
              activeCategory === null
                ? 'text-white border-stone-800 bg-stone-800'
                : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
            }`}
          >
            Todas
          </button>

          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const c = CATEGORY_COLORS[key]
            return (
              <button
                key={key}
                onClick={() => onCategoryToggle(key)}
                className={`shrink-0 text-sm px-3 py-1.5 rounded-full border font-medium transition-colors whitespace-nowrap ${
                  activeCategory === key
                    ? `${c.active} text-white border-transparent`
                    : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            )
          })}

          {/* Family toggle */}
          <button
            onClick={onFamilyToggle}
            className={`shrink-0 text-sm px-3 py-1.5 rounded-full border font-medium transition-colors whitespace-nowrap ml-1 ${
              familyOnly
                ? 'bg-orange-600 text-white border-orange-600'
                : 'bg-white text-stone-600 border-stone-300 hover:border-orange-300'
            }`}
          >
            👨‍👩‍👧 Con niños
          </button>
        </div>

        {/* Result count */}
        <p className="text-stone-400 text-xs pb-0.5">
          {resultCount === totalCount
            ? `${totalCount} actividades`
            : `${resultCount} de ${totalCount}`}
          {activeCategory && ` · ${CATEGORIES[activeCategory].label}`}
          {familyOnly && ' · Solo familiares'}
        </p>
      </div>
    </div>
  )
}

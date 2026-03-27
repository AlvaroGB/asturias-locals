import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { CATEGORIES, CATEGORY_COLORS } from '../data/activities'

// Fix Leaflet's broken default icon paths when bundled with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon   from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl:       markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl:     markerShadow,
})

/**
 * Creates a coloured circular SVG marker for a category.
 */
function makePinIcon(color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9.941 14 22 14 22s14-12.059 14-22C28 6.268 21.732 0 14 0z"
            fill="${color}" stroke="white" stroke-width="2"/>
      <circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/>
    </svg>`
  return L.divIcon({
    html:        svg,
    className:   '',
    iconSize:    [28, 36],
    iconAnchor:  [14, 36],
    popupAnchor: [0, -36],
  })
}

/**
 * Creates the blue "you are here" pulsing dot.
 */
function makeUserIcon() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="#3b82f6" stroke="white" stroke-width="2.5"/>
      <circle cx="10" cy="10" r="14" fill="#3b82f6" opacity="0.15"/>
    </svg>`
  return L.divIcon({
    html:        svg,
    className:   '',
    iconSize:    [20, 20],
    iconAnchor:  [10, 10],
    popupAnchor: [0, -12],
  })
}

/**
 * ActivityMap — renders a Leaflet map with pins for each activity.
 *
 * Props:
 *   activities    — filtered list of activities to show
 *   userCoords    — { lat, lng } — user position (shown as blue dot)
 *   isRealLocation — true if userCoords came from browser geolocation
 *   focusedId     — id of activity to open its popup and pan to
 *   onPinClick    — callback(activity) when a pin is clicked
 */
export default function ActivityMap({ activities, userCoords, isRealLocation, focusedId, onPinClick }) {
  const containerRef = useRef(null)
  const mapRef       = useRef(null)
  const markersRef   = useRef({})    // id → L.Marker
  const userMarkerRef = useRef(null)

  // ── Init map once ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return

    const map = L.map(containerRef.current, {
      center: [43.36, -5.85],
      zoom:   8,
      zoomControl: true,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  // ── Sync activity markers whenever filtered list changes ──────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    const existingIds = new Set(Object.keys(markersRef.current))
    const newIds      = new Set(activities.map(a => a.id))

    // Remove markers that are no longer in the filtered list
    existingIds.forEach(id => {
      if (!newIds.has(id)) {
        markersRef.current[id].remove()
        delete markersRef.current[id]
      }
    })

    // Add markers for new activities
    activities.forEach(activity => {
      if (markersRef.current[activity.id]) return // already on map

      const pinColor = CATEGORY_COLORS[activity.category]?.pin ?? '#57534e'
      const icon     = makePinIcon(pinColor)
      const cat      = CATEGORIES[activity.category]

      const marker = L.marker(activity.coords, { icon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: system-ui, sans-serif; min-width: 180px;">
            <div style="font-size: 0.65rem; color: #78716c; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px;">
              ${cat?.emoji ?? ''} ${cat?.label ?? activity.category}
            </div>
            <div style="font-weight: 600; font-size: 0.9rem; color: #1c1917; margin-bottom: 4px; line-height: 1.3;">
              ${activity.title}
            </div>
            <div style="font-size: 0.75rem; color: #78716c; margin-bottom: 6px;">
              📍 ${activity.location}
            </div>
            <div style="font-size: 0.78rem; color: #44403c; line-height: 1.45;">
              ${activity.description.slice(0, 100)}…
            </div>
          </div>
        `, { maxWidth: 260 })
        .on('click', () => onPinClick?.(activity))

      markersRef.current[activity.id] = marker
    })
  }, [activities, onPinClick])

  // ── User location marker ──────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !userCoords) return

    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng([userCoords.lat, userCoords.lng])
    } else {
      userMarkerRef.current = L.marker([userCoords.lat, userCoords.lng], {
        icon: makeUserIcon(),
        zIndexOffset: 1000,
      })
        .addTo(map)
        .bindPopup(isRealLocation ? '📍 Estás aquí' : '📍 Gijón (por defecto)')
    }

    // Pan to user if real location just arrived
    if (isRealLocation) {
      map.setView([userCoords.lat, userCoords.lng], 10, { animate: true })
    }
  }, [userCoords, isRealLocation])

  // ── Open popup when a card's "Ver en mapa" is clicked ────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !focusedId) return
    const marker = markersRef.current[focusedId]
    if (!marker) return
    map.setView(marker.getLatLng(), 13, { animate: true })
    marker.openPopup()
  }, [focusedId])

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl overflow-hidden border border-stone-200 shadow-sm"
      style={{ height: '420px' }}
    />
  )
}

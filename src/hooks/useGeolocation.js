import { useState, useEffect } from 'react'

// Default fallback: Gijón city centre
const GIJON_COORDS = { lat: 43.5323, lng: -5.6615 }

/**
 * useGeolocation — requests browser geolocation and returns user's position.
 *
 * Returns:
 *   coords       — { lat, lng } — user position or Gijón fallback
 *   isReal       — true if coords came from the browser (not fallback)
 *   status       — 'idle' | 'pending' | 'granted' | 'denied' | 'unavailable'
 *   requestLocation — call this to trigger the browser permission prompt
 */
export function useGeolocation() {
  const [coords, setCoords]   = useState(GIJON_COORDS)
  const [isReal, setIsReal]   = useState(false)
  const [status, setStatus]   = useState('idle') // idle → pending → granted/denied/unavailable

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setStatus('unavailable')
      return
    }
    setStatus('pending')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setIsReal(true)
        setStatus('granted')
      },
      () => {
        // Denied or error — keep Gijón default
        setStatus('denied')
      },
      { timeout: 8000, maximumAge: 300_000 }
    )
  }

  return { coords, isReal, status, requestLocation }
}

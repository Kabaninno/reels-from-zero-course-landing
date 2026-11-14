import { useEffect, useState } from 'react'

const STORAGE_KEY = 'rfz-offer-deadline'

// Keeps the same deadline across reloads (so the timer feels real), and
// quietly starts a fresh countdown once the previous one has expired.
function readDeadline(duration) {
  const now = Date.now()
  try {
    const saved = Number(window.localStorage.getItem(STORAGE_KEY))
    if (saved > now) return saved
  } catch {
    /* storage unavailable — fall through */
  }
  const next = now + duration
  try {
    window.localStorage.setItem(STORAGE_KEY, String(next))
  } catch {
    /* ignore */
  }
  return next
}

function split(ms) {
  const total = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

export function useCountdown(duration) {
  const [deadline, setDeadline] = useState(() => readDeadline(duration))
  const [left, setLeft] = useState(() => Math.max(0, deadline - Date.now()))

  useEffect(() => {
    const tick = () => {
      const remaining = deadline - Date.now()
      if (remaining <= 0) {
        const next = readDeadline(duration)
        setDeadline(next)
        setLeft(Math.max(0, next - Date.now()))
      } else {
        setLeft(remaining)
      }
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [deadline, duration])

  return split(left)
}

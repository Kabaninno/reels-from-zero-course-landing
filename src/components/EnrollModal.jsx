import { useEffect, useRef, useState } from 'react'
import { Check, Loader2, Mail, Phone, ShieldCheck, User, X } from 'lucide-react'
import { Button, Sticker } from './ui.jsx'

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Alex Johnson', autoComplete: 'name', icon: User },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email', icon: Mail },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(555) 123-4567', autoComplete: 'tel', icon: Phone },
]

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your full name.' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email, like you@example.com.'),
  phone: (v) => (v.replace(/\D/g, '').length === 10 ? '' : 'Enter a 10-digit US phone number.'),
}

// Formats digits as a US phone number: (555) 123-4567
function formatPhone(raw) {
  let digits = raw.replace(/\D/g, '')
  if (digits.length > 10 && digits.startsWith('1')) digits = digits.slice(1)
  digits = digits.slice(0, 10)
  if (digits.length < 4) return digits
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export default function EnrollModal({ plan, onClose }) {
  const [values, setValues] = useState({ name: '', email: '', phone: '' })
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done
  const dialogRef = useRef(null)
  const timerRef = useRef(null)

  const errors = {
    name: validators.name(values.name),
    email: validators.email(values.email),
    phone: validators.phone(values.phone),
  }

  // Lock page scroll, focus the first field, and restore focus on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector('input')?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(timerRef.current)
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus()
    }
  }, [])

  useEffect(() => {
    if (status === 'done') dialogRef.current?.querySelector('[data-autofocus]')?.focus()
  }, [status])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key !== 'Tab') return
    const nodes = dialogRef.current?.querySelectorAll('button:not([disabled]), input:not([disabled])')
    if (!nodes || nodes.length === 0) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: name === 'phone' ? formatPhone(value) : value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status !== 'idle') return
    setTouched({ name: true, email: true, phone: true })
    const firstInvalid = FIELDS.find((f) => errors[f.name])
    if (firstInvalid) {
      dialogRef.current?.querySelector(`input[name="${firstInvalid.name}"]`)?.focus()
      return
    }
    setStatus('sending')
    timerRef.current = window.setTimeout(() => setStatus('done'), 1400)
  }

  const done = status === 'done'
  const sending = status === 'sending'
  const firstName = values.name.trim().split(/\s+/)[0]

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4" onKeyDown={handleKeyDown}>
      <div aria-hidden="true" className="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enroll-title"
        className="relative max-h-[94dvh] w-full animate-rise overflow-y-auto rounded-t-[2rem] border-2 border-ink bg-paper shadow-hard-lg sm:max-w-md sm:rounded-[2rem]"
      >
        <div className="relative border-b-2 border-ink bg-lime px-6 pb-5 pt-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border-2 border-ink bg-white transition-colors hover:bg-paper"
          >
            <X className="size-5" strokeWidth={2.75} aria-hidden="true" />
          </button>

          <Sticker tone="white" className="-rotate-2">
            {done ? 'You are in' : `${plan.name} plan`}
          </Sticker>
          <h2 id="enroll-title" className="mt-3 pr-10 text-3xl font-extrabold leading-tight sm:text-4xl">
            {done ? 'Thank you!' : 'Join Reels From Zero'}
          </h2>
          {!done && (
            <p className="mt-1.5 font-medium text-ink/75">
              <span className="font-extrabold text-ink">${plan.price}</span> one-time ·{' '}
              <span className="line-through">${plan.was}</span> · lifetime access
            </p>
          )}
        </div>

        {done ? (
          <div className="px-6 py-8 text-center">
            <span className="mx-auto grid size-20 animate-pop place-items-center rounded-full border-2 border-ink bg-lime shadow-hard">
              <Check className="size-10" strokeWidth={3.5} aria-hidden="true" />
            </span>
            <p className="mt-6 font-display text-2xl font-extrabold">You&apos;re in{firstName ? `, ${firstName}` : ''}!</p>
            <p className="mt-2 leading-relaxed text-ink/75">
              We just emailed your {plan.name} access details to{' '}
              <strong className="break-all font-bold text-ink">{values.email.trim()}</strong>. Your first lesson is
              waiting.
            </p>
            <p className="mt-4 text-xs text-ink/50">Demo site: nothing was sent and no payment was taken.</p>
            <Button data-autofocus onClick={onClose} className="mt-6 w-full">
              Back to the site
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4 px-6 py-6">
            {FIELDS.map((field) => {
              const Icon = field.icon
              const error = touched[field.name] ? errors[field.name] : ''
              const inputId = `enroll-${field.name}`
              return (
                <div key={field.name}>
                  <label htmlFor={inputId} className="mb-1.5 block text-sm font-extrabold">
                    {field.label}
                  </label>
                  <div className="relative">
                    <Icon
                      className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/45"
                      aria-hidden="true"
                    />
                    <input
                      id={inputId}
                      name={field.name}
                      type={field.type}
                      inputMode={field.type === 'tel' ? 'tel' : undefined}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      readOnly={sending}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${inputId}-error` : undefined}
                      className={`w-full rounded-2xl border-2 bg-white py-3.5 pl-12 pr-4 text-base font-medium outline-none transition-shadow placeholder:text-ink/35 focus:shadow-hard-sm ${
                        error ? 'border-red-600' : 'border-ink'
                      }`}
                    />
                  </div>
                  {error && (
                    <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-sm font-bold text-red-600">
                      {error}
                    </p>
                  )}
                </div>
              )
            })}

            <Button type="submit" size="lg" disabled={sending} className="mt-2 w-full">
              {sending ? (
                <>
                  <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                  Reserving your spot…
                </>
              ) : (
                <>Get {plan.name} · ${plan.price}</>
              )}
            </Button>

            <p className="flex items-center justify-center gap-2 text-center text-xs text-ink/60">
              <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
              30-day money-back guarantee. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

import { ArrowRight, ShieldCheck, Timer } from 'lucide-react'
import { PLANS } from '../data.js'
import { useCountdown } from '../hooks/useCountdown.js'
import { Button, Container, Sticker } from './ui.jsx'

// Launch-price window: 2 days and 11 hours from the first visit.
const OFFER_DURATION = (2 * 24 + 11) * 60 * 60 * 1000

const pad = (n) => String(n).padStart(2, '0')

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid size-14 place-items-center rounded-2xl border-2 border-lime bg-white/5 font-display text-2xl font-extrabold tabular-nums text-lime sm:size-24 sm:text-5xl">
        {pad(value)}
      </div>
      <span className="mt-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/60 sm:text-xs">{label}</span>
    </div>
  )
}

export default function FinalCta({ onSelectPlan }) {
  const { days, hours, minutes, seconds } = useCountdown(OFFER_DURATION)
  const plan = PLANS.find((p) => p.popular) ?? PLANS[0]

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-ink px-5 py-14 text-center text-white shadow-hard-lg sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 size-72 rounded-full bg-lime/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -right-20 size-80 rounded-full bg-pink/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-10 top-10 hidden size-28 rotate-12 place-items-center rounded-full border-2 border-white bg-lime text-center font-display text-2xl font-extrabold leading-none text-ink lg:grid"
          >
            <span>
              40%
              <br />
              OFF
            </span>
          </div>

          <div className="relative">
            <Sticker tone="lime" icon={Timer} className="-rotate-2">
              Launch price ends soon
            </Sticker>

            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.1rem,8vw,4.5rem)] font-extrabold leading-[0.98] text-balance">
              Your first reel is <span className="text-lime">one weekend</span> away.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Lock in {plan.name} for ${plan.price} before the clock runs out. After that it goes back to $
              {plan.was}.
            </p>

            <div
              role="timer"
              aria-label={`Offer ends in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`}
              className="mt-10 flex items-start justify-center gap-2 sm:gap-4"
            >
              <Unit value={days} label="Days" />
              <Unit value={hours} label="Hours" />
              <Unit value={minutes} label="Min" />
              <Unit value={seconds} label="Sec" />
            </div>

            <Button
              size="lg"
              className="mt-10 w-full shadow-[5px_5px_0_0_#fff] hover:shadow-[8px_8px_0_0_#fff] active:shadow-[3px_3px_0_0_#fff] sm:w-auto"
              onClick={() => onSelectPlan(plan)}
            >
              Claim 40% off · ${plan.price}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/60">
              <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
              30-day money-back guarantee · Lifetime access
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

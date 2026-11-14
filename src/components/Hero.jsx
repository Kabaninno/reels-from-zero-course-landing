import { ArrowRight, Star } from 'lucide-react'
import { GRADIENTS, TOTAL_HOURS, TOTAL_LESSONS } from '../data.js'
import PhoneMockup from './PhoneMockup.jsx'
import { Button, Container, Highlight, Sticker } from './ui.jsx'

const AVATARS = ['JR', 'MT', 'PS', 'DK']

export default function Hero() {
  return (
    <section className="bg-dots relative overflow-x-clip">
      <Container className="grid items-center gap-20 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <Sticker tone="white" className="-rotate-2">
            2026 edition · {TOTAL_LESSONS} lessons
          </Sticker>

          <h1 className="mt-6 text-[clamp(2.25rem,10.2vw,5.4rem)] font-extrabold leading-[0.96]">
            Go from zero to <Highlight>scroll-stopping</Highlight> reels.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
            Learn to shoot and edit vertical videos with the phone already in your pocket. No gear, no
            experience, no film-school jargon. Just a clear 5-week plan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as="a" href="#pricing" size="lg">
              Start learning · from $79
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button as="a" href="#program" size="lg" variant="white">
              See what&apos;s inside
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {AVATARS.map((initials, i) => (
                <span
                  key={initials}
                  className="grid size-11 place-items-center rounded-full border-2 border-ink text-xs font-extrabold text-white"
                  style={{ background: GRADIENTS[i] }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-ink" strokeWidth={0} aria-hidden="true" />
                ))}
                <span className="ml-2 text-sm font-extrabold">4.9/5</span>
              </div>
              <p className="mt-0.5 text-sm text-ink/70">Loved by 12,400+ students across the US</p>
            </div>
          </div>

          <ul className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {[
              [TOTAL_LESSONS, 'lessons'],
              [`${TOTAL_HOURS}+`, 'hours of video'],
              ['Lifetime', 'access'],
            ].map(([value, label]) => (
              <li key={label} className="rounded-2xl border-2 border-ink bg-white px-3 py-3 shadow-hard-sm">
                <span className="block font-display text-xl font-extrabold leading-none sm:text-3xl">{value}</span>
                <span className="mt-1 block text-[0.72rem] font-medium leading-tight text-ink/65">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <PhoneMockup />
      </Container>
    </section>
  )
}

import { MessageCircle, Quote, Star, TrendingUp } from 'lucide-react'
import { GRADIENTS, TESTIMONIALS } from '../data.js'
import { Container, Highlight, SectionHeading, Sticker } from './ui.jsx'

const cardTones = {
  white: { card: 'bg-white', quote: 'text-ink/80', meta: 'text-ink/60', quoteIcon: 'text-lime-deep' },
  lime: { card: 'bg-lime', quote: 'text-ink/85', meta: 'text-ink/65', quoteIcon: 'text-ink' },
  ink: { card: 'bg-ink text-white', quote: 'text-white/85', meta: 'text-white/60', quoteIcon: 'text-lime' },
  pink: { card: 'bg-pink', quote: 'text-ink/85', meta: 'text-ink/65', quoteIcon: 'text-ink' },
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Student stories"
            icon={MessageCircle}
            title={
              <>
                Real people. <Highlight>Real reels.</Highlight>
              </>
            }
          >
            Thousands of students have gone from &ldquo;I don&apos;t know where to start&rdquo; to a feed
            they&apos;re proud of.
          </SectionHeading>

          <div className="flex shrink-0 items-center gap-4 self-start rounded-3xl border-2 border-ink bg-white px-5 py-4 shadow-hard lg:self-auto">
            <span className="font-display text-5xl font-extrabold leading-none">4.9</span>
            <div>
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-ink" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-ink/70">from 2,300+ student reviews</p>
            </div>
          </div>
        </div>

        <ul className="mt-12 gap-6 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => {
            const tone = cardTones[t.tone]
            return (
              <li
                key={t.name}
                className={`mb-6 break-inside-avoid rounded-3xl border-2 border-ink p-6 shadow-hard ${tone.card}`}
              >
                <figure>
                  <div className="flex items-start justify-between gap-3">
                    <Quote className={`size-9 fill-current ${tone.quoteIcon}`} strokeWidth={0} aria-hidden="true" />
                    <Sticker tone={t.tone === 'ink' ? 'lime' : 'white'} icon={TrendingUp} className="text-[0.62rem]">
                      {t.result}
                    </Sticker>
                  </div>

                  <blockquote className={`mt-4 text-[1.02rem] leading-relaxed ${tone.quote}`}>{t.quote}</blockquote>

                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-ink text-sm font-extrabold text-white"
                      style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                    >
                      {initials(t.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-extrabold leading-tight">{t.name}</p>
                      <p className={`text-sm leading-snug ${tone.meta}`}>
                        {t.role} · {t.place}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

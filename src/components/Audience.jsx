import { Check, Users } from 'lucide-react'
import { AUDIENCE } from '../data.js'
import { Container, Highlight, SectionHeading, Sticker } from './ui.jsx'

const tones = {
  white: { card: 'bg-white', icon: 'bg-lime', text: 'text-ink/70' },
  lime: { card: 'bg-lime', icon: 'bg-white', text: 'text-ink/75' },
  ink: { card: 'bg-ink text-white', icon: 'bg-lime text-ink', text: 'text-white/75' },
  pink: { card: 'bg-pink', icon: 'bg-white', text: 'text-ink/75' },
}

export default function Audience() {
  return (
    <section id="for-you" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          icon={Users}
          title={
            <>
              Made for people with <Highlight>a phone</Highlight> and zero clue.
            </>
          }
        >
          If you can send a text, you can finish this course. Here is who gets the most out of it.
        </SectionHeading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((item) => {
            const t = tones[item.tone]
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className={`group flex flex-col rounded-3xl border-2 border-ink p-6 shadow-hard transition duration-200 hover:-translate-y-1 hover:shadow-hard-lg ${t.card}`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl border-2 border-ink transition-transform group-hover:-rotate-6 ${t.icon}`}
                >
                  <Icon className="size-7" strokeWidth={2.25} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight">{item.title}</h3>
                <p className={`mt-2 flex-1 leading-relaxed ${t.text}`}>{item.text}</p>
                <Sticker tone={item.tone === 'ink' ? 'lime' : 'white'} className="mt-5 self-start">
                  {item.tag}
                </Sticker>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border-2 border-dashed border-ink p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-lime">
              <Check className="size-5" strokeWidth={3} aria-hidden="true" />
            </span>
            <p className="text-lg font-medium leading-snug">
              <strong className="font-extrabold">Not sure where you fit?</strong> If you want to look
              confident on camera or make your business easier to find, you are in the right place.
            </p>
          </div>
          <a href="#faq" className="shrink-0 text-base font-extrabold underline decoration-lime decoration-4 underline-offset-4 hover:decoration-ink">
            Read the FAQ
          </a>
        </div>
      </Container>
    </section>
  )
}

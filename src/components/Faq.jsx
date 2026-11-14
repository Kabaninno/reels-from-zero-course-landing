import { useState } from 'react'
import { ChevronDown, HelpCircle, Mail } from 'lucide-react'
import { FAQS } from '../data.js'
import { Container, Highlight, SectionHeading } from './ui.jsx'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              icon={HelpCircle}
              title={
                <>
                  Questions? <Highlight>Answered.</Highlight>
                </>
              }
            >
              Everything people ask before joining. Can&apos;t find your answer? Drop us a line.
            </SectionHeading>

            <a
              href="mailto:hello@reelsfromzero.example"
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-white px-5 py-3 font-bold shadow-hard-sm transition hover:-translate-y-0.5 hover:bg-lime"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span className="break-all">hello@reelsfromzero.example</span>
            </a>
          </div>

          <ul className="space-y-3">
            {FAQS.map((item, i) => {
              const open = openIndex === i
              const buttonId = `faq-btn-${i}`
              const panelId = `faq-panel-${i}`
              return (
                <li
                  key={item.q}
                  className={`rounded-2xl border-2 border-ink transition-colors duration-200 ${
                    open ? 'bg-lime shadow-hard' : 'bg-white'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                    >
                      <span className="text-lg font-bold leading-snug sm:text-xl">{item.q}</span>
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-all duration-300 ${
                          open ? 'rotate-180 bg-ink text-lime' : 'bg-paper'
                        }`}
                      >
                        <ChevronDown className="size-5" strokeWidth={3} aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 leading-relaxed text-ink/80 sm:px-5">{item.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}

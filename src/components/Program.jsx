import { useState } from 'react'
import { ArrowRight, BookOpen, Gift, Minus, Play, Plus, Target } from 'lucide-react'
import { MODULES, TOTAL_HOURS, TOTAL_LESSONS, formatMinutes } from '../data.js'
import { Button, Container, Highlight, SectionHeading, Sticker } from './ui.jsx'

function ModuleItem({ mod, index, open, onToggle }) {
  const minutes = mod.lessons.reduce((sum, l) => sum + l.min, 0)
  const buttonId = `module-btn-${index}`
  const panelId = `module-panel-${index}`

  return (
    <li
      className={`rounded-2xl border-2 border-ink bg-white transition-shadow duration-200 ${
        open ? 'shadow-hard' : ''
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
        >
          <span
            className={`grid size-11 shrink-0 place-items-center rounded-xl border-2 border-ink font-display text-lg font-extrabold transition-colors ${
              open ? 'bg-lime' : 'bg-paper'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-bold leading-tight sm:text-xl">{mod.title}</span>
            <span className="mt-1 block font-sans text-sm font-normal text-ink/60">
              {mod.lessons.length} lessons · {formatMinutes(minutes)}
            </span>
          </span>
          <span
            className={`grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors ${
              open ? 'bg-ink text-lime' : 'bg-white'
            }`}
          >
            {open ? (
              <Minus className="size-4" strokeWidth={3} aria-hidden="true" />
            ) : (
              <Plus className="size-4" strokeWidth={3} aria-hidden="true" />
            )}
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
          <div className="border-t-2 border-dashed border-ink/20 px-4 pb-5 pt-4 sm:px-5">
            <p className="leading-relaxed text-ink/75">{mod.blurb}</p>

            <ul className="mt-3 divide-y divide-ink/10">
              {mod.lessons.map((lesson) => (
                <li key={lesson.title} className="flex items-center gap-3 py-2.5 text-[0.95rem]">
                  <Play className="size-4 shrink-0 fill-ink" aria-hidden="true" />
                  <span className="min-w-0 flex-1 font-medium">{lesson.title}</span>
                  <span className="shrink-0 text-sm tabular-nums text-ink/55">{lesson.min} min</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-start gap-3 rounded-xl border-2 border-ink bg-lime px-4 py-3 text-sm font-medium">
              <Target className="mt-0.5 size-4 shrink-0" strokeWidth={2.75} aria-hidden="true" />
              <p>
                <span className="font-extrabold">Mini-project:</span> {mod.project}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Program() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="program" className="scroll-mt-16 border-y-2 border-ink bg-paper-2 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The program"
              icon={BookOpen}
              title={
                <>
                  Eight modules. <Highlight>One reel</Highlight> at a time.
                </>
              }
            >
              Every module ends with a small project, so you are publishing real videos from week one, not
              just watching someone else do it.
            </SectionHeading>

            <ul className="mt-8 flex flex-wrap gap-3">
              {[
                [MODULES.length, 'modules'],
                [TOTAL_LESSONS, 'lessons'],
                [`${TOTAL_HOURS}+`, 'hours'],
              ].map(([value, label]) => (
                <li key={label} className="rounded-2xl border-2 border-ink bg-white px-4 py-2.5 shadow-hard-sm">
                  <span className="font-display text-2xl font-extrabold">{value}</span>{' '}
                  <span className="text-sm font-medium text-ink/65">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 hidden rounded-3xl border-2 border-ink bg-white p-5 shadow-hard lg:block">
              <Sticker tone="pink" icon={Gift} className="-rotate-2">
                Free bonus
              </Sticker>
              <p className="mt-3 font-medium leading-snug">
                Grab the hook swipe file: 120 proven openers you can copy, remix and film today.
              </p>
            </div>

            <Button as="a" href="#pricing" className="mt-8 hidden lg:inline-flex">
              Get the full program
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>

          <ul className="space-y-3">
            {MODULES.map((mod, i) => (
              <ModuleItem
                key={mod.title}
                mod={mod}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

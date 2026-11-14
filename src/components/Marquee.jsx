import { MARQUEE_WORDS } from '../data.js'

function Group({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {MARQUEE_WORDS.map((word) => (
        <li key={word} className="flex items-center gap-8">
          <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-lime sm:text-3xl">
            {word}
          </span>
          <span className="text-xl text-white" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden py-6" aria-label="Topics covered in the course">
      <div className="-ml-[2%] w-[104%] -rotate-1 overflow-hidden border-y-2 border-ink bg-ink py-4">
        <div className="flex w-max animate-marquee">
          <Group />
          <Group hidden />
        </div>
      </div>
    </div>
  )
}

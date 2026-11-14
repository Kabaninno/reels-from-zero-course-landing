import { Camera, Heart, MessageCircle, Music, Scissors, Share2, TrendingUp } from 'lucide-react'
import { Sticker } from './ui.jsx'

function Scene() {
  return (
    <svg
      viewBox="0 0 260 540"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="reel-sky" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#7b5cff" />
          <stop offset="0.55" stopColor="#ff7ad9" />
          <stop offset="1" stopColor="#ff9a3c" />
        </linearGradient>
      </defs>
      <rect width="260" height="540" fill="url(#reel-sky)" />
      <circle cx="130" cy="205" r="122" fill="none" stroke="#fff" strokeOpacity="0.28" strokeWidth="2" strokeDasharray="4 9" />
      <circle cx="130" cy="205" r="98" fill="none" stroke="#c8ff1a" strokeOpacity="0.55" strokeWidth="2" />
      <circle cx="130" cy="205" r="74" fill="#c8ff1a" />
      <path
        d="M0 385 C50 345 92 352 132 376 C176 400 222 344 260 364 L260 540 L0 540Z"
        fill="#2a1760"
      />
      <path d="M0 436 C60 404 120 434 170 418 C210 405 240 414 260 424 L260 540 L0 540Z" fill="#0b0b0b" />
      {/* creator silhouette filming with a phone */}
      <circle cx="124" cy="296" r="24" fill="#0b0b0b" stroke="#c8ff1a" strokeWidth="2" />
      <path
        d="M80 450 C80 356 96 326 124 326 C152 326 168 356 168 450Z"
        fill="#0b0b0b"
        stroke="#c8ff1a"
        strokeWidth="2"
      />
      <g transform="rotate(14 168 350)">
        <rect x="158" y="318" width="24" height="42" rx="6" fill="#c8ff1a" stroke="#0b0b0b" strokeWidth="2.5" />
        <circle cx="170" cy="326" r="2.5" fill="#0b0b0b" />
      </g>
      {/* sparkles */}
      <g fill="#fff">
        <path transform="translate(48 120)" d="M0-9 2.4-2.4 9 0 2.4 2.4 0 9-2.4 2.4-9 0-2.4-2.4Z" />
        <path transform="translate(212 268) scale(0.8)" d="M0-9 2.4-2.4 9 0 2.4 2.4 0 9-2.4 2.4-9 0-2.4-2.4Z" />
        <path transform="translate(36 300) scale(0.6)" d="M0-9 2.4-2.4 9 0 2.4 2.4 0 9-2.4 2.4-9 0-2.4-2.4Z" />
      </g>
    </svg>
  )
}

function RailIcon({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className="size-6 fill-white/10 drop-shadow-md" strokeWidth={2.2} aria-hidden="true" />
      <span className="text-[0.65rem] font-bold drop-shadow-md">{label}</span>
    </div>
  )
}

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[250px] sm:w-[280px]" role="img" aria-label="Mockup of a vertical video on a phone screen">
      <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-lime/70 blur-3xl" />

      {/* phone body */}
      <div className="relative h-[520px] rounded-[2.6rem] border-[7px] border-ink bg-ink shadow-hard-lg sm:h-[580px]">
        <span aria-hidden="true" className="absolute -left-[10px] top-24 h-10 w-[3px] rounded-l bg-ink" />
        <span aria-hidden="true" className="absolute -left-[10px] top-40 h-14 w-[3px] rounded-l bg-ink" />
        <span aria-hidden="true" className="absolute -right-[10px] top-32 h-16 w-[3px] rounded-r bg-ink" />

        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-violet">
          <Scene />

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-2.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
          />

          {/* bottom scrim for legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)' }}
          />

          {/* top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-10 text-white">
            <span className="font-display text-lg font-extrabold drop-shadow-md">Reels</span>
            <Camera className="size-5 drop-shadow-md" aria-hidden="true" />
          </div>

          {/* right rail */}
          <div className="absolute bottom-20 right-2.5 z-10 flex flex-col items-center gap-4 text-white">
            <RailIcon icon={Heart} label="48.2K" />
            <RailIcon icon={MessageCircle} label="1,204" />
            <RailIcon icon={Share2} label="Share" />
            <span
              aria-hidden="true"
              className="mt-1 grid size-8 animate-disc place-items-center rounded-full border-2 border-white bg-ink"
            >
              <span className="size-2.5 rounded-full bg-lime" />
            </span>
          </div>

          {/* caption */}
          <div className="absolute bottom-5 left-3 right-14 z-10 text-white">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-7 rounded-full border-2 border-white"
                style={{ background: 'linear-gradient(135deg,#c8ff1a,#00c2a8)' }}
              />
              <span className="text-xs font-bold drop-shadow-md">@maya.makes</span>
              <span className="rounded-md border border-white px-1.5 py-0.5 text-[0.6rem] font-bold">Follow</span>
            </div>
            <p className="mt-2 text-[0.8rem] font-medium leading-snug drop-shadow-md">
              3 tricks for buttery-smooth shots with one hand
            </p>
            <p className="mt-1.5 flex items-center gap-1 text-[0.65rem] font-medium opacity-90">
              <Music className="size-3" aria-hidden="true" /> Original audio · maya.makes
            </p>
          </div>

          {/* progress bar */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/30">
            <div className="h-full animate-progress bg-lime" />
          </div>
        </div>
      </div>

      {/* floating stickers */}
      <div className="absolute -right-3 top-12 z-20 animate-float sm:-right-14">
        <Sticker tone="lime" className="rotate-6 whitespace-nowrap">
          Day 1 → first reel
        </Sticker>
      </div>

      <div className="absolute -left-4 bottom-32 z-20 w-[168px] animate-float [animation-delay:-2s] sm:-left-20">
        <div className="-rotate-3 rounded-2xl border-2 border-ink bg-white p-3 shadow-hard">
          <div className="flex items-center justify-between text-[0.65rem] font-extrabold uppercase tracking-wide">
            <span className="flex items-center gap-1">
              <Scissors className="size-3" aria-hidden="true" /> Edit
            </span>
            <span className="tabular-nums">00:27</span>
          </div>
          <div className="relative mt-2.5 flex gap-1">
            <span className="h-6 flex-[3] rounded-md border-2 border-ink bg-lime" />
            <span className="h-6 flex-[2] rounded-md border-2 border-ink bg-pink" />
            <span className="h-6 flex-[3] rounded-md border-2 border-ink bg-orange" />
            <span className="absolute -bottom-1.5 -top-1.5 left-[38%] w-0.5 bg-ink">
              <span className="absolute -left-[3px] -top-0.5 size-2 rounded-full bg-ink" />
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 bottom-12 z-20 animate-float [animation-delay:-3.5s] sm:-right-12">
        <Sticker tone="white" icon={TrendingUp} className="-rotate-3 whitespace-nowrap">
          1.2M views
        </Sticker>
      </div>
    </div>
  )
}

import { Play } from 'lucide-react'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

const stickerTones = {
  lime: 'bg-lime text-ink',
  white: 'bg-white text-ink',
  ink: 'bg-ink text-lime',
  pink: 'bg-pink text-ink',
  orange: 'bg-orange text-ink',
}

export function Sticker({ tone = 'lime', icon: Icon, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider shadow-hard-sm ${stickerTones[tone]} ${className}`}
    >
      {Icon && <Icon className="size-3.5 shrink-0" strokeWidth={2.75} aria-hidden="true" />}
      {children}
    </span>
  )
}

const buttonVariants = {
  lime: 'bg-lime text-ink hover:bg-lime-deep',
  dark: 'bg-ink text-white hover:bg-ink/90',
  white: 'bg-white text-ink hover:bg-paper',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3.5 text-base',
  lg: 'px-7 py-4 text-base sm:text-lg',
}

export function Button({ as: Tag = 'button', variant = 'lime', size = 'md', className = '', ...props }) {
  const extra = Tag === 'button' ? { type: props.type ?? 'button' } : {}
  return (
    <Tag
      {...extra}
      {...props}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink font-extrabold shadow-hard transition duration-150 hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-y-0.5 active:shadow-hard-sm disabled:cursor-not-allowed disabled:opacity-70 ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
    />
  )
}

export function Highlight({ children, tone = 'lime' }) {
  const bg = tone === 'ink' ? 'bg-ink' : tone === 'pink' ? 'bg-pink' : 'bg-lime'
  return (
    <span className="relative z-0 inline-block whitespace-nowrap">
      <span
        aria-hidden="true"
        className={`absolute -inset-x-1.5 bottom-[0.04em] top-[0.18em] -z-10 -rotate-1 rounded-md ${bg}`}
      />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, icon, title, children, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <Sticker icon={icon} className="-rotate-2">
        {eyebrow}
      </Sticker>
      <h2 className="mt-5 text-[clamp(2.1rem,7.5vw,4rem)] font-extrabold leading-[1] text-balance">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-ink/70 text-pretty">{children}</p>}
    </div>
  )
}

export function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      aria-label="Reels From Zero — back to top"
      className={`inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight ${className}`}
    >
      <span className="grid size-9 -rotate-6 place-items-center rounded-xl border-2 border-ink bg-lime shadow-hard-sm">
        <Play className="size-4 fill-ink" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap">Reels From Zero</span>
    </a>
  )
}

export function DummyLink({ className = '', children }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className={className}>
      {children}
    </a>
  )
}

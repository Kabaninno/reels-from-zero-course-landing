import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data.js'
import { Button, Container, Logo } from './ui.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold transition-colors hover:bg-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href="#pricing" size="sm" className="hidden sm:inline-flex">
            Enroll now
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border-2 border-ink bg-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-fade-in border-t-2 border-ink bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-bold hover:bg-lime"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href="#pricing" onClick={() => setOpen(false)} className="mt-3">
              Enroll now
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

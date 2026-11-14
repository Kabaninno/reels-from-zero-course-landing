import { Container, DummyLink, Logo } from './ui.jsx'

const COLUMNS = [
  {
    title: 'Course',
    links: [
      { label: "What you'll learn", href: '#program' },
      { label: 'Student stories', href: '#reviews' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [{ label: 'About us' }, { label: 'Careers' }, { label: 'Press kit' }, { label: 'Contact' }],
  },
  {
    title: 'Legal',
    links: [{ label: 'Terms of service' }, { label: 'Privacy policy' }, { label: 'Refund policy' }],
  },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-white">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs leading-relaxed text-ink/70">
              Learn to shoot and edit vertical videos on your phone, from your very first clip to a feed you&apos;re
              proud of.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {['Instagram', 'TikTok', 'YouTube'].map((name) => (
                <li key={name}>
                  <DummyLink className="inline-block rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold transition-colors hover:bg-lime">
                    {name}
                  </DummyLink>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-lg font-extrabold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a href={link.href} className="text-ink/70 transition-colors hover:text-ink hover:underline">
                          {link.label}
                        </a>
                      ) : (
                        <DummyLink className="text-ink/70 transition-colors hover:text-ink hover:underline">
                          {link.label}
                        </DummyLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t-2 border-dashed border-ink/25 pt-6 text-sm text-ink/60 md:flex-row md:items-start md:justify-between">
          <p>© 2026 Reels From Zero, Inc. · 123 Demo Street, Austin, TX 78701</p>
          <p className="max-w-md md:text-right">
            Demo website for portfolio purposes. The company, student stories and prices are fictional. Not
            affiliated with Instagram, Meta, TikTok or CapCut.
          </p>
        </div>
      </Container>
    </footer>
  )
}

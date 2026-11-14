import { ArrowRight, Check, CreditCard, Flame, ShieldCheck, Tag, X } from 'lucide-react'
import { PLANS } from '../data.js'
import { Button, Container, Highlight, SectionHeading, Sticker } from './ui.jsx'

function PlanCard({ plan, onSelect }) {
  const popular = Boolean(plan.popular)
  const save = Math.round((1 - plan.price / plan.was) * 100)

  return (
    <article
      className={`relative flex flex-col rounded-[2rem] border-2 border-ink p-6 sm:p-8 ${
        popular
          ? 'order-first bg-ink text-white shadow-[8px_8px_0_0_#fff] md:order-none md:-translate-y-4'
          : 'bg-white shadow-hard-lg'
      }`}
    >
      {popular && (
        <Sticker tone="pink" icon={Flame} className="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap">
          Most popular
        </Sticker>
      )}

      <h3 className="text-3xl font-extrabold">{plan.name}</h3>
      <p className={`mt-1 min-h-[2.75rem] leading-snug ${popular ? 'text-white/70' : 'text-ink/65'}`}>{plan.tagline}</p>

      <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="font-display text-6xl font-extrabold leading-none tracking-tight">${plan.price}</span>
        <span className="flex flex-col pb-1 leading-tight">
          <span className={`text-lg font-bold line-through ${popular ? 'text-white/50' : 'text-ink/45'}`}>${plan.was}</span>
          <span className={`text-sm font-extrabold ${popular ? 'text-lime' : 'text-ink'}`}>Save {save}%</span>
        </span>
      </div>
      <p className={`mt-1 text-sm ${popular ? 'text-white/60' : 'text-ink/55'}`}>One-time payment · lifetime access</p>

      <ul className="mt-6 flex-1 space-y-3 text-[0.95rem]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-ink">
              <Check className="size-3" strokeWidth={4} aria-hidden="true" />
            </span>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
        {plan.excluded.map((feature) => (
          <li key={feature} className={`flex items-start gap-3 ${popular ? 'text-white/45' : 'text-ink/40'}`}>
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 border-current">
              <X className="size-3" strokeWidth={4} aria-hidden="true" />
            </span>
            <span className="leading-snug line-through">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        variant={popular ? 'lime' : 'dark'}
        className={`mt-8 w-full ${popular ? 'shadow-[5px_5px_0_0_#fff] hover:shadow-[8px_8px_0_0_#fff] active:shadow-[3px_3px_0_0_#fff]' : ''}`}
        onClick={() => onSelect(plan)}
        aria-label={`Get the ${plan.name} plan for $${plan.price}`}
      >
        Get {plan.name}
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Button>
    </article>
  )
}

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="scroll-mt-16 border-y-2 border-ink bg-lime py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          icon={Tag}
          align="center"
          title={
            <>
              Pick your plan. <Highlight tone="ink"><span className="text-lime">Start today.</span></Highlight>
            </>
          }
        >
          Launch prices are live for a limited time. Pay once, learn forever, and get every update for free.
        </SectionHeading>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:items-stretch md:gap-6 lg:gap-8">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onSelect={onSelectPlan} />
          ))}
        </div>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-4 sm:flex-row sm:justify-center sm:gap-10">
          <li className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-white">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="font-bold leading-tight">30-day money-back guarantee</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-white">
              <CreditCard className="size-5" aria-hidden="true" />
            </span>
            <span className="font-bold leading-tight">Split into 3 monthly payments</span>
          </li>
        </ul>
      </Container>
    </section>
  )
}

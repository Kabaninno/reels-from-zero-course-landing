import { useCallback, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Audience from './components/Audience.jsx'
import Program from './components/Program.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import EnrollModal from './components/EnrollModal.jsx'

export default function App() {
  const [plan, setPlan] = useState(null)
  const closeModal = useCallback(() => setPlan(null), [])

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Audience />
        <Program />
        <Testimonials />
        <Pricing onSelectPlan={setPlan} />
        <Faq />
        <FinalCta onSelectPlan={setPlan} />
      </main>
      <Footer />
      {plan && <EnrollModal key={plan.id} plan={plan} onClose={closeModal} />}
    </div>
  )
}

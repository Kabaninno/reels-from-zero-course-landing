import { Briefcase, Clock, Flame, Mic, Smartphone, Store } from 'lucide-react'

export const NAV_LINKS = [
  { href: '#for-you', label: "Who it's for" },
  { href: '#program', label: 'Program' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export const MARQUEE_WORDS = [
  'Hooks',
  'Lighting',
  'CapCut',
  'Captions',
  'B-roll',
  'Transitions',
  'Audio',
  'Trends',
  'Storytelling',
  'Analytics',
  'Pacing',
  'Color',
]

export const GRADIENTS = [
  'linear-gradient(135deg,#7b5cff,#ff7ad9)',
  'linear-gradient(135deg,#ff9a3c,#ff4d6d)',
  'linear-gradient(135deg,#00c2a8,#c8ff1a)',
  'linear-gradient(135deg,#2d6bff,#7be0ff)',
  'linear-gradient(135deg,#ff7ad9,#ffd23f)',
  'linear-gradient(135deg,#0b0b0b,#6b6b6b)',
]

export const AUDIENCE = [
  {
    icon: Smartphone,
    title: 'Total beginners',
    text: 'Never edited a video in your life? Perfect. We start with how to hold your phone and build from there.',
    tag: 'Zero experience',
    tone: 'white',
  },
  {
    icon: Store,
    title: 'Local business owners',
    text: 'Show off your shop, salon or service in 30 seconds and turn scrollers into walk-in customers.',
    tag: 'More customers',
    tone: 'lime',
  },
  {
    icon: Flame,
    title: 'Stuck creators',
    text: 'Posting every day but stuck at 300 views? Fix your hooks, pacing and captions and watch reach climb.',
    tag: 'More reach',
    tone: 'ink',
  },
  {
    icon: Briefcase,
    title: 'Freelancers & social managers',
    text: 'Add short-form video to your offer and charge $500+ a month per client for something you can deliver fast.',
    tag: 'New income',
    tone: 'white',
  },
  {
    icon: Mic,
    title: 'Coaches & experts',
    text: 'Turn what you know into bite-sized clips that people save, share and book discovery calls from.',
    tag: 'More authority',
    tone: 'pink',
  },
  {
    icon: Clock,
    title: 'Busy people',
    text: 'Lessons run 5 to 15 minutes. Learn on a lunch break, practice on the weekend, publish on Monday.',
    tag: 'Self-paced',
    tone: 'white',
  },
]

export const MODULES = [
  {
    title: 'Your phone is the studio',
    blurb: 'Set up the phone you already own so you stop fighting blurry, shaky, off-center footage.',
    project: 'Shoot three steady 10-second clips around your home.',
    lessons: [
      { title: 'Camera settings that actually matter', min: 9 },
      { title: 'Why 1x beats zoom every single time', min: 7 },
      { title: 'Stabilizing shots without a gimbal', min: 8 },
      { title: 'The $25 gear list (and what to skip)', min: 6 },
      { title: 'Your vertical frame and 9:16 safe zones', min: 8 },
    ],
  },
  {
    title: 'Light & sound that look expensive',
    blurb: 'Great light and clean audio are 80% of the "pro" look. Both are cheaper than you think.',
    project: 'Record one clip in bad light, then fix it three ways.',
    lessons: [
      { title: 'Window light: your free key light', min: 8 },
      { title: 'Fixing ugly indoor lighting', min: 9 },
      { title: 'Clip mics vs. your phone mic', min: 7 },
      { title: 'Killing echo in any room', min: 6 },
      { title: 'Recording clean voiceovers', min: 8 },
    ],
  },
  {
    title: 'Hooks that stop the scroll',
    blurb: 'You have about three seconds. Learn the openers that keep thumbs from flicking away.',
    project: 'Write and film five different hooks for the same idea.',
    lessons: [
      { title: 'The 3-second rule', min: 7 },
      { title: 'Five hook formulas you can steal', min: 12 },
      { title: 'Writing a script in 10 minutes', min: 9 },
      { title: 'Story beats for 30-second reels', min: 10 },
      { title: 'Teardown: 12 viral reels, frame by frame', min: 14 },
    ],
  },
  {
    title: 'Shooting like a one-person crew',
    blurb: 'Framing, movement and in-camera tricks that make solo shoots look like a team made them.',
    project: 'Batch-shoot three reels in a single 90-minute session.',
    lessons: [
      { title: 'Framing, angles and the rule of thirds', min: 8 },
      { title: 'Moving shots with just your hands', min: 9 },
      { title: 'In-camera transitions (no editing needed)', min: 10 },
      { title: 'B-roll that makes edits feel pro', min: 8 },
      { title: 'Batch-shooting a week of reels in 2 hours', min: 11 },
    ],
  },
  {
    title: 'Editing fast in CapCut',
    blurb: 'Go from raw clips to a polished reel in under 30 minutes using free tools on your phone.',
    project: 'Edit your first 20-second reel from start to finish.',
    lessons: [
      { title: 'Your first edit in 15 minutes', min: 15 },
      { title: 'Cuts, speed ramps and rhythm', min: 11 },
      { title: 'Text, stickers and captions that pop', min: 10 },
      { title: 'Color grading with one tap', min: 7 },
      { title: 'Exporting for maximum quality', min: 5 },
    ],
  },
  {
    title: 'Sound, music & trends',
    blurb: 'Use audio the way top creators do, without sounding like you are chasing every trend.',
    project: 'Re-cut one reel to the beat of a trending sound.',
    lessons: [
      { title: 'Picking trending audio without the cringe', min: 8 },
      { title: 'Beat-syncing your cuts', min: 10 },
      { title: 'Mixing voiceover and music', min: 8 },
      { title: 'Riding a trend with your own twist', min: 9 },
      { title: 'Copyright basics every creator needs', min: 6 },
    ],
  },
  {
    title: 'Posting, SEO & analytics',
    blurb: 'Captions, keywords and timing that help the algorithm show your reel to the right people.',
    project: 'Post a reel, then read your first analytics report.',
    lessons: [
      { title: 'Captions, hashtags and search keywords', min: 9 },
      { title: 'Best times to post (it is not what you think)', min: 7 },
      { title: 'Reading your analytics like a pro', min: 10 },
      { title: 'Collaborations and cross-posting', min: 8 },
    ],
  },
  {
    title: 'Launch your 30-day plan',
    blurb: 'Pull everything together into a repeatable system that keeps you posting without burning out.',
    project: 'Publish your signature reel and share it for feedback.',
    lessons: [
      { title: 'Pick your niche and content pillars', min: 9 },
      { title: 'Build your 30-day content calendar', min: 12 },
      { title: 'Turn views into followers, leads and sales', min: 11 },
      { title: 'Capstone: publish your signature reel', min: 10 },
    ],
  },
]

export const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0)
export const TOTAL_MINUTES = MODULES.reduce(
  (sum, m) => sum + m.lessons.reduce((s, l) => s + l.min, 0),
  0,
)
export const TOTAL_HOURS = Math.floor(TOTAL_MINUTES / 60)

export function formatMinutes(total) {
  if (total < 60) return `${total} min`
  const h = Math.floor(total / 60)
  const m = total % 60
  return m ? `${h}h ${m}m` : `${h}h`
}

export const TESTIMONIALS = [
  {
    name: 'Jenna Ramirez',
    role: 'Boutique candle shop owner',
    place: 'Austin, TX',
    result: '48K views on reel #1',
    quote:
      'I used to post one product photo a week and hope for the best. After module 3, my first reel hit 48K views and I had to restock our best-selling candle twice in a month.',
    tone: 'white',
  },
  {
    name: 'Marcus Taylor',
    role: 'Personal trainer',
    place: 'Columbus, OH',
    result: '+1,900 followers in 5 weeks',
    quote:
      'The hook lessons are worth the price alone. I stopped filming long workouts and started filming 20-second tips. Three new clients said they found me through one reel.',
    tone: 'lime',
  },
  {
    name: 'Priya Shah',
    role: 'Freelance social media manager',
    place: 'Jersey City, NJ',
    result: '+$1,500/mo in new retainers',
    quote:
      'I added a reels package to my services right after the editing module. Two clients signed on at $750 a month each, and I make their reels in an afternoon.',
    tone: 'white',
  },
  {
    name: 'Dylan Kim',
    role: 'College student & aspiring creator',
    place: 'Boulder, CO',
    result: 'First brand deal in week 7',
    quote:
      'I had never edited anything. The "first edit in 15 minutes" lesson made it click. Seven weeks in, a local outdoor brand paid me $400 to make three reels.',
    tone: 'ink',
  },
  {
    name: 'Carla Mendes',
    role: 'Mobile dog groomer',
    place: 'Tampa, FL',
    result: '27 new bookings from one reel',
    quote:
      'Before and after clips of a scruffy doodle got 112K views. My calendar is booked three weeks out now. I wish I had taken this course two years ago.',
    tone: 'white',
  },
  {
    name: 'Owen Brooks',
    role: 'Real estate agent',
    place: 'Phoenix, AZ',
    result: '3 listings sold faster',
    quote:
      'Walkthrough reels shot on my iPhone beat the pro photographer videos I used to pay for. Sellers keep asking how I do it. I just point them to the course.',
    tone: 'pink',
  },
]

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Learn the craft at your own pace.',
    price: 79,
    was: 129,
    features: [
      `${TOTAL_LESSONS} video lessons (${TOTAL_HOURS}+ hours)`,
      'Lifetime access and free updates',
      'Phone gear cheat sheet',
      'Hook swipe file with 120 openers',
      'Works on any phone or laptop',
    ],
    excluded: ['Live Q&A sessions', 'Feedback on your reels'],
  },
  {
    id: 'creator',
    name: 'Creator',
    tagline: 'Our most popular way to learn and get unstuck.',
    price: 149,
    was: 249,
    popular: true,
    features: [
      'Everything in Starter',
      '30 plug-and-play CapCut templates',
      '8 weekly live Q&A calls',
      'Private community of 12,000+ creators',
      'Written feedback on 2 of your reels',
      '30-day content calendar (Notion)',
    ],
    excluded: ['1:1 coaching calls'],
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'For serious creators and client work.',
    price: 299,
    was: 499,
    features: [
      'Everything in Creator',
      'Two 30-minute 1:1 coaching calls',
      'Unlimited reel reviews for 90 days',
      'Brand-deal pitch kit and rate card',
      'Certificate of completion',
      'Priority support within 24 hours',
    ],
    excluded: [],
  },
]

export const FAQS = [
  {
    q: 'Do I need a fancy phone or any extra gear?',
    a: 'No. Any phone from the last 4 or 5 years shoots video that is more than good enough. The gear list in module 1 shows you a few $25 upgrades (like a tripod and a clip mic) but they are optional, not required.',
  },
  {
    q: "I've never edited a video. Is that okay?",
    a: 'That is exactly who this course is built for. In lesson 1 of the editing module you will cut and publish a complete edit in about 15 minutes, using free apps on your phone.',
  },
  {
    q: 'How much time do I need each week?',
    a: 'Most students spend 3 to 4 hours a week: about an hour of lessons and the rest practicing. Every lesson is 5 to 15 minutes, so you can fit them around work, school or kids.',
  },
  {
    q: 'Does it work for both iPhone and Android?',
    a: 'Yes. Everything is taught with free tools that run on both iOS and Android. When a feature differs between the two, we show both side by side.',
  },
  {
    q: 'How long do I get access?',
    a: 'Forever. You pay once, get lifetime access, and receive every future update and new lesson at no extra cost.',
  },
  {
    q: 'What if it is not for me?',
    a: 'You are covered by our 30-day money-back guarantee. Finish module 1, and if you do not feel the course is worth it, email us and we will refund every dollar. No forms, no hoops.',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Yes. Every plan can be split into 3 equal monthly payments at checkout, with no extra fees.',
  },
  {
    q: 'Will this work for my niche?',
    a: 'Short-form video works for restaurants, real estate, fitness, beauty, crafts, coaching and plenty more. The lessons use examples from more than 20 niches, and the community is full of people just like you.',
  },
]

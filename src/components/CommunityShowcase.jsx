import { useState } from 'react'
import { 
  Users, 
  ExternalLink, 
  Trophy, 
  Globe, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react'
import { GithubIcon, InstagramIcon, DiscordIcon } from './Icons'

export default function CommunityShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      img: '/CarouselMaker_ImageSplitter_1.png',
      title: 'Falcons Hackathon Community',
      caption: 'Student-led engineering community at NMIET Pune fostering algorithmic coding and high-performance building.'
    },
    {
      img: '/CarouselMaker_ImageSplitter_2.png',
      title: 'Harness Engineering in Practice',
      caption: 'Moving from informal vibe-coding into verifiable, enterprise-grade AI agent orchestration.'
    },
    {
      img: '/CarouselMaker_ImageSplitter_3.png',
      title: 'Autonomous Hackathon Teams',
      caption: 'Empowering multi-disciplinary teams to build, test, and ship complete products within 36-hour hackathons.'
    },
    {
      img: '/3.png',
      title: 'Engineering Culture & Open Source',
      caption: 'Built by students, open-sourced for the global developer ecosystem under the MIT License.'
    }
  ]

  const links = [
    {
      name: 'GitHub Organization',
      href: 'https://github.com/Falcon-s-Hackathon-Community/Falness',
      desc: 'Open-source repositories, templates & hackathon kits',
      icon: GithubIcon
    },
    {
      name: 'Discord Server',
      href: 'https://discord.gg/j8XvwsSUQB',
      desc: 'Active developer discussions, voice rooms & hackathons',
      icon: DiscordIcon
    },
    {
      name: 'WhatsApp Community',
      href: 'https://chat.whatsapp.com/IE7GiUPHNyt8nA2CkzN43P',
      desc: 'Instant event announcements & team matchmaking',
      icon: Users
    },
    {
      name: 'Instagram (@thefalcons.in_)',
      href: 'https://www.instagram.com/thefalcons.in_/',
      desc: 'Behind-the-scenes, workshop highlights & updates',
      icon: InstagramIcon
    },
    {
      name: 'GDG on Campus NMIET',
      href: 'https://gdg.community.dev/gdg-on-campus-nutan-maharashtra-institute-of-engineering-and-technology-pune-india/',
      desc: 'Google Developer Group student chapter & events',
      icon: Globe
    }
  ]

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="community" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <Trophy className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Falcons Community &bull; NMIET Pune</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            Built by Builders, for Builders
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            Falness originated from the Falcons Hackathon Community at Nutan Maharashtra Institute of Engineering and Technology (NMIET), Pune. We believe rigorous engineering disciplines like Harness Engineering should be accessible to all students.
          </p>
        </div>

        {/* Brand Asset Carousel */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-2xl liquid-glass overflow-hidden shadow-2xl">
            {/* Image Slide */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={slides[activeSlide].img}
                alt={slides[activeSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
                onError={(e) => {
                  e.target.src = '/og-image.png'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left space-y-2">
                <span className="rounded bg-black/60 border border-white/20 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-white">
                  Slide {activeSlide + 1} of {slides.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed font-body">
                  {slides[activeSlide].caption}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-black/60 p-2.5 text-white backdrop-blur-md hover:bg-black/90 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-black/60 p-2.5 text-white backdrop-blur-md hover:bg-black/90 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Slide Dots (Architectural dashes) */}
            <div className="flex items-center justify-center gap-2 py-3 border-t border-[var(--border-glass)] bg-[var(--glass-bg)]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-sm transition-all ${
                    activeSlide === i ? 'w-6 bg-[var(--text-primary)]' : 'w-2 bg-[var(--text-muted)] hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Community Links & Channels Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-5 liquid-glass hover:border-[var(--border-glass-hover)] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading group-hover:opacity-90">
                    {link.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-glass)] text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1 group-hover:text-[var(--text-primary)]">
                  <span>Connect with Falcons</span>
                  <span>&rarr;</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

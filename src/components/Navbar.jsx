import { useState, useRef, useEffect } from 'react'
import { 
  Terminal, 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon, 
  Cpu, 
  Workflow, 
  Users, 
  ShieldCheck, 
  Server, 
  FolderGit2, 
  Trophy,
  ExternalLink
} from 'lucide-react'
import { GithubIcon } from './Icons'
import { useTheme } from '../context/ThemeContext'

export default function Navbar({ onOpenPromptModal }) {
  const { toggleTheme, isDark } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const dropdowns = {
    framework: {
      label: 'Framework',
      items: [
        {
          title: 'What is Harness Engineering?',
          desc: 'The core horse & harness paradigm, failure modes of vibe-coding, and the 4 Universal Laws.',
          href: '#guide',
          icon: Cpu
        },
        {
          title: '6-Stage Autonomous Lifecycle',
          desc: 'Boot sequence, bounded discovery, curation, scaffolding, parallel roles, and verification.',
          href: '#pipeline',
          icon: Workflow
        },
        {
          title: 'Skinny Agents, Fat Roles',
          desc: 'File allow-lists, forbidden boundaries, and role contracts for Tech Lead, Builder, and QA.',
          href: '#roles',
          icon: Users
        }
      ]
    },
    specifications: {
      label: 'Specifications',
      items: [
        {
          title: 'Zero-Trust MCP Hub',
          desc: 'Model Context Protocol tool tiers, dynamic .mcp.json generator, and live server catalog.',
          href: '#mcp',
          icon: Server
        },
        {
          title: 'Quality Gates (G0–G5)',
          desc: 'Deterministic exit-code verification: linting, types, unit tests, Playwright, and SAST.',
          href: '#gates',
          icon: ShieldCheck
        },
        {
          title: 'Benchmark Standards',
          desc: 'Architectural alignment with Google Antigravity & Anthropic Claude Code.',
          href: '#guide',
          icon: Terminal
        }
      ]
    },
    resources: {
      label: 'Resources',
      items: [
        {
          title: 'Application Starter Template',
          desc: 'How to drop the docs/ folder into any existing codebase and start in under 60 seconds.',
          href: '#template',
          icon: FolderGit2
        },
        {
          title: 'Falcons Community',
          desc: 'Student-led hackathon community at NMIET Pune building open-source developer tooling.',
          href: '#community',
          icon: Trophy
        },
        {
          title: 'GitHub Repository',
          desc: 'Official source code, PRs, issue tracker, and contribution guide.',
          href: 'https://github.com/Falcon-s-Hackathon-Community/Falness',
          external: true,
          icon: GithubIcon
        }
      ]
    }
  }

  const handleDropdownToggle = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key))
  }

  return (
    <header 
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-[var(--border-glass)] bg-[var(--glass-bg)] backdrop-blur-2xl transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] overflow-hidden shadow-sm group-hover:border-[var(--border-glass-hover)] transition-all">
              <img 
                src="/favicon.png" 
                alt="Falcons Logo" 
                className="h-6 w-6 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }} 
              />
              <span className="hidden text-xs font-bold font-mono text-[var(--text-primary)]">F</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-[var(--text-primary)] font-heading">
                  FALNESS
                </span>
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded border border-[var(--border-glass)] bg-[var(--glass-card)] text-[var(--text-secondary)]">
                  v2.0
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-wide text-[var(--text-muted)]">
                Falcons Harness Engineering
              </span>
            </div>
          </a>
        </div>

        {/* Dynamic Desktop Dropdowns */}
        <nav className="hidden md:flex items-center gap-1">
          {Object.entries(dropdowns).map(([key, dropdown]) => {
            const isOpen = activeDropdown === key
            return (
              <div key={key} className="relative">
                <button
                  onClick={() => handleDropdownToggle(key)}
                  onMouseEnter={() => setActiveDropdown(key)}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                    isOpen 
                      ? 'bg-[var(--glass-bg-hover)] text-[var(--text-primary)] border border-[var(--border-glass)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-medium">{dropdown.label}</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu (Liquid Glass Panel) */}
                {isOpen && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 mt-2 w-80 rounded-xl liquid-glass-dropdown p-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                  >
                    <div className="space-y-1">
                      {dropdown.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-[var(--glass-bg-hover)] group"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border-glass)] bg-[var(--glass-card)] text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] font-heading">
                                <span>{item.title}</span>
                                {item.external && <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />}
                              </div>
                              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Actions & Liquid Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg liquid-button text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-300 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* GitHub Repo */}
          <a
            href="https://github.com/Falcon-s-Hackathon-Community/Falness"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg liquid-button text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            title="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Starter Prompt CTA */}
          <button
            onClick={onOpenPromptModal}
            className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold font-heading liquid-sheen bg-[var(--text-primary)] text-[var(--bg-page)] shadow-sm hover:opacity-90 transition-all"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Starter Prompt</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg liquid-button text-[var(--text-secondary)]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 liquid-button text-[var(--text-secondary)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-glass)] bg-[var(--glass-dropdown)] px-4 pt-3 pb-6 space-y-4 backdrop-blur-2xl">
          {Object.entries(dropdowns).map(([key, dropdown]) => (
            <div key={key} className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold px-2">
                {dropdown.label}
              </div>
              <div className="space-y-1">
                {dropdown.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-xs text-[var(--text-primary)] hover:bg-[var(--glass-bg-hover)]"
                    >
                      <Icon className="h-4 w-4 text-[var(--text-muted)]" />
                      <span className="font-heading font-medium">{item.title}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-[var(--border-glass)] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenPromptModal()
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-page)] px-3 py-2 text-xs font-semibold font-heading"
            >
              <Terminal className="h-4 w-4" />
              <span>Copy Starter Prompt</span>
            </button>
            <a
              href="https://github.com/Falcon-s-Hackathon-Community/Falness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg liquid-button px-3 py-2 text-xs font-medium text-[var(--text-primary)]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

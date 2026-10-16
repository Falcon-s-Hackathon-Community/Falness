import { ExternalLink, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-secondary)] font-body transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)]">
                <img 
                  src="/favicon.png" 
                  alt="Falcons Logo" 
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <div>
                <span className="text-base font-bold text-[var(--text-primary)] tracking-tight font-heading">FALNESS</span>
                <span className="block text-[11px] font-mono text-[var(--text-muted)]">Falcons Harness Engineering</span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Open-source autonomous AI agent harness framework benchmarked against Google Antigravity & Anthropic Claude Code.
            </p>

            <div className="text-xs font-mono text-[var(--text-muted)]">
              MIT License &bull; Open Source 2026
            </div>
          </div>

          {/* Architecture Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Framework
            </h4>
            <ul className="space-y-2 text-xs font-body">
              <li>
                <a href="#guide" className="hover:text-[var(--text-primary)] transition-colors">
                  What is Harness Engineering?
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[var(--text-primary)] transition-colors">
                  6-Stage Autonomous Lifecycle
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-[var(--text-primary)] transition-colors">
                  Skinny Agents, Fat Roles
                </a>
              </li>
              <li>
                <a href="#mcp" className="hover:text-[var(--text-primary)] transition-colors">
                  Model Context Protocol (MCP) Hub
                </a>
              </li>
              <li>
                <a href="#gates" className="hover:text-[var(--text-primary)] transition-colors">
                  Deterministic Quality Gates (G0–G5)
                </a>
              </li>
            </ul>
          </div>

          {/* Template & Specs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Template & Specs
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#template" className="hover:text-[var(--text-primary)] transition-colors">
                  docs/StarterPrompt.md
                </a>
              </li>
              <li>
                <a href="#template" className="hover:text-[var(--text-primary)] transition-colors">
                  docs/raw.md (Problem Spec)
                </a>
              </li>
              <li>
                <a href="#template" className="hover:text-[var(--text-primary)] transition-colors">
                  docs/prompt.md (Master Prompt)
                </a>
              </li>
              <li>
                <a href="#template" className="hover:text-[var(--text-primary)] transition-colors">
                  docs/harness.md (Execution Blueprint)
                </a>
              </li>
              <li>
                <a href="#mcp" className="hover:text-[var(--text-primary)] transition-colors">
                  docs/Mcp.md (Tool Catalog)
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Falcons Community
            </h4>
            <ul className="space-y-2 text-xs font-body">
              <li>
                <a
                  href="https://github.com/Falcon-s-Hackathon-Community/Falness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/j8XvwsSUQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                >
                  <span>Discord Community</span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/IE7GiUPHNyt8nA2CkzN43P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp Community</span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thefalcons.in_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram @thefalcons.in_</span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href="https://thefalcons.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                >
                  <span>Falcons Official Site</span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-glass)] flex flex-wrap items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <div className="flex items-center gap-2">
            <span>Falcons Community &bull; NMIET Pune</span>
            <span>&bull;</span>
            <span>Parent Vite Root Directory Maintained (No Redundant Sub-Apps)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-mono text-[11px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

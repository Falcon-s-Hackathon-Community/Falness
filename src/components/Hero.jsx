import { useState } from 'react'
import { 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  GitFork, 
  FileCode2, 
  Layers,
  ChevronRight,
  Maximize2
} from 'lucide-react'

export default function Hero({ onOpenPromptModal }) {
  const [copied, setCopied] = useState(false)
  const [activePlatform, setActivePlatform] = useState('claude')

  const starterPromptText = `Read docs/prompt.md in full and follow it exactly — it is your operating manual.
Start with its §1 Boot Sequence: scan docs/raw.md (problem statement) and docs/harness.md.
If raw.md is blank, interview me (§2) before doing anything else. Ask, don't guess.`

  const platformPrompts = {
    claude: {
      tool: 'Claude Code',
      cmd: 'claude',
      arg: `claude "Read docs/prompt.md in full and execute §1 Boot Sequence"`
    },
    antigravity: {
      tool: 'Google Antigravity',
      cmd: 'agy',
      arg: `agy --prompt "Read docs/prompt.md in full and follow boot sequence against docs/raw.md"`
    },
    cursor: {
      tool: 'Cursor / Windsurf',
      cmd: 'composer',
      arg: `@docs/prompt.md Execute §1 Boot Sequence. Read @docs/raw.md and verify harness state.`
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[var(--border-glass)]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-architectural pointer-events-none opacity-40" />

      {/* Ambient Liquid Specular Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-indigo-500/[0.04] dark:bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Metadata Strip (No pills/capsules) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs text-[var(--text-secondary)] backdrop-blur-xl shadow-sm">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            <span className="font-mono text-[var(--text-muted)]">FALCONS</span>
            <span className="text-[var(--text-muted)]">/</span>
            <span className="text-[var(--text-primary)] font-medium font-heading">NMIET Pune</span>
          </div>

          <a 
            href="#guide" 
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-glass-hover)] transition-all"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Antigravity & Claude Code Standard</span>
            <ChevronRight className="h-3 w-3 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] font-heading">
            The LLM is the Horse. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--text-muted)]">
              Falness is the Harness.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-body">
            Transition from fragile vibe-coding entropy to bounded, deterministic software engineering. Falness delivers declarative disk state, skinny agents, fat role allow-lists, zero-trust MCP tools, and exit-code verified quality gates.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#template"
            className="flex items-center gap-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-page)] px-6 py-3 text-sm font-semibold font-heading shadow-md hover:opacity-90 liquid-sheen transition-all"
          >
            <FileCode2 className="h-4 w-4" />
            <span>Adopt Template in 60s</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#guide"
            className="flex items-center gap-2 rounded-lg liquid-button px-5 py-3 text-sm font-medium text-[var(--text-primary)] font-heading"
          >
            <Cpu className="h-4 w-4" />
            <span>How Harness Engineering Works</span>
          </a>

          <a
            href="https://github.com/Falcon-s-Hackathon-Community/Falness"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg liquid-button px-4 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <GitFork className="h-4 w-4" />
            <span>Fork Repo</span>
          </a>
        </div>

        {/* Liquid Glass Interactive Terminal */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--glass-card)] shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-glass)] bg-[var(--glass-bg)] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                  <Terminal className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                  <span>falness // boot-sequence.terminal</span>
                </div>
              </div>

              {/* Platform Selector */}
              <div className="flex items-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] p-0.5 mt-2 sm:mt-0">
                {['claude', 'antigravity', 'cursor'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setActivePlatform(platform)}
                    className={`rounded-md px-2.5 py-1 text-[11px] font-mono transition-all ${
                      activePlatform === platform
                        ? 'bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold shadow-sm'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {platformPrompts[platform].tool}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs sm:text-sm">
              <div className="flex items-center justify-between text-[var(--text-muted)] pb-3 border-b border-[var(--border-glass)]">
                <span className="text-[11px] tracking-wider uppercase font-semibold text-[var(--text-secondary)]">
                  Universal Agent Starter Prompt (Pass to LLM)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenPromptModal}
                    className="flex items-center gap-1 rounded-md liquid-button px-2.5 py-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    title="Open Expand Modal"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>Expand</span>
                  </button>
                  <button
                    onClick={() => handleCopy(starterPromptText)}
                    className="flex items-center gap-1.5 rounded-md liquid-button px-3 py-1 text-xs text-[var(--text-primary)] font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Code display */}
              <div className="mt-4 space-y-2.5 text-[var(--text-primary)] leading-relaxed">
                <p className="text-[var(--text-muted)]">
                  <span className="text-emerald-500 font-bold">$</span> {platformPrompts[activePlatform].arg}
                </p>
                <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--glass-bg)] p-4 text-[var(--text-primary)] whitespace-pre-wrap select-all font-mono text-xs leading-relaxed">
                  {starterPromptText}
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 pt-3 border-t border-[var(--border-glass)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Boot Sequence §1 &bull; Idempotent Reconcile v2 &bull; Disk State Ready</span>
                </div>
                <div className="font-mono text-[11px]">
                  Target: <code>harness/state/state.json</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars (Clean Architectural Cards, No Capsules) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl liquid-glass p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)] mb-3">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Declarative Disk State</h3>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Never lose context. State lives on disk in <code>state.json</code> and git commits. Restart sessions without context degradation.
            </p>
          </div>

          <div className="rounded-xl liquid-glass p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)] mb-3">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Skinny Agents, Fat Roles</h3>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Agent pointers stay &le; 40 lines. Heavy rules, schemas, and file allow-lists live in portable markdown contracts.
            </p>
          </div>

          <div className="rounded-xl liquid-glass p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)] mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Deterministic Gates (G0–G5)</h3>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Never rely on verbal AI claims. Linters, typecheckers, unit test suites, and headless Playwright runs decide with exit code 0.
            </p>
          </div>

          <div className="rounded-xl liquid-glass p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)] mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Zero-Trust MCP Tiering</h3>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Least-privilege tool allocation. Verified live documentation via Context7, sandboxed databases, and write guards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

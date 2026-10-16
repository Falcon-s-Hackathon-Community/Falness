import { useState } from 'react'
import { 
  Workflow, 
  Terminal, 
  FileText, 
  ShieldCheck 
} from 'lucide-react'

export default function PipelineSection() {
  const [selectedStage, setSelectedStage] = useState(0)

  const stages = [
    {
      id: 'boot',
      step: '01',
      title: 'Boot & Auto-Reconcile',
      role: 'Orchestrator',
      mode: 'IDEMPOTENT RECONCILE',
      purpose: 'Self-heals the repository before any code is generated or executed.',
      inputs: ['docs/raw.md', 'harness/state/state.json', 'AGENTS.md'],
      outputs: ['harness/profile.yaml', '.mcp.json', 'harness/logs/session.log.md'],
      commands: ['python scripts/check_harness.py --json', 'git status --porcelain'],
      antigravityClaude: 'Antigravity reads workspace instructions and checks subagents; Claude Code runs `/init` or scans `.mcp.json` and project settings.',
      details: 'On every boot, the orchestrator inspects the file tree against the declared manifest. If an agent role or MCP tool is missing, it creates it. If hand-edited (DRIFTED), it requests human approval instead of overwriting.'
    },
    {
      id: 'discovery',
      step: '02',
      title: 'Discovery & Interview',
      role: 'Tech Lead / Facilitator',
      mode: 'MODE A: DISCOVERY',
      purpose: 'Interviews the human if requirements are ambiguous. Never invents business logic.',
      inputs: ['docs/raw.md (User problem statement)'],
      outputs: ['Updated docs/raw.md (Clarified specification)'],
      commands: ['ask_question (Antigravity interactive modal)', 'claude interview prompts'],
      antigravityClaude: 'Antigravity triggers interactive multiple-choice questions; Claude Code asks concise clarifying questions in the terminal before touching files.',
      details: 'If raw.md contains placeholders (<describe here>, TODO), the agent enters discovery mode. It asks a maximum of 3 sharp, decision-oriented questions. Once confirmed, it proceeds to Curation.'
    },
    {
      id: 'curation',
      step: '03',
      title: 'Architectural Curation',
      role: 'Architect / Tech Lead',
      mode: 'MODE B: CURATION',
      purpose: 'Freezes data models, interface schemas, and task dependency graphs.',
      inputs: ['docs/raw.md', 'Context7 live library docs'],
      outputs: ['docs/harness.md', 'harness/artifacts/<TASK-ID>/spec.md'],
      commands: ['npx -y @upstash/context7-mcp', 'git add docs/harness.md'],
      antigravityClaude: 'Context7 MCP fetches verified library schemas (e.g. React 19, Vite, Tailwind v4); prevents outdated pre-training knowledge from leaking in.',
      details: 'The Architect defines strict interface contracts, database schemas, and API payloads before code is written. No developer role is permitted to write implementation code until the architecture artifact is frozen.'
    },
    {
      id: 'scaffold',
      step: '04',
      title: 'Scaffold & Lane Binding',
      role: 'Orchestrator & Lead',
      mode: 'MODE C: SCAFFOLD',
      purpose: 'Generates directory skeletons, typing stubs, and unit test fixtures.',
      inputs: ['docs/harness.md'],
      outputs: ['src/ stubs', 'tests/ stubs', 'harness/roles/*.md'],
      commands: ['bun test --bail', 'tsc --noEmit'],
      antigravityClaude: 'Antigravity defines specialized subagents (Builder, Tester); Claude Code sets up project-level task markers.',
      details: 'Generates component stubs, TypeScript interfaces, and failing unit tests (TDD) that define what "done" looks like for the next stage.'
    },
    {
      id: 'execute',
      step: '05',
      title: 'Parallel Role Execution',
      role: 'Builder & Designer',
      mode: 'MODE D: EXECUTE',
      purpose: 'Implements functional code strictly within allowlisted folders.',
      inputs: ['harness/artifacts/<TASK-ID>/spec.md', 'Context7 doc snippets'],
      outputs: ['src/ components', 'src/ styles', 'src/ logic'],
      commands: ['bun run dev', 'playwright screenshot'],
      antigravityClaude: 'Builder lane uses file write allowlists; any attempted write to `docs/` or `harness/` is blocked by the path guard.',
      details: 'The Builder writes code satisfying the unit tests. If UI is involved, Playwright ARIA snapshots and Chrome DevTools traces ensure accessibility and responsiveness.'
    },
    {
      id: 'gates',
      step: '06',
      title: 'Deterministic Quality Gates',
      role: 'QA Engineer & Security Officer',
      mode: 'VERIFICATION (G0–G5)',
      purpose: 'Blocks PR and release until linters, unit tests, and SAST exit code 0.',
      inputs: ['Full codebase diff', 'harness/tools/registry.yaml'],
      outputs: ['harness/artifacts/<TASK-ID>/evidence.json', 'G5 sign-off'],
      commands: ['bun run lint', 'bun test', 'semgrep mcp', 'playwright test'],
      antigravityClaude: 'Deterministic terminal execution; failure automatically trips circuit breakers before thrashing occurs.',
      details: 'All gates (G0 Spec, G1 Types/Lints, G2 Unit Tests, G3 Playwright E2E, G4 Semgrep Security) must exit 0. Human provides final G5 sign-off.'
    }
  ]

  const current = stages[selectedStage]

  return (
    <section id="pipeline" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <Workflow className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">State Machine & Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            The 6-Stage Autonomous Lifecycle
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            How Falness steers an AI coding agent through disciplined software engineering. Click any stage to inspect its role, boundaries, inputs, and deterministic exit criteria.
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(idx)}
              className={`rounded-xl p-3.5 text-left transition-all ${
                selectedStage === idx
                  ? 'liquid-glass border-[var(--text-primary)] shadow-md'
                  : 'liquid-button text-[var(--text-secondary)]'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                <span className={selectedStage === idx ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-muted)]'}>
                  STAGE {stage.step}
                </span>
                {selectedStage === idx && (
                  <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
                )}
              </div>
              <div className="text-xs font-bold truncate text-[var(--text-primary)] font-heading">
                {stage.title}
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] truncate mt-1">
                {stage.role}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="mt-8 rounded-2xl liquid-glass p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-glass)]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-[var(--text-primary)] text-[var(--bg-page)] px-2 py-0.5 font-mono font-bold text-xs">
                  STAGE {current.step}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {current.mode}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading">
                {current.title}
              </h3>
            </div>

            <div className="rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
              Active Role: <span className="text-[var(--text-primary)] font-semibold font-heading">{current.role}</span>
            </div>
          </div>

          {/* Details */}
          <div className="py-6 border-b border-[var(--border-glass)]">
            <p className="text-base text-[var(--text-secondary)] leading-relaxed font-body">
              {current.details}
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Inputs & Outputs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <FileText className="h-3.5 w-3.5" />
                <span>Inputs & Artifacts</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="text-[var(--text-muted)] text-[11px]">Inputs:</div>
                {current.inputs.map((inItem, i) => (
                  <div key={i} className="rounded border border-[var(--border-glass)] bg-[var(--glass-bg)] px-2.5 py-1 text-[var(--text-secondary)]">
                    &rarr; {inItem}
                  </div>
                ))}
                <div className="text-[var(--text-muted)] text-[11px] pt-1">Outputs:</div>
                {current.outputs.map((outItem, i) => (
                  <div key={i} className="rounded border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-emerald-500 font-medium">
                    &bull; {outItem}
                  </div>
                ))}
              </div>
            </div>

            {/* Commands */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <Terminal className="h-3.5 w-3.5" />
                <span>Deterministic Commands</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                {current.commands.map((cmd, i) => (
                  <div key={i} className="rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] text-[var(--glass-terminal-text)] p-2">
                    <span className="text-emerald-400">$</span> {cmd}
                  </div>
                ))}
                <div className="text-[11px] text-[var(--text-muted)] leading-relaxed pt-1">
                  Enforces strict exit code 0 before task transition is approved.
                </div>
              </div>
            </div>

            {/* Antigravity & Claude Code Standard */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>Antigravity & Claude Code</span>
              </div>
              <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--glass-bg)] p-3.5 text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                {current.antigravityClaude}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react'

export default function GuideSection() {
  const [activeLaw, setActiveLaw] = useState(0)

  const laws = [
    {
      num: '01',
      title: 'State Lives on Disk, Not in Context',
      summary: 'Context windows are volatile, expensive, and lossy. Treat the LLM as stateless compute.',
      description: 'Never rely on the model "remembering" what happened 3 turns ago. Falness mandates that all state lives on disk in `harness/state/state.json`, git commit logs, and markdown manifests. When context is reset or a different model is booted, the agent reads disk state and resumes in under 2 seconds without context loss.'
    },
    {
      num: '02',
      title: 'Skinny Agents, Fat Roles',
      summary: 'Keep agent definitions minimal (≤ 40 lines). Put all heavy rules in markdown role specs.',
      description: 'Vendor lock-in happens when prompt logic is embedded into IDE-specific agent configs. Falness defines thin agent pointers that read `harness/roles/<role>.md`. This keeps the harness 100% portable across Google Antigravity, Anthropic Claude Code, Cursor, Codex, and terminal scripts.'
    },
    {
      num: '03',
      title: 'Artifacts are the Contract',
      summary: 'Every phase must emit a structured artifact on disk. No artifact = phase never happened.',
      description: 'An agent cannot simply declare "I designed the database schema". It must write `harness/artifacts/<TASK-ID>/architecture.md` containing verifiable types and contracts. Downstream roles (e.g. Builder) read that file as their immutable specification.'
    },
    {
      num: '04',
      title: 'Deterministic Checks Over Model Opinions',
      summary: '"It works for me" is not evidence. Only automated exit codes decide if code passes.',
      description: 'Statistical token prediction is fundamentally non-deterministic. A model will happily hallucinate that tests passed. In Falness, quality is guarded by deterministic CLI tools: `tsc --noEmit`, ESLint, unit test runners, Semgrep SAST, and Playwright headless runs. Code only moves forward if the check exits code 0.'
    }
  ]

  const comparisonRows = [
    {
      dimension: 'State Management',
      vibe: 'Volatile context window; lost when context exceeds limit or session restarts.',
      falness: 'Declarative disk state in `state.json` & git; instant self-healing resume.'
    },
    {
      dimension: 'File Boundaries',
      vibe: 'Unbounded; the agent modifies random files across the entire codebase without restriction.',
      falness: 'Role allow-lists; Builder can only write `src/`, Tester can only write `tests/`.'
    },
    {
      dimension: 'API Knowledge',
      vibe: 'Hallucinates nonexistent APIs from pre-training memory; uses outdated versions.',
      falness: 'Context7 MCP provides version-pinned, live official documentation directly.'
    },
    {
      dimension: 'Definition of "Done"',
      vibe: 'Subjective: the agent says "I have fixed the issue" with zero proof.',
      falness: 'Deterministic Quality Gates (G0–G5): 100% pass on linters, types, tests, and SAST.'
    },
    {
      dimension: 'Error Recovery',
      vibe: 'Circular thrashing: agent tries the same broken patch 10 times until context crashes.',
      falness: 'Circuit Breakers: trips at threshold (max 3 retries) and safely requests human intervention.'
    },
    {
      dimension: 'Multi-Role Team',
      vibe: 'Single chaotic prompt trying to be architect, coder, tester, and reviewer at once.',
      falness: 'Specialized Fat Roles (Tech Lead, Builder, QA, Security, Scribe) with strict handoffs.'
    }
  ]

  return (
    <section id="guide" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Core Engineering Theory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            What is Harness Engineering?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            Harness Engineering is the discipline of structuring the runtime bounds, state machines, tool tiers, and quality gates surrounding an LLM agent so that autonomous output is verifiable, repeatable, and production-ready.
          </p>
        </div>

        {/* The Core Metaphor: The Horse & The Harness */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Unharnessed / Vibe Coding */}
          <div className="rounded-2xl liquid-glass p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-glass)] pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-500">
                  The Failure Mode
                </span>
                <span className="rounded-md border border-rose-500/20 bg-rose-500/10 px-2 py-0.5 text-[11px] font-mono text-rose-500">
                  Vibe Coding Entropy
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                The Unharnessed LLM
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                Frontier LLMs (Claude 3.7, Gemini 2.5/3, GPT-4.5) are like high-strung wild horses: fast, powerful, and capable. But without an engineering harness:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-body">
                <li className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Rewrites working modules without checking existing contract assumptions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Invents hallucinated packages and non-existent framework parameters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Exhausts context window and discards previous architectural constraints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Claims "Fixed!" without running linters, tests, or compilers.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-glass)] text-xs font-mono text-rose-500/90">
              Outcome: Codebases that degrade and collapse after 200 lines of prompt context.
            </div>
          </div>

          {/* Harnessed / Falness */}
          <div className="rounded-2xl liquid-glass p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-glass)] pb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500">
                  The Discipline
                </span>
                <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-500">
                  Falness Standard
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                The Harnessed Pipeline
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                Falness wraps the raw horsepower of the model with an engineered steering mechanism, telemetry, guardrails, and deterministic brakes:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] font-body">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Steering:</strong> Boot sequence self-heals repo state and executes step-by-step milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Bridle & Bounds:</strong> Strict file allow-lists prevent unauthorized writes outside lane.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Ground Truth:</strong> Context7 MCP streams version-pinned, live official documentation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Emergency Brakes:</strong> Deterministic Gates (G0–G5) and circuit breakers prevent infinite thrashing.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-glass)] text-xs font-mono text-emerald-500">
              Outcome: Predictable, self-healing, auditable software delivery across sprints.
            </div>
          </div>
        </div>

        {/* The 4 Universal Laws of Harness Engineering */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading">
              The 4 Universal Laws of Harness Engineering
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 font-body">
              Synthesized from Rob Earlam, OpenAI research, Google Antigravity, and Anthropic Claude Code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {laws.map((law, idx) => (
              <button
                key={law.num}
                onClick={() => setActiveLaw(idx)}
                className={`text-left rounded-xl p-5 transition-all ${
                  activeLaw === idx
                    ? 'liquid-glass border-[var(--text-primary)] shadow-md'
                    : 'liquid-button text-[var(--text-secondary)]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
                  <span>LAW {law.num}</span>
                  {activeLaw === idx && <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />}
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug font-heading">
                  {law.title}
                </h4>
                <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-3 font-body">
                  {law.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Active Law Expanded Card */}
          <div className="mt-6 rounded-2xl liquid-glass p-6 sm:p-8">
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] mb-3">
              <span className="rounded bg-[var(--text-primary)] text-[var(--bg-page)] px-2 py-0.5 font-bold font-mono">
                LAW {laws[activeLaw].num}
              </span>
              <span>ARCHITECTURAL DIRECTIVE</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
              {laws[activeLaw].title}
            </h4>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-body">
              {laws[activeLaw].description}
            </p>
          </div>
        </div>

        {/* Head-to-Head Comparison Matrix */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading">
              Head-to-Head: Vibe Coding vs. Falness
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 font-body">
              Why professional engineering teams replace raw prompt chats with a bounded harness.
            </p>
          </div>

          <div className="rounded-2xl liquid-glass overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[var(--border-glass)] bg-[var(--glass-bg)] font-mono text-[var(--text-muted)] text-xs">
                  <th className="py-3.5 px-4 sm:px-6 w-1/4">Dimension</th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/8 text-rose-500 font-semibold">Raw / Vibe Coding</th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/8 text-emerald-500 font-semibold">Falness Framework</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-glass)] font-body">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[var(--glass-bg-hover)] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[var(--text-primary)] whitespace-nowrap font-heading">
                      {row.dimension}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[var(--text-secondary)] leading-relaxed">
                      {row.vibe}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[var(--text-primary)] leading-relaxed font-medium">
                      {row.falness}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

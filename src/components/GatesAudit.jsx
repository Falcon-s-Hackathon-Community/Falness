import { useState } from 'react'
import { 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react'

export default function GatesAudit() {
  const [isRunning, setIsRunning] = useState(false)
  const [activeStep, setActiveStep] = useState(6)
  const [logs, setLogs] = useState([
    '[INIT] Falness Deterministic Gate Runner v2.0 initialized.',
    '[G0:SPEC] Checking manifest, docs/raw.md, and docs/harness.md... PASS (exit 0)',
    '[G1:LINT] Running tsc --noEmit and eslint on 28 files... 0 errors, 0 warnings. PASS (exit 0)',
    '[G2:UNIT] Executing 42 unit and contract test suites... 42 passed, 0 failed. PASS (exit 0)',
    '[G3:E2E] Running Playwright headless suite across Chromium, Firefox, WebKit... PASS (exit 0)',
    '[G4:SAST] Semgrep scan: 0 security sinks, 0 exposed secrets, 0 supply-chain flaws. PASS (exit 0)',
    '[G5:HUMAN] Verification artifact written to harness/artifacts/T-042/evidence.json. Ready for review.',
    '[SUMMARY] All 6 Deterministic Quality Gates PASSED. Code is verifiable and production-ready.'
  ])

  const gates = [
    {
      id: 'G0',
      name: 'G0 — Spec & Prerequisite Gate',
      owner: 'Orchestrator',
      command: 'python scripts/check_harness.py --json',
      criteria: 'raw.md non-blank, harness.md approved, .mcp.json syntax valid, state.json aligned.',
      status: 'PASS',
      failureAction: 'Halt boot; switch to MODE A (Discovery) to interview human.'
    },
    {
      id: 'G1',
      name: 'G1 — Static Analysis & Type Gate',
      owner: 'Builder & Tech Lead',
      command: 'tsc --noEmit && bun run lint',
      criteria: 'Zero TypeScript compiler errors, zero ESLint failures, parameter binding checks valid.',
      status: 'PASS',
      failureAction: 'Builder fixes syntax errors immediately within allow-list.'
    },
    {
      id: 'G2',
      name: 'G2 — Contract & Unit Test Gate',
      owner: 'Test Engineer',
      command: 'bun test --bail',
      criteria: '100% of unit tests and data contract fixtures exit with code 0.',
      status: 'PASS',
      failureAction: 'Revert offending diff; compare against architecture specification.'
    },
    {
      id: 'G3',
      name: 'G3 — Browser, ARIA & E2E Gate',
      owner: 'QA & Designer',
      command: 'npx playwright test --headless',
      criteria: 'Critical user journeys pass, ARIA accessibility tree intact, visual diff within 0.1% threshold.',
      status: 'PASS',
      failureAction: 'Inspect Playwright traces and video recordings; trip breaker if > 3 retries.'
    },
    {
      id: 'G4',
      name: 'G4 — SAST & Supply Chain Gate',
      owner: 'Security Officer',
      command: 'semgrep mcp && git secrets --scan',
      criteria: 'Zero secrets in diff, exact version pins verified (C-05), no unparameterized injection sinks.',
      status: 'PASS',
      failureAction: 'Absolute veto. Hard rejection of PR until vulnerability is neutralized.'
    },
    {
      id: 'G5',
      name: 'G5 — Human Sign-off & Release',
      owner: 'Human Engineering Lead',
      command: 'gh pr merge --squash',
      criteria: 'Human inspects evidence artifact in harness/artifacts/<TASK-ID>/ and grants release approval.',
      status: 'PASS',
      failureAction: 'Human rejects or requests architectural revisions.'
    }
  ]

  const handleSimulate = () => {
    if (isRunning) return
    setIsRunning(true)
    setActiveStep(0)
    setLogs(['[SIMULATION] Starting full deterministic quality gate audit...'])

    const stepMessages = [
      '[G0:SPEC] Verifying docs/raw.md, docs/harness.md, and .mcp.json... PASS (exit 0)',
      '[G1:LINT] Running typecheck and static analysis across project... PASS (exit 0)',
      '[G2:UNIT] Executing unit tests and contract suites... 42 passed (exit 0)',
      '[G3:E2E] Running headless Playwright cross-browser tests & ARIA snapshots... PASS (exit 0)',
      '[G4:SAST] Semgrep SAST scan: 0 secrets detected, 0 injection vulnerabilities... PASS (exit 0)',
      '[G5:HUMAN] Verification artifact generated. Awaiting final human approval... DONE (exit 0)',
      '[COMPLETE] Quality verification passed. Exit code 0 confirmed.'
    ]

    let current = 0
    const interval = setInterval(() => {
      current++
      if (current <= 6) {
        setActiveStep(current)
        setLogs((prev) => [...prev, stepMessages[current - 1]])
      } else {
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 550)
  }

  return (
    <section id="gates" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Deterministic Verification Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            Quality Gates: G0 to G5
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            Code is never marked "complete" based on an LLM's verbal affirmation. Every release must pass an automated, deterministic gauntlet before human sign-off.
          </p>
        </div>

        {/* Live Simulator & Liquid Terminal */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl liquid-glass shadow-2xl overflow-hidden">
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-glass)] bg-[var(--glass-bg)] px-5 py-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <Terminal className="h-4 w-4 text-[var(--text-muted)]" />
              <span>gate-verifier --all --strict</span>
            </div>

            <button
              onClick={handleSimulate}
              disabled={isRunning}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold font-heading transition-all ${
                isRunning
                  ? 'bg-[var(--glass-bg)] text-[var(--text-muted)] cursor-not-allowed'
                  : 'bg-[var(--text-primary)] text-[var(--bg-page)] shadow-sm hover:opacity-90 liquid-sheen'
              }`}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Auditing Gates...' : 'Run Gate Audit Simulation'}</span>
            </button>
          </div>

          {/* Console Output */}
          <div className="p-5 sm:p-6 bg-[var(--glass-terminal)] font-mono text-xs sm:text-sm text-[var(--glass-terminal-text)] space-y-2 min-h-[220px]">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold shrink-0">&gt;</span>
                <span className={log.includes('PASS') || log.includes('PASSED') ? 'text-zinc-100 font-medium' : 'text-zinc-400'}>
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--border-glass)] bg-[var(--glass-bg)] px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
            <span>Deterministic Requirement: Exit Code 0</span>
            <span className="text-emerald-500 font-semibold font-heading">Status: VERIFIED SAFE</span>
          </div>
        </div>

        {/* 6 Quality Gates Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gates.map((gate, idx) => {
            const isPassed = idx < activeStep
            return (
              <div
                key={gate.id}
                className={`rounded-xl p-5 flex flex-col justify-between transition-all ${
                  isPassed 
                    ? 'liquid-glass border-[var(--border-glass-hover)] shadow-sm' 
                    : 'liquid-button opacity-60'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-[var(--glass-bg)] border border-[var(--border-glass)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--text-primary)]">
                      {gate.id}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{isPassed ? 'VERIFIED' : 'PENDING'}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">
                    {gate.name}
                  </h3>

                  <div className="rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] p-2 font-mono text-xs text-[var(--glass-terminal-text)]">
                    <span className="text-emerald-400">$</span> {gate.command}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                    <strong className="text-[var(--text-primary)] font-heading">Pass Criteria:</strong> {gate.criteria}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-glass)] text-[11px] font-mono text-[var(--text-muted)]">
                  <span>On Failure: </span>
                  <span className="text-rose-500">{gate.failureAction}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { 
  Users, 
  ShieldAlert, 
  Check, 
  X, 
  FolderLock, 
  FileCode, 
  Wrench 
} from 'lucide-react'

export default function RolesSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)

  const roles = [
    {
      id: 'tech-lead',
      name: 'Tech Lead / Architect',
      badge: 'GOVERNANCE & SPEC',
      summary: 'Owns interface schemas, system data models, and dependency task graphs.',
      responsibilities: [
        'Translates ambiguous problem statements in docs/raw.md into concrete schemas.',
        'Curates and approves docs/harness.md architecture blueprint.',
        'Defines API specifications, TypeScript interfaces, and database models.',
        'Breaks epics into discrete, bounded tasks for Builder and Tester lanes.'
      ],
      allowedPaths: ['docs/harness.md', 'harness/artifacts/<TASK-ID>/spec.md', 'src/types/*', 'schema/*'],
      forbiddenPaths: ['src/components/*', 'src/services/*', 'tests/*'],
      tools: ['context7 (API docs)', 'github (PR specs)', 'sequential-thinking'],
      guardrailRule: 'Cannot write implementation logic. Must stop after interface artifact is committed.'
    },
    {
      id: 'builder',
      name: 'Builder (UI & Backend)',
      badge: 'IMPLEMENTATION LANE',
      summary: 'Implements functional code strictly within allowlisted application directories.',
      responsibilities: [
        'Reads architecture specs from harness/artifacts/<TASK-ID>/spec.md.',
        'Implements React components, state logic, and backend endpoints.',
        'Writes code that passes existing failing tests (Test-Driven Development).',
        'Follows monochromatic design token rules and accessibility guidelines.'
      ],
      allowedPaths: ['src/**/*', 'public/*', 'package.json'],
      forbiddenPaths: ['docs/raw.md', 'harness/roles/*', 'harness/state/*', 'tests/*'],
      tools: ['shadcn / react-bits', 'magicui', 'playwright (screenshot mode)', 'context7'],
      guardrailRule: 'Path guard immediately reverts any edit made outside src/ or public/.'
    },
    {
      id: 'tester',
      name: 'Test Engineer / QA',
      badge: 'VERIFICATION LANE',
      summary: 'Creates deterministic test suites, edge case matrices, and Playwright E2E flows.',
      responsibilities: [
        'Writes unit tests before or concurrently with Builder implementation.',
        'Maintains headless Playwright end-to-end tests and ARIA snapshot checks.',
        'Validates edge cases: network timeout, malformed JSON, auth expiration.',
        'Produces deterministic test reports required for Gate 2 and Gate 3.'
      ],
      allowedPaths: ['tests/**/*', '__tests__/**/*', 'e2e/**/*', 'harness/artifacts/<TASK-ID>/qa.md'],
      forbiddenPaths: ['src/**/*', 'docs/raw.md', 'harness/tools/*'],
      tools: ['playwright (headless)', 'chrome-devtools (traces)', 'vitest / bun test'],
      guardrailRule: 'Never allowed to modify implementation code to make tests pass.'
    },
    {
      id: 'security',
      name: 'Security & SAST Officer',
      badge: 'COMPLIANCE & VETO',
      summary: 'Performs static analysis, secret scans, and dependency supply-chain audits.',
      responsibilities: [
        'Runs Semgrep rules against every PR and agent code diff.',
        'Scans for accidentally hardcoded secrets (API keys, private tokens, passwords).',
        'Enforces MCP parameter binding checks (P-01 to P-10) to prevent prompt injections.',
        'Verifies exact package version pins (C-05) before release.'
      ],
      allowedPaths: ['harness/artifacts/<TASK-ID>/security-audit.json', '.semgrepignore'],
      forbiddenPaths: ['src/**/*', 'docs/*'],
      tools: ['semgrep (SAST)', 'mcpcheck CLI', 'github (security alerts)'],
      guardrailRule: 'Holds absolute veto power over Gate 4. Cannot be bypassed by other roles.'
    },
    {
      id: 'scribe',
      name: 'Scribe / Documentation',
      badge: 'MEMORY & TELEMETRY',
      summary: 'Synchronizes system documentation, changelogs, session logs, and ADRs.',
      responsibilities: [
        'Records Architectural Decision Records (ADRs) when patterns change.',
        'Appends session summaries to harness/logs/session.log.md.',
        'Maintains user-facing README, API guides, and changelogs.',
        'Logs any assumptions made during autonomous execution.'
      ],
      allowedPaths: ['docs/**/*', 'README.md', 'CHANGELOG.md', 'harness/logs/*'],
      forbiddenPaths: ['src/**/*', 'tests/**/*', 'package.json'],
      tools: ['github (release notes)', 'context7'],
      guardrailRule: 'Cannot modify product code or test files. Limited to documentation and logs.'
    }
  ]

  const activeRole = roles[activeRoleIndex]

  return (
    <section id="roles" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <Users className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Role Contracts & Guardrails</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            Skinny Agents, Fat Roles
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            Agents never wander across the entire repository. Each role holds strict write allow-lists, forbidden boundaries, assigned MCP tools, and deterministic guardrails.
          </p>
        </div>

        {/* Role Selector Tabs (Clean architectural buttons) */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {roles.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActiveRoleIndex(i)}
              className={`rounded-lg px-4 py-2.5 text-xs sm:text-sm font-heading font-semibold transition-all ${
                activeRoleIndex === i
                  ? 'bg-[var(--text-primary)] text-[var(--bg-page)] shadow-md'
                  : 'liquid-button text-[var(--text-secondary)]'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Active Role Card */}
        <div className="mt-8 rounded-2xl liquid-glass p-6 sm:p-8">
          {/* Top Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-glass)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded bg-[var(--glass-bg)] border border-[var(--border-glass)] px-2 py-0.5 text-[10px] font-mono text-[var(--text-secondary)]">
                  {activeRole.badge}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  harness/roles/{activeRole.id}.md
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-heading">
                {activeRole.name}
              </h3>
            </div>

            <div className="rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] px-3.5 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
              Contract Size: <span className="text-[var(--text-primary)] font-semibold font-heading">&le; 40-line Pointer</span>
            </div>
          </div>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed font-body">
            {activeRole.summary}
          </p>

          {/* Grid of Responsibilities, Allowlists, Tools */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Responsibilities */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <FileCode className="h-4 w-4" />
                <span>Core Responsibilities</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] font-body">
                {activeRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--text-muted)] font-mono mt-0.5">&bull;</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Path Permissions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <FolderLock className="h-4 w-4" />
                <span>File Allow-List vs Forbidden</span>
              </div>

              <div className="space-y-2">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 font-semibold mb-1">
                    <Check className="h-3.5 w-3.5" />
                    <span>Allowed Write Paths:</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs text-[var(--text-secondary)]">
                    {activeRole.allowedPaths.map((p, idx) => (
                      <div key={idx} className="text-emerald-500/90">&bull; {p}</div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-rose-500 font-semibold mb-1">
                    <X className="h-3.5 w-3.5" />
                    <span>Strictly Forbidden Paths:</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs text-[var(--text-secondary)]">
                    {activeRole.forbiddenPaths.map((p, idx) => (
                      <div key={idx} className="text-rose-500/90">&times; {p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Guardrail */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                <Wrench className="h-4 w-4" />
                <span>Assigned MCP Tools & Guardrail</span>
              </div>

              <div className="rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] p-3 space-y-2">
                <div className="text-xs font-mono text-[var(--text-muted)]">Assigned Tools:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeRole.tools.map((t, idx) => (
                    <span key={idx} className="rounded border border-[var(--border-glass)] bg-[var(--glass-card)] px-2 py-0.5 text-xs font-mono text-[var(--text-primary)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] p-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] mb-1">
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                  <span className="font-semibold text-[var(--text-primary)] font-heading">Hard Guardrail Rule:</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                  {activeRole.guardrailRule}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

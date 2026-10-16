import { useState } from 'react'
import { 
  Cpu, 
  Copy, 
  Check, 
  FileCode, 
  Server
} from 'lucide-react'

export default function McpHub() {
  const [activePreset, setActivePreset] = useState('fullstack-web')
  const [copied, setCopied] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const presets = {
    minimal: {
      name: 'Minimal',
      description: 'Zero bloat. Core context docs, GitHub integration, and Semgrep security scan.',
      servers: ['context7', 'github', 'semgrep']
    },
    frontend: {
      name: 'Frontend Web',
      description: 'For modern UI/UX apps. Adds headless Playwright, Chrome DevTools, Shadcn & ReactBits.',
      servers: ['context7', 'github', 'semgrep', 'playwright', 'chrome-devtools', 'shadcn', 'magicui']
    },
    'fullstack-web': {
      name: 'Fullstack Web',
      description: 'Complete web application harness with framework tooling and live browser tests.',
      servers: ['context7', 'github', 'semgrep', 'playwright', 'chrome-devtools', 'shadcn', 'magicui', 'next-devtools']
    },
    'graph-backend': {
      name: 'Graph Backend',
      description: 'Graph-native development with enforced read-only database query sandboxing.',
      servers: ['context7', 'github', 'semgrep', 'falkordb-readonly', 'next-devtools']
    },
    'falness-full': {
      name: 'Falness Full Suite',
      description: 'Enterprise & hackathon power suite with Sentry error telemetry and Linear issue tracking.',
      servers: ['context7', 'github', 'semgrep', 'playwright', 'chrome-devtools', 'shadcn', 'magicui', 'next-devtools', 'sentry', 'linear', 'sequential-thinking']
    }
  }

  const serverCatalog = [
    {
      name: 'context7',
      tier: 'Core',
      badge: 'core',
      description: 'Fetches version-specific official library docs (React 19, Tailwind v4, Vite). Kills hallucinated APIs.',
      transport: 'stdio / HTTP',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', '@upstash/context7-mcp@latest'],
        env: { CONTEXT7_API_KEY: '${CONTEXT7_API_KEY}' }
      }
    },
    {
      name: 'github',
      tier: 'Core',
      badge: 'core',
      description: 'Inspects PRs, CI check status, and issues for quality gates G2–G5.',
      transport: 'HTTP',
      risk: 'Medium',
      config: {
        url: 'https://api.githubcopilot.com/mcp/',
        headers: { Authorization: 'Bearer ${GITHUB_PAT}' }
      }
    },
    {
      name: 'semgrep',
      tier: 'Core',
      badge: 'core',
      description: 'SAST static analysis, secret leakage detector, and supply-chain vulnerability scanner.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'semgrep',
        args: ['mcp']
      }
    },
    {
      name: 'playwright',
      tier: 'Frontend',
      badge: 'frontend',
      description: 'Drives headless browser flows, captures ARIA snapshots, and records visual screenshots.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', '@playwright/mcp@latest', '--headless']
      }
    },
    {
      name: 'chrome-devtools',
      tier: 'Frontend',
      badge: 'frontend',
      description: 'Official Google performance & diagnostics: LCP/CLS metrics, network traces, console errors.',
      transport: 'stdio',
      risk: 'Medium',
      config: {
        command: 'npx',
        args: ['-y', 'chrome-devtools-mcp@latest', '--slim', '--headless', '--no-usage-statistics']
      }
    },
    {
      name: 'shadcn',
      tier: 'Frontend',
      badge: 'frontend',
      description: 'Component registry integration (including `@react-bits` and accessible primitives).',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['shadcn@latest', 'mcp']
      }
    },
    {
      name: 'magicui',
      tier: 'Frontend',
      badge: 'frontend',
      description: 'Motion, grid patterns, border beams, and tactile micro-interaction primitives.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', '@magicuidesign/mcp@latest']
      }
    },
    {
      name: 'next-devtools',
      tier: 'Framework',
      badge: 'framework',
      description: 'Route compilation, server-component boundary checks, and runtime telemetry.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', 'next-devtools-mcp@latest']
      }
    },
    {
      name: 'falkordb-readonly',
      tier: 'Data',
      badge: 'data',
      description: 'Sandboxed OpenCypher query executor with forced read-only guardrails for agents.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', '@falkordb/mcpserver@latest'],
        env: {
          FALKORDB_HOST: 'localhost',
          FALKORDB_PORT: '6379',
          FALKORDB_DEFAULT_READONLY: 'true'
        }
      }
    },
    {
      name: 'sentry',
      tier: 'Ops',
      badge: 'ops',
      description: 'Production exception tracking, crash traces, and release stability health.',
      transport: 'HTTP (OAuth)',
      risk: 'Medium',
      config: {
        url: 'https://mcp.sentry.dev/mcp'
      }
    },
    {
      name: 'linear',
      tier: 'Ops',
      badge: 'ops',
      description: 'Two-way synchronization for incident tracking, sprint tasks, and bug triage.',
      transport: 'HTTP (OAuth)',
      risk: 'Medium',
      config: {
        url: 'https://mcp.linear.app/mcp'
      }
    },
    {
      name: 'sequential-thinking',
      tier: 'Reasoning',
      badge: 'reasoning',
      description: 'Explicit step-by-step reasoning scratchpad for multi-stage architectural planning.',
      transport: 'stdio',
      risk: 'Low',
      config: {
        command: 'npx',
        args: ['-y', '@modelcontextprotocol/server-sequential-thinking']
      }
    }
  ]

  const filteredCatalog = serverCatalog.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tier.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activePresetServers = presets[activePreset].servers
  const generatedMcpConfig = {
    mcpServers: activePresetServers.reduce((acc, serverName) => {
      const match = serverCatalog.find((s) => s.name === serverName)
      if (match) {
        acc[serverName] = match.config
      }
      return acc
    }, {})
  }

  const generatedJsonString = JSON.stringify(generatedMcpConfig, null, 2)

  const handleCopyJson = () => {
    navigator.clipboard.writeText(generatedJsonString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="mcp" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <Cpu className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Model Context Protocol (MCP) Hub &bull; docs/Mcp.md</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            Zero-Trust Tool Sandboxing
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            MCP tools give AI agents superpowers — but loading every server wastes context and exposes security vulnerabilities. Falness organizes tools into strict tiers, least-privilege presets, and verifiable contracts.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider font-semibold">
              Select Preset Profile:
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)]">
              Active Servers: <span className="text-[var(--text-primary)] font-bold">{activePresetServers.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.entries(presets).map(([key, preset]) => (
              <button
                key={key}
                onClick={() => setActivePreset(key)}
                className={`text-left rounded-xl p-4 transition-all ${
                  activePreset === key
                    ? 'liquid-glass border-[var(--text-primary)] shadow-md'
                    : 'liquid-button text-[var(--text-secondary)]'
                }`}
              >
                <div className="text-[10px] font-mono text-[var(--text-muted)] font-semibold mb-1">
                  PRESET
                </div>
                <div className="text-sm font-bold text-[var(--text-primary)] font-heading mb-1.5">
                  {preset.name}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed font-body">
                  {preset.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Live Generated .mcp.json Viewer */}
        <div className="mt-8 rounded-2xl liquid-glass overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-glass)] bg-[var(--glass-bg)] px-5 py-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <FileCode className="h-4 w-4 text-[var(--text-muted)]" />
              <span>.mcp.json (Active Preset: <span className="text-[var(--text-primary)] font-bold">{activePreset}</span>)</span>
            </div>

            <button
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 rounded-lg liquid-button px-3.5 py-1.5 text-xs font-mono font-medium text-[var(--text-primary)] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy .mcp.json</span>
                </>
              )}
            </button>
          </div>

          <div className="p-5 sm:p-6 overflow-x-auto bg-[var(--glass-terminal)]">
            <pre className="text-xs font-mono text-[var(--glass-terminal-text)] leading-relaxed select-all">
              {generatedJsonString}
            </pre>
          </div>

          <div className="border-t border-[var(--border-glass)] bg-[var(--glass-bg)] px-5 py-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-[var(--text-muted)] gap-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Supply Chain Safe: Use pin procedure (docs/Mcp.md §5) before production CI</span>
            </div>
            <span>Auto-generated by Reconcile (§1A)</span>
          </div>
        </div>

        {/* Server Catalog Filter & Grid */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
                Comprehensive Server Catalog
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 font-body">
                Canonical tool registry verified against docs/McpCheck.md rules C-01 to C-21.
              </p>
            </div>

            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Filter servers (e.g. core, playwright)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3.5 py-2 text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--text-primary)] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCatalog.map((server) => {
              const isActiveInPreset = activePresetServers.includes(server.name)
              return (
                <div
                  key={server.name}
                  className={`rounded-xl p-5 flex flex-col justify-between transition-all ${
                    isActiveInPreset
                      ? 'liquid-glass border-[var(--border-glass-hover)] shadow-sm'
                      : 'liquid-button opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-[var(--text-muted)]" />
                        <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                          {server.name}
                        </span>
                      </div>
                      <span className="rounded bg-[var(--glass-bg)] border border-[var(--border-glass)] px-2 py-0.5 text-[10px] font-mono uppercase text-[var(--text-secondary)]">
                        {server.tier}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
                      {server.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-glass)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                    <span>Transport: {server.transport}</span>
                    <span className={server.risk === 'Low' ? 'text-emerald-500' : 'text-amber-500'}>
                      Risk: {server.risk}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

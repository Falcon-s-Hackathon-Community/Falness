# Falness — Harness Plan & Architectural Specification

> **Framework:** Falness (Falcons Harness Engineering Framework)  
> **Benchmark Standards:** Google Antigravity & Anthropic Claude Code  
> **Derived from:** `docs/raw.md`  
> **Status:** APPROVED & ACTIVE  

---

## 1. System Overview

Falness is a deterministic, role-bounded harness framework for AI agent engineering. It replaces unstructured "vibe coding" with disciplined, repeatable software development through four interlocking pillars:

```
+-------------------------------------------------------------------------+
|                              ORCHESTRATOR                                |
|  - Boot sequence & state machine                                        |
|  - Idempotent self-healing reconciliation (§1A)                         |
|  - Circuit breaker monitoring (§9)                                      |
+--------------------+-------------------------------+--------------------+
                     |                               |
                     v                               v
+--------------------+------+          +-------------+--------------------+
|     FAT ROLES & AGENTS    |          |   DETERMINISTIC QUALITY GATES   |
|  - Tech Lead / Architect  |          |  - G0: Spec & Boot Validated    |
|  - Builder (UI / Backend) |          |  - G1: Static Analysis & Types  |
|  - Test Engineer / QA     |          |  - G2: Deterministic Unit Tests |
|  - Security & Secrets     |          |  - G3: Playwright ARIA & E2E    |
|  - Docs & Scribe          |          |  - G4: SAST & Supply Chain      |
|  * Strict file allowlists |          |  - G5: Human Approval Signoff   |
+--------------------+------+          +-------------+--------------------+
                     |                               |
                     +---------------+---------------+
                                     |
                                     v
+------------------------------------+------------------------------------+
|                  MCP TOOL & CAPABILITY SANDBOX                          |
|  - Core: Context7 (live docs), GitHub (PRs/issues), Semgrep (SAST)      |
|  - Frontend: Playwright (headless), Chrome DevTools, Shadcn / ReactBits |
|  - Least privilege: Read-only defaults, write confirmation guards       |
+-------------------------------------------------------------------------+
```

---

## 2. Directory Layout & Artifact Taxonomy

```
falness/
├── docs/                   # Human & Machine Specifications
│   ├── raw.md              # Problem statement & product requirements
│   ├── harness.md          # Architectural blueprint & plan (this file)
│   ├── prompt.md           # Orchestrator master operating manual
│   ├── StarterPrompt.md    # 60-second copy-paste entry prompt for agents
│   ├── Mcp.md              # Machine-consumed MCP configuration reference
│   ├── Mcpguide.md         # MCP architecture, security & policy guide
│   └── McpCheck.md         # 21 verification checks (C-01 to C-21)
├── harness/                # Machine-Generated Runtime State
│   ├── state/state.json    # Machine state (mode, sprint, active task)
│   ├── roles/              # Enforceable role contracts
│   │   ├── tech-lead.md
│   │   ├── builder.md
│   │   ├── tester.md
│   │   ├── security.md
│   │   └── scribe.md
│   ├── artifacts/          # Task outputs keyed by ID: <TASK-ID>/
│   ├── tools/registry.yaml # Active MCP tools with per-role permissions
│   └── logs/               # Append-only session & audit logs
├── public/                 # Falcons brand assets, icons, and metadata
├── src/                    # Monochromatic Fluent Web Application & Template
│   ├── components/         # Interactive ReactBits-inspired documentation components
│   ├── App.jsx             # Main interactive application & harness explorer
│   ├── main.jsx            # Application entry point
│   └── index.css           # Pure monochromatic styling & design tokens
├── index.html              # Tailored SEO & Social metadata
└── vite.config.js          # Fast Vite configuration with Tailwind CSS v4
```

---

## 3. The 6-Stage Lifecycle

1. **Boot & Reconciliation**: Scan `state.json`, `raw.md`, `harness.md`. Automatically repair any missing or unconfigured stubs.
2. **Discovery & Clarification**: If problem statement is ambiguous, conduct a bounded interview (max 3 sharp questions).
3. **Curation & Architecture**: Tech Lead role generates interface contracts, data models, and task breakdown.
4. **Scaffolding**: Generate file skeletons, type stubs, and initial test fixtures.
5. **Execution**: Builder role implements components within strict file allow-lists.
6. **Deterministic Verification (Gates G0-G5)**: Run test suites, typecheckers, linters, and security scanners. Code is only marked "done" when all automated checks exit code 0.

---

## 4. Benchmark Alignment

| Capability | Google Antigravity Standard | Anthropic Claude Code Standard | Falness Framework |
|---|---|---|---|
| **Context Management** | Persistent disk-backed state (`state.json`) | Project-scoped memory files (`CLAUDE.md`) | Git-backed `harness/` + `state.json` + `docs/` |
| **Tool Execution** | Native MCP server orchestration | Project-level `.mcp.json` commands | Canonical `.mcp.json` with multi-client presets |
| **Verification** | Terminal execution with exit code validation | Deterministic command validation | Gates G0 to G5 with automated pass/fail checks |
| **Role Guardrails** | Subagent specialization & system prompts | System prompt task boundaries | Skinny Agents + Fat Roles with path allow-lists |
| **Safety** | Circuit breakers & emergency bounds | Sandboxed tool approvals | Automatic threshold breaker & write guards |

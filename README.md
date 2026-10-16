# Falness — Falcons Harness Engineering Framework

> **The horse (the LLM) is fast and powerful. Falness is the harness: steering that intelligence into bounded, verifiable, deterministic engineering instead of fragile "vibe coding".**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Benchmark](https://img.shields.io/badge/Benchmark-Antigravity%20%26%20Claude%20Code-black.svg)]()
[![Community](https://img.shields.io/badge/Falcons-NMIET%20Pune-emerald.svg)](https://thefalcons.in/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB.svg)](https://react.dev/)

**Falness** is an open-source Harness Engineering framework and turnkey application template created by **Falcons — Student-led Hackathon & Technical Community at NMIET, Pune**.

It establishes an engineering bridge between statistical AI models and deterministic software production, benchmarked against the gold standards of **Google Antigravity** and **Anthropic Claude Code**.

---

## ⚡ 60-Second Quickstart

To boot any autonomous AI agent (Claude Code, Google Antigravity, Cursor) into the Falness framework:

```bash
# 1. Clone this repository or copy the docs/ folder into your project root
git clone https://github.com/Falcon-s-Hackathon-Community/falness.git my-app
cd my-app
bun install

# 2. Open docs/raw.md and describe what you want built (or leave blank to be interviewed)

# 3. Pass the starter prompt from docs/StarterPrompt.md to your agent:
claude "Read docs/prompt.md in full and follow it exactly. Execute §1 Boot Sequence."
# or in Google Antigravity:
agy --prompt "Read docs/prompt.md in full and follow it exactly. Execute §1 Boot Sequence."
```

---

## 🏛️ The 4 Universal Laws of Harness Engineering

1. **State Lives on Disk, Not in Context:** Never trust volatile context memory. State lives in `harness/state/state.json` and git commits. The agent resumes instantly upon reset.
2. **Skinny Agents, Fat Roles:** Agent entry points stay &le; 40 lines. All heavy logic, boundaries, and schemas live in declarative role contracts (`harness/roles/<role>.md`).
3. **Artifacts are the Contract:** Work is only recognized if it emits a concrete artifact under `harness/artifacts/<TASK-ID>/`. Unrecorded output is considered non-existent.
4. **Deterministic Checks Over Model Opinions:** "The agent says it works" is never acceptable. Code must pass deterministic exit code 0 checks across linters, typecheckers, unit tests, and SAST scans.

---

## 🔄 The 6-Stage Autonomous Lifecycle

```
[Boot & Reconcile (§1A)] 
       │
       ▼
[Discovery Interview (§2)] ──► (if docs/raw.md has blanks)
       │
       ▼
[Architectural Curation (§3)] ──► (produces docs/harness.md & schemas)
       │
       ▼
[Scaffolding & Lane Binding (§4)]
       │
       ▼
[Parallel Execution (§6)] ──► (Builder strictly in src/, Tester in tests/)
       │
       ▼
[Deterministic Quality Gates (G0–G5)] ──► (Exit code 0 required)
       │
       ▼
[Retrospective & Release (§11)]
```

---

## 🛡️ Deterministic Quality Gates (G0 to G5)

| Gate | Name | Enforced Tooling | Deterministic Pass Condition |
|---|---|---|---|
| **G0** | Spec & Manifest Gate | `scripts/check_harness.py` | `docs/raw.md` & `docs/harness.md` valid, `.mcp.json` pins verified |
| **G1** | Static Analysis & Types | `tsc --noEmit`, `eslint` | 0 compiler errors, 0 lint warnings |
| **G2** | Unit & Contract Tests | `bun test --bail` | 100% test pass on existing fixtures |
| **G3** | Browser, ARIA & E2E | `playwright test --headless` | Cross-browser flows pass, ARIA accessibility intact |
| **G4** | SAST & Supply Chain | `semgrep mcp`, secret scan | 0 exposed secrets, 0 unparameterized injection sinks |
| **G5** | Human Sign-off | PR Review & Evidence Audit | Human reviews `harness/artifacts/<TASK-ID>/evidence.json` |

---

## 🔌 Model Context Protocol (MCP) Presets

Configure your `.mcp.json` by choosing a preset profile from [`docs/Mcp.md`](./docs/Mcp.md):

- `minimal`: `context7`, `github`, `semgrep`
- `frontend`: minimal + `playwright`, `chrome-devtools`, `shadcn`, `magicui`
- `fullstack-web`: minimal + `playwright`, `chrome-devtools`, `shadcn`, `magicui`, `next-devtools`
- `graph-backend`: minimal + `falkordb-readonly`, `next-devtools`
- `falness-full`: fullstack-web + `sentry`, `linear`, `sequential-thinking`

---

## 📁 Repository Structure

```
falness/
├── docs/                   # Turnkey Harness Template (Drop this in any repo)
│   ├── raw.md              # Problem statement & specification
│   ├── harness.md          # Architectural plan & milestones
│   ├── prompt.md           # Orchestrator master operating manual
│   ├── StarterPrompt.md    # 60s agent copy-paste entry point
│   ├── Mcp.md              # Machine-consumed MCP configuration reference
│   ├── Mcpguide.md         # MCP architecture & security guide
│   └── McpCheck.md         # 21 verification checks (C-01 to C-21)
├── harness/                # Runtime machine state & audit logs
│   ├── state/              # state.json
│   ├── roles/              # Enforceable role contracts
│   ├── artifacts/          # Generated artifacts per task
│   └── logs/               # Append-only session & reconcile logs
├── public/                 # Falcons brand assets, icons & metadata
├── src/                    # Monochromatic interactive web app & documentation
│   ├── components/         # ReactBits-inspired interactive components
│   ├── App.jsx             # Main interactive application
│   ├── main.jsx            # Entry point
│   └── index.css           # Monochromatic design system tokens
├── index.html              # Tailored SEO & Social metadata
├── vite.config.js          # Root Vite bundler with Tailwind CSS v4
└── package.json            # Dependencies & scripts
```

---

## 🦅 Falcons Hackathon Community

Falness is maintained by **Falcons** — the student-led technical & hackathon community at Nutan Maharashtra Institute of Engineering & Technology (NMIET), Pune.

- 🌐 **Website:** [thefalcons.in](https://thefalcons.in/)
- 💻 **GitHub:** [Falcon-s-Hackathon-Community](https://github.com/Falcon-s-Hackathon-Community)
- 💬 **Discord:** [Join the Discord](https://discord.gg/j8XvwsSUQB)
- 📱 **WhatsApp:** [Join WhatsApp Community](https://chat.whatsapp.com/IE7GiUPHNyt8nA2CkzN43P)
- 📸 **Instagram:** [@thefalcons.in_](https://www.instagram.com/thefalcons.in_/)

---

## 📜 License

MIT License &copy; 2026 Falcons Hackathon Community.

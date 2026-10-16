# Falness — Falcons Harness Engineering Framework
## Problem Statement & Framework Specification

> **Project Name:** Falness (Falcons Harness Engineering Framework)  
> **Community:** Falcons — Student-led Hackathon & Technical Community at NMIET, Pune  
> **Repository:** https://github.com/Falcon-s-Hackathon-Community/falness  
> **Standard:** Google Antigravity & Anthropic Claude Code Benchmark Architecture  
> **License:** MIT Open Source  

---

### 1. Who Has the Problem?

Developers, student hackathon builders, and engineering teams building software with Large Language Models (LLMs) and autonomous coding agents.

Modern AI coding currently suffers from **"Vibe Coding" entropy**:
1. **Unbounded Exploration & Context Thrashing:** LLMs wander outside problem constraints, burning thousands of tokens on circular loops, rewriting intact modules, or introducing unintended regressions.
2. **Hallucinated & Outdated Dependencies:** Agents invent APIs or pull vulnerable, outdated npm/pip packages because they lack real-time verified context and deterministic schema enforcement.
3. **Absence of Deterministic Verification:** Agents declare "Task Complete!" based purely on statistical next-token prediction rather than deterministic evidence (zero linters checked, no unit tests executed, no SAST security scan performed).
4. **Lack of Reproducible Team Architecture:** Solitary developer prompts do not scale into multi-role team workflows where Architecture, UI/UX, Backend, Security, and QA must operate with strict boundaries.

---

### 2. What We Are Building: Falness

**Falness** is the open-source **Harness Engineering Framework** that elevates AI agent development from chaotic "vibe coding" into bounded, verifiable, repeatable systems engineering.

Inspired by industry pioneers (Rob Earlam, OpenAI Harness Engineering) and engineered to the standards of **Google Antigravity** and **Anthropic Claude Code**, Falness provides:

1. **A Complete Operating Manual (`docs/prompt.md`)**:
   - Master boot sequence: Reconcile, Discover, Curate, Scaffold, Execute, Retro.
   - Idempotent self-healing: Automatically detects `MISSING`, `UNCONFIGURED`, `STALE`, or `DRIFTED` harness files.
   - Declarative state on disk: Zero reliance on ephemeral LLM context memory.

2. **Skinny Agents & Fat Roles**:
   - Thin agent pointers (`<= 40 lines`) paired with fat, enforceable role definitions (`harness/roles/<role>.md`).
   - Strict file-system write allowlists (e.g. Architect writes schemas; Builder writes code; Tester writes tests; Guard blocks lane violations).

3. **Deterministic Quality Gates (G0 to G5)**:
   - **G0 (Spec Gate):** Schema & prerequisite check before code is written.
   - **G1 (Lint & Type Gate):** Strict typechecking and static code analysis.
   - **G2 (Contract & Unit Gate):** Deterministic unit tests with 100% pass requirement.
   - **G3 (Browser & E2E Gate):** Playwright headless runs, ARIA snapshots, and visual regression.
   - **G4 (Security & SAST Gate):** Semgrep secret scanning, injection checks, and dependency audit.
   - **G5 (Human Sign-off):** Human review of PR, diff, and verification evidence.

4. **Zero-Trust Model Context Protocol (MCP) Tiering**:
   - Tiered MCP integration: Core (Context7, GitHub, Semgrep), Frontend (Playwright, Chrome DevTools, Shadcn), Backend (DB, APIs), Ops (Sentry, Linear).
   - Read-only defaults for sensitive data stores; write operations require explicit human confirmation.

5. **A Dual-Purpose Web Application & Living Template**:
   - Built directly on Vite + React 19 + Tailwind CSS (in the root directory, no redundant `apps` nesting).
   - High-contrast, fluent monochromatic (black/white) aesthetic inspired by **reactbits.dev**.
   - Acts as both the interactive documentation/playground for newcomers AND the production-ready starter template for any project adopting Harness Engineering.

---

### 3. Core Constraints & Guarantees

- **Aesthetic:** Monochromatic (deep obsidian `#000000`, razor-sharp `#27272a` borders, crisp zinc `#ffffff` typography, subtle glow accents).
- **Architecture:** Zero redundant sub-applications; parent repository root `bun create vite .` structure maintained.
- **Portability:** Harness files are IDE-agnostic — operates seamlessly in Google Antigravity, Anthropic Claude Code, Cursor, VS Code, Codex, and Windsurf.
- **Telemetry & Artifacts:** Every phase produces an artifact under `harness/artifacts/<TASK-ID>/`. Unrecorded work is treated as non-existent.

---

### 4. What "Done" Looks Like

1. **Comprehensive Documentation & Template Files in `docs/`**:
   - `docs/raw.md` fully specified with Falness goals.
   - `docs/prompt.md` tuned for Falness, Antigravity, and Claude Code standards.
   - `docs/harness.md` created with concrete execution blueprint.
   - `docs/Mcp.md`, `docs/Mcpguide.md`, `docs/McpCheck.md`, and `docs/StarterPrompt.md` verified and aligned.
2. **Interactive Fluent Monochromatic Web App (`src/`)**:
   - Hero section with live badges, copyable starter prompts, and GitHub links.
   - Beginner-friendly Harness Engineering Guide & comparison matrix.
   - Interactive Harness Pipeline visualizer (Boot, Discovery, Curation, Scaffold, Execute, Gates).
   - Interactive Role Inspector with allow-list breakdown.
   - Interactive MCP Server Explorer & Live Config Generator.
   - Deterministic Gate Simulator (G0-G5).
   - Community Section highlighting Falcons Hackathon Community (NMIET Pune) brand assets from `public/`.
3. **SEO & Metadata Integrity**:
   - `index.html` configured with complete metadata, canonical links, social tags, and structured JSON-LD schema matching Falcons community guidelines.
4. **Deterministic Validation**:
   - Clean build with Vite and Bun (`bun run build`), zero lint/type errors.

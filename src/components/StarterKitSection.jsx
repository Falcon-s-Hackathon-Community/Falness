import { useState } from 'react'
import { 
  Copy, 
  Check, 
  FolderGit2 
} from 'lucide-react'

export default function StarterKitSection() {
  const [activeTab, setActiveTab] = useState('starter')
  const [copied, setCopied] = useState(false)

  const templateFiles = {
    starter: {
      filename: 'docs/StarterPrompt.md',
      label: 'StarterPrompt.md',
      content: `Read docs/prompt.md in full and follow it exactly — it is your operating manual.
Start with its §1 Boot Sequence: scan docs/raw.md (problem statement) and docs/harness.md.
If raw.md is blank, interview me (§2) before doing anything else. Ask, don't guess.`
    },
    raw: {
      filename: 'docs/raw.md',
      label: 'docs/raw.md (Problem Statement)',
      content: `# Problem Statement — [Project Name]

### 1. Who Has the Problem?
[Describe user persona, audience, pain points, and why existing tools fail.]

### 2. What We Are Building
[Describe the application, target platform, key capabilities, and architecture constraints.]

### 3. Constraints & Tech Stack
- Frontend: [e.g. Vite + React 19 + Tailwind CSS]
- Backend / DB: [e.g. SQLite / PostgreSQL / Node / Python]
- MCP Tools: [Minimal / Frontend / Fullstack / Custom]
- Quality Gates: [Strict G0–G5 verification required]

### 4. What "Done" Looks Like
- All deterministic tests exit code 0.
- Playwright headless E2E verification passes.
- Zero security sinks or secret exposures in diff.`
    },
    prompt: {
      filename: 'docs/prompt.md',
      label: 'docs/prompt.md (Operating Manual Extract)',
      content: `# prompt.md — Harness Engineering Master Prompt

> You are the Orchestrator. This file is your operating manual.
> Method: Harness Engineering (agents + roles + artifacts + workflow standards)

## 0. Prime Directives
1. Never improvise outside this file or docs/harness.md.
2. Skinny agents, fat roles (agent pointers <= 40 lines).
3. Artifacts are the contract (written to harness/artifacts/<TASK-ID>/).
4. Nothing is "done" until deterministic checks pass (G0 to G5).
5. State lives on disk, not in context (re-derive from state.json).
6. Fail loud, fail early (trip circuit breakers on repeated errors).
7. Stay in lane (strict role write allow-lists).

## 1. Boot Sequence
STEP 1: Read AGENTS.md (if present)
STEP 2: Read harness/state/state.json (if present -> RESUME mode)
STEP 3: Scan docs/raw.md (problem statement)
STEP 4: Scan docs/harness.md (detailed plan)
STEP 5: RECONCILE missing, unconfigured, or stale files
STEP 6: Decide mode (Discovery / Curation / Scaffold / Execute / Retro)`
    },
    harness: {
      filename: 'docs/harness.md',
      label: 'docs/harness.md (Architecture Plan)',
      content: `# Project Harness Specification & Plan

## 1. System Architecture
- Declarative state machine & boot reconciliation
- Fat role definitions with path allowlists
- Deterministic quality gates (G0 to G5)
- Model Context Protocol (MCP) tool integration

## 2. Sprint Tasks & Milestones
- Task 01: Core database models & schema artifacts
- Task 02: API service layer & contract tests
- Task 03: Frontend views & accessible UI components
- Task 04: Headless Playwright integration & security scan`
    }
  }

  const currentFile = templateFiles[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="template" className="py-20 md:py-28 border-b border-[var(--border-glass)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-glass)] bg-[var(--glass-card)] px-3 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
            <FolderGit2 className="h-3.5 w-3.5 text-emerald-500" />
            <span className="font-heading font-medium">Turnkey Application Template</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading">
            Deploy in Any Project in 60s
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-body">
            This repository is both a live interactive guide AND a plug-and-play template. Drop the <code>docs/</code> directory into any codebase to instantly equip Claude Code or Google Antigravity with a deterministic harness.
          </p>
        </div>

        {/* 4-Step Quickstart Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl liquid-glass p-5 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
              <span>STEP 01</span>
              <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Clone or Copy `docs/`</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Clone this repo or copy the <code>docs/</code> directory directly into your project's root folder.
            </p>
            <div className="pt-2">
              <code className="text-[11px] block rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] text-[var(--glass-terminal-text)] p-2 font-mono">
                cp -r docs/ my-new-project/
              </code>
            </div>
          </div>

          <div className="rounded-xl liquid-glass p-5 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
              <span>STEP 02</span>
              <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Fill `docs/raw.md`</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Describe who has the problem, what you want built, and your constraints. If left blank, the agent interviews you.
            </p>
            <div className="pt-2">
              <code className="text-[11px] block rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] text-[var(--glass-terminal-text)] p-2 font-mono">
                nano docs/raw.md
              </code>
            </div>
          </div>

          <div className="rounded-xl liquid-glass p-5 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
              <span>STEP 03</span>
              <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Run Starter Prompt</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              Pass the universal prompt from <code>StarterPrompt.md</code> to Claude Code, Google Antigravity, or Cursor.
            </p>
            <div className="pt-2">
              <code className="text-[11px] block rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] text-emerald-400 p-2 font-mono">
                claude // agy // composer
              </code>
            </div>
          </div>

          <div className="rounded-xl liquid-glass p-5 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
              <span>STEP 04</span>
              <span className="h-1.5 w-1.5 rounded-sm bg-emerald-500" />
            </div>
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">Autonomous Quality</h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-body">
              The Orchestrator self-heals, binds roles, generates code, and runs deterministic gates G0–G5.
            </p>
            <div className="pt-2">
              <code className="text-[11px] block rounded border border-[var(--border-glass)] bg-[var(--glass-terminal)] text-[var(--glass-terminal-text)] p-2 font-mono">
                Exit Code 0 Verified
              </code>
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Template File Explorer */}
        <div className="mt-12 rounded-2xl liquid-glass shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border-glass)] bg-[var(--glass-bg)] px-5 py-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {Object.entries(templateFiles).map(([key, file]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono transition-all ${
                    activeTab === key
                      ? 'bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {file.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg liquid-button px-3.5 py-1.5 text-xs font-mono font-medium text-[var(--text-primary)] transition-colors mt-2 sm:mt-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy File Content</span>
                </>
              )}
            </button>
          </div>

          {/* File View */}
          <div className="p-5 sm:p-6 overflow-x-auto bg-[var(--glass-terminal)] font-mono text-xs text-[var(--glass-terminal-text)] leading-relaxed">
            <div className="flex items-center justify-between text-zinc-400 pb-2 mb-3 border-b border-[var(--border-glass)] text-[11px]">
              <span>PATH: {currentFile.filename}</span>
              <span>FORMAT: Markdown Standard</span>
            </div>
            <pre className="whitespace-pre-wrap select-all leading-relaxed">
              {currentFile.content}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

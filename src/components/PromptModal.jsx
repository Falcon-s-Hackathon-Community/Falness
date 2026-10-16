import { useState } from 'react'
import { X, Copy, Check, Terminal, ShieldCheck } from 'lucide-react'

export default function PromptModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const promptText = `Read docs/prompt.md in full and follow it exactly — it is your operating manual.
Start with its §1 Boot Sequence: scan docs/raw.md (problem statement) and docs/harness.md.
If raw.md is blank, interview me (§2) before doing anything else. Ask, don't guess.`

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl liquid-glass p-6 sm:p-7 shadow-2xl space-y-5 border border-[var(--border-glass-hover)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-glass)] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-glass)] bg-[var(--glass-bg)] text-[var(--text-primary)]">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-heading">Universal Starter Prompt</h3>
              <p className="text-xs font-mono text-[var(--text-muted)]">docs/StarterPrompt.md</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 liquid-button text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Prompt Body */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold">
            Pass this directly to your AI Agent (Claude Code / Antigravity / Cursor):
          </label>
          <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--glass-terminal)] p-4 font-mono text-xs sm:text-sm text-[var(--glass-terminal-text)] leading-relaxed whitespace-pre-wrap select-all">
            {promptText}
          </div>
        </div>

        {/* Usage Steps */}
        <div className="rounded-xl border border-[var(--border-glass)] bg-[var(--glass-bg)] p-4 space-y-2 text-xs text-[var(--text-secondary)] font-body">
          <div className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5 font-heading">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>How it activates the Harness:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[var(--text-muted)] font-mono text-[11px]">
            <li>Forces the model to read <code>docs/prompt.md</code> before doing any coding.</li>
            <li>Enforces the §1 Boot Sequence to verify existing repo stubs.</li>
            <li>Triggers bounded Discovery interview if <code>docs/raw.md</code> is blank.</li>
            <li>Locks the model into strict role allow-lists and deterministic gates G0–G5.</li>
          </ol>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Falness v2.0 • Falcons Open Source
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg liquid-button px-4 py-2 text-xs font-medium text-[var(--text-secondary)] font-heading"
            >
              Close
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-page)] px-4 py-2 text-xs font-semibold font-heading shadow-sm hover:opacity-90 liquid-sheen transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Starter Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

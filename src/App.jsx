import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GuideSection from './components/GuideSection'
import PipelineSection from './components/PipelineSection'
import RolesSection from './components/RolesSection'
import McpHub from './components/McpHub'
import GatesAudit from './components/GatesAudit'
import StarterKitSection from './components/StarterKitSection'
import CommunityShowcase from './components/CommunityShowcase'
import Footer from './components/Footer'
import PromptModal from './components/PromptModal'

export default function App() {
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-body antialiased selection:bg-[var(--text-primary)] selection:text-[var(--bg-page)] transition-colors duration-300">
        {/* Top Navbar with Dynamic Dropdowns & Theme Toggle */}
        <Navbar onOpenPromptModal={() => setIsPromptModalOpen(true)} />

        {/* Main Content Area */}
        <main>
          {/* Hero Section with Interactive Terminal */}
          <Hero onOpenPromptModal={() => setIsPromptModalOpen(true)} />

          {/* Beginner Guide: What is Harness Engineering? */}
          <GuideSection />

          {/* The 6-Stage Autonomous Lifecycle */}
          <PipelineSection />

          {/* Skinny Agents, Fat Roles & Guardrails */}
          <RolesSection />

          {/* Model Context Protocol (MCP) Hub & Tool Sandboxing */}
          <McpHub />

          {/* Deterministic Quality Gates Simulator (G0-G5) */}
          <GatesAudit />

          {/* Application Starter Template & 60s Onboarding */}
          <StarterKitSection />

          {/* Falcons Community & Brand Showcase */}
          <CommunityShowcase />
        </main>

        {/* Footer */}
        <Footer />

        {/* Copyable Starter Prompt Modal */}
        <PromptModal
          isOpen={isPromptModalOpen}
          onClose={() => setIsPromptModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  )
}

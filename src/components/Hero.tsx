import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, Cpu, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-dark overflow-hidden py-16 md:py-24 lg:py-28 text-white">
      {/* Ambient Radial Illumination Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-electricCyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-electricCyan/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-electricCyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-electricCyan" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wide text-brand-electricCyan uppercase">
                ✦ AI-Native Software & Quality Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Build Smarter Software.<br />
              We Deliver{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-400 to-indigo-300">
                Quality You Can Trust.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              From scalable software products to mission-critical QA automation, SSAgentix.ai helps businesses build, test, and scale with confidence.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 backdrop-blur-md transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-brand-cyan" />
                <span>Schedule a QA Consultation</span>
              </a>
            </div>

            {/* 3 Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Low-Code Frameworks</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Playwright & TypeScript Core</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Enterprise Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Architecture & Telemetry Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    Execution Status: In Progress
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All Pass [Verification]
                </span>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 space-y-4 font-mono">
                
                {/* Node 1: SS HRMS Suite */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-brand-indigo">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">SS HRMS Suite</div>
                      <div className="text-[11px] text-slate-400">HRMS · Systems · Web/Core</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    ✓ CI/CD Deployed
                  </span>
                </div>

                {/* Flow Connector Line */}
                <div className="flex items-center justify-center my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-slate-700 to-brand-electricCyan" />
                </div>

                {/* Node 2: Qavanta QA Autonomy Node */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-brand-indigo/40 shadow-[0_0_15px_rgba(99,102,241,0.15)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-brand-purple">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-100">Qavanta QA Autonomy Node</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Autonomous Suite Generation & Self-Healing</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-cyan flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                    Active
                  </span>
                </div>

                {/* Execution Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase">Playwright</div>
                    <div className="text-xs font-bold text-brand-cyan">0.8s</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase">TypeScript</div>
                    <div className="text-xs font-bold text-indigo-300">38 Tests</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase">Python AI</div>
                    <div className="text-xs font-bold text-purple-300">12 Tests</div>
                  </div>
                </div>

                {/* Console Log Strip */}
                <div className="p-3 rounded-xl bg-black/60 border border-slate-800/80 text-[11px] text-slate-300 flex items-center gap-2 overflow-x-auto">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span className="truncate">100% Tests Pass [API, E2E] · Build passed [0 spills] · STABLE</span>
                </div>

                {/* Illustrative Architecture Demo Label (Safeguard 6 Compliance) */}
                <div className="text-right pt-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    ✦ Illustrative Architecture Demo · Not Live Production Telemetry
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

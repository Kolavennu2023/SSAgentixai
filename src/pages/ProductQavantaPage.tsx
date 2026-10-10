import React, { useEffect } from 'react';
import { 
  Terminal, 
  Clock, 
  AlertTriangle, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  GitPullRequest,
  SearchCheck,
  Zap
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const ProductQavantaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapModules = [
    {
      icon: Terminal,
      title: 'Autonomous Test Suite Synthesis',
      phase: 'Under Active R&D',
      description: 'Generative test synthesis creating type-safe Playwright test scripts directly from user journey specifications and UI interactions.',
    },
    {
      icon: Zap,
      title: 'Self-Healing Test Scripts',
      phase: 'Experimental Prototype',
      description: 'Dynamic element re-anchoring to detect DOM selector drift during build executions and prevent brittle script breakage.',
    },
    {
      icon: GitPullRequest,
      title: 'Predictive Defect Modeling',
      phase: 'Research Phase',
      description: 'Analyzing code change mutations to predict potential regression vectors before pull requests merge into main branches.',
    },
    {
      icon: SearchCheck,
      title: 'Execution Flakiness Diagnostic',
      phase: 'Specification Phase',
      description: 'Deep trace analytics to isolate non-deterministic test steps, timing race conditions, and network dependency timeouts.',
    },
    {
      icon: Cpu,
      title: 'Neural DOM Re-Anchoring',
      phase: 'Prototype Evaluation',
      description: 'Computer-vision and semantic tree analysis to locate relocated buttons and input fields without manual selector rewrites.',
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      
      {/* Product Hero */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/#products" className="hover:text-white transition-colors">Products</a>
            <span>/</span>
            <span className="text-amber-400">Qavanta</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              {/* Prominent Under Development Warning Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                <span>✦ Under Development · Private Beta</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Qavanta
                <span className="block text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-indigo-300 mt-2">
                  AI-Native QA Test Engineering Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Our flagship research platform engineered to pioneer autonomous test generation, neural DOM selector re-anchoring, and predictive defect analytics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:brightness-105 shadow-lg shadow-amber-500/20 transition-all transform active:scale-95"
                >
                  <span>Join Private Beta Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                >
                  <span>View R&D Roadmap</span>
                </a>
              </div>

              {/* Development Status Strip */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/40">
                  <Clock className="w-3.5 h-3.5" />
                  Status: In Active Engineering
                </span>
                <span>·</span>
                <span>Self-Healing Engine</span>
                <span>·</span>
                <span>LLM Test Synthesis</span>
              </div>
            </div>

            {/* Right Column: Prototype Architecture Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/90 border border-amber-500/30 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    Qavanta Autonomy Synthesis Log
                  </span>
                  <span className="text-amber-400 font-semibold">RE-ANCHORED</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="text-[11px] text-slate-400">SYNTHESIS LOG :: QA-AUTONOMY</div>
                  <div className="text-brand-cyan">✦ Detected dynamic DOM selector drift on checkout CTA</div>
                  <div className="text-indigo-300">✦ Neural re-anchored to semantic bounding box [score: 0.994]</div>
                  <div className="text-emerald-400">✓ Test execution continued without flakiness failure</div>
                </div>

                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-200">
                  <strong>R&D Prototype Note:</strong> Features displayed above reflect verified experimental laboratory builds currently undergoing pilot stabilization.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explicit Transparency Notice */}
      <section className="py-6 bg-amber-50 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-amber-900 font-medium">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              <strong>Development Notice:</strong> Qavanta is an ongoing research and engineering initiative at SSAgentix.ai. We are onboarding select enterprise partners for private beta validation before general release.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Modules */}
      <section id="roadmap" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Architecture Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Core Research & Development Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Targeting the most demanding challenges in continuous test maintenance and flaky pipeline runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        {module.phase}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                      {module.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {module.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Beta Objectives */}
      <section className="py-20 bg-brand-lightBg border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-semibold uppercase tracking-wider">
                ✦ Pilot Participation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Join the Private Beta Testing Cohort
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Partner with our engineering team to evaluate autonomous test synthesis and self-healing test execution on your non-production staging environments.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">Early access to test suite synthesis prototypes.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">Direct collaboration with SSAgentix.ai software and QA architects.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">Custom benchmark reports on script maintenance and DOM drift reduction.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />

    </div>
  );
};

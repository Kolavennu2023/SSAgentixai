import React from 'react';
import { ArrowRight, Monitor, Network, Layers, Code2, GitBranch, Sparkles, MessageSquare } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ElementType;
}

export const QAServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'web-ui',
      title: 'Web UI Automation',
      description: 'Modern cross-browser testing suites with Playwright and Selenium tailored for high-speed execution and zero flake.',
      tag: 'Parallel Cross-Browser Execution',
      icon: Monitor,
    },
    {
      id: 'api-testing',
      title: 'API & Integration Testing',
      description: 'Comprehensive REST, SOAP, and GraphQL contract verification, payload schema validation, and mock services simulation.',
      tag: 'Automated Contract Verification',
      icon: Network,
    },
    {
      id: 'regression',
      title: 'Regression & Cross-Device',
      description: 'Deterministic regression suites to validate compatibility and core journeys before deploying to production.',
      tag: 'Zero SPILL Regression Suites',
      icon: Layers,
    },
    {
      id: 'frameworks',
      title: 'Python & TypeScript Frameworks',
      description: 'Maintainable, type-safe, modular test architectures customized for your stack with Page Object Models and custom runners.',
      tag: 'Production-Grade Test Harness',
      icon: Code2,
    },
    {
      id: 'cicd-gates',
      title: 'CI/CD Quality Gates',
      description: 'Automated pipeline triggers embedded in GitHub Actions, GitLab CI, and Jenkins that halt breaking changes instantly.',
      tag: 'Automated PR Pull-Request Checks',
      icon: GitBranch,
    },
    {
      id: 'ai-qa',
      title: 'AI-Assisted QA Practices',
      description: 'Leverage automated testing patterns that synthesize test scenarios and generate robust selectors based on system logic.',
      tag: 'AI-Assisted Test Synthesizer',
      icon: Sparkles,
    },
  ];

  return (
    <section id="qa-services" className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-indigo/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-electricCyan/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 lg:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-brand-electricCyan/40 text-brand-electricCyan font-mono text-xs font-semibold uppercase tracking-wider">
            ✦ Quality Engineering Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ship Faster. Test Smarter.<br />Release with Confidence.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Ensure engineering teams execute with robust automation frameworks, continuous quality gates, and automated test execution across complex architectures.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-brand-electricCyan mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal mb-5">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-medium text-brand-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>{service.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategy Consultation Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-electricCyan/10 border border-brand-electricCyan/30 flex items-center justify-center text-brand-electricCyan shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a Tailored QA Automation Strategy?</h4>
              <p className="text-sm text-slate-400">Let's speak about your testing pipelines and build customized test suites.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-electricCyan to-blue-600 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all shrink-0 active:scale-95"
          >
            <span>Schedule a Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

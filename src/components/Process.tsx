import React from 'react';
import { ArrowRight, Search, Palette, Terminal, Rocket } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand current architecture, identify critical workflows, plan metrics, and target technical parameters.',
      deliverable: 'Key Deliverable: Scoping Matrix',
      icon: Search,
    },
    {
      number: '02',
      title: 'Design',
      description: 'Define user journeys, system architecture, data models, and a comprehensive quality assurance test strategy.',
      deliverable: 'Key Deliverable: Blueprint & Architecture',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Build & Test',
      description: 'Implement modular product code or technical automated testing, sprint reviews, and integration verification.',
      deliverable: 'Key Deliverable: CI/CD Pipeline & Suites',
      icon: Terminal,
    },
    {
      number: '04',
      title: 'Deliver & Improve',
      description: 'Seamless release deployment, production health monitoring, user feedback loops, and continuous optimization.',
      deliverable: 'Key Deliverable: Production Deployment',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-brand-lightBg text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
            ✦ Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How We Work
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            A disciplined, four-phase delivery lifecycle designed for rapid deployment and dependable scale.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-brand-indigo text-white flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-indigo">
                    <span>{step.deliverable}</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

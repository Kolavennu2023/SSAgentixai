import React from 'react';
import { Briefcase, RefreshCw, ShieldCheck, Cpu, Boxes, MessageCircle } from 'lucide-react';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      id: 'business-focused',
      title: 'Business-Focused Engineering',
      description: 'Solutions engineered to solve tangible operational challenges, prioritizing real ROI and outcomes over unnecessary complexity.',
      icon: Briefcase,
    },
    {
      id: 'maintainable-automation',
      title: 'Maintainable & Reliable Automation',
      description: 'Clean test architectures designed to ensure low script flakiness, fast execution, and clear visibility with zero maintenance bottlenecks.',
      icon: RefreshCw,
    },
    {
      id: 'quality-delivery',
      title: 'Quality Built Into Delivery',
      description: 'Rigorous automated testing woven into every sprint iteration rather than hastily bolted on at the deadline.',
      icon: ShieldCheck,
    },
    {
      id: 'practical-ai',
      title: 'Practical AI Adoption',
      description: 'Thoughtful integration of AI capabilities that deliver measurable productivity gains, avoiding superficial marketing hype.',
      icon: Cpu,
    },
    {
      id: 'scalable-architecture',
      title: 'Scalable Software Architecture',
      description: 'Built to empower foundation reliability, handling business transaction volumes, complex systems, and concurrent users.',
      icon: Boxes,
    },
    {
      id: 'clear-communication',
      title: 'Clear Communication',
      description: 'Transparent sprint visibility, direct engineering team syncs, and documented deliverables with straightforward status reporting.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-brand-purple font-mono text-xs font-semibold uppercase tracking-wider">
            ✦ Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose SSAgentix.ai?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            A pragmatic approach to software development and engineering quality.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-brand-indigo flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

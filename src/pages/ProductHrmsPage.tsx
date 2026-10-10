import React, { useEffect } from 'react';
import { 
  Users, 
  Clock, 
  CreditCard, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  FileSpreadsheet
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const ProductHrmsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreFeatures = [
    {
      icon: Users,
      title: 'Employee Lifecycle Management',
      description: 'Centralized employee profiles, structured onboarding workflows, document storage, and compliant offboarding processes tailored for modern enterprises.',
    },
    {
      icon: Clock,
      title: 'Automated Attendance & Leave Tracking',
      description: 'Real-time shift management, multi-policy leave balance tracking, holiday calendar integration, and automated approval workflows.',
    },
    {
      icon: CreditCard,
      title: 'Deterministic Payroll Automation',
      description: 'Configurable salary structures, statutory tax deductions, automated payroll runs, and instant digital payslip generation with zero calculation discrepancies.',
    },
    {
      icon: BarChart3,
      title: 'Workforce Analytics & Reporting',
      description: 'Actionable executive dashboards providing headcount growth trends, department utilization insights, and real-time attendance logs.',
    },
    {
      icon: ShieldCheck,
      title: 'Role-Based Access Governance',
      description: 'Granular permissions safeguarding sensitive compensation data, employee PII protection, and immutable audit trails for compliance.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Seamless Data Integration',
      description: 'Flexible export and import capabilities supporting banking disbursement sheets, standard CSV formats, and accounting system sync.',
    },
  ];

  const businessBenefits = [
    'Reduced administrative payroll cycle turnaround time from days to minutes.',
    'Eliminated manual spreadsheet reconciliation errors across department leaves.',
    'Single source of truth for all human resources records, policies, and contracts.',
    'Scalable architecture supporting growing multi-branch operations and remote workforce structures.',
  ];

  return (
    <div className="bg-white text-slate-900">
      
      {/* Product Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-24 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-electricCyan/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/#products" className="hover:text-white transition-colors">Products</a>
            <span>/</span>
            <span className="text-brand-cyan">SS HRMS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Product Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-brand-indigo" />
                <span>Enterprise Workforce Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                SS HRMS
                <span className="block text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-300 mt-2">
                  Human Resource Management System
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                An enterprise-grade software platform engineered to unify workforce records, streamline attendance management, and execute deterministic, discrepancy-free payroll automation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95"
                >
                  <span>Request SS HRMS Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                >
                  <span>Explore Modules</span>
                </a>
              </div>

              {/* Status Tags */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Active Enterprise Product
                </span>
                <span>·</span>
                <span>Multi-Tenant Architecture</span>
                <span>·</span>
                <span>Deterministic Payroll Engine</span>
              </div>
            </div>

            {/* Right Column: Visual Architecture Terminal */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    HRMS Core Operations
                  </span>
                  <span className="text-brand-cyan">Operational</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Workforce Lifecycle</span>
                    <span className="text-emerald-400 font-semibold">Active Profiles</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Shift & Attendance</span>
                    <span className="text-indigo-300 font-semibold">Real-Time Sync</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Automated Payroll</span>
                    <span className="text-brand-cyan font-semibold">Scheduled Cycle</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-[11px] text-indigo-200">
                  <strong>Scalability Guarantee:</strong> Engineered to handle high-concurrency employee shifts and large transaction batches with zero downtime.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ System Overview
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Purpose-Built for Modern Organizational Scale
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Managing employee records, leave calculations, and payroll cycles across multiple departments requires absolute data integrity. SS HRMS replaces error-prone spreadsheets with an integrated, secure software system that automates repetitive administrative tasks while ensuring strict data privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-brand-purple font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Functional Modules
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Verified Core Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Engineered with clean architectural patterns to support full workforce visibility and deterministic operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-brand-indigo flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-brand-lightBg border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
                ✦ Enterprise Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Delivering Measurable Operational Efficiency
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Eliminate administrative friction and empower HR teams to focus on workforce development rather than routine data entry.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                {businessBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <ContactSection />

    </div>
  );
};

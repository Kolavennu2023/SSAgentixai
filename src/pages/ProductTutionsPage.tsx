import React, { useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Receipt, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  School
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const ProductTutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreFeatures = [
    {
      icon: Calendar,
      title: 'Smart Batch & Schedule Management',
      description: 'Dynamic class scheduling, conflict-free faculty assignment, room allocation, and automated timetable updates.',
    },
    {
      icon: TrendingUp,
      title: 'Student Progression Analytics',
      description: 'Continuous assessment tracking, attendance monitoring, performance growth graphs, and individual student academic records.',
    },
    {
      icon: MessageSquare,
      title: 'Automated Parent-Tutor Communications',
      description: 'Direct SMS and email alerts for student attendance, upcoming test schedules, report cards, and institutional announcements.',
    },
    {
      icon: Receipt,
      title: 'Fee Tracking & Payment Management',
      description: 'Flexible installment scheduling, automated invoice generation, payment receipt logging, and overdue fee alerts.',
    },
    {
      icon: BookOpen,
      title: 'Curriculum & Assignment Workflow',
      description: 'Syllabus milestone tracking, digital study material distribution, homework submission logs, and teacher notes archive.',
    },
    {
      icon: School,
      title: 'Multi-Branch Tuition Administration',
      description: 'Centralized administration dashboard for managing multiple coaching centers or branches under a single platform instance.',
    },
  ];

  const businessBenefits = [
    'Eliminated scheduling overlaps between tutors, classrooms, and subject batches.',
    'Enhanced parent trust through real-time attendance and academic progress transparency.',
    'Streamlined institutional cash flow with automated fee reminder triggers.',
    'Centralized student lifecycle management from initial registration to course completion.',
  ];

  return (
    <div className="bg-white text-slate-900">
      
      {/* Product Hero */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-electricCyan/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="/#products" className="hover:text-white transition-colors">Products</a>
            <span>/</span>
            <span className="text-brand-cyan">SS Tutions</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-brand-indigo" />
                <span>Education Management Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                SS Tutions
                <span className="block text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-300 mt-2">
                  Tuition & Education Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                A purpose-built education operations platform designed for coaching institutes, tuition centers, and academies to coordinate batches, track academic progress, and automate parent communication.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95"
                >
                  <span>Request SS Tutions Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                >
                  <span>Explore Features</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Production Ready
                </span>
                <span>·</span>
                <span>Batch Optimization</span>
                <span>·</span>
                <span>Automated Fee Tracking</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Institute Operational Stream
                  </span>
                  <span className="text-brand-cyan">Active Engine</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Batches & Rooms</span>
                    <span className="text-indigo-300 font-semibold">Conflict-Free</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Student Progress</span>
                    <span className="text-emerald-400 font-semibold">Continuous Metrics</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Parent Alerts</span>
                    <span className="text-brand-cyan font-semibold">Real-Time Sync</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-900/50 text-[11px] text-purple-200">
                  <strong>Coaching Scale:</strong> Designed to support independent centers or multi-branch coaching chains with role-isolated dashboards for admins, teachers, and parents.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Academic Overview
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Modern Operational Rigor for Educational Institutions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Coaching centers and educational academies manage complex schedules involving diverse subject batches, tutor availability, dynamic student registrations, and periodic fee collections. SS Tutions brings structure, automation, and real-time oversight to these operations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-brand-purple font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Functional Modules
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Verified Operational Features
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Engineered to minimize administrative time and enhance instructional focus.
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

      {/* Benefits */}
      <section className="py-20 bg-brand-lightBg border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
                ✦ Institute Growth
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Measurable Value for Tutors and Administrators
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Replace manual register entries and fragmented chat channels with a unified, transparent operating system.
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

      <ContactSection />

    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, GraduationCap, Store, Sparkles, Clock } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  isUnderDev?: boolean;
  ctaText: string;
  ctaLink: string;
}

export const ProductEcosystem: React.FC = () => {
  const products: ProductItem[] = [
    {
      id: 'hrms',
      name: 'SS HRMS',
      category: 'Human Resource Management',
      description: 'Streamlined workforce management, attendance tracking, lifecycle analytics, and payroll automation engineered for enterprise stability.',
      tags: ['Workforce AI', 'Payroll Automation', 'Attendance Tracking'],
      icon: Building2,
      ctaText: 'Explore SS HRMS Details',
      ctaLink: '/products/hrms',
    },
    {
      id: 'tuitions',
      name: 'SS Tutions',
      category: 'Education & Tuition Platform',
      description: 'Unified scheduling, student enrollment management, faculty allocation, and parent communications for educational institutions.',
      tags: ['Batch Scheduling', 'Student Progress', 'Course Operations'],
      icon: GraduationCap,
      ctaText: 'Explore SS Tutions Details',
      ctaLink: '/products/ss-tutions',
    },
    {
      id: 'supermarket',
      name: 'SS Supermarket',
      category: 'Retail & Inventory Engine',
      description: 'Comprehensive cloud billing, fast point-of-sale management, inventory tracking, and multi-location retail operations.',
      tags: ['Cloud POS', 'Inventory Sync', 'Multi-Store'],
      icon: Store,
      ctaText: 'Explore SS Supermarket Details',
      ctaLink: '/products/ss-supermarket',
    },
    {
      id: 'qavanta',
      name: 'Qavanta',
      category: 'AI-Native QA Test Platform · Private Beta',
      description: 'Intelligent test suite generation, autonomous script maintenance, defect prediction, and end-to-end execution observability.',
      tags: ['Autonomous Generation', 'Self-Healing'],
      icon: Sparkles,
      isUnderDev: true,
      ctaText: 'View Qavanta R&D & Waitlist',
      ctaLink: '/qavanta',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-brand-lightBg text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-brand-indigo font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Software Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Technology Built for Real Business Needs
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Purpose-engineered domain solutions and intelligent testing platforms designed for operational efficiency.
            </p>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo hover:text-brand-purple transition-colors shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded"
          >
            <span>Explore Our Product Roadmap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  product.isUnderDev 
                    ? 'border-amber-300/80 shadow-amber-500/5' 
                    : 'border-slate-200/80 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Top Badge (if Under Development) */}
                {product.isUnderDev && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-mono text-[11px] font-semibold tracking-wide">
                      <Clock className="w-3 h-3 text-amber-500" />
                      UNDER DEVELOPMENT
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    product.isUnderDev
                      ? 'bg-amber-100/70 text-amber-700'
                      : 'bg-indigo-50 text-brand-indigo'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-brand-purple mb-4">
                    {product.category}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Footer with Tags and Link */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={product.ctaLink}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded ${
                      product.isUnderDev
                        ? 'text-amber-700 hover:text-amber-800'
                        : 'text-brand-indigo hover:text-brand-purple'
                    }`}
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { 
  Store, 
  ShoppingCart, 
  Boxes, 
  BarChart2, 
  Truck, 
  BadgePercent, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const ProductSupermarketPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreFeatures = [
    {
      icon: ShoppingCart,
      title: 'High-Speed Cloud POS',
      description: 'Rapid barcode scanning, offline-resilient cashier terminals, split billing, digital receipts, and sub-second transaction processing.',
    },
    {
      icon: Boxes,
      title: 'Real-Time Inventory Reconciliation',
      description: 'Automated stock decrements on checkout, batch number and expiry date tracking, low-stock trigger alerts, and shrinkage control.',
    },
    {
      icon: Truck,
      title: 'Multi-Store & Warehouse Replenishment',
      description: 'Centralized purchase order management, inter-store stock transfers, supplier goods receipt notes (GRN), and warehouse tracking.',
    },
    {
      icon: BadgePercent,
      title: 'Dynamic Pricing & Promotions Engine',
      description: 'Configurable promotional rules, bundle discounts, seasonal pricing, loyalty point accumulation, and automated tax compliance.',
    },
    {
      icon: BarChart2,
      title: 'Sales Performance & Margin Analytics',
      description: 'Executive readouts detailing hourly turnover, gross profit margins per SKU, fast-moving items, and dead-stock identification.',
    },
    {
      icon: Zap,
      title: 'Hardware & Scanner Integration',
      description: 'Plug-and-play support for thermal receipt printers, electronic weighing scales, hand-held scanners, and cash drawers.',
    },
  ];

  const businessBenefits = [
    'Reduced checkout queue wait times with sub-second barcode scans and payment flows.',
    'Eliminated surprise stockouts on high-demand essentials through automated reorder alerts.',
    'Minimized inventory shrinkage and expired stock write-offs with batch tracking.',
    'Unified management across single outlets and expanding multi-location supermarket chains.',
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
            <span className="text-brand-cyan">SS Supermarket</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider">
                <Store className="w-3.5 h-3.5 text-brand-indigo" />
                <span>Retail & Inventory Operating System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                SS Supermarket
                <span className="block text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-300 mt-2">
                  Cloud POS & Retail Inventory Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                A high-performance retail management engine combining high-speed cloud billing, real-time multi-location inventory reconciliation, and intelligent replenishment workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95"
                >
                  <span>Request SS Supermarket Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                >
                  <span>Explore Retail Modules</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Production Ready
                </span>
                <span>·</span>
                <span>High-Speed Cloud POS</span>
                <span>·</span>
                <span>Live Inventory Sync</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    POS Cloud Network
                  </span>
                  <span className="text-brand-cyan">Synchronized</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Terminal Sync Latency</span>
                    <span className="text-emerald-400 font-semibold">&lt; 14ms Global</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">SKU Barcode Scan</span>
                    <span className="text-indigo-300 font-semibold">Instant Response</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">Offline Resilience</span>
                    <span className="text-brand-cyan font-semibold">Auto-Reconcile</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-900/50 text-[11px] text-cyan-200">
                  <strong>Retail Throughput:</strong> Built for fast-paced retail checkout counters during peak holiday and weekend shopping rushes with zero delay.
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
              ✦ Architecture Overview
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Engineered for High-Velocity Retail Operations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Supermarket and retail chains operate in high-density environments where counter speed directly impacts customer satisfaction and accurate inventory drives profitability. SS Supermarket connects point-of-sale hardware with back-office inventory and procurement pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-brand-purple font-mono text-xs font-semibold uppercase tracking-wider">
              ✦ Operational Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Verified Retail Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Purpose-built tools to optimize billing throughput, protect margins, and prevent inventory stockouts.
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
                ✦ Commercial Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Measurable Impact on Retail Margins
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Deliver fast customer checkout while gaining granular control over stock levels and supplier pricing.
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

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-xl p-1"
              aria-label="SSAgentix.ai Home"
            >
              <div className="p-1 px-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="SSAgentix.ai Original Logo" 
                  className="h-8 md:h-9 w-auto object-contain" 
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                SSAgentix<span className="text-brand-purple">.ai</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Building practical AI-native software products and reliable QA engineering solutions for modern enterprises.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-purple" />
              <span>Headquartered in Bengaluru, India</span>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/hrms" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  SS HRMS
                </Link>
              </li>
              <li>
                <Link to="/products/ss-tutions" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  SS Tutions
                </Link>
              </li>
              <li>
                <Link to="/products/ss-supermarket" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  SS Supermarket
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Link to="/qavanta" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Qavanta
                </Link>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-semibold">
                  Under Dev
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: QA Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              QA Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#qa-services" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Web UI Automation
                </a>
              </li>
              <li>
                <a href="/#qa-services" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  API & Contract Testing
                </a>
              </li>
              <li>
                <a href="/#qa-services" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Python & TS Frameworks
                </a>
              </li>
              <li>
                <a href="/#qa-services" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  CI/CD Pipelines
                </a>
              </li>
              <li>
                <a href="/#qa-services" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Cross-Device Testing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#why-us" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Why SSAgentix
                </a>
              </li>
              <li>
                <a href="/#how-we-work" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SSAgentix.ai. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">Privacy Policy</a>
            <a href="/" className="hover:text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

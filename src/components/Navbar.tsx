import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Products', href: isHome ? '#products' : '/#products', isRoute: false },
    { name: 'QA Automation Services', href: isHome ? '#qa-services' : '/#qa-services', isRoute: false },
    { name: 'Why Us', href: isHome ? '#why-us' : '/#why-us', isRoute: false },
    { name: 'How We Work', href: isHome ? '#how-we-work' : '/#how-we-work', isRoute: false },
    { name: 'Contact Us', href: '#contact', isRoute: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo with Exact Preserved Aspect Ratio and Dark Housing Badge */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-xl p-1"
            aria-label="SSAgentix.ai Home"
          >
            <div className="p-1 px-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="SSAgentix.ai Original Logo" 
                className="h-8 md:h-9 w-auto object-contain" 
              />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900">
              SSAgentix<span className="text-brand-purple">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.isRoute && location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo ${
                    isActive
                      ? 'bg-indigo-50 text-brand-indigo font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div 
              tabIndex={0}
              role="button"
              aria-label="User Profile"
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-purple rounded-lg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation" 
          className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-purple shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

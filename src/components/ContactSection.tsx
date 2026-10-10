import React, { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('QA Automation Services (Playwright / API / CI)');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Honest handling: prepares real draft without fake submission claims
  const handleDirectEmailDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[SSAgentix.ai Inquiry] ${service} - ${fullName || 'New Client'}`);
    const body = encodeURIComponent(`Full Name: ${fullName}\nWork Email: ${email}\nArea of Interest: ${service}\n\nRequirements & Message:\n${message}`);
    window.location.href = `mailto:contact@ssagentix.ai?subject=${subject}&body=${body}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('contact@ssagentix.ai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Dark Card Container */}
        <div className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle Ambient Radial Flare */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-indigo/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-electricCyan/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-brand-electricCyan/40 text-brand-electricCyan font-mono text-xs font-semibold uppercase tracking-wider">
                  ✦ GET IN TOUCH
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Have a Product Idea or QA Challenge?
                </h2>
                <p className="text-base text-slate-400 leading-relaxed font-normal">
                  Let's discuss how SSAgentix.ai can help turn your requirements into dependable, modern software solutions.
                </p>
              </div>

              {/* Direct Inquiries Channel */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-brand-indigo shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Direct Inquiries:</div>
                    <a 
                      href="mailto:contact@ssagentix.ai" 
                      className="text-base font-semibold text-brand-electricCyan hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan rounded"
                    >
                      contact@ssagentix.ai
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  type="button"
                  aria-label="Copy email address"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-cyan"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Headquarters & Operations */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-brand-indigo shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Headquarters & Operations:</div>
                  <div className="text-sm font-semibold text-slate-200">
                    Bengaluru, India · Global Remote Teams
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    Available globally for enterprise software and QA automation client engagements.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleDirectEmailDraft} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="user-full-name" className="text-xs font-mono font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      id="user-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="user-work-email" className="text-xs font-mono font-medium text-slate-300">
                      Work Email
                    </label>
                    <input
                      id="user-work-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="service-select" className="text-xs font-mono font-medium text-slate-300">
                    Area of Interest
                  </label>
                  <select
                    id="service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-colors"
                  >
                    <option value="QA Automation Services (Playwright / API / CI)">QA Automation Services (Playwright / API / CI)</option>
                    <option value="SS HRMS (Workforce Intelligence)">SS HRMS (Workforce Intelligence)</option>
                    <option value="SS Tutions (Education Platform)">SS Tutions (Education Platform)</option>
                    <option value="SS Supermarket (Retail & Cloud POS)">SS Supermarket (Retail & Cloud POS)</option>
                    <option value="Qavanta (Private Beta QA Platform)">Qavanta (Private Beta QA Platform)</option>
                    <option value="Custom Enterprise Software Development">Custom Enterprise Software Development</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="user-message" className="text-xs font-mono font-medium text-slate-300">
                    Message & Requirements
                  </label>
                  <textarea
                    id="user-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your technical challenge, test automation goals, or product requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-purple-600 hover:brightness-110 shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
                >
                  <span>Send Inquiry via Email</span>
                  <Send className="w-4 h-4" />
                </button>

                {/* Endpoint Notice (Honest safeguard - no fake submission claims) */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 text-[11px] text-slate-400">
                  <AlertCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>
                    Direct submissions are routed through your email client to <strong>contact@ssagentix.ai</strong>. Automated API endpoint integration is currently in development.
                  </span>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

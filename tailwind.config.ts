import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          darker: '#070A10',
          card: '#111827',
          cardBorder: '#1F2937',
          cyan: '#38BDF8',
          electricCyan: '#06B6D4',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          accent: '#4F46E5',
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
          subtext: '#94A3B8',
          lightSubtext: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-card': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'light-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} satisfies Config

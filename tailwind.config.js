/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          DEFAULT: 'var(--bg-brand)',
          soft: 'var(--bg-brand-soft)',
          strong: 'var(--bg-brand-strong)',
          softer: 'var(--bg-brand-softer)',
          medium: 'var(--bg-brand-medium)',
        },
        // Text Colors (mapping complex names)
        'fg-brand': 'var(--text-fg-brand)',
        heading: 'var(--text-heading)',
        body: 'var(--text-body)',
        'body-subtle': 'var(--text-body-subtle)',
        
        // Neutral/Backgrounds
        neutral: {
            primary: 'var(--bg-neutral-primary)',
            secondary: 'var(--bg-neutral-secondary)',
            tertiary: 'var(--bg-neutral-tertiary)',
        },
        border: {
            DEFAULT: 'var(--border-default)',
            brand: 'var(--border-brand)',
        }
      },
      fontFamily: {
        base: ['var(--font-base)', 'sans-serif'],
      },
      borderRadius: {
        base: 'var(--rounded-base)',
        lg: 'var(--rounded-lg)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

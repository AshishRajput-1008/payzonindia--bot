// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        smoothBounce: "smoothBounce 2s ease-in-out infinite", // <-- added
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        smoothBounce: {   // <-- added
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
}

export default config

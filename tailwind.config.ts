import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0A1628",
        "accent-violet": "#FF6B2B",
        "accent-sky": "#38BDF8",
        brand: {
          navy: "#0A1628",
          orange: "#FF6B2B",
          "orange-dark": "#E55A1F",
          "title-accent": "#FF6B2B",
          slate: "#1E3A5F",
          cream: "#FFF8F0",
          sky: "#38BDF8",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0A1628",
          muted: "#FFF8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1rem + 1.25vw, 1.75rem)",
        "fluid-2xl": "clamp(1.5rem, 1rem + 2.5vw, 2.5rem)",
        "fluid-3xl": "clamp(1.875rem, 1rem + 4.375vw, 3.75rem)",
        "fluid-4xl": "clamp(2.25rem, 1rem + 6.25vw, 5rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(255,107,43,0.15) 0%, transparent 60%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glass:
          "inset 0 0 0 0.5px rgba(255,255,255,0.1), 0 0 40px rgba(255,107,43,0.08)",
        "glass-hover":
          "inset 0 0 0 0.5px rgba(255,255,255,0.2), 0 0 60px rgba(255,107,43,0.15)",
        "glass-light":
          "0 1px 3px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

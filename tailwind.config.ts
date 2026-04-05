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
        // Antigravity OS Design System
        void: "#000000",
        "layer-1": "#0C0C0C",
        "layer-2": "#141414",
        "layer-3": "#1C1C1C",
        signal: "#0057FF",
        "signal-glow": "rgba(0, 87, 255, 0.3)",
        "text-primary": "#FFFFFF",
        "text-secondary": "#888888",
        "text-muted": "#555555",
        error: "#FF0011",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        // Display scale
        "display-xl": ["72px", { lineHeight: "1", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        // Body scale
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        // Label scale
        label: ["10px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.1em" }],
        // Mono scale
        "mono-xs": ["10px", { lineHeight: "1.4", fontWeight: "400" }],
        "mono-sm": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "mono-md": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "128px",
      },
      borderRadius: {
        // Antigravity: Hard edges only
        none: "0",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 87, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 87, 255, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
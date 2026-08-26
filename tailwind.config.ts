import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        ink: {
          950: "#07070A",
          900: "#0B0B10",
          800: "#12121A",
          700: "#1A1A24",
        },
        cream: "#F4EFE6",
        moss: "#8FA97F",
        rust: "#C97B4A",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-33.3333%)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;

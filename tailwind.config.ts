import type { Config } from "tailwindcss";

// Reads each token from a CSS custom property (defined in globals.css for
// :root and .dark) instead of a literal hex, so every existing className
// (bg-orange, border-violetSoft/60, text-hi, etc.) automatically repaints
// when the `dark` class toggles on <html> — no component files touched.
// This is Tailwind's own documented technique for CSS-variable-driven
// colors, and it works correctly at runtime, but the shipped `Config` type's
// `colors` field is typed as `string | RecursiveKeyValuePair<string, string>`
// with no function variant — so `tsc` rejects it if the object literal is
// constrained to `Config` at the point it's declared. Left untyped here
// (inferred naturally, functions and all) and cast to `Config` only at
// export, which sidesteps the mismatch instead of fighting it.
function withOpacityValue(variable: string) {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue === undefined) return `rgb(var(${variable}))`;
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Token names kept as-is (orange/violet/etc.) — see prior note in
        // tailwind.config history. Values now resolve through CSS vars.
        bg0: withOpacityValue("--color-bg0"),
        bg1: withOpacityValue("--color-bg1"),
        bg2: withOpacityValue("--color-bg2"),
        line: withOpacityValue("--color-line"),
        orange: withOpacityValue("--color-orange"),
        orangeDim: withOpacityValue("--color-orangeDim"),
        violet: withOpacityValue("--color-violet"),
        violetSoft: withOpacityValue("--color-violetSoft"),
        green: withOpacityValue("--color-green"),
        hi: withOpacityValue("--color-hi"),
        mid: withOpacityValue("--color-mid"),
        low: withOpacityValue("--color-low"),
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config as unknown as Config;

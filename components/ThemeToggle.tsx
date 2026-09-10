"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "./visuals/Icons";

// The actual class-on-<html> flip happens synchronously in the inline
// script in app/layout.tsx (runs before paint, avoids a flash of the wrong
// theme). This component's job is just to reflect that state in the UI and
// let the user change it. It reads document.documentElement on mount rather
// than initializing state to a guess, so it can't disagree with what the
// blocking script already applied.
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private browsing, disabled cookies, etc.)
      // — the toggle still works for this session, it just won't persist.
    }
  };

  // Render a same-sized placeholder until mounted so we never flash the
  // wrong icon for a frame before we know the real (script-applied) state.
  if (!mounted) {
    return <span className="inline-flex w-10 h-10 rounded-full border border-line bg-bg1/80 backdrop-blur-sm" aria-hidden="true" />;
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to night mode"}
      title={isDark ? "Switch to light mode" : "Switch to night mode"}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-bg1/80 backdrop-blur-sm text-mid hover:text-hi hover:border-orange/50 transition-colors"
    >
      {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </motion.button>
  );
}

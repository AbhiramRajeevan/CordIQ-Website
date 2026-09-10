"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";
import { ServiceIcon, IndustryIcon, PhoneIcon } from "./visuals/Icons";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    // A single threshold here would let scrollY hover right at that point
    // (very easy to do with momentum/inertial scrolling) and flip `scrolled`
    // back and forth on every tiny fluctuation — each flip re-triggers the
    // header's background/blur transition, which reads as a flicker/dim.
    // Two thresholds with a dead zone between them means the state can only
    // change by crossing a clear boundary, not by sitting near one.
    const onScroll = () => {
      setScrolled((prev) => {
        if (window.scrollY > 40) return true;
        if (window.scrollY < 15) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-[padding,background,border-color] duration-300 border-b ${
        scrolled
          ? "py-3 bg-bg0/80 backdrop-blur-md border-line"
          : "py-5 border-transparent"
      }`}
    >
      <nav className="max-w-[1180px] mx-auto px-8 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative w-[112px] h-[34px] block">
            <img
              src="/cordiq-logo-light.png"
              alt="CordIQ"
              className="absolute inset-0 w-full h-full block dark:hidden"
            />
            <img
              src="/cordiq-logo-dark.png"
              alt="CordIQ"
              className="absolute inset-0 w-full h-full hidden dark:block"
            />
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[14.5px] text-mid">
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 py-1.5 hover:text-hi transition-colors">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                  <div className="grid grid-cols-2 gap-1 p-3 rounded-2xl border border-line bg-bg1/95 backdrop-blur-md shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
                    {services.map((s) => {
                      const Icon = ServiceIcon[s.icon];
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-bg2 transition-colors"
                        >
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center text-orange flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span>
                            <span className="block text-[13.5px] font-semibold text-hi">{s.navLabel}</span>
                            <span className="block text-[12px] text-low mt-0.5">{s.navBlurb}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="flex items-center gap-1.5 py-1.5 hover:text-hi transition-colors">
              Industries
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                  <div className="grid gap-1 p-3 rounded-2xl border border-line bg-bg1/95 backdrop-blur-md shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
                    {industries.map((i) => {
                      const Icon = IndustryIcon[i.icon];
                      return (
                        <Link
                          key={i.slug}
                          href={`/industries/${i.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-bg2 transition-colors"
                        >
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center text-orange flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span>
                            <span className="block text-[13.5px] font-semibold text-hi">{i.navLabel}</span>
                            <span className="block text-[12px] text-low mt-0.5">{i.teaserBody}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>

          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="relative py-1.5 hover:text-hi transition-colors group">
                {l.label}
                <span className="absolute left-0 bottom-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3.5">
          <ThemeToggle />
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+917248962559"
            aria-label="Call CordIQ"
            title="Call CordIQ"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-bg1/80 backdrop-blur-sm text-mid hover:text-hi hover:border-orange/50 transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
          </motion.a>
          <Link href="/contact" className="hidden sm:block">
            <motion.span
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)]"
            >
              Get a Quote
            </motion.span>
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-10 h-10 flex-shrink-0 rounded-full border border-line bg-bg1/80 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="relative w-4 h-3">
              <span className={`absolute left-0 top-0 w-4 h-[1.5px] bg-hi rounded-full transition-all ${mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`} />
              <span className={`absolute left-0 bottom-0 w-4 h-[1.5px] bg-hi rounded-full transition-all ${mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-line bg-bg0"
          >
            <div className="max-w-[1180px] mx-auto px-8 py-5 flex flex-col gap-1 text-[15px]">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between py-3 font-semibold"
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden flex flex-col gap-0.5 pb-2"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 pl-3 text-mid border-l border-line"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                className="flex items-center justify-between py-3 font-semibold border-t border-line"
              >
                Industries
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden flex flex-col gap-0.5 pb-2"
                  >
                    {industries.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries/${i.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 pl-3 text-mid border-l border-line"
                      >
                        {i.navLabel}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-semibold border-t border-line"
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

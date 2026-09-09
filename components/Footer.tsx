import Link from "next/link";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";

const footerServices = services.slice(0, 5);

export function Footer() {
  return (
    <footer className="pt-[70px] pb-8 border-t border-line">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="relative w-[118px] h-[36px] block">
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
            <p className="text-mid text-sm leading-relaxed max-w-[280px] mb-5">
              Pune-based IT solutions company. Websites, software, CCTV, networking, office setup
              and AMC — built and maintained for growing businesses.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-line hover:border-low hover:bg-black/[0.045] transition-colors"
            >
              Get a Quote
            </a>
          </div>

          <div>
            <h4 className="text-[12.5px] uppercase tracking-wide text-low mb-4 font-mono font-medium">Services</h4>
            {footerServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors"
              >
                {s.navLabel}
              </Link>
            ))}
            <Link href="/services" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">
              All services
            </Link>
          </div>

          <div>
            <h4 className="text-[12.5px] uppercase tracking-wide text-low mb-4 font-mono font-medium">Industries</h4>
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">
                {i.navLabel}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-[12.5px] uppercase tracking-wide text-low mb-4 font-mono font-medium">Company</h4>
            <a href="/about" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">About</a>
            <a href="/work" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">Case Studies</a>
            <a href="/contact" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">Contact</a>
            <a href="tel:+917248962559" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">+91 72489 62559</a>
            <a href="mailto:info@cordiq.in" className="block text-mid text-sm mb-2.5 hover:text-hi transition-colors">info@cordiq.in</a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 pt-7 border-t border-line text-low text-[13px]">
          <span>© 2026 CordIQ · Pune, Maharashtra, India</span>
          <span className="font-mono">IT · WEB · CCTV · NETWORKING · AMC</span>
        </div>
      </div>
    </footer>
  );
}

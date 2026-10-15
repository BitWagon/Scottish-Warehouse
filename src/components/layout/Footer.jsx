
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const whatsappNumber = "923336516071";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Stay Updated
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Get useful business insights in your inbox
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Subscribe to our free newsletter for useful business
                updates, service information, practical tips and
                insights for businesses across the UK.
              </p>
            </div>

            <Link
              href="/newsletter"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Subscribe to Newsletter
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight"
            >
              Bra<span className="text-green-400">nd</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              We value transparency, integrity and open communication
              in building lasting client relationships.
            </p>

            <Link
              href="/quote"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-green-400 transition hover:text-green-300"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <Link href="/about" className="block transition hover:translate-x-1 hover:text-green-400">
                About Us
              </Link>
              <Link href="/contact" className="block transition hover:translate-x-1 hover:text-green-400">
                Contact Us
              </Link>
              <Link href="/faq" className="block transition hover:translate-x-1 hover:text-green-400">
                FAQ
              </Link>
              <Link href="/blog" className="block transition hover:translate-x-1 hover:text-green-400">
                Blog
              </Link>
              <Link href="/newsletter" className="block transition hover:translate-x-1 hover:text-green-400">
                Newsletter
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <Link href="/energy" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Energy
              </Link>
              <Link href="/energy/electricity" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Electricity
              </Link>
              <Link href="/energy/gas" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Gas
              </Link>
              <Link href="/connectivity" className="block transition hover:translate-x-1 hover:text-green-400">
                Connectivity
              </Link>
              <Link href="/connectivity/broadband" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Broadband
              </Link>
              <Link href="/connectivity/phone-line" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Phone Line
              </Link>
              <Link href="/water" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Water
              </Link>
              <Link href="/card-machine" className="block transition hover:translate-x-1 hover:text-green-400">
                Card Machines
              </Link>
            </div>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              More Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <Link href="/quote" className="block transition hover:translate-x-1 hover:text-green-400">
                Get a Quote
              </Link>
              <Link href="/contact" className="block transition hover:translate-x-1 hover:text-green-400">
                Contact Us
              </Link>
              <Link href="/water" className="block transition hover:translate-x-1 hover:text-green-400">
                Water Supply
              </Link>
              <Link href="/waste" className="block transition hover:translate-x-1 hover:text-green-400">
                Waste Management
              </Link>
              <Link href="/newsletter" className="block transition hover:translate-x-1 hover:text-green-400">
                Free Newsletter
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400">
              <a
                href="tel:+443336516071"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-green-400" />
                <span>03336516071</span>
              </a>

              <a
                href="mailto:accounts@brandsolution.co.uk"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-green-400" />
                <span className="break-all">
                  accounts@brandsolution.co.uk
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-green-400" />
                <span>United Kingdom</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex items-center gap-3 font-semibold text-green-400 transition hover:text-green-300"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Brand solution. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-green-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-green-400">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="transition hover:text-green-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


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
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight"
            >
              Scotish<span className="text-green-400">warehouse</span>
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
              <Link href="/water" className="block transition hover:translate-x-1 hover:text-green-400">
                Business Water
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
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400">
              <a
                href="tel:02080874905"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-green-400" />
                <span>02080874905</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40scotishwarehouse.co.uk&su=Business%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email support@scotishwarehouse.co.uk using Gmail"
                title="Open a new email in Gmail"
                className="group flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-green-400 transition group-hover:text-green-300" />
                <span className="break-all">
                  support@scotishwarehouse.co.uk
                  <span className="mt-1 block text-xs text-slate-500 transition group-hover:text-green-300">
                    Send us an email
                  </span>
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

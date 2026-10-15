
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Droplets,
  Menu,
  Phone,
  ShieldCheck,
  Wifi,
  X,
  Zap,
} from "lucide-react";

const servicesList = [
  {
    title: "Business Energy",
    description: "Electricity and gas solutions",
    href: "/energy",
    Icon: Zap,
  },
  {
    title: "Connectivity",
    description: "Broadband and phone services",
    href: "/connectivity",
    Icon: Wifi,
  },
  {
    title: "Business Water",
    description: "Water services for businesses",
    href: "/water",
    Icon: Droplets,
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const navLinkClass =
    "inline-flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-800";

  const mobileLinkClass =
    "flex w-full items-center rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-green-50 hover:text-green-800";

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top information bar */}
      <div className="bg-green-900 text-white">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-wide sm:text-sm">
            Business solutions designed around your needs
          </p>

          <Link
            href="/faq"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold transition-colors hover:text-green-200 sm:text-sm"
          >
            Help &amp; FAQs
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="YourBrand Business Solutions home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-white shadow-sm transition-colors group-hover:bg-green-800 sm:h-[50px] sm:w-[50px]">
              <Zap size={27} strokeWidth={2.4} />
            </span>

            <span className="flex flex-col">
              <span className="text-[21px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[25px]">
                YOUR<span className="text-green-700">BRAND</span>
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]">
                Business Solutions
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
                className={`${navLinkClass} ${
                  servicesOpen
                    ? "bg-green-50 text-green-800"
                    : ""
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`ml-0.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close services dropdown"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setServicesOpen(false)}
                  />

                  <div className="absolute left-1/2 top-full z-50 mt-4 w-[370px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.14)]">
                    <div className="border-b border-slate-100 bg-green-50/70 px-5 py-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-green-800">
                        Our Services
                      </p>
                      <p className="mt-1.5 text-sm text-slate-600">
                        Practical solutions for your business.
                      </p>
                    </div>

                    <div className="p-2.5">
                      {servicesList.map(({ title, description, href, Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenus}
                          className="group flex items-center gap-3 rounded-xl p-3.5 transition-colors hover:bg-green-50"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                            <Icon size={21} strokeWidth={1.9} />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-slate-800 group-hover:text-green-800">
                              {title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate-500">
                              {description}
                            </span>
                          </span>

                          <ArrowRight
                            size={17}
                            className="shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-green-700"
                          />
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-slate-100 px-5 py-3">
                      <Link
                        href="/quote"
                        onClick={closeMenus}
                        className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-950"
                      >
                        Find the right solution
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {mainLinks.slice(1).map(({ label, href }) => (
              <Link key={href} href={href} className={navLinkClass}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop contact and quote actions */}
          <div className="hidden shrink-0 items-center gap-4 xl:flex">
            <a
              href="tel:+923336516071"
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-800 transition-colors group-hover:bg-green-100">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-[11px] font-medium text-slate-500">
                  Speak to our team
                </span>
                <span className="mt-0.5 block text-sm font-bold text-slate-800 transition-colors group-hover:text-green-800">
                  Call Us
                </span>
              </span>
            </a>

            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-700 px-6 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Get a Quote
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Tablet and mobile quote + menu */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              href="/quote"
              className="hidden items-center justify-center gap-1.5 rounded-full bg-green-700 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-800 sm:inline-flex"
            >
              Get a Quote
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                setMobileServicesOpen(false);
              }}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:border-green-200 hover:bg-green-50 hover:text-green-800"
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation panel */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg sm:px-6 lg:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
              <Link
                href="/"
                onClick={closeMenus}
                className={mobileLinkClass}
              >
                Home
              </Link>

              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen((open) => !open)
                  }
                  aria-expanded={mobileServicesOpen}
                  className={`${mobileLinkClass} justify-between`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-green-100 pl-3">
                    {servicesList.map(({ title, description, href, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMenus}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-green-50"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                          <Icon size={20} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-800">
                            {title}
                          </span>
                          <span className="mt-1 block text-xs text-slate-500">
                            {description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.slice(1).map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenus}
                  className={mobileLinkClass}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/faq"
                onClick={closeMenus}
                className={mobileLinkClass}
              >
                Help &amp; FAQs
              </Link>

              <a
                href="tel:+923336516071"
                onClick={closeMenus}
                className={`${mobileLinkClass} gap-2`}
              >
                <Phone size={18} className="text-green-700" />
                Call Us
              </a>

              <div className="mt-4 rounded-2xl bg-green-50 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={22}
                    className="mt-0.5 shrink-0 text-green-800"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Let’s find the right solution
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Tell us what your business needs and get in touch with our team.
                    </p>
                  </div>
                </div>

                <Link
                  href="/quote"
                  onClick={closeMenus}
                  className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-700 px-5 text-sm font-bold text-white transition-colors hover:bg-green-800"
                >
                  Get a Free Quote
                  <ArrowRight size={17} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

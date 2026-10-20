import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Droplets,
  RefreshCw,
  BadgePoundSterling,
  Leaf,
  Gauge,
  Lightbulb,
  ArrowLeftRight,
} from "lucide-react";

const services = [
  {
    title: "Business Energy",
    description:
      "Review business electricity and gas quotes, including unit rates, standing charges, annual consumption and the difference between fixed and variable terms.",
    href: "/energy",
    icon: Zap,
  },
  {
    title: "Business Electricity",
    description:
      "Understand how meter type, daily charges, usage patterns and contract duration can affect your business electricity costs.",
    href: "/energy/electricity",
    icon: Zap,
  },
  {
    title: "Business Gas",
    description:
      "Compare business gas offers using estimated annual costs, unit prices, standing charges and your current contract end date.",
    href: "/energy/gas",
    icon: Zap,
  },
  {
    title: "Business Energy Contract Renewals",
    description:
      "Review your existing energy agreement before it expires. Explore electricity and gas renewal options, compare pricing structures and plan your next business energy contract with confidence.",
    href: "/energy",
    icon: RefreshCw,
  },
  {
    title: "Fixed & Variable Energy Tariffs",
    description:
      "Understand fixed and variable business energy tariffs. Compare unit rates, standing charges and contract terms to find an option suited to your usage and budget.",
    href: "/energy",
    icon: BadgePoundSterling,
  },
  {
    title: "Business Water",
    description:
      "Explore business water services with attention to your premises, usage requirements and available supply options.",
    href: "/water",
    icon: Droplets,
  },
  {
    title: "Renewable Business Electricity",
    description:
      "Explore renewable-backed electricity tariffs and understand how available greener energy choices could support your business sustainability goals.",
    href: "/energy/electricity",
    icon: Leaf,
  },
  {
    title: "Smart Meters & Energy Monitoring",
    description:
      "Learn how smart meters and consumption data can help you understand energy use, reduce estimated billing and identify opportunities to manage costs.",
    href: "/energy",
    icon: Gauge,
  },
  {
    title: "Business Energy Efficiency",
    description:
      "Discover practical ways to reduce unnecessary energy consumption, improve efficiency and make smarter use of electricity and gas across your premises.",
    href: "/energy",
    icon: Lightbulb,
  },
  {
    title: "Business Energy Switching Support",
    description:
      "Explore alternative suppliers with greater clarity. Review your current contract, understand the switching process and compare available options before deciding.",
    href: "/energy",
    icon: ArrowLeftRight,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Services"
          title="Business Solutions"
          highlight="Made Simpler"
          description="From business electricity and gas to contract renewals, greener tariffs and smarter energy use, explore your options with clear comparisons and practical guidance."
        />

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                      {service.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
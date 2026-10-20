import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Energy Solutions",
    description:
      "Compare business electricity and gas quotes with a clear view of fixed and variable contracts, unit rates, standing charges and renewal options.",
    href: "/energy",
  },
  {
    number: "02",
    title: "Connectivity",
    description:
      "Explore business broadband and phone options to support everyday operations, customer calls and reliable communication.",
    href: "/connectivity",
  },
  {
    number: "03",
    title: "Water Services",
    description:
      "Review business water services and explore options suited to your premises, usage and operational needs.",
    href: "/water",
  },
  {
    number: "04",
    title: "Payment Solutions",
    description:
      "Explore card payment solutions that help your business accept payments conveniently, whether in-store or on the move.",
    href: "/card-machine",
  },
];

export default function BusinessServices() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Business Services
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Energy and Essential Services, Explained Clearly
                </h2>

        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">

          {services.map((service) => (
            <Link
              href={service.href}
              key={service.number}
              className="group grid gap-6 py-10 md:grid-cols-[100px_1fr_auto] md:items-center"
            >

              <span className="text-sm font-bold text-blue-600">
                {service.number}
              </span>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  {service.description}
                </p>

              </div>

              <ArrowRight
                size={22}
                className="transition group-hover:translate-x-2"
              />

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}
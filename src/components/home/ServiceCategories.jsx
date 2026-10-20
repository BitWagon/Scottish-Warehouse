"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Leaf,
  Gauge,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    title: "Business Energy",
    description:
      "Compare business electricity and gas options with clearer guidance on tariffs, contract terms and potential costs.",
    icon: Zap,
    href: "/energy",
  },
  {
    title: "Business Electricity",
    description:
      "Explore electricity tariffs, unit rates and standing charges to find an option that suits your business.",
    icon: Gauge,
    href: "/energy/electricity",
  },
  {
    title: "Business Gas",
    description:
      "Review business gas tariffs, renewal dates and contract options with confidence.",
    icon: RefreshCw,
    href: "/energy/gas",
  },
  {
    title: "Greener Energy Choices",
    description:
      "Learn about renewable electricity options and practical steps towards more efficient energy use.",
    icon: Leaf,
    href: "/energy",
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Smarter energy choices for your business
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From electricity and gas comparisons to contract renewals and greener energy options,
            discover straightforward guidance to help your business make informed decisions.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <Link
                  href={service.href}
                  className="group block h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <ArrowUpRight
                      size={24}
                      className="text-slate-300 transition group-hover:text-blue-600"
                    />

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-blue-600">
                    Learn More →
                  </div>

                </Link>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}
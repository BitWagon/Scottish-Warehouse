
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Flame,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Energy | Scotishwarehouse",
  description:
    "Compare business electricity and gas options with Scotishwarehouse. Explore contracts and make informed decisions for your business.",
};

export default function EnergyPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Energy"
          title="Power your business"
          highlight="with confidence."
          description="Explore business electricity and gas options with transparent comparisons of pricing, contract terms and renewal choices."
        />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Why Compare?
              </span>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">
                  Business Energy, Made Easier to Understand
                </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                  Choosing an energy contract involves more than comparing one headline rate. We help you examine electricity and gas quotes, daily standing charges, estimated annual usage, fixed and variable pricing, and renewal dates before you decide.
                </p>

              <div className="mt-8 space-y-4">
                {[
                  "Explore electricity and gas options",
                  "Compare solutions around your requirements",
                  "Understand your available choices",
                  "Get support with the next steps",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                alt="Business energy and electricity infrastructure"
                className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white">
                  <Zap className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Business Energy Solutions
                </h3>

                <p className="mt-2 max-w-md text-slate-200">
                  Understand your options and make a more informed choice about your next business energy contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Energy Services
              </p>

              <h2 className="mt-4 text-4xl font-black text-black md:text-5xl">
                  Explore Electricity and Gas Options for Your Business
                </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <Link
                href="/energy/electricity"
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
                    alt="Business electricity and power"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                    <Zap size={27} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-black">
                    Business Electricity
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Review electricity quotations alongside your annual usage, standing charges, contract duration and any available renewable electricity options.
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-bold text-green-700">
                    Explore Electricity
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>

              <Link
                href="/energy/gas"
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                    alt="Business energy and gas infrastructure"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                    <Flame size={27} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-black">
                    Business Gas
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Compare business gas contracts by unit price, standing charge, estimated consumption and renewal conditions to understand the full picture.
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-bold text-green-700">
                    Explore Gas
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-black">
                A simpler approach to business energy
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Business-focused options",
                "Clear information",
                "Simple enquiry process",
                "Dedicated support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition hover:border-green-200 hover:bg-green-50"
                >
                  <CheckCircle2
                    size={22}
                    className="text-green-700"
                  />

                  <h3 className="mt-5 font-bold text-black">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern energy infrastructure"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Business Energy
                </p>

                <h2 className="mt-4 text-3xl font-black text-black md:text-5xl">
                  Energy Solutions Built Around Your Business
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Energy is an essential part of keeping your business
                  running. From offices and retail premises to hospitality,
                  manufacturing and professional services, every organisation
                  has different energy requirements.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you are reviewing an existing contract, approaching renewal or setting up a new premises, Scotishwarehouse helps you compare available options and understand the next steps before making a decision.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Explore electricity and gas options",
                    "Understand your available choices",
                    "Get support with the next steps",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-green-700"
                      />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-green-400">
                Ready to get started?
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                Find the right energy solution
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Share a few details about your business energy needs and take the next step towards comparing electricity and gas options.
              </p>
            </div>

            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

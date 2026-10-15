
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const benefits = [
  {
    title: "Business Water Solutions",
    description:
      "Explore water services designed around the requirements of your business.",
  },
  {
    title: "Clear Options",
    description:
      "Understand your options and choose a solution that fits your organisation.",
  },
  {
    title: "Flexible Approach",
    description:
      "Explore solutions based on your premises and business requirements.",
  },
  {
    title: "Business Focused",
    description:
      "Consider commercial water services that support your everyday business needs.",
  },
];

const waterServices = [
  {
    title: "Commercial Water Supply",
    description:
      "Explore business water supply options designed around your premises and day-to-day operations.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Wastewater Services",
    description:
      "Understand wastewater requirements and explore options suitable for your commercial premises.",
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Business Water Management",
    description:
      "Consider your water requirements as part of the wider needs of your organisation.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
  },
];

const businessTypes = [
  "Office and commercial premises",
  "Retail and customer-facing businesses",
  "Hospitality and food businesses",
  "Larger commercial organisations",
];

const greenButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/15";

const sectionLabel =
  "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-green-800";

export default function WaterPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-black">
        {/* Hero */}
        <ServiceHero
          badge="Business Water"
          title="Explore Commercial"
          highlight="Water Solutions"
          description="Explore commercial water services and discover options suitable for your business premises."
        />

        {/* Introduction and highlights */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-800">
                <Droplets size={17} />
                Commercial Water Services
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
                Water solutions for your business
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-600">
                Explore your options and find a solution that fits your
                business requirements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Explore commercial water services",
                "Understand your available options",
                "Find solutions suitable for your premises",
              ].map((item) => (
                <div
                  key={item}
                  className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-black">
                    {item}
                  </h3>

                  <div className="mt-5 h-1 w-12 rounded-full bg-green-600 transition-all group-hover:w-20" />
                </div>
              ))}
            </div>

            {/* Dark quote banner */}
            <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-black p-8 text-white md:p-14">
              <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-green-400 ring-1 ring-green-400/30">
                  <Droplets size={30} />
                </div>

                <h2 className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Explore Business Water Options
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                  Tell us about your requirements and explore water solutions
                  suitable for your organisation.
                </p>

                <Link href="/quote" className={`${greenButton} mt-8`}>
                  Get My Water Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About business water */}
        <section className="bg-green-50/70 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal direction="right">
                <div>
                  <span className={sectionLabel}>
                    <span className="h-1 w-8 rounded-full bg-green-600" />
                    Business Water
                  </span>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">
                    Find a water solution that works for your business
                  </h2>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Water is an essential part of many businesses. Whether you
                    operate an office, retail store, restaurant or larger
                    organisation, finding a suitable commercial water service
                    is an important consideration.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Explore water and wastewater options based on your
                    organisation's individual requirements.
                  </p>

                  <Link href="/quote" className={`${greenButton} mt-8`}>
                    Get a Free Quote
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div className="overflow-hidden rounded-3xl border border-green-200 bg-black shadow-xl shadow-green-900/10">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85"
                      alt="Clean water and water infrastructure"
                      className="h-72 w-full object-cover md:h-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg">
                        <Droplets size={26} />
                      </span>
                      <div>
                        <p className="font-bold text-white">
                          Commercial Water
                        </p>
                        <p className="mt-1 text-sm text-green-100">
                          Solutions for your business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                      Business water made simpler
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-300">
                      Explore options that can help your organisation manage
                      its commercial water requirements.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-green-500/40 hover:bg-white/10">
                        <Droplets className="h-6 w-6 text-green-400" />
                        <p className="mt-3 font-bold text-white">Water</p>
                        <p className="mt-1 text-sm text-neutral-400">
                          Business supply
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-green-500/40 hover:bg-white/10">
                        <CheckCircle2 className="h-6 w-6 text-green-400" />
                        <p className="mt-3 font-bold text-white">
                          Wastewater
                        </p>
                        <p className="mt-1 text-sm text-neutral-400">
                          Commercial needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className={sectionLabel}>
                <Droplets size={18} />
                Water Services
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
                Explore commercial water services
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                Different businesses have different water requirements.
                Explore the main areas to consider when reviewing commercial
                water services.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {waterServices.map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />

                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-3 py-2 text-xs font-bold text-green-800 shadow-sm">
                      <Droplets size={15} />
                      Business Water
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Droplets className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {service.description}
                    </p>

                    <Link
                      href="/quote"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-800 transition-colors hover:text-green-950"
                    >
                      Explore your options
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business types */}
        <section className="bg-green-50/70 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal direction="right">
                <div className="overflow-hidden rounded-3xl border border-green-200 shadow-xl shadow-green-900/10">
                  <img
                    src="https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1200&q=85"
                    alt="Water use in a commercial environment"
                    className="h-[380px] w-full object-cover md:h-[460px]"
                  />
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div>
                  <span className={sectionLabel}>
                    <span className="h-1 w-8 rounded-full bg-green-600" />
                    Commercial Water Requirements
                  </span>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">
                    Water services for different types of businesses
                  </h2>

                  <p className="mt-5 leading-8 text-neutral-700">
                    Water requirements can vary depending on the type of
                    business, the size of the premises and how water is used
                    throughout the working day.
                  </p>

                  <p className="mt-4 leading-8 text-neutral-700">
                    Offices, retail premises, hospitality businesses and other
                    commercial organisations can all have different
                    requirements.
                  </p>

                  <div className="mt-8 space-y-3">
                    {businessTypes.map((item) => (
                      <div
                        key={item}
                        className="group flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 transition-all hover:border-green-300 hover:shadow-md hover:shadow-green-900/5"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                          <CheckCircle2 size={20} />
                        </span>

                        <span className="font-semibold text-neutral-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className={sectionLabel}>
                <Droplets size={18} />
                Benefits
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
                Why explore business water options?
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                Understanding your options can help you make informed
                decisions about your business services.
              </p>
            </div>

            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold text-black">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Final call to action */}
        <Reveal>
          <section className="relative overflow-hidden bg-green-800 py-20">
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                <Droplets size={34} />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Need help with your business water requirements?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
                Tell us about your business and explore suitable water service
                options.
              </p>

              <Link
                href="/quote"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-extrabold text-green-900 shadow-lg transition-all hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}


"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/forms/QuoteForm";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Wifi,
  Droplets,
  Recycle,
  Wallet,
  ShieldCheck,
  ClipboardList,
  MessageSquare,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Business Energy",
    description:
      "Explore electricity and gas options that suit your business requirements.",
  },
  {
    icon: Wifi,
    title: "Business Connectivity",
    description:
      "Explore broadband and phone services to keep your business connected.",
  },
  {
    icon: Droplets,
    title: "Business Water",
    description:
      "Find commercial water services suitable for your premises.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description:
      "Explore waste collection and management solutions for your business.",
  },
  {
    icon: Wallet,
    title: "Business Finance",
    description:
      "Discuss potential finance options for your organisation.",
  },
  {
    icon: ShieldCheck,
    title: "Business Insurance",
    description:
      "Explore insurance options for your business and its requirements.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit your enquiry",
    description:
      "Tell us about your business and the service you are interested in.",
  },
  {
    number: "02",
    title: "Share your requirements",
    description:
      "Provide details to help us understand your business needs.",
  },
  {
    number: "03",
    title: "Explore your options",
    description:
      "Review potential solutions and decide how you would like to proceed.",
  },
];

const helpfulDetails = [
  "Your business type and location",
  "The service you are interested in",
  "Your current requirements",
  "Your priorities and future plans",
];

export default function QuotePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-black">
        {/* Hero */}
        <section className="relative bg-black py-24 text-white md:py-32">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-green-700/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              <ClipboardList size={17} />
              Request a Quote
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Tell Us What Your{" "}
              <span className="text-green-500">
                Business Needs
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Share your requirements with our team and explore solutions
              for your business. Complete the form to get started.
            </p>

            <a
              href="#quote-form"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition hover:bg-green-500"
            >
              Request Your Quote
              <ArrowRight size={19} />
            </a>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
              {[
                "Simple enquiry process",
                "Business-focused options",
                "Support with your requirements",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-green-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Start Your Enquiry
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                Let's Find the Right Solution for Your Business
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Every business has different needs. Tell us which services
                you are interested in and share a little about your
                requirements so you can explore suitable options.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Whether you need energy, connectivity, water, waste
                management, finance or insurance, this is the place to
                begin your enquiry.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Tell us about your business",
                  "Choose the services you need",
                  "Explain your priorities",
                  "Explore potential solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check size={16} />
                    </span>
                    <span className="font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-green-600" />
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                alt="Business professionals working together"
                className="relative h-[360px] w-full rounded-3xl object-cover shadow-xl md:h-[480px]"
              />
              <div className="absolute -right-3 -top-3 rounded-2xl bg-black px-5 py-4 text-white shadow-lg md:right-5 md:top-5">
                <p className="text-sm text-gray-300">
                  Focused on your
                </p>
                <p className="font-bold text-green-400">
                  Business Needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Our Services
              </p>

              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                What Can We Help You With?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Explore the service areas below and tell us which ones
                match your business requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-xl hover:shadow-green-900/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <a
                      href="#quote-form"
                      className="mt-5 inline-flex items-center gap-2 font-bold text-green-700 transition hover:text-green-900"
                    >
                      Request a Quote
                      <ArrowRight size={17} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section
          id="quote-form"
          className="scroll-mt-24 px-6 py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Get Started
              </p>

              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Request Your Business Quote
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Complete the form below with your contact information
                and requirements. Our existing quote form is retained
                below.
              </p>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.4fr]">
              {/* Information panel */}
              <aside className="rounded-3xl bg-black p-8 text-white md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600">
                  <MessageSquare size={27} />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold">
                  What Happens Next?
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  Your enquiry helps establish what your business needs
                  and which options may be relevant.
                </p>

                <div className="mt-8 space-y-7">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-700 font-bold text-white">
                        {step.number}
                      </span>

                      <div>
                        <h4 className="font-bold">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 border-t border-white/15 pt-6">
                  <p className="font-semibold text-green-400">
                    Helpful information to include
                  </p>

                  <div className="mt-4 space-y-3">
                    {helpfulDetails.map((detail) => (
                      <div key={detail} className="flex gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-green-400"
                        />
                        <span className="text-sm text-gray-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Existing quote form component */}
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why request a quote */}
        <section className="bg-gray-50 px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
                alt="Business team discussing plans"
                className="h-[350px] w-full object-cover md:h-[460px]"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Why Request a Quote?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Start With What Matters to Your Business
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Your requirements depend on your organisation, premises,
                budget and future plans. Sharing the details helps you
                start exploring the services that may suit your situation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Explain your current business requirements",
                  "Identify the services you want to explore",
                  "Share your priorities and expectations",
                  "Consider options relevant to your organisation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-green-700"
                    />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#quote-form"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white transition hover:bg-green-600"
              >
                Fill Out the Form
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-green-700 px-6 py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-green-100">
              Let's Get Started
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Ready to Explore Your Options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-50">
              Tell us what your business needs and take the first step
              towards exploring suitable solutions.
            </p>

            <a
              href="#quote-form"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-green-800 transition hover:bg-gray-100"
            >
              Request a Quote
              <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

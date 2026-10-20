
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Gas Comparison | Scotishwarehouse",
  description:
    "Explore business gas quotes, understand estimated annual costs and review contract options with Scotishwarehouse.",
};

export default function GasPage() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          badge="Business Gas"
          title="Business gas"
          highlight="comparison made clearer."
          description="Make a more informed business gas decision. Compare unit rates, standing charges, fixed-term options and renewal conditions for your premises."
        />

        {/* Why Compare */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                  <Flame size={27} />
                </div>

                <span className="mt-7 block text-sm font-bold uppercase tracking-wider text-green-700">
                  Why Compare?
                </span>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Business Gas Options, Clearly Explained
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  A good business gas comparison looks at the full picture: unit rates, daily standing charges, estimated annual consumption, contract length and the date your current agreement ends.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  From hospitality and food businesses to commercial premises, we help you explore gas options in the context of how your business actually uses energy.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Compare unit rates and standing charges",
                    "Understand fixed-term contract details",
                    "Review options around your gas usage",
                    "Guidance through your enquiry",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex gap-3"
                    >

                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-green-700"
                      />

                      <span className="text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="relative">

                <div className="overflow-hidden rounded-[2rem] shadow-xl">

                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85"
                    alt="Commercial kitchen and business gas usage"
                    className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/90 p-6 text-white shadow-xl backdrop-blur">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700">
                      <Flame size={24} />
                    </div>

                    <div>

                      <h3 className="font-bold">
                        Business Gas Solutions
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Understand business gas pricing and contract choices
                        before making your next decision.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Gas Options */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Business Gas
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Understand Your Business Gas Choices
                </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Share a few details about your premises and current contract.
                We'll help you explore available gas options and understand
                the key terms before you decide what works for your business.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  title: "Compare",
                  text: "Review available gas options based on your business details and usage.",
                },
                {
                  title: "Understand",
                  text: "Consider unit rates, standing charges, contract lengths and key conditions.",
                },
                {
                  title: "Move Forward",
                  text: "Understand the next steps if you choose to proceed with an option.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <CheckCircle2 className="h-8 w-8 text-green-700" />

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Business Gas Image Section */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern business workplace"
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Built Around Your Business
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Business Gas That Works for Your Operations
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  From cooking and hot water to heating commercial spaces,
                  gas usage varies across businesses. A suitable contract
                  should reflect how and when your premises use energy.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We help you focus on the details that matter: your estimated
                  consumption, existing agreement, preferred contract length
                  and the overall costs of available options.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    "Business gas tariff comparisons",
                    "Contract renewal guidance",
                    "Clear pricing information",
                    "Straightforward enquiry",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* How It Works */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A straightforward process
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Reviewing your business gas options starts with a few
                details. We make it easier to understand the choices and
                decide on the next step.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                ["01", "Tell us about your business"],
                ["02", "Review your options"],
                ["03", "Move forward with confidence"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >

                  <span className="font-black text-green-700">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {number === "01" &&
                      "Tell us about your premises, estimated usage and current gas contract."}

                    {number === "02" &&
                      "Compare available rates, standing charges and contract terms."}

                    {number === "03" &&
                      "If you find a suitable option, we explain the next steps clearly."}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Business Gas CTA Card */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="overflow-hidden rounded-[2rem] bg-slate-950">

              <div className="grid lg:grid-cols-2 lg:items-center">

                <div className="relative h-[350px] lg:h-full">

                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                    alt="Business hospitality environment"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/50" />

                </div>

                <div className="p-10 text-white md:p-14">

                  <Flame className="h-10 w-10 text-green-400" />

                  <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                    Explore Business Gas Options
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Looking to review your business gas contract? Tell us about
                    your requirements and explore options with a clearer
                    understanding of pricing and terms.
                  </p>

                  <Link
                    href="/quote"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white hover:bg-green-800"
                  >
                    Get My Gas Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Benefits */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                Make your next gas decision more informed
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Scotishwarehouse helps businesses approach gas comparisons
                with straightforward information, relevant options and
                support throughout the enquiry.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Contract renewal guidance",
                "Clear pricing information",
                "Straightforward enquiry",
                "Help with next steps",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >

                  <CheckCircle2
                    size={22}
                    className="text-green-700"
                  />

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Understand your gas usage, review available terms
                    and consider options for your business.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Additional Gas Options */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2">

              <Link
                href="/energy/electricity"
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Flame className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Business Energy
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore business electricity and gas options and understand
                  the key factors that can affect your energy costs.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700">
                  Explore Energy
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>

              </Link>

              <Link
                href="/energy/electricity"
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Business Electricity
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Compare electricity contract features, including unit rates,
                  standing charges and contract lengths.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700">
                  Explore Electricity
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>

              </Link>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Need help with business gas?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
              Tell us about your business and current gas arrangements.
              We'll help you review available options and understand
              what to consider before making a decision.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 font-bold text-white hover:bg-green-800"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

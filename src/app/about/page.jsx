
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Zap,
  Wifi,
  Droplets,
  CreditCard,
  Building2,
  Search,
  MessageSquare,
  ShieldCheck,
  Clock3,
  BarChart3,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: Zap,
      title: "Business Energy",
      description:
        "Explore energy solutions and compare options that can help your business manage its ongoing energy costs.",
    },
    {
      icon: Wifi,
      title: "Business Connectivity",
      description:
        "Find connectivity and communication solutions designed to keep your business connected and productive.",
    },
    {
      icon: Droplets,
      title: "Business Water",
      description:
        "Explore water service options and find solutions suited to the needs of your business.",
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description:
        "Discover payment solutions that can help your business provide a smoother experience for customers.",
    },
  ];

  const benefits = [
    {
      icon: Search,
      title: "Compare Your Options",
      description:
        "Explore different business service categories through one simple comparison process.",
    },
    {
      icon: Clock3,
      title: "Save Valuable Time",
      description:
        "Spend less time searching for providers and more time focusing on your business.",
    },
    {
      icon: BarChart3,
      title: "Make Informed Decisions",
      description:
        "Understand your available options so you can choose solutions that fit your business.",
    },
    {
      icon: ShieldCheck,
      title: "A Straightforward Process",
      description:
        "We aim to make the journey from enquiry to exploring your options as simple as possible.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Tell Us What You Need",
      description:
        "Submit a simple enquiry and let us know which business services you are interested in.",
    },
    {
      number: "02",
      icon: Search,
      title: "Explore Your Options",
      description:
        "Explore relevant options across the service categories available through Nexa.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Choose What Works",
      description:
        "Review your options and decide which solution makes the most sense for your business.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-black">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.22),transparent_40%)]" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-green-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400">
                  <Building2 size={17} />
                  About Nexa
                </span>

                <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Business Solutions.
                  <span className="mt-2 block text-green-500">
                    Made Simpler.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                  We help businesses explore energy, connectivity, water and
                  payment solutions in one convenient place, making it easier
                  to understand available options and decide on the next step.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-700"
                  >
                    Explore Your Options
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition-colors hover:border-green-500 hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-green-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 p-7 shadow-2xl md:p-9">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white">
                      <Building2 size={29} />
                    </div>

                    <div>
                      <p className="text-xl font-extrabold text-white">
                        One Business. Multiple Needs.
                      </p>
                      <p className="mt-1 text-sm text-neutral-400">
                        Explore solutions in one place.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-green-500/40 hover:bg-green-500/5"
                        >
                          <Icon className="h-7 w-7 text-green-500" />

                          <h3 className="mt-4 text-sm font-bold text-white">
                            {service.title}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-neutral-400">
                            Business service options
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex items-center gap-3 rounded-xl bg-green-600/10 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                    <p className="text-sm leading-6 text-neutral-300">
                      A straightforward starting point for your business
                      service enquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
                Helping Businesses Find Their Way Forward
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Running a business means making decisions about services that
                support your everyday operations. Finding and comparing
                different options can take time.
              </p>

              <p className="mt-4 leading-8 text-neutral-600">
                Nexa provides a starting point for exploring business energy,
                connectivity, water and payment services. Our aim is to make
                the process clearer, more organised and easier to navigate.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
                  <Target size={24} />
                </div>

                <div>
                  <h3 className="font-extrabold text-black">Our Purpose</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    To help businesses understand their options and take the
                    next step with greater clarity.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-green-100" />

              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals working together"
                  className="h-[380px] w-full object-cover md:h-[470px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-7 pt-20 md:p-9 md:pt-24">
                  <p className="text-2xl font-black text-white md:text-3xl">
                    Your Business.
                    <span className="block text-green-400">
                      Your Next Step.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and vision */}
        <section className="bg-green-50/70 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-800">
                Our Direction
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-4xl">
                Built Around Business Needs
              </h2>

              <p className="mt-4 leading-8 text-neutral-600">
                Our approach centres on making it easier to explore relevant
                services and understand the options available.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2">
              <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white transition-transform group-hover:scale-105">
                  <Target size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-black">
                  Our Mission
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  To provide businesses with a straightforward way to explore
                  essential service categories, understand their options and
                  make informed decisions about their requirements.
                </p>
              </div>

              <div className="group rounded-3xl border border-neutral-200 bg-black p-8 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white transition-transform group-hover:scale-105">
                  <Eye size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  Our Vision
                </h3>

                <p className="mt-4 leading-8 text-neutral-300">
                  To create a convenient starting point where businesses can
                  discover relevant service options and move forward with
                  greater confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                What We Offer
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-5xl">
                Solutions for the Way Your Business Works
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                From keeping your business connected to managing essential
                services, explore the solutions available through our
                platform.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {service.description}
                    </p>

                    <Link
                      href="/quote"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-green-800 transition-colors hover:text-green-950"
                    >
                      Explore Service
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-neutral-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                How It Works
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-4xl">
                Simple From Start to Finish
              </h2>

              <p className="mt-4 leading-8 text-neutral-600">
                A clear process helps you move from identifying a need to
                exploring potential solutions.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative rounded-3xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-green-700">
                        {step.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon size={23} />
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                  Why Nexa
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
                  One Place for Multiple Business Needs
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  We aim to make the process of exploring business services
                  easier, clearer and more convenient.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white transition-colors hover:bg-green-800"
                >
                  Talk to Our Team
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon size={24} />
                      </div>

                      <h3 className="mt-5 text-lg font-extrabold text-black">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-neutral-600">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How we can help */}
        <section className="bg-green-50/70 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-green-100 shadow-xl shadow-green-900/10">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
                alt="Business discussion and consultation"
                className="h-[350px] w-full object-cover md:h-[430px]"
              />
            </div>

            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                Need Help?
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-black md:text-4xl">
                Turn Information Into Your Next Business Step
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Learning about your options is a useful starting point. If
                you are ready to discuss your requirements, make an enquiry
                and tell us which services your business currently uses or
                is considering.
              </p>

              <p className="mt-4 leading-8 text-neutral-600">
                We can use the information you provide to better understand
                what you are looking for and help you explore relevant options.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white transition-colors hover:bg-green-800"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-neutral-300 bg-white px-6 py-3.5 font-bold text-black transition-colors hover:border-green-600 hover:text-green-800"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-green-800 py-20 text-white md:py-24">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
              <Users size={32} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
              Ready to Explore Your Business Options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
              Tell us what your business needs and explore suitable service
              options for your organisation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-extrabold text-green-900 transition-all hover:-translate-y-0.5 hover:bg-green-50"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

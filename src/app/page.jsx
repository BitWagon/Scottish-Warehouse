import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Headphones,
  RefreshCw,
  Building2,
  Utensils,
  BriefcaseBusiness,
  HardHat,
  HeartPulse,
  ShoppingCart,
  Store,
  Zap,
  Wifi,
  Droplets,
  Phone,
  Trash2,
  ChevronDown,
  ShieldCheck,
  Users,
  Search,
  FileCheck,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Business Energy",
    description:
      "Compare business electricity and gas options with a clearer understanding of unit prices, daily standing charges, contract terms and renewal timing.",
    href: "/energy",
    icon: Zap,
  },
  {
    title: "Business Electricity",
    description:
      "Explore electricity contracts for your premises, including fixed-price options, variable rates and day-and-night meter arrangements.",
    href: "/energy/electricity",
    icon: Zap,
  },
  {
    title: "Business Gas",
    description:
      "Review business gas quotes against estimated annual consumption, standing charges and the terms that determine your total costs.",
    href: "/energy/gas",
    icon: Zap,
  },
  {
    title: "Business Broadband",
    description:
      "Explore broadband connections based on availability, expected speeds and the communication needs of your business.",
    href: "/connectivity/broadband",
    icon: Wifi,
  },
  {
    title: "Home Electricity",
    description:
      "Explore home electricity options and find a supply plan that suits your household needs.",
    href: "/energy/electricity",
    icon: Zap,
  },
  {
    title: "Water Supply",
    description:
      "Find information about water supply services and options for your home.",
    href: "/water",
    icon: Droplets,
  },
  {
    title: "Home Gas",
    description:
      "Explore home gas options and find a supply plan that suits your household needs.",
    href: "/energy/gas",
    icon: Zap,
  },
];

const benefits = [
  {
    number: "01",
    title: "Save Time",
    description:
      "Spend less time navigating supplier options. Tell us what your business needs and we’ll help you explore the available choices.",
    icon: Clock3,
  },
  {
    number: "02",
    title: "Compare Options",
    description:
      "Review important differences in service options, contract terms and suitability before making a decision.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Expert Support",
    description:
      "Ask questions, understand your options and move forward with greater confidence.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "Simple Switching",
    description:
      "If you decide to proceed, we’ll explain the next steps and what to expect from the switching process.",
    icon: RefreshCw,
  },
];

const industries = [
  { name: "Retail", icon: Store },
  { name: "Hospitality", icon: Utensils },
  { name: "Offices", icon: BriefcaseBusiness },
  { name: "Professional Services", icon: Building2 },
  { name: "Construction", icon: HardHat },
  { name: "Healthcare", icon: HeartPulse },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Small Businesses", icon: Building2 },
];

const faqs = [
  {
    question: "How does the comparison service work?",
    answer:
      "Simply provide some information about your business and the service you're interested in. We'll review suitable options and help you compare them.",
  },
  {
    question: "Does requesting a quote cost anything?",
    answer:
      "Requesting an initial quote is free. Any applicable commercial arrangements should be explained clearly before you proceed.",
  },
  {
    question: "Do I have to switch providers?",
    answer:
      "No. Requesting a comparison does not require you to switch. You remain in control of the final decision.",
  },
  {
    question: "How long does switching take?",
    answer:
      "Timescales vary depending on the service, provider, contract, and circumstances of your business.",
  },
  {
    question: "What types of businesses can use the service?",
    answer:
      "We support businesses with different requirements and service needs. Contact us to discuss your situation.",
  },
  {
    question: "Can I compare multiple services?",
    answer:
      "Yes. You can ask us about multiple business services and explore suitable options through one enquiry.",
  },
];

const extraFeatures = [
  {
    title: "Business-Focused Advice",
    description:
      "We focus on understanding your business requirements before helping you explore suitable service options.",
    icon: Users,
  },
  {
    title: "Straightforward Comparisons",
    description:
      "We make it easier to understand different business service options without unnecessary complexity.",
    icon: Search,
  },
  {
    title: "Clear Next Steps",
    description:
      "Once you've reviewed your options, we'll help you understand what happens next.",
    icon: FileCheck,
  },
  {
    title: "Practical Solutions",
    description:
      "From everyday utilities to connectivity and energy-efficiency services, we help you explore solutions that fit your operation.",
    icon: Lightbulb,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 text-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(22,163,74,0.10),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(16,185,129,0.10),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
            <div>
              <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-green-400">
                BUSINESS SOLUTIONS, SIMPLIFIED
              </span>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Smarter Energy Choices for Your Business{" "}
                <span className="text-green-700">Start Here</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                Take control of your business energy decisions with clearer comparisons and practical guidance.
                Scotishwarehouse helps you explore electricity, gas and essential
                utilities, review the costs behind each offer and understand
                your next steps before choosing a contract.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-green-200 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-green-500 hover:bg-green-50"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative hidden min-h-[500px] lg:block">
              <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-green-700/20 blur-3xl" />

              <div className="absolute right-0 top-0 h-[400px] w-[520px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional business team working together"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/40" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">
                        Business Services Made Simple
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        One place to explore multiple business solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  One Place. Multiple Solutions.
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Essential Services for a More Efficient Business
                </h2>
              </div>

              <p className="text-lg leading-8 text-slate-600">
                Running a business is complicated enough. We make it easier by
                helping you compare the essential services that keep your
                business operating efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* ADDED IMAGE + CONTENT SECTION */}
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional business team meeting"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Built Around Your Business
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Solutions That Work Around Your Business
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Every business has different priorities. A growing office
                  may need dependable broadband, while a restaurant may be
                  focused on energy, water and waste management.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Scotishwarehouse helps bring these requirements together, making it
                  easier for businesses to explore their options without
                  dealing with multiple enquiries separately.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Business-focused solutions",
                    "Multiple service categories",
                    "Simple enquiry process",
                    "Clear information",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
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

        {/* SERVICES */}
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Our Services
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Business Services Made Simple
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore practical solutions designed to help your business
                compare providers, understand your options, and choose with
                confidence.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="mt-6 block text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-green-700">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-700">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ADDED SERVICE IMAGE CARDS */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Business Essentials
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Helping Businesses Manage The Essentials
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From business energy and water to connectivity and waste management, we help
                you explore the services your business depends on.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
                    alt="Professional business office"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <Zap className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Energy & Utilities
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Explore business electricity, gas and water options suited to your
                    premises and operating requirements.
                  </p>

                  <Link
                    href="/energy"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700"
                  >
                    Explore Energy
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
                    alt="Business professionals collaborating"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <Wifi className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Connectivity
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Keep your teams, customers and business operations
                    connected with suitable broadband and phone solutions.
                  </p>

                  <Link
                    href="/connectivity/broadband"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700"
                  >
                    Explore Connectivity
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
                    alt="Business team working together"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <Lightbulb className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    Greener Business
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Explore energy-efficiency ideas and greener solutions that may
                    help your business manage consumption and plan for the future.
                  </p>

                  <Link
                    href="/energy"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700"
                  >
                    Explore Energy
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPLIER / SERVICE CATEGORIES */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-green-700">
              Compare Options
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Compare Options From Trusted Providers
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We help businesses explore available options across a range of
              service categories.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["BUSINESS ENERGY", "CONNECTIVITY", "WATER", "GREEN SOLUTIONS"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm font-bold tracking-wider text-slate-400"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        

{/* TRUSTED PROVIDERS */}
<section className="overflow-hidden bg-white py-12">
  <div className="mx-auto max-w-7xl px-6">
    <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
      Trusted Providers
    </p>

    <div className="relative mt-40 overflow-hidden">
      <div className="flex w-max animate-supplier-right items-center gap-10">
        {[
          { name: "Provider 1", image: "/providers/WhatsApp Image 2026-10-15 at 11.07.16 PM.jpeg" },
          { name: "Provider 2", image: "/providers/images (1).jpg" },
          { name: "Provider 3", image: "/providers/images (2).png" },
          { name: "Provider 4", image: "/providers/images.jpg" },
          { name: "Provider 5", image: "/providers/images.png" },
          { name: "Provider 6", image: "/providers/logo.png" },
          { name: "Provider 7", image: "/providers/Screenshot 2026-10-16 040309.png" },
        
        ].concat([
          { name: "Provider 1", image: "/providers/WhatsApp Image 2026-10-15 at 11.07.16 PM.jpeg" },
          { name: "Provider 2", image: "/providers/images (1).jpg" },
          { name: "Provider 3", image: "/providers/images (2).png" },
          { name: "Provider 4", image: "/providers/images.jpg" },
          { name: "Provider 5", image: "/providers/images.png" },
          { name: "Provider 6", image: "/providers/logo.png" },
          { name: "Provider 7", image: "/providers/Screenshot 2026-10-16 040309.png" },
          
        ]).map((provider, index) => (
          <div
            key={`${provider.name}-${index}`}
            className="flex h-32 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-5"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="h-60 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* END TRUSTED PROVIDERS */}



        {/* WHY CHOOSE US */}
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Why Nexa
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                  Business Comparison Made Simple
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  You shouldn't have to spend hours searching through
                  providers and complicated contracts. We bring the comparison
                  process together so you can focus on running your business.
                </p>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-green-700"
                >
                  Learn more about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.number}
                      className="rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-green-700">
                          {benefit.number}
                        </span>

                        <Icon className="h-6 w-6 text-slate-400" />
                      </div>

                      <h3 className="mt-7 text-xl font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ADDED TRUST CONTENT */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  The Nexa Approach
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                  A Simpler Way To Explore Business Services
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Choosing business services can take time. There are
                  providers to research, options to understand and commercial
                  terms to consider.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Nexa brings the process into one place so businesses can
                  start with a simple enquiry and explore suitable solutions
                  for their requirements.
                </p>

                <div className="mt-8 space-y-4">
                  {extraFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-900">
                            {feature.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85"
                    alt="Professional business meeting and collaboration"
                    className="h-[600px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:left-10 md:right-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Clear & Business-Focused
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        We aim to make the process straightforward, practical
                        and easy to understand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-green-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-500">
                How It Works
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                From Quote to Switch in 4 Simple Steps
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                [
                  "01",
                  "Tell Us About Your Business",
                  "Complete our quick quote form with some basic information about your business and the service you need.",
                ],
                [
                  "02",
                  "We Compare Your Options",
                  "Our team reviews suitable solutions based on your requirements.",
                ],
                [
                  "03",
                  "Review Your Choices",
                  "We explain the available options clearly so you can make an informed decision.",
                ],
                [
                  "04",
                  "Move Forward With Confidence",
                  "Once you've made your decision, we'll help you understand the next steps.",
                ],
              ].map(([number, title, description]) => (
                <div key={number}>
                  <div className="text-5xl font-bold text-green-500/30">
                    {number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{title}</h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADDED PROCESS IMAGE SECTION */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85"
                alt="Professional team working in a modern business environment"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />

              <div className="relative grid gap-10 p-10 md:p-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-green-500">
                    Built For Businesses
                  </span>

                  <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
                    Spend Less Time Searching. Spend More Time Growing.
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-8 text-slate-300">
                    Your time is valuable. Instead of managing multiple
                    enquiries across different business services, start with
                    Nexa and explore your options through a simpler process.
                  </p>

                  <Link
                    href="/quote"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800"
                  >
                    Start Your Enquiry
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Business Types
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Solutions For Different Businesses
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Different businesses have different requirements. Our
                comparison approach is designed to help you explore options
                around your individual needs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-green-200 hover:bg-green-50"
                  >
                    <Icon className="h-6 w-6 text-green-700" />

                    <span className="font-semibold text-slate-800">
                      {industry.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ADDED BUSINESS TYPES IMAGE SECTION */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative h-[360px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional business team"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
                    For Growing Businesses
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Retail & E-commerce
                  </h3>

                  <p className="mt-3 max-w-lg text-slate-300">
                    Explore energy, connectivity and other essential business
                    services for your operation.
                  </p>
                </div>
              </div>

              <div className="group relative h-[360px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business professionals collaborating"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
                    Business Services
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Hospitality & Offices
                  </h3>

                  <p className="mt-3 max-w-lg text-slate-300">
                    Discover practical options around utilities,
                    connectivity, water and day-to-day business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS / VALUE */}
        <section className="bg-green-700 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Multiple Service Categories",
              "One Simple Comparison Process",
              "Business-Focused Support",
              "UK Business Solutions",
            ].map((item) => (
              <div
                key={item}
                className="border-l border-white/20 pl-5"
              >
                <CheckCircle2 className="h-6 w-6" />

                <p className="mt-4 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADDED FINAL TRUST CONTENT */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700">
              <Building2 className="h-8 w-8" />
            </div>

            <span className="mt-6 block text-sm font-bold uppercase tracking-wider text-green-700">
              Your Business. Your Choice.
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Make Business Service Decisions With Confidence
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Nexa is designed to make comparing business services easier.
              Whether you are reviewing an existing contract, opening a new
              premises or simply looking for suitable alternatives, you can
              start with one straightforward enquiry.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
              >
                Get My Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-7 py-4 font-semibold text-slate-900 transition hover:border-green-300 hover:bg-green-50"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-[2rem] bg-green-950 p-10 text-center text-white shadow-xl md:p-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                Ready to Find a Better Business Solution?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us what your business needs and we'll help you explore
                suitable options.
              </p>

              <Link
                href="/quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800"
              >
                Get My Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                FAQ
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-900">
                    {faq.question}

                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Trash2,
  Recycle,
  Building2,
  Leaf,
  ClipboardCheck,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Commercial Waste Management | Nexa Business Solutions",
  description:
    "Explore commercial waste collection, recycling and business waste management options with Nexa. Discover practical solutions for offices, retail, hospitality and commercial premises.",
  openGraph: {
    title: "Commercial Waste Management | Nexa",
    description:
      "Explore business waste collection and recycling options designed around your commercial requirements.",
    type: "website",
  },
};

const features = [
  {
    title: "Waste Collection",
    description:
      "Explore commercial waste collection options that take account of your premises, operating schedule and business requirements.",
    icon: Truck,
  },
  {
    title: "Waste Management",
    description:
      "Consider practical approaches to handling everyday business waste and keeping your workplace organised.",
    icon: ClipboardCheck,
  },
  {
    title: "Recycling Options",
    description:
      "Explore recycling services for suitable materials and understand the arrangements available for your business.",
    icon: Recycle,
  },
];

const wasteServices = [
  {
    title: "General Business Waste",
    text: "Explore collection options for everyday commercial waste produced by offices, shops and other business premises.",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1200&q=85",
    alt: "Waste collection and responsible waste handling",
    icon: Trash2,
  },
  {
    title: "Commercial Recycling",
    text: "Consider recycling options for suitable materials, including paper, cardboard, plastics and other recyclable items.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
    alt: "Recycling materials and waste sorting",
    icon: Recycle,
  },
  {
    title: "Commercial Collection",
    text: "Review collection arrangements that may suit your premises, the volume of waste produced and your operating schedule.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    alt: "Environmental responsibility and sustainable business practices",
    icon: Truck,
  },
];

const businessTypes = [
  {
    title: "Offices",
    text: "Explore arrangements for everyday workplace waste, paper, packaging and suitable recyclable materials.",
  },
  {
    title: "Retail Businesses",
    text: "Consider waste solutions for packaging, stock handling, cardboard and general commercial waste.",
  },
  {
    title: "Hospitality",
    text: "Explore waste management options that reflect the needs of restaurants, cafés, hotels and other hospitality premises.",
  },
  {
    title: "Commercial Premises",
    text: "Review potential collection arrangements for larger sites and businesses with more complex operational requirements.",
  },
];

const benefits = [
  {
    title: "Cleaner Premises",
    text: "Suitable waste arrangements can help you maintain a more organised workplace and manage waste responsibly.",
    icon: Building2,
  },
  {
    title: "Planned Collections",
    text: "Explore collection schedules that may fit your premises, business hours and waste generation patterns.",
    icon: Truck,
  },
  {
    title: "Recycling Opportunities",
    text: "Identify suitable materials for recycling and learn about the options available through relevant providers.",
    icon: Recycle,
  },
  {
    title: "Business-Focused Options",
    text: "Consider solutions according to your waste type, premises, collection needs and available service coverage.",
    icon: CheckCircle2,
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    text: "Share details about your premises, the waste you produce and your collection requirements.",
  },
  {
    number: "02",
    title: "Explore Available Options",
    text: "Review relevant waste management and recycling options, subject to service availability and eligibility.",
  },
  {
    number: "03",
    title: "Review the Details",
    text: "Consider collection frequency, pricing, accepted waste types, contract terms and any applicable conditions.",
  },
  {
    number: "04",
    title: "Choose Your Next Step",
    text: "Decide how to proceed once you understand the available services and the terms offered.",
  },
];

const faqs = [
  {
    question: "What is commercial waste management?",
    answer:
      "Commercial waste management covers the collection, handling and disposal or recycling of waste produced by businesses. The services a business needs depend on its activities, premises, waste types and local service availability.",
  },
  {
    question: "What types of business waste can be collected?",
    answer:
      "Depending on the provider and service, options may include general commercial waste, cardboard, paper and other suitable recyclable materials. Accepted materials and any restrictions should always be confirmed with the relevant provider.",
  },
  {
    question: "Can I enquire about recycling services?",
    answer:
      "Yes. You can enquire about available recycling options for your business. The appropriate arrangements depend on the materials you produce, collection requirements and services available in your area.",
  },
  {
    question: "How often can commercial waste be collected?",
    answer:
      "Collection frequency depends on your business requirements, the provider, the type of waste and local availability. When enquiring, explain your expected waste volumes and preferred collection arrangements.",
  },
  {
    question: "How can I explore a waste management quote?",
    answer:
      "Use the quote link on this page to submit an enquiry. Provide details about your premises, waste types and collection needs so relevant options can be considered.",
  },
  {
    question: "Are all waste services available everywhere?",
    answer:
      "No. Provider coverage, accepted materials, pricing and collection arrangements vary by location and service. Availability should be confirmed before you agree to a contract.",
  },
];

export default function WastePage() {
  return (
    <>
      
<style>{`
  @keyframes swPhotoReveal {
    from { opacity: 0; transform: translateY(18px) scale(0.985); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .sw-photo-animate {
    animation: swPhotoReveal 850ms ease-out both;
    transition: transform 550ms ease, filter 550ms ease;
  }
  .sw-photo-animate:hover { filter: brightness(1.055) saturate(1.08); }
  .sw-photo-zoom:hover { transform: scale(1.035); }
  @media (prefers-reduced-motion: reduce) {
    .sw-photo-animate { animation: none; transition: none; }
  }
`}</style>
<Navbar />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <ServiceHero
          badge="Waste Management"
          title="Practical Waste Solutions"
          highlight="For Businesses"
          description="Explore commercial waste collection, recycling and management options designed around your premises, operating requirements and business needs."
        />

        {/* OVERVIEW */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Commercial Waste Management
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                  A More Practical Approach to Business Waste
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-700">
                  Managing waste is an important part of running business
                  premises. From everyday office waste to retail packaging
                  and recyclable materials, understanding your requirements
                  can help you explore suitable collection and management
                  arrangements.
                </p>

                <p className="mt-4 leading-8 text-neutral-600">
                  Nexa helps businesses explore available waste management
                  options based on their activities, premises and collection
                  needs. Service availability, accepted waste types and
                  commercial terms depend on the relevant provider.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Explore commercial waste collection options",
                    "Review recycling services for suitable materials",
                    "Consider arrangements that fit your business",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />

                      <p className="leading-7 text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800"
                >
                  Explore Waste Options
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85"
                  alt="Recycling and responsible commercial waste management"
                  className="h-[380px] w-full rounded-3xl object-cover shadow-xl md:h-[480px] sw-photo-animate sw-photo-zoom"
                />

                <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-green-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-green-100 p-3 text-green-800">
                      <Recycle className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-black">
                        Waste and Recycling Options
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Explore services according to your waste types,
                        collection requirements and premises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="bg-neutral-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Waste Services Built Around Business Requirements
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Different businesses generate different types and volumes of
                waste. Understanding those differences is a useful starting
                point when exploring suitable services.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-black">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* WASTE SERVICES */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Waste Services
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Explore Solutions for Different Waste Requirements
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Your waste requirements may depend on your industry, premises
                and daily operations. Explore different service categories to
                understand which options may be relevant to your business.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {wasteServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105 sw-photo-animate"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-black">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-neutral-600">
                        {service.text}
                      </p>

                      <Link
                        href="/quote"
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-950"
                      >
                        Enquire About This Service
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* BUSINESS TYPES */}
        <section className="bg-black py-20 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85"
                alt="Recycling materials as part of business waste management"
                className="h-[380px] w-full object-cover md:h-[500px] sw-photo-animate sw-photo-zoom"
                loading="lazy"
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-green-400">
                Built Around Your Business
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Waste Requirements Vary by Industry
              </h2>

              <p className="mt-5 leading-8 text-neutral-300">
                The type and volume of waste your business produces depends
                on its activities, premises and operating arrangements.
                Exploring services with those requirements in mind can help
                you identify relevant collection options.
              </p>

              <div className="mt-8 space-y-6">
                {businessTypes.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-400" />

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-neutral-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/quote"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500"
              >
                Discuss Your Requirements
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Why Explore Your Options?
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Make Waste Management More Practical
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Taking time to understand your requirements can help you
                evaluate available services, collection arrangements and
                recycling opportunities for your business.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 transition hover:border-green-400 hover:shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-green-700" />

                    <h3 className="mt-5 text-xl font-bold text-black">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {benefit.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-neutral-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  How It Works
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                  Getting Started with a Waste Enquiry
                </h2>

                <p className="mt-5 leading-8 text-neutral-600">
                  Begin by identifying the waste your business produces and
                  the collection arrangements you require. You can then
                  explore relevant services and review the terms before
                  deciding how to proceed.
                </p>

                <div className="mt-8 space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 font-bold text-white">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-black">
                          {step.title}
                        </h3>

                        <p className="mt-2 leading-7 text-neutral-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Environmental sustainability and responsible waste practices"
                  className="h-[420px] w-full object-cover md:h-[560px] sw-photo-animate sw-photo-zoom"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                Helpful Information
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Waste Management FAQs
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Find answers to common questions about commercial waste
                collection, recycling and requesting a quote.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-green-400 open:border-green-600 open:bg-green-50/40"
                >
                  <summary className="cursor-pointer font-semibold leading-7 text-black marker:text-green-700">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-green-700 py-20 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Leaf className="h-9 w-9 text-white" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-green-100">
              Commercial Waste Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Explore Waste Options for Your Business
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-50">
              Tell us about your premises and waste requirements. Start an
              enquiry to explore relevant collection and recycling services
              available for your business.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-neutral-900"
            >
              Request a Waste Quote
              <ArrowRight className="h-5 w-5" />
            </Link>

            <p className="mt-5 text-sm leading-6 text-green-100">
              Service availability, pricing, accepted materials and contract
              conditions vary by provider and location.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Zap,
  Wifi,
  Droplets,
  Trash2,
  ShieldCheck,
  MessageCircle,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Help & FAQs | Nexa Business Solutions",
  description:
    "Find answers to frequently asked questions about Nexa business services, energy, broadband, water, waste management, payment solutions, quotes and switching providers.",
  openGraph: {
    title: "Help & FAQs | Nexa Business Solutions",
    description:
      "Get clear answers about business services, quote requests and the options available to your organisation.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How does the comparison service work?",
    answer:
      "Tell us about your business and the services you are interested in. We can then help you explore relevant options, subject to provider availability, eligibility and your business requirements. You can review the details before deciding whether to proceed.",
  },
  {
    question: "Does requesting a quote cost anything?",
    answer:
      "You can submit an initial enquiry without an obligation to proceed. Any applicable fees, commercial arrangements or other conditions should be explained before you agree to a service.",
  },
  {
    question: "Do I have to switch providers?",
    answer:
      "No. Making an enquiry does not automatically commit you to changing providers. You remain in control of your decision and should review any existing contract obligations before making a change.",
  },
  {
    question: "How long does switching providers take?",
    answer:
      "Timescales vary according to the service, provider, contract terms and your circumstances. Some services may require additional checks or arrangements. The expected timescale should be confirmed before you proceed.",
  },
  {
    question: "What types of businesses can use Nexa?",
    answer:
      "Businesses have different needs, from independent shops and offices to hospitality, professional services and larger organisations. Contact us with your requirements so we can help you explore relevant service options.",
  },
  {
    question: "Can I enquire about multiple services?",
    answer:
      "Yes. You can tell us about more than one requirement, such as business energy and broadband. This helps us understand your priorities and identify the relevant service areas to discuss.",
  },
  {
    question: "What information do I need to request a quote?",
    answer:
      "Depending on the service, useful information may include your business name, premises postcode, current provider, contract end date, usage details and the type of service you need. We will explain if any additional information is required.",
  },
  {
    question: "Can I review my current business energy contract?",
    answer:
      "You can enquire about reviewing your current energy arrangements. Having a recent bill, your contract details and an estimate of your usage may help when exploring available electricity and gas options.",
  },
  {
    question: "Can Nexa help with business broadband and phone services?",
    answer:
      "You can explore business connectivity options, including broadband and phone services. Availability and suitability depend on your location, technical requirements and the services offered by relevant providers.",
  },
  {
    question: "Can I ask about business water and waste services?",
    answer:
      "Yes. You can enquire about commercial water and waste management services. Available options depend on your business premises, location, service requirements and provider coverage.",
  },
  {
    question: "Are all providers and offers available to every business?",
    answer:
      "No. Availability, pricing, eligibility and contract terms can vary by provider, location, business type and individual circumstances. Any offer should be reviewed on its own terms before you make a decision.",
  },
  {
    question: "How can I contact Nexa if I need more help?",
    answer:
      "Visit our Contact page to find the available ways to get in touch. You can also submit a quote enquiry and explain what you need help with so your enquiry can be directed appropriately.",
  },
];

const serviceAreas = [
  {
    title: "Business Energy",
    description:
      "Explore commercial electricity and gas options, contract details and energy arrangements for your premises.",
    href: "/energy",
    icon: Zap,
  },
  {
    title: "Broadband & Connectivity",
    description:
      "Review business broadband and connectivity options that support your team and daily operations.",
    href: "/connectivity/broadband",
    icon: Wifi,
  },
  {
    title: "Business Water",
    description:
      "Find out more about commercial water services and options for your business premises.",
    href: "/water",
    icon: Droplets,
  },
  {
    title: "Waste Management",
    description:
      "Explore commercial waste collection and management options for your organisation.",
    href: "/waste",
    icon: Trash2,
  },
  {
    title: "Other Business Services",
    description:
      "Explore additional business service categories and enquire about your specific requirements.",
    href: "/services",
    icon: FileCheck,
  },
];

const helpfulSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your business details and explain which service you would like to explore.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Review relevant services and the information available for your requirements.",
  },
  {
    number: "03",
    title: "Review the details",
    description:
      "Check prices, eligibility, contract terms and conditions before making a decision.",
  },
  {
    number: "04",
    title: "Choose your next step",
    description:
      "Proceed only when you understand the available options and are comfortable with the terms.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                <MessageCircle className="h-4 w-4" />
                HELP & CUSTOMER INFORMATION
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Help and Frequently Asked Questions
                <span className="mt-2 block text-green-500">
                  Clear Answers. Better Decisions.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                Find helpful information about Nexa, our business services
                and the process of exploring available options. Whether you
                are comparing energy, reviewing connectivity or enquiring
                about other commercial services, this page is a useful place
                to start.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#frequently-asked-questions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-500"
                >
                  Browse FAQs
                  <ArrowRight className="h-5 w-5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-green-500 hover:bg-white/5"
                >
                  Contact Our Team
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Business service information
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Guidance on next steps
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                How We Can Help
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl">
                Information to Help You Make Informed Business Decisions
              </h2>

              <p className="mt-6 leading-8 text-neutral-700">
                Choosing a business service can involve several
                considerations, including cost, contract duration, service
                availability and the requirements of your premises. Getting
                clear information helps you understand what you are agreeing
                to and whether an option is appropriate for your business.
              </p>

              <p className="mt-4 leading-8 text-neutral-700">
                We have brought together answers to common questions about
                making an enquiry, exploring service options and considering
                your next steps. If you cannot find the information you need,
                our Contact page is available for further enquiries.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <ShieldCheck className="h-7 w-7 text-green-700" />

                  <h3 className="mt-4 font-bold text-black">
                    Understand Your Options
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Review relevant service information before making a
                    commitment.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <FileCheck className="h-7 w-7 text-green-700" />

                  <h3 className="mt-4 font-bold text-black">
                    Know the Next Steps
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Find out what information may be needed for your enquiry.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Business professionals working together in an office"
                className="h-[360px] w-full rounded-3xl object-cover shadow-xl md:h-[460px]"
              />

              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:left-8 sm:right-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-green-100 p-3 text-green-800">
                    <MessageCircle className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-black">
                      Have a Question?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      If your question is not covered here, contact us to
                      discuss your business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section
          id="frequently-asked-questions"
          className="scroll-mt-24 bg-neutral-50 py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Common Questions
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-600">
                Browse the answers below to learn more about our services,
                quotes, provider options and the business enquiry process.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-green-300 open:border-green-600 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6">
                    <span className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-sm font-bold text-green-800 transition group-open:bg-green-700 group-open:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="pt-1 font-semibold leading-6 text-black">
                        {faq.question}
                      </span>
                    </span>

                    <ChevronDown className="h-5 w-5 shrink-0 text-green-700 transition-transform duration-200 group-open:rotate-180" />
                  </summary>

                  <div className="border-t border-neutral-100 px-5 pb-6 pt-4 sm:px-6">
                    <p className="pl-12 leading-7 text-neutral-700">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:p-8">
              <h3 className="text-xl font-bold text-black">
                Still Have a Question?
              </h3>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-neutral-700">
                Get in touch if you need more information about our services
                or want to discuss the requirements of your business.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* BUSINESS SERVICE AREAS */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Explore Our Services
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
                Business Services and Solutions
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                Explore the service areas available through Nexa. The
                options appropriate for your business will depend on your
                requirements, location, eligibility and provider availability.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-3xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-black">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-950"
                    >
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-black py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-400">
                A Straightforward Process
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                What Happens When You Make an Enquiry?
              </h2>

              <p className="mt-5 leading-8 text-neutral-300">
                Understanding the process can help you prepare the right
                information and decide how you want to proceed.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {helpfulSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-green-500/60 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 font-bold text-white">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-500"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-green-50 py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-green-200 bg-white p-8 shadow-sm sm:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <MessageCircle className="h-8 w-8" />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                  We Are Here to Help
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                  Let's Talk About Your Business Requirements
                </h2>

                <p className="mt-5 leading-8 text-neutral-600">
                  If you need help understanding your options or have a
                  question about a particular service, contact us or submit
                  an enquiry. We can help you identify the information needed
                  to explore the next steps.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800"
                  >
                    Contact Our Team
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-7 py-4 font-semibold text-black transition hover:border-green-600 hover:bg-green-50"
                  >
                    Request a Quote
                  </Link>
                </div>

                <p className="mt-6 text-sm leading-6 text-neutral-500">
                  Reviewing information and requesting a quote does not
                  automatically commit you to a contract or provider change.
                  Always check the applicable terms before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

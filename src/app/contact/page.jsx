
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team.",
    value: "+92 333 6516071",
    href: "tel:+923336516071",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions anytime.",
    value: "info@nexa.com",
    href: "mailto:info@nexa.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    description: "Serving businesses with reliable solutions.",
    value: "Pakistan",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-black">
        {/* Hero */}
        <section className="relative bg-black px-6 py-24 text-white md:py-32">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-green-700/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              <MessageSquare size={16} />
              Let's Talk
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Let's Build Something{" "}
              <span className="text-green-500">Better Together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Have a question or need a solution for your business? Contact
              our team and let's discuss how we can help your business grow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-500"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+923336516071"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-green-500 hover:text-green-400"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact details */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="font-bold uppercase tracking-[0.2em] text-green-700">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                We're Here to Help
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Choose the best way to reach us. Our team is ready to hear
                about your needs and answer your questions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/5"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-5 inline-block break-words font-bold text-green-700 transition hover:text-green-900"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-5 font-bold text-green-700">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact form and side panel */}
        <section
          id="contact-form"
          className="bg-gray-50 px-6 py-16 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
            {/* Left panel */}
            <div className="relative overflow-hidden rounded-3xl bg-black p-8 text-white md:p-10 lg:col-span-2">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-green-500/20 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600">
                  <MessageSquare size={27} />
                </div>

                <h2 className="text-3xl font-extrabold">
                  Tell Us About Your Project
                </h2>

                <p className="mt-5 leading-7 text-gray-300">
                  Tell us what your business needs. We'll help you explore
                  suitable solutions and the next steps.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "Business energy solutions",
                    "Connectivity and internet",
                    "Business water services",
                    "General business enquiries",
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-green-400"
                      />
                      <span className="text-sm text-gray-200">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/15 pt-6">
                  <p className="text-sm text-gray-400">
                    Prefer to speak with someone?
                  </p>
                  <a
                    href="tel:+923336516071"
                    className="mt-2 inline-flex items-center gap-2 font-bold text-green-400 hover:text-green-300"
                  >
                    <Phone size={17} />
                    +92 333 6516071
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:col-span-3">
              <h2 className="text-2xl font-extrabold md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Fill out the form below and tell us how we can assist you.
              </p>

              <form
                action="mailto:info@nexa.com"
                method="post"
                encType="text/plain"
                className="mt-8 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="Name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-black outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-black outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="Phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-black outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="Service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-black outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Business Energy">
                        Business Energy
                      </option>
                      <option value="Connectivity">Connectivity</option>
                      <option value="Business Water">Business Water</option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    required
                    placeholder="Tell us a little about what you need..."
                    className="w-full resize-y rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-black outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-600 sm:w-auto"
                >
                  Send Message
                  <Send size={18} />
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  This form uses your device's configured email application.
                  For direct website submissions, connect it to a backend or
                  form service.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl bg-green-700 p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="font-semibold text-green-100">
                Ready to get started?
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Let's Talk About Your Business.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-green-50">
                Contact us today to discuss your requirements and find the
                right solution.
              </p>
            </div>

            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-green-800 transition hover:bg-gray-100"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

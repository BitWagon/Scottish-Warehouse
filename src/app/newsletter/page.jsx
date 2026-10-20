
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata = {
  title: "Newsletter | Business Updates & Insights",
  description:
    "Subscribe for useful business updates, energy insights, connectivity news and practical business advice.",
};

const topics = [
  {
    number: "01",
    category: "ENERGY",
    title: "Business Energy",
    description:
      "Stay informed about business electricity, gas, energy services and ways to understand your business energy requirements.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
    href: "/energy",
  },
  {
    number: "02",
    category: "CONNECTIVITY",
    title: "Broadband & Connectivity",
    description:
      "Discover business connectivity information, broadband services and technology that helps your team stay connected.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    href: "/connectivity",
  },
  {
    number: "03",
    category: "BUSINESS SERVICES",
    title: "Business Solutions",
    description:
      "Explore updates about water, waste management, payment services and other solutions for your business.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    href: "/quote",
  },
];

const benefits = [
  {
    number: "01",
    title: "Stay informed",
    description:
      "Receive useful business updates and information relevant to your services.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Learn about different business services and opportunities worth considering.",
  },
  {
    number: "03",
    title: "Make informed decisions",
    description:
      "Use practical insights to help you understand your business service choices.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-7 flex items-center gap-2 text-sm text-neutral-400">
                  <Link href="/" className="transition hover:text-green-400">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-green-400">Newsletter</span>
                </div>

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                  Business Newsletter
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Stay informed.
                  <span className="mt-2 block text-green-400">
                    Make better decisions.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
                  Get useful business insights, service updates and practical
                  information delivered directly to your inbox. Discover
                  information about the services and opportunities that matter
                  to your business.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#subscribe"
                    className="inline-flex items-center justify-center rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-green-400"
                  >
                    Subscribe Now
                  </a>

                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-400"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-green-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                    alt="Business professionals discussing business solutions"
                    className="h-[340px] w-full object-cover md:h-[450px] sw-newsletter-photo"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-sm font-bold text-green-400">
                      BUSINESS SOLUTIONS
                    </p>
                    <p className="mt-2 text-lg font-bold text-white md:text-xl">
                      Information that helps your business move forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Join Our Newsletter
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Business information without the noise
              </h2>

              <p className="mt-5 text-base leading-8 text-neutral-600">
                Businesses have enough to think about. Our newsletter brings
                together useful information about energy, connectivity,
                payments, water and other services that can affect your
                day-to-day operations.
              </p>

              <p className="mt-4 text-base leading-8 text-neutral-600">
                Subscribe to receive relevant updates and practical insights
                that can help you understand your options and make more
                informed business decisions.
              </p>
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="bg-neutral-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                What We Cover
              </span>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                Topics that matter to your business
              </h2>

              <p className="mt-5 leading-7 text-neutral-600">
                Explore practical information about business services and
                solutions to help you stay informed.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <article
                  key={topic.number}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 sw-newsletter-photo"
                    />
                    <div className="absolute inset-0 bg-black/20 transition group-hover:bg-green-950/20" />
                    <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-green-500 font-bold text-black">
                      {topic.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {topic.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-black">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {topic.description}
                    </p>

                    <Link
                      href={topic.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition hover:gap-3 hover:text-green-800"
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION */}
        <section
          id="subscribe"
          className="scroll-mt-24 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid overflow-hidden rounded-3xl bg-black text-white shadow-xl lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-14">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                  Stay Updated
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Get useful business updates in your inbox
                </h2>

                <p className="mt-5 leading-8 text-neutral-300">
                  Subscribe to receive business news, service updates and
                  practical insights. Enter your email address to join our
                  newsletter.
                </p>

                <ul className="mt-7 space-y-3 text-sm text-neutral-200">
                  <li className="flex gap-3">
                    <span className="font-bold text-green-400">✓</span>
                    Useful business information
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-400">✓</span>
                    Service updates and insights
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-green-400">✓</span>
                    Unsubscribe whenever you wish
                  </li>
                </ul>
              </div>

              <div className="flex items-center bg-neutral-50 p-8 text-black md:p-12 lg:p-14">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-black">
                    Subscribe to our newsletter
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    Enter your email below to receive our latest updates.
                  </p>

                  <div className="mt-7">
                    <NewsletterForm />
                  </div>

                  <p className="mt-4 text-xs leading-6 text-neutral-500">
                    By subscribing, you agree to receive newsletter emails.
                    You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-y border-neutral-200 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Why Subscribe?
              </span>

              <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl">
                Make every update useful
              </h2>

              <p className="mt-5 leading-7 text-neutral-600">
                Our aim is to provide relevant information that helps you
                explore business services with greater confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 transition hover:border-green-400 hover:bg-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-black">
                    {benefit.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Need Business Support?
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Looking for the right business service?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-300">
              From business energy and connectivity to water, payments and
              waste management, our team can help you explore the options
              available for your business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="rounded-full bg-green-500 px-7 py-4 text-sm font-bold text-black transition hover:bg-green-400"
              >
                Get a Quote
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-neutral-700 px-7 py-4 text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes swNewsletterPhotoEnter {
          from { opacity: 0; transform: translateY(18px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .sw-newsletter-photo {
          animation: swNewsletterPhotoEnter 850ms ease-out both;
          transition: transform 550ms ease, filter 550ms ease;
        }
        .sw-newsletter-photo:hover,
        .group:hover .sw-newsletter-photo {
          transform: scale(1.045);
          filter: brightness(1.07) saturate(1.06);
        }
        @media (prefers-reduced-motion: reduce) {
          .sw-newsletter-photo { animation: none; transition: none; }
          .sw-newsletter-photo:hover,
          .group:hover .sw-newsletter-photo { transform: none; filter: none; }
        }
      `}</style>
      <Footer />
    </>
  );
}

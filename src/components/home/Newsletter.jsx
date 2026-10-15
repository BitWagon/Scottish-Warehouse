
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to subscribe right now."
        );
      }

      setSuccess(
        data.message ||
          "You have successfully subscribed to our newsletter."
      );
      setEmail("");
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Stay Updated
        </p>

        <h2 className="mt-4 text-3xl font-black text-black md:text-4xl">
          Get useful business updates
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-600">
          Subscribe to receive useful information, service updates and
          practical business insights directly in your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="home-newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="home-newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSuccess("");
              setError("");
            }}
            placeholder="Enter your email address"
            required
            disabled={loading}
            className="min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-5 py-4 text-black outline-none transition placeholder:text-neutral-400 focus:border-green-600 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:bg-neutral-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {success && (
          <p
            role="status"
            className="mx-auto mt-4 max-w-xl rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
          >
            {success}
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="mx-auto mt-4 max-w-xl rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
          >
            {error}
          </p>
        )}

        <p className="mt-5 text-xs leading-6 text-neutral-500">
          You can unsubscribe from newsletter emails at any time.
        </p>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-green-700/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {badge}
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
            <span className="block text-green-500">
              {highlight}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="group flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-600"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-green-500" />
              Business focused
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-green-500" />
              Simple process
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

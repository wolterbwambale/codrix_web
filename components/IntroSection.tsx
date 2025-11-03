"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#0a192f] via-[#0c1d38] to-[#0a192f] text-center text-white overflow-hidden">
      {/* 🔹 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* 🔹 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight"
        >
          Empowering Innovation Through Technology
        </motion.h2>

        {/* 🔹 Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          At{" "}
          <span className="text-blue-400 font-semibold">Codrix Solutions</span>,
          we create digital experiences that turn ideas into impactful products.
          From elegant websites to smart web apps, we build technology that helps
          brands thrive in the modern world.
        </motion.p>

        {/* 🔹 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/services"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-md shadow-blue-600/30 transition-all hover:scale-105"
          >
            Explore Our Services
          </Link>

          <Link
            href="/contact"
            className="border border-blue-400 hover:bg-blue-600/10 text-blue-400 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </motion.div>

      {/* 🔹 Decorative Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}

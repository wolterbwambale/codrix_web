"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a192f] via-[#0c1d38] to-[#0a192f] text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(29,78,216,0.2),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
        >
          Empowering Innovation Through Technology
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          At{" "}
          <span className="text-blue-400 font-semibold">Codrix Solutions</span>,
          we craft digital products that turn ideas into impact. From modern
          websites to intelligent web applications, we design and deliver
          technology that helps brands grow smarter, faster, and stronger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            Explore Our Services
          </Link>

          <Link
            href="/contact"
            className="border border-blue-500 hover:bg-blue-600/10 text-blue-400 px-8 py-3 rounded-xl font-medium transition-all hover:scale-105"
          >
            Let’s Talk
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}

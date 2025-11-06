"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function JoinTeamSection() {
  return (
    <section
      id="join"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a192f] via-[#0b1e38] to-[#0a192f] text-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
            <Image
              src="/images/join-team.png"
              alt="Developers collaborating illustration"
              width={480}
              height={480}
              className="relative z-10 rounded-2xl drop-shadow-lg opacity-95"
            />
          </div>
        </motion.div>
        
        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Join the Team
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We’re always looking for talented developers and creative minds to
            help build the next generation of digital solutions. If you’re
            passionate about technology and innovation, we want to hear from
            you!
          </p>

          <Link
            href="https://codrix.com"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}

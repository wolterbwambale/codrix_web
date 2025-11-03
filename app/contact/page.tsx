"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#060b16] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0b1e38] to-[#060b16]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center"
      >

        <div className="space-y-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-2xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          >
            Let’s Build Something Exceptional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Got a project or idea? We’re here to turn your vision into a seamless digital experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex justify-center lg:justify-start mt-10"
          >
            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/contact-illustration.png"
                alt="Tech illustration showing digital communication"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-[#0f1c2f]/60 border border-blue-500/20 rounded-2xl p-10 shadow-lg backdrop-blur-xl hover:shadow-blue-500/25 transition-all"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-300 text-center lg:text-left">
            Let’s Talk About Your Project
          </h2>
          <ContactForm />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/tech-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to <span className="text-blue-500">Codrix Solutions</span>
        </h1>
        <p className="text-gray-300 text-5xl md:text-4xl font-bold max-w-2xl mx-auto mb-8">
          Dream Big. Grow Great. Start building your website today!     
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
}

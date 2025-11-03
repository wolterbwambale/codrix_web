"use client";
import { motion } from "framer-motion";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <>
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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to <span className="text-blue-500">Codrix Solutions</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto mb-8 text-blue-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]"
        >
          Dream Big. Grow Great. <br />
          Start building your website today!
        </motion.p>

        <a
          href="/services"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
    <AboutPage
    />
    </>
  );
}

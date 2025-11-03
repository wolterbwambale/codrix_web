"use client";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a192f] via-[#0b1e38] to-[#0a192f] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Codrix Solutions is a technology-driven team passionate about transforming ideas into
          powerful digital products. We believe in innovation, excellence, and creating solutions
          that drive meaningful impact for businesses and communities worldwide.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0f2344]/60 border border-blue-500/20 rounded-2xl p-8 text-left shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-400">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses through modern technology — crafting smart, scalable, and
              sustainable digital solutions that fuel growth, creativity, and long-term success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0f2344]/60 border border-blue-500/20 rounded-2xl p-8 text-left shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            <h3 className="text-2xl font-bold mb-3 text-purple-400">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become a global leader in digital transformation — inspiring innovation and
              building technology that bridges people, ideas, and progress across the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl"></div>
    </section>

  );
}
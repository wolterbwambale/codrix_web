"use client";

import { motion } from "framer-motion";
import { Brush, Code2, Globe, Layout, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Design",
    icon: <Brush size={42} className="text-blue-400" />,
    desc: "Crafting visually stunning, user-focused designs that express your brand identity and inspire engagement.",
  },
  {
    title: "Web Applications",
    icon: <Code2 size={42} className="text-cyan-400" />,
    desc: "Developing modern, scalable web applications with clean, efficient code and seamless user experiences.",
  },
  {
    title: "Landing Pages",
    icon: <Layout size={42} className="text-purple-400" />,
    desc: "Designing high-converting landing pages optimized for clarity, performance, and measurable results.",
  },
  {
    title: "SEO & Performance",
    icon: <Globe size={42} className="text-indigo-400" />,
    desc: "Enhancing visibility and performance with search optimization, analytics, and technical precision.",
  },
  {
    title: "Mobile-Responsive Design",
    icon: <Smartphone size={42} className="text-blue-500" />,
    desc: "Ensuring your website looks and performs flawlessly across every screen size and device.",
  },
  {
    title: "Startup Launch Support",
    icon: <Rocket size={42} className="text-cyan-300" />,
    desc: "Empowering startups to launch strong with a complete strategy — from concept to digital execution.",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-28 px-6 bg-gradient-to-b from-[#0a192f] via-[#0b1e38] to-[#0a192f] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          At{" "}
          <span className="text-blue-400 font-semibold">Codrix Solutions</span>,
          we deliver cutting-edge digital solutions that empower brands to
          thrive in the modern web era combining creativity, technology, and
          strategy to achieve exceptional results.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-[#0f2344]/60 border border-blue-500/20 rounded-2xl p-10 shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center w-16 h-16 mb-5 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-300 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl"></div>
    </section>
  );
}

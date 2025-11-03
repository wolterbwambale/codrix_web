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
    </section>
  );
}

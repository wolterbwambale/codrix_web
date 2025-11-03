"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/join", label: "Join" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#0a192f] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-400">
          Codrix
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-cyan-400 transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a192f] text-white px-6 py-4 space-y-4 animate-slideDown">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-lg hover:text-cyan-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

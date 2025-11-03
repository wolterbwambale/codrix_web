"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-400">Codrix Solutions</span>. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Kintan Porto<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 transition"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-blue-400 transition"
            >
              More
              <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-52 rounded-xl bg-slate-900 border border-slate-700 shadow-xl overflow-hidden">

                <a
                  href="#skills"
                  className="block px-4 py-3 hover:bg-slate-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Skills
                </a>

                <a
                  href="#education"
                  className="block px-4 py-3 hover:bg-slate-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Education
                </a>

                <a
                  href="#projects"
                  className="block px-4 py-3 hover:bg-slate-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Projects
                </a>

                <a
                  href="#certificates"
                  className="block px-4 py-3 hover:bg-slate-800 transition"
                  onClick={() => setOpen(false)}
                >
                  Certificates
                </a>

              </div>
            )}
          </li>

        </ul>
      </nav>
    </header>
  );
}
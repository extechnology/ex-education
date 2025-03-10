"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Customers", href: "/customers" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed z-20 w-full ${
        scrolling ? "bg-white duration-500 shadow-md" : "bg-slate-300"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl py-5 px-5 md:px-0">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-slate-500">
          <Image
            src="/ededu_logo (2).png"
            alt="logo"
            width={220}
            height={220}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded-md transition text-lg font-medium text-slate-500 ${
                  pathname === href ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center gap-2 text-lg font-medium text-slate-500">
            <User size={20} />
            Profile
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: "-100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
          className="md:hidden mt-4 bg-slate-400 p-4"
        >
          <ul className="space-y-3">
            {navItems.map(({ label, href }) => (
              <motion.li
                key={href}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="border-b-2 border-slate-300 pb-2 last:border-none"
              >
                <Link
                  href={href}
                  className="block text-white py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
            <li className="py-3">
              <Link
                href="/"
                className="w-full shadow-md rounded-2xl px-3 py-2 bg-gray-100 text-fuchsia-600 border-white block text-center"
              >
                Profile
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react"; // Icons

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Customers", href: "/customers" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          ExEdu
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded-md transition ${
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
          <button  className="flex items-center gap-2">
            <User size={16} />
            Profile
          </button>

        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-white dark:bg-gray-900 p-4">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full">
              Profile
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

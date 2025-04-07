"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogIn, UserPlus, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";


// Clerk Authentication Hooks
import {
  useUser,
  useAuth,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/course" },
  { label: "About Us", href: "/about" },
  { label: "Admission", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [popupTimeout, setPopupTimeout] = useState<NodeJS.Timeout | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);
  // Clerk user authentication
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    // Retrieve profile ID from localStorage
    const storedProfileId = localStorage.getItem("profileId");
    if (storedProfileId) {
      setProfileId(storedProfileId);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pathname]);



  const handleProfileClick = async () => {
    if (!isSignedIn) {
      router.push("/no-account");
      return;
    }

    try {
      const token = await getToken();
      const clerkUserId = user?.id;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/me/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Clerk-User-Id": clerkUserId ?? "",
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const profileId = data.id;

        localStorage.setItem("profileId", profileId);

        router.push(`/profile/${profileId}`);
      } else {
        router.push("/no-account"); 
      }
    } catch (error) {
      console.error("Error checking profile:", error);
      router.push("/no-account");
    }
  };

  return (
    <nav
      className={`fixed z-20 w-full md:px-10 lg:px-0 ${
        scrolling ? "bg-white duration-500 shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl py-5 pl-1 pr-5 md:px-0">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-slate-500">
          <Image
            src="/ex edu logo-03.png"
            alt="logo"
            width={200}
            height={200}
            className="pl-3 md:pl-0"
          />
        </Link>
        <div className="flex items-center gap-10">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  prefetch={true}
                  className={`px-3 py-2 rounded-md transition text-lg font-medium text-slate-500 hover:text-slate-700`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Profile */}
          <div
            className="hidden md:flex items-center space-x-4 relative"
            onMouseEnter={() => {
              // Clear any existing timeout to prevent premature hiding
              if (popupTimeout) {
                clearTimeout(popupTimeout);
                setPopupTimeout(null);
              }
              setShowProfilePopup(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => {
                setShowProfilePopup(false);
              }, 1000);
              setPopupTimeout(timeout);
            }}
            style={{ minWidth: "150px" }}
          >
            {/* Profile Button - Click to Navigate */}
            <div
              className="flex items-center text-lg rounded-full border-2 px-3 py-1 shadow border-gray-300 font-medium text-slate-600 cursor-pointer"
              onClick={handleProfileClick}
            >
              <User className="mr-2 w-5" />
              Profile
            </div>

            {/* Profile Popup (Shown on Hover) */}
            {showProfilePopup && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-md border border-gray-200 py-2 z-30"
              >
                {isSignedIn ? (
                  <SignOutButton>
                    <div className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 w-full text-left transition-all cursor-pointer">
                      <LogOut size={18} /> Logout
                    </div>
                  </SignOutButton>
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <div className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all cursor-pointer">
                        <LogIn size={18} /> Login
                      </div>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <div className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all cursor-pointer">
                        <UserPlus size={18} /> Sign Up
                      </div>
                    </SignUpButton>
                  </>
                )}
              </motion.div>
            )}
          </div>
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
          initial={{ y: "-100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className="md:hidden bg-slate-300 p-4 border-slate-300 shadow-lg border-b"
        >
          <ul className="space-y-3">
            {navItems.map(({ label, href }) => (
              <li
                key={href}
                className="border-b-2 border-slate-200 pb-2 last:border-none"
              >
                <Link
                  href={href}
                  className="block text-gray-500 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="py-5">
              <button
                className="w-full shadow-md rounded-2xl px-3 py-2 bg-gray-100 text-fuchsia-600 border-white block text-center"
                onClick={() => {
                  router.push(isSignedIn ? "/profile" : "/no-account");
                  setIsOpen(false);
                }}
              >
                Profile
              </button>
            </li>

            {/* Authentication Buttons */}
            <li className="py-2">
              {isSignedIn ? (
                <SignOutButton>
                  <div
                    className="flex items-center gap-2 px-4 py-2 text-red-600 bg-white shadow-md rounded-md text-center justify-center hover:bg-red-100 transition-all cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogOut size={18} /> Logout
                  </div>
                </SignOutButton>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <div
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white shadow-md rounded-md text-center justify-center hover:bg-gray-100 transition-all cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <LogIn size={18} /> Login
                    </div>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <div
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white shadow-md rounded-md text-center justify-center hover:bg-gray-100 transition-all cursor-pointer mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserPlus size={18} /> Sign Up
                    </div>
                  </SignUpButton>
                </>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

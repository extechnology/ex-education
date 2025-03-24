"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import Link from "next/link";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "9072123466"; 
  const message = encodeURIComponent("Hello, I'm interested in your products!");

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        // Popup Chat Box (Only Visible When Open)
        <div
          ref={popupRef}
          className="bg-gradient-to-r from-white to-slate-100 shadow-lg rounded-3xl w-80 h-60 transition-opacity duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 p-4 rounded-t-3xl text-white">
            <div className="flex items-center gap-2">
              <FaWhatsapp size={20} />
              <span className="font-semibold">WhatsApp</span>
            </div>
            <button title="Close" onClick={() => setIsOpen(false)}>
              <IoClose size={22} className="hover:text-gray-200" />
            </button>
          </div>

          {/* Chat Box */}
          <div className="bg-gradient-to-r from-white to-gray-200 p-3 rounded-lg my-8 mx-3 shadow-sm">
            <p className="text-gray-700 text-sm">Hello 👋</p>
            <p className="text-gray-700 text-sm">Can we help you?</p>
          </div>

          {/* Open Chat Button */}
          <Link
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            className="flex items-center justify-between bg-green-500 text-white p-4 rounded-b-3xl mt-3 shadow-md hover:bg-green-600 transition"
          >
            <span className="font-medium">Open chat</span>
            <BsSend size={18} />
          </Link>
        </div>
      ) : (
        // WhatsApp Button (Hidden When Open)
        <button
        title="WhatsApp"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        >
          <FaWhatsapp size={28} />
        </button>
      )}
    </div>
  );
};

export default WhatsAppButton;

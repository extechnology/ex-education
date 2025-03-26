"use client";
import React, { useEffect, useRef } from "react";
import MainContent from "../components/no-account/MainContent";

const NoAccount = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const elements =
        containerRef.current.querySelectorAll(".animate-on-scroll");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
          el.classList.add("animate-reveal");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white"
    >
      <MainContent />
    </div>
  );
};

export default NoAccount;

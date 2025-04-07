"use client";
import React, { useEffect, useRef } from "react";
import MainContent from "../components/no-account/MainContent";
import { useRouter } from "next/navigation";
import { useUser, useAuth } from "@clerk/nextjs";

const NoAccount = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

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


  useEffect(() => {
    const checkProfile = async () => {
      if (!isSignedIn || !user) return;

      try {
        const token = await getToken();
        const clerkUserId = user.id;

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/me/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Clerk-User-Id": clerkUserId,
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const profileId = data.id;
          localStorage.setItem("profileId", profileId);
          router.push(`/profile/${profileId}`);
        }
        // else just stay on this page
      } catch (err) {
        console.error("Error checking profile after login:", err);
      }
    };

    checkProfile();
  }, [isSignedIn, user]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
    >
      <MainContent />
    </div>
  );
};

export default NoAccount;

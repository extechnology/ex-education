import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/header/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/common/footer/Footer";
import WhatsAppButton from "./components/common/whatsapp/WhatsappIcon";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "./provider/QueryProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400","500","700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "exedu - AI-Powered Digital Marketing & Design Courses",
  description:
    "Join Ex Edu for expert-led training in AI-powered digital marketing and gain in-demand skills to stay ahead in a tech-driven market. Our comprehensive programs cover graphic design, where you’ll master tools like Adobe Photoshop and Canva; prompt AI & AI-driven content creation, leveraging tools like ChatGPT and Midjourney to enhance marketing strategies; UI/UX design, focusing on user-centric digital experiences; web & mobile app development, using modern frameworks like React, Flutter, and Django; and video editing, mastering software like Adobe Premiere Pro and DaVinci Resolve for high-quality content creation. Designed for aspiring digital marketers, entrepreneurs, designers, developers, and content creators, our courses provide hands-on training, expert insights, and flexible learning options to help you build a strong portfolio and excel in the evolving digital landscape. Enroll today at Ex Edu and future-proof your career with cutting-edge AI-powered marketing skills.",
  robots: "index, follow",
  alternates: {
    canonical: "https://exedu.in",
  },
  openGraph: {
    title: "exedu - Hybrid AI Education",
    description:
      "Boost your career with expert-led courses in digital marketing, AI, SEO, graphic design, and more.",
    url: "https://exedu.in/ex_edu_logo-3.png",
    images: [
      {
        url: "https://exedu.in/ex_edu_logo-3.png",
        width: 1200,
        height: 630,
        alt: "exedu - AI-Powered Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "exedu - Learn AI, Digital Marketing, & More",
    description:
      "Master AI-driven digital marketing, SEO, and graphic design with our expert courses.",
    images: ["https://exedu.in/ex_edu_logo-3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryProvider>
        {" "}
        {/* ✅ Now using the client-safe QueryProvider */}
        <html lang="en">
          <body className={`${poppins.variable} antialiased`}>
            <main>
              <Navbar />
              {children}
              <WhatsAppButton />
              <Footer />
            </main>
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}

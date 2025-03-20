import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/header/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/common/footer/Footer";
import WhatsAppButton from "./components/common/whatsapp/WhatsappIcon";


const poppins = Poppins({
  weight: ["400", "700"], // Add font weights
  variable: "--font-poppins",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ExEdu",
  description: "Hybrid AI Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <main >
          <Navbar />
          {children}
          <WhatsAppButton/>
          <Footer/>
        </main>
      </body>
    </html>
  );
}

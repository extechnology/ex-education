import Link from "next/link";
import { Instagram,Twitter,Facebook,Youtube, LinkedinIcon } from "lucide-react";
import LinkedIn from "next-auth/providers/linkedin";
const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-10 border-t-2 border-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        <div>
          <h1 className="font-bold text-3xl">Quick Links</h1>
          <ul className="space-y-2 pt-4">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Contact</h1>
          <ul className="space-y-2 pt-4">
            <li>ExEdu</li>
            <li>Ramanattukara, Kerala</li>
            <li>Ph: +91 0000000000</li>
            <li>Email : exedu@example.com</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Follow Us</h1>
          <ul className="flex space-x-5 pt-4">
            <li>
                <Link href="https://www.instagram.com/"><Instagram/></Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/"><Facebook/></Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/"><Youtube/></Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/"><Twitter/></Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/"><LinkedinIcon/></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
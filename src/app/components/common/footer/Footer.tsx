import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r  from-slate-800 to-slate-900 text-white pt-10 pb-7 shadow-t-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-5 space-y-8 md:space-y-0">
        <div>
          <h1 className="font-bold text-3xl">Quick Links</h1>
          <ul className="space-y-2 pt-4">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
            <li>Admission</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Contact</h1>
          <ul className="space-y-2 pt-4">
            <li>exedu</li>
            <li>An initiative of extechnology </li>
            <li>Ramanattukara, Kozhikode</li>
            <li>Kerala 673633 , India</li>
            <li>Ph: +91 9072123466</li>
            <li>Email : info@exedu.in</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Follow Us</h1>
          <ul className="flex space-x-5 pt-4">
            <li>
              <Link href="https://www.instagram.com/">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <Youtube />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <LinkedinIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col justify-center space-y-8">
          <div>
            <Image src="/ededu_logo (2).png" alt="logo" width={250} height={250} />
          </div>
          <div className="pl-1">
            <Image src="/EX_TECHNOLOGY_LOGO-01.png" alt="logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <hr className=" mt-10 text-slate-700 border-[1px]" />
      <div className="max-w-7xl mx-auto px-5 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0">
          <div>Powered By Extechnology</div>
          <div>
            <p className="">
              Copyright &copy; 2023 ExEdu. All rights reserved.
            </p>
          </div>
          <div className="flex gap-1">
            <div>
              <Link href={"/"}>Privacy Policy |</Link>
            </div>
            <div>
              <Link href={"/"}>Terms & Conditions |</Link>
            </div>
            <div>
              <Link href={"/"}>Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

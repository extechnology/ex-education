import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r  from-slate-800 to-slate-900 text-white pt-10 pb-7 shadow-t-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-5 space-y-8 md:space-y-0">
        <div>
          <h1 className="font-bold md:text-3xl text-2xl">Quick Links</h1>
          <ul className="space-y-2 pt-4">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/course"}>
              <li>Courses</li>
            </Link>
            <Link href={"/contact"}>
              <li>Admission</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-3xl text-2xl">Contact</h1>
          <ul className="space-y-2 pt-4">
            <li>Room No: 20/884,</li>
            <li>Opposite Bus Stand,</li>
            <li>Ramanattukara, Kozhikode</li>
            <li>Kerala 673633 </li>
            <li>Ph: +91 9072123466</li>
            <li>Email : exeduone@gmail.in</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold md:text-3xl text-2xl">Follow Us</h1>
          <ul className="flex space-x-5 pt-4">
            <li>
              <Link href="https://www.instagram.com/exedu_/">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61573566939195">
                <FaFacebook className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@Exeduai">
                <FaYoutube className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/Exedu_">
                <FaXTwitter className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/exedus/">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://in.pinterest.com/exedu_/_profile/">
                <FaPinterest className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col justify-center space-y-8">
          <div>
            <Image
              src="/ededu_logo (2).png"
              alt="logo"
              width={250}
              height={250}
              className="p-4 bg-gray-100 rounded"
            />
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
              <Link href={"/privacy"}>Privacy Policy |</Link>
            </div>
            <div>
              <Link href={"/terms"}>Terms & Conditions |</Link>
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

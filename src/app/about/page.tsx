import Image from "next/image";
import Whyexedu from "../components/about/Whyexedu";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Mission from "../components/about/Mission";
import ConfirmCareer from "../components/about/ConfirmCareer";

function About() {
  return (
    <div>
      <div className="bg-[#F4F7FB] pt-36 pb-24  bg-[url('https://img.freepik.com/free-vector/gradient-colorful-grainy-dynamic-background_52683-101908.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center content-center text-white">
          <div className="content-end relative md:top-10 px-5">
            <div>
              <h1 className="content-center text-6xl font-bold">ABOUT US</h1>
            </div>
            <div className="pt-4">
              <h2 className="text-3xl font-semibold text-yellow-300">
                A leading Hybrid AI Institute in Kerala
              </h2>
              <p className="pt-5 text-xl">
                Blending AI and creativity seamlessly &{" "}
              </p>
              <p className="text-xl">
                Innovating marketing education for tomorrow.{" "}
              </p>
            </div>
            <div className="pt-5 w-full">
              <Link href="/" className="w-full">
                <button className="flex items-center justify-center md:gap-2 md:w-2/3 text-gray-700 font-semibold bg-gray-100 text-md rounded-lg shadow-lg py-4 px-2 hover:scale-110 transition-all duration-300">
                  <MessageCircle className="md:w-5 w-20 md:h-5 text-green-500" />
                  <p className="text-sm-center">Chat with the Course Counselor now!</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative top-24">
            <Image
              src={"/people_sitting.png"}
              alt="no image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div>
        <Whyexedu />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <ConfirmCareer />
      </div>
    </div>
  );
}
export default About;

import Image from "next/image";
import { Cpu } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl text-gray-800 ">
      <div className="content-center space-y-6">
        <h1 className="text-5xl font-bold">
          Kerala's Leading <span className="text-fuchsia-700">Hybrid</span> Education Platform
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, fugiat.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
      <div className="content-center ">
        <div className="w-40 flex flex-col items-center md:relative top-1/3 left-3/4">
          <Cpu
            size={50}
            className="bg-sky-500 text-white p-2 rounded-full text-center relative top-4"
          />
          <div className="bg-white rounded-2xl text-center py-5 px-8 shadow-sm">
            <p className="font-medium text-md">Technologies</p>
            <h1 className="font-bold text-3xl">10+</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/person_with_laptop.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

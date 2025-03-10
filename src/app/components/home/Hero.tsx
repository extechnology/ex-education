import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-300 via-slate-300 to-[F4F7FB] pt-20 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl text-gray-800 md:py-10 py-10">
        <div className="content-center space-y-6 px-3 md:px-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-14 md:leading-16">
            Kerala&apos;s Leading{" "}
            <span className="text-fuchsia-700">Hybrid</span> Education Platform
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            fugiat.
          </p>
          <button className="bg-blue-700 hover:bg-blue-600 w-36 hover:w-50  hover:rounded-xl hover:shadow transition-all duration-500 text-white font-bold py-2 px-4 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="content-center py-10 md:py-0">
          <div className="flex justify-end">
            <Image
              src="/person_with_laptop.png"
              width={600}
              height={600}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import Image from "next/image";

function Mission() {
  return (
    <div className="bg-teal-600 ">
      <div className="max-w-6xl mx-auto md:flex content-center py-15 gap-10 px-5 md:px-0">
        <div className="md:w-1/3 pb-10 md:pb-0">
          <Image
            src="/mission.png"
            alt="no image"
            width={400}
            height={400}
            className="rounded-md w-[75%] mx-auto md:w-full"
          />
        </div>
        <div className="md:w-2/3 content-center pt-2 md:pt-0">
          <h1 className="md:text-4xl text-center md:text-start text-3xl font-bold text-white">
            OUR MISSION
          </h1>
          <p className="md:w-[90%] text-white text-lg text-justify py-5">
            exedu’s mission is to empower learners with cutting-edge skills and
            knowledge through innovative, hybrid AI-driven education. We aim to
            bridge the gap between traditional learning and modern industry
            demands by offering specialized professional courses By combining
            advanced technology, hands-on training, and expert guidance, we
            strive to equip students with the tools to excel in a rapidly
            evolving digital world, fostering creativity, innovation, and
            career-ready expertise.
          </p>
          <div className="pt-5 flex justify-center md:justify-start">
            <button className="p-4 text-white w-50 hover:w-70 transition-all duration-500 hover:bg-teal-800 rounded-2xl bg-teal-700 shadow-md">
              Book Your Seat Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mission;

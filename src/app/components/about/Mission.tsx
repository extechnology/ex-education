import Image from "next/image";

function Mission() {
  return (
    <div className="bg-teal-600 h-[60vh]">
      <div className="max-w-6xl mx-auto md:flex content-center pt-15 gap-10">
        <div className="w-1/3">
          <Image
            src="/mission.png"
            alt="no image"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
        <div className="w-2/3 content-center">
          <h1 className="text-4xl font-bold text-white">OUR MISSION</h1>
          <p className="w-[90%] text-white py-5">
            exedu’s mission is to empower learners with cutting-edge skills and
            knowledge through innovative, hybrid AI-driven education. We aim to
            bridge the gap between traditional learning and modern industry
            demands by offering specialized professional courses By combining
            advanced technology, hands-on training, and expert guidance, we
            strive to equip students with the tools to excel in a rapidly
            evolving digital world, fostering creativity, innovation, and
            career-ready expertise.
          </p>
          <div className="pt-5">
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

import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 max-w-7xl mx-auto py-10 md:pt-30 md:pb-10 px-5">
        {/* Image Section */}
        <div className="flex flex-col items-center space-y-5 md:grid  md:grid-cols-2 md:justify-center"  >
          <Image
            src="https://img.freepik.com/premium-vector/education-microscope-symbol-science-icons_8071-17867.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt="no image"
            width={500}
            height={50}
            className="md:h-60 md:w-90 rounded-xl md:relative md:left-10 md:top-15 md:-rotate-1 md:skew-y-5 z-10 border-4 border-gray-300 shadow-xl"
          />
          <Image
            src="https://img.freepik.com/free-photo/happy-engineers-checking-signs-imminent-failure-data-center_482257-94725.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            height={500}
            width={500}
            alt="no image"
            className="md:w-80 md:h-100 rounded-xl md:-rotate-1 md:skew-y-5 shadow-2xl border-4 border-gray-300"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-800 content-center space-y-5  md:px-0">
          <p className="text-xl font-semibold">
            <span className="bg-zinc-100 text-fuchsia-600 px-2 py-1 rounded-lg">
              Our Passion
            </span>
          </p>
          <h1 className="font-bold text-4xl w-[90%]">
            Transform Your Passion into Profession, Join With Us
          </h1>
          <p className="w-[90%] text-xl text-justify">
            Unlock Your Future with exedu! Master Digital Marketing, Graphics
            Design, Prompt AI, and Robotics. Transform Your Skills, Embrace
            Innovation, and Lead the Tech Revolution. Enroll Today and Shape
            Tomorrow with Hybrid AI Education!
          </p>
          <Link href={"/"} className="">
            <button className="py-2 px-3 rounded-xl w-42 hover:w-58 transition-all duration-500 font-bold hover:bg-fuchsia-700 bg-fuchsia-600 text-white">
              For More Queries
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

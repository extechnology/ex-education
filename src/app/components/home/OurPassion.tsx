import Link from "next/link";
import Image from "next/image";
import { useImages } from "@/app/hooks/image-hook";

const AboutUs: React.FC = () => {

  const {data, isLoading, error} = useImages();
  if (isLoading) return <p>Loading image...</p>;
  if (error) return <p>Failed to load images</p>;

  const ourPassion = data?.find(
    (item: { section: string }) => item.section === "passion"
  )?.image;

  console.log(ourPassion,'image');

  return (
    <div className="bg-white pb-14">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 max-w-7xl mx-auto py-10 md:pt-30 md:pb-10 px-5">
        {/* Image Section */}
        <div className="flex flex-col items-center space-y-5 md:grid  md:grid-cols-2 md:justify-center">
          {
            ourPassion ? (
              <Image
            src={ourPassion}
            alt="no image"
            width={500}
            height={50}
            className="md:h-60 md:w-90 rounded-xl md:relative md:left-10 md:top-17 md:-rotate-1 md:skew-y-5 z-10 border-4 border-gray-300 shadow-xl"
            data-aos="fade-up"
          />
            )
            :
            (
              <p>no image</p>
            )
          }
          <Image
            src="/passion2-01.jpg"
            height={500}
            width={500}
            alt="no image"
            className="md:w-80 md:h-100 rounded-xl md:-rotate-1 md:skew-y-5 shadow-2xl border-4 border-gray-300"
            data-aos="fade-up"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-800 content-center space-y-5  md:px-0">
          <p data-aos="zoom-in-down" className="text-xl font-semibold">
            <span className="bg-zinc-100 text-fuchsia-600 px-2 py-1 rounded-lg">
              Our Passion
            </span>
          </p>
          <h1
            data-aos="zoom-in-up"
            className="font-bold md:text-4xl text-2xl w-[90%]"
          >
            Transform Your Passion into Profession, Join With Us
          </h1>
          <p
            data-aos="zoom-in"
            className="w-[90%] md:text-xl text-md text-justify"
          >
            Unlock Your Future with exedu! Master Digital Marketing, Graphics
            Design, Prompt AI, and Robotics. Transform Your Skills, Embrace
            Innovation, and Lead the Tech Revolution. Enroll Today and Shape
            Tomorrow with Hybrid AI Education!
          </p>
          <Link href={"/contact"} className="">
            <button
              data-aos="zoom-in-up"
              className="py-2 px-3 rounded-xl w-42 hover:w-58 transition-all duration-500 font-bold hover:bg-fuchsia-700 bg-fuchsia-600 text-white"
            >
              For More Queries
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

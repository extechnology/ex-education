import Image from "next/image";
import { useImages } from "@/app/hooks/image-hook";
import Link from "next/link";

const Hero: React.FC = () => {
  const { data, isLoading, error } = useImages();
  console.log(data);

  if (isLoading) return <p>Loading hero image...</p>;
  if (error) return <p>Failed to load images</p>;

  const heroImage = data?.find(
    (item: { section: string }) => item.section === "hero"
  )?.image;

  return (
    <div className="bg-gradient-to-b from-white pt-20 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl text-gray-800 lg:py-14 md:py-10 py-10">
        <div className="content-center space-y-6 px-3 md:px-0">
          <h1
            data-aos="flip-down"
            className="text-5xl md:text-6xl font-bold leading-14 md:leading-16"
          >
            Kerala&apos;s Leading{" "}
            <span className="text-fuchsia-700">Hybrid AI</span> Education
            Platform
          </h1>
          <p data-aos="zoom-in-up" className="text-xl">
            Empowering Future-Ready Learning with AI & Innovation!
          </p>
          <button className="bg-blue-700 hover:bg-blue-600 w-36 hover:w-50 hover:rounded-xl hover:shadow transition-all duration-500 text-white font-bold py-2 px-4 rounded-lg">
            <Link href="/course">Get Started</Link>
          </button>
        </div>
        <div data-aos="fade-in" className="content-center py-10 md:py-0">
          <div className="flex justify-end">
            {heroImage ? (
              <Image
                src={heroImage}
                width={540}
                height={540}
                alt="Hero Section Image"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

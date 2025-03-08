import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto space-x-14 py-10 md:py-20 ">
        <div className="space-y-5 md:flex">
          <Image
            src="https://img.freepik.com/premium-vector/education-microscope-symbol-science-icons_8071-17867.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt="no image"
            width={200}
            height={80}
            className="h-60 w-90 rounded-xl md:relative left-10 top-30 md:-rotate-1 md:skew-y-5 z-10 border-4 border-gray-300 shadow-xl"
          />
          <Image
            src="https://img.freepik.com/free-photo/happy-engineers-checking-signs-imminent-failure-data-center_482257-94725.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            height={500}
            width={500}
            alt="no image"
            className="w-80 h-100 rounded-xl md:-rotate-1 md:skew-y-5 shadow-2xl border-4 border-gray-300"
          />
        </div>
        <div className="text-gray-800 content-center space-y-5 px-5 md:px-0">
          <p className="text-xl font-semibold ">
            <span className="bg-zinc-200 text-fuchsia-600 px-2 py-1 rounded-lg">About Us</span>
          </p>
          <h1 className="font-bold text-4xl w-[90%]">
            Learn From Industry Experts Around The Globe
          </h1>
          <p className="w-[90%] text-xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            quidem nesciunt culpa rerum ipsam sint obcaecati! Voluptatum aliquid
            consequatur animi eligendi laboriosam dolores ipsam illo fuga! Vitae
            iure sunt alias.
          </p>
          <Link href={"/"} className="py-2 px-3 rounded-xl font-bold hover:bg-fuchsia-800 bg-fuchsia-600 text-white">For More Queries</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

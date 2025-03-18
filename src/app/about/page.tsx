
import Image from "next/image";
import Whyexedu from "../components/about/Whyexedu";
function About() {
  return (
    <div>
      <div className="bg-[#F4F7FB] pt-36 pb-24  bg-[url('https://img.freepik.com/free-vector/gradient-colorful-grainy-dynamic-background_52683-101908.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center content-center text-white">
          <div className="flex text-center justify-center ">
            <h1 className="text-center content-center text-6xl font-bold">
              About Us
            </h1>
          </div>
          <div className="relative top-23">
            <Image src={"/people_sitting.png"} alt="no image" width={600} height={600}/>
          </div>
        </div>
      </div>
      <Whyexedu/>
    </div>
  );
}
export default About;

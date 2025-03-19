import Image from "next/image";

function Whyexedu() {
  return (
    <div className="bg-[#F4F7FB] h-[55vh]">
      <div className="max-w-7xl mx-auto py-10 md:flex">
        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-fuchsia-700 py-4">
            Why Choose exedu
          </h1>
          <p className="text-lg pt-3">
            exedu is a pioneering Hybrid AI Education institute that blends
            advanced technology with innovative learning methodologies. Offering
            specialized courses in Digital Marketing with Graphics Design &
            Prompt AI, Graphics Design, and Robotics, exedu equips students with
            the skills to thrive in a rapidly evolving digital landscape. By
            integrating AI-driven tools and hands-on training, the institute
            ensures a comprehensive learning experience that bridges theory and
            practice. Whether you&apos;re aspiring to master creative design,
            leverage AI in marketing, or delve into robotics, We provide a
            dynamic, future-focused education tailored to meet the demands of
            modern industries and business{" "}
          </p>
        </div>
        <div className="w-1/3">
          <Image src="/why_us.png" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
export default Whyexedu;

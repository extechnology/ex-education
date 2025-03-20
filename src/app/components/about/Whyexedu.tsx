import Image from "next/image";

function Whyexedu() {
  return (
    <div className="bg-[#F4F7FB] h-[55vh]">
      <div className="max-w-7xl mx-auto py-10 md:flex">
        <div className="w-2/3">
          <h1 className="text-4xl font-bold text-fuchsia-700 py-4">
            Why Choose exedu
          </h1>
          <p className="text-lg pt-3 text-justify">
            exedu is a leading Hybrid AI Education institute, merging advanced
            technology with innovative learning. Offering courses in Digital
            Marketing with Graphics Design & Prompt AI, Graphics Design,
            Robotics, Web & Mobile Applications & UX-UI Design, exedu prepares
            students for the digital future. With AI-driven tools and hands-on
            training, the institute bridges theory and practice, delivering a
            dynamic, industry-aligned education. Whether mastering design, AI in
            marketing, or robotics, exedu provides future-focused skills to meet
            modern industry demands. We are executing all the learning and
            interaction sessions with Highly Professional and Talented Faculty
            and Mentors, also provide an Internship program with Live and Client
            Delivering Projects.
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

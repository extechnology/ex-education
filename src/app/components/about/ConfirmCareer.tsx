import Image from "next/image";

function ConfirmCareer() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="md:flex max-w-7xl mx-auto py-5 ">
        <div className="md:w-2/3 content-center space-y-5">
          <h1 className="font-bold md:text-3xl text-2xl text-center md:text-start text-fuchsia-700">
            Confirm your career in the <br /> Digital & Technology Profession.
          </h1>
          <p className="text-justify md:w-[90%] text-lg px-5 md:px-0">
            At exedu, we help you confidently build a career in the digital and
            technology professions. Our specialized courses in Digital
            Marketing, Graphics Design, Prompt AI, and Robotics are designed to
            equip you with industry-relevant skills and hands-on experience.
            With expert-led training, AI-driven tools, and practical projects,
            we prepare you to excel in a fast-evolving digital landscape. Join
            exedu to gain the knowledge, certifications, and confidence needed
            to thrive in today’s tech-driven world.
          </p>
        </div>
        <div className="md:w-1/3 px-5 md:px-0 pt-5 md:pt-0">
          <Image
            src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt="no image"
            width={450}
            height={450}
            className="rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}
export default ConfirmCareer;

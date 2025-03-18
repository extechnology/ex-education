import Image from "next/image";

function AboutModule() {
  return (
    <div className="bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 text-xl py-8">
          <div className="flex ">
            <p className="content-center w-2/3">
              Updated/High Quality Syllabus
            </p>
            <Image
              src={"/list.png"}
              alt="no image"
              width={20}
              height={20}
              className="w-16 rounded-full shadow-lg"
            />
          </div>
          <div className="flex gap-3">
            <p className="w-2/3">Highly Professional Faculties</p>
            <Image
              src={"/graduating-student.png"}
              alt="no image"
              width={20}
              height={20}
              className="w-16 rounded-full shadow-lg"
            />
          </div>
          <div className="flex ">
            <p className="w-2/3">Internship With Branded Companies</p>
            <Image
              src={"/student.png"}
              alt="no image"
              width={20}
              height={20}
              className="w-16 rounded-full shadow-lg"
            />
          </div>
          <div className="flex">
            <p className="w-2/3">100% Placement Assistance</p>
            <Image
              src={"/assurance.png"}
              alt="no image"
              width={20}
              height={20}
              className="w-16 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutModule;

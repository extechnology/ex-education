import Courses from "@/app/components/course/CourseDetails";
import Form from "@/app/components/course/Form";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ Pre-generate static paths for export mode
export async function generateStaticParams() {
  return Courses.map((course) => ({
    id: course.id.toString(),
  }));
}

// ✅ Make the function async to handle params properly
export default async function CourseDetail({
  params,
}: {
  params: { id?: string };
}) {
  // ✅ Ensure params is fully resolved before accessing it
  if (!params || !params.id) {
    return notFound();
  }

  const courseId = params.id;

  // ✅ Find the course safely
  const course = Courses.find((c) => c.id.toString() === courseId);

  if (!course) {
    return notFound();
  }

  return (
    <div>
      <Form />
      <section className="relative flex flex-col md:flex-row items-center px-8 md:px-16 py-12 bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 w-1/3 left-0 z-0"></div>

        <div className="flex max-w-7xl mx-auto">
          {/* ✅ Image Section */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="bg-white shadow-lg rounded-lg">
              {course.image && (
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                  unoptimized // ✅ Required for `next export`
                />
              )}
            </div>
          </div>

          {/* ✅ Text Content */}
          <div className="relative z-10 w-full md:w-1/2 text-left md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 uppercase leading-tight">
              {course.title}
            </h2>
            <p className="mt-4 text-gray-700 text-lg text-justify">
              {course.into_para}
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Course Subtitle */}
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="text-4xl font-bold text-white text-center p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          {course.sub_title}
        </h1>
        <p className="pt-5 text-gray-700 text-lg text-justify w-[80%] mx-auto">
          {course.content}
        </p>
      </div>

      {/* ✅ What You'll Learn */}
      <div className="max-w-7xl mx-auto mt-5">
        <h3 className="text-4xl font-bold text-white text-center p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          What You'll Learn:
        </h3>
        <ul className="mt-2 list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto py-5">
          {course.pros?.[0] &&
            Object.entries(course.pros[0]).map(([key, skills]) =>
              Array.isArray(skills)
                ? skills.map((skill: string, index: number) => (
                    <li key={index} className="text-gray-700">
                      {skill}
                    </li>
                  ))
                : null
            )}
        </ul>
      </div>
    </div>
  );
}

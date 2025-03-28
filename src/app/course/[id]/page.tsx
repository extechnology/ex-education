import Courses from "@/app/components/course/CourseDetails";
import Form from "@/app/components/course/Form";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await the promise to resolve

  if (!resolvedParams?.id) return notFound(); // Check for ID presence

  const courseId = resolvedParams.id;
  const course = Courses.find((c) => c.id.toString() === courseId);

  if (!course) return notFound(); // If the course is not found, show a 404 page

  return (
    <div>
      {course && (
        <Form
          course={{
            id: course.id,
            title: course.title || "",
          }}
        />
      )}
      <section className="relative grid grid-rows-1 md:flex-row items-center px-4 md:px-16 py-12 bg-white">
        <div className="absolute inset-0 bg-gradient-to-r hidden md:block from-orange-500 to-pink-500 w-1/3 left-0 z-0"></div>
        <div className="md:flex max-w-7xl mx-auto">
          {/* ✅ Image Section */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="bg-white shadow-lg rounded-lg">
              {course.image ? (
                <Image
                  src={course.image}
                  alt={course.title || "Course Image"}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>
          {/* ✅ Text Content */}
          <div className="relative z-10 w-full md:w-1/2 text-left md:pl-12">
            <h2 className="text-3xl pt-5 md:pt-0 md:text-4xl font-bold text-pink-600 uppercase leading-tight">
              {course.title}
            </h2>
            <p className="mt-4 text-gray-700 text-lg text-justify">
              {course.into_para || "Description not available"}
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Course Subtitle */}
      <div className="max-w-7xl mx-auto md:mt-5">
        <h1 className="text-4xl font-bold text-white text-center p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          {course.sub_title}
        </h1>
        <div className="md:flex gap-5 md:px-5">
          <Image
            src={course.image3}
            alt="no image"
            className="rounded-lg md:py-3 "
            height={400}
            width={400}
          />
          <p className="pt-5 text-gray-700 text-lg text-justify md:w-[80%] w-[90%] mx-auto">
            {course.content}
          </p>
        </div>
      </div>

      {/* ✅ What You'll Learn */}
      <div className="max-w-7xl mx-auto mt-5">
        <h3 className="text-4xl font-bold text-white text-center p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          What You&apos;ll Learn:
        </h3>
        <div className="md:flex gap-5 md:p-5">
          <Image
            src={course.image3}
            alt="no image"
            height={400}
            width={400}
            className="md:pl-2"
          />

          <ul className="mt-2 list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[80%] w-[90%] mx-auto py-5">
            {course.pros?.[0] &&
              Object.entries(course.pros[0]).map(([key, skills]) =>
                Array.isArray(skills)
                  ? skills.map((skill: string) => (
                      <li key={`${key}-${skill}`} className="text-gray-700">
                        {skill}
                      </li>
                    ))
                  : null
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  course: string;
  number: string;
  email: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Failed to submit form. Please try again.");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="pt-20 md:flex">
        <div className="md:w-1/3 bg-gradient-to-r from-blue-500 to-violet-600  opacity-80 pt-10">
          <div className="relative  md:left-30">
            <Image
              src={"/contact_us.png"}
              alt="no image"
              height={500}
              width={500}
              className="z-10 opacity-100 rounded-full shadow-md"
            />
          </div>
        </div>
        <div className="md:w-2/3 bg-gradient-to-r from-fuchsia-600 to-violet-600 content-center">
          <div className="px-5 md:px-0 pb-5">
            <h1 className="text-center text-white pb-10 text-5xl opacity-80 font-bold pt-10">Contact Us</h1>

            <div className="max-w-md shadow-md border-t-2 mx-auto content-center p-6 bg-gradient-to-b from-fuchsia-700 to-violet-700 rounded-2xl text-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full text-white p-3 rounded border-none focus:ring focus:ring-pink-300"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}

                <select
                  {...register("course", { required: "Course is required" })}
                  className="w-full p-3 text-gray-300 rounded border-none focus:ring focus:ring-pink-300"
                >
                  <option value="" className="text-black">
                    Select Course/Class
                  </option>
                  <option value="graphics" className="text-black">
                    Graphics Design
                  </option>
                  <option value="robotics" className="text-black">
                    Robotics
                  </option>
                  <option value="ai" className="text-black">
                    AI & Machine Learning
                  </option>
                </select>
                {errors.course && (
                  <p className="text-red-600 text-sm">
                    {errors.course.message}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Your Number"
                  {...register("number", { required: "Number is required" })}
                  className="w-full p-3 rounded border-none text-white  focus:ring focus:ring-pink-300"
                />
                {errors.number && (
                  <p className="text-red-600 text-sm">
                    {errors.number.message}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-3 rounded border-none focus:ring focus:ring-pink-300 text-white"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}

                <button
                  type="submit"
                  className="w-full backdrop-blur-2xl bg-gradient-to-r from-fuchsia-700 to-violet-700 shadow-md text-white py-3 rounded"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>

                {message && (
                  <p className="text-slate-800 text-center">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

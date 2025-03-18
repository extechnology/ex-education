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
      <div className="h-screen pt-20 flex">
        <div className="w-1/3 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-80">
          <div className="relative top-20 left-30">
            <Image
              src={"/contactUs.png"}
              alt="no image"
              height={500}
              width={500}
              className="z-10 opacity-100"
            />
          </div>
        </div>
        <div className="w-2/3 bg-gradient-to-r from-fuchsia-600 to-violet-600 content-center">
          <div>
            <div className="max-w-md shadow-md border-t-2 mx-auto content-center p-6 bg-gradient-to-b from-fuchsia-700 to-violet-700 rounded-2xl text-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 rounded border-none focus:ring focus:ring-pink-300"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}

                <select
                  {...register("course", { required: "Course is required" })}
                  className="w-full p-3 rounded border-none focus:ring focus:ring-pink-300"
                >
                  <option value="">Select Course/Class</option>
                  <option value="graphics">Graphics Design</option>
                  <option value="robotics">Robotics</option>
                  <option value="ai">AI & Machine Learning</option>
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
                  className="w-full backdrop-blur-2xl shadow-md text-white py-3 rounded"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>

                {message && <p className="text-slate-800 text-center">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

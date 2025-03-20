"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contact: z.string().regex(/^[0-9]{10}$/, "Contact number must be 10 digits"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function EnrollForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setMessage("Enrollment successful!");
      reset();
    } catch (error) {
      setMessage("Error submitting form. Try again.");
    }
  };

  return (
    <div className=" items-center justify-center  bg-[url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] bg-no-repeat bg-cover px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-32 pb-10">
        <div className="bg-transparent backdrop-blur-2xl shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
          {message && (
            <div
              className={`text-center p-2 text-sm rounded mb-3 ${
                message.includes("successful")
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-white font-medium">Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full p-2 border text-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-medium">
                Contact Number
              </label>
              <input
                type="text"
                {...register("contact")}
                className="w-full p-2 border text-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your contact number"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-2 border text-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {isSubmitting ? "Submitting..." : "Enroll Now"}
            </button>
          </form>
        </div>
        <div>
          <Image src="" alt="no image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

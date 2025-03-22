"use client";
import { useState } from "react";
import Image from "next/image";

interface FormData {
  id: number;
  name: string;
  phone: string;
  email: string;
  title: string;
}

interface PropsData {
 id:number;
 title: string;
}

interface FormProps {
  course: PropsData;
}

export default function Form({ course }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    id: course.id,
    name: "",
    phone: "",
    email: "",
    title: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.phone)) {
      setError("Phone number must be 10-15 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Form submitted successfully!");
        setFormData({id: course.id, name: "", phone: "", email: "", title: "" });
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="md:flex md:pt-40 pt-23 md:pb-20 items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700">
      <div className="md:flex md:w-3/4 max-w-4xl bg-white shadow-lg md:rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-500 to-purple-700">
          <h2 className="text-2xl font-semibold">{course.title}</h2>
          <div className="mt-8">
            <Image
              src="/form.png"
              alt="Illustration"
              width={240}
              height={240}
            />
          </div>
          <p className="text-sm text-center mt-4">
            Join our course and enhance your skills with expert guidance.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-500 py-2 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-500 py-2 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-purple-500 py-2 transition"
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Enroll Now
            </button>
          </form>

          <div className="flex justify-between text-sm text-gray-600 mt-4">
            <a href="#" className="hover:underline">
              Chat With Course Counselor
            </a>
            <a href="#" className="hover:underline">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

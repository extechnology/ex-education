"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useImages } from "@/app/hooks/image-hook";

type FormData = {
  name: string;
  email: string;
  number: string;
  course: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { data, isLoading, error } = useImages();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://server.exedu.in/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        reset(); // Clear the form after successful submission
      } else {
        setMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  if (isLoading) return <p>Loading hero image...</p>;
  if (error) return <p>Failed to load images</p>;

  const contactImage = data.find(
    (item: { section: string }) => item.section === "contact"
  )?.image;

  return (
    <div className="bg-gray-100 md:pb-20 pb-6">
      <div className="md:pt-40 max-w-7xl pt-32  mx-auto grid grid-cols-1 md:grid-cols-2 justify-center px-4 md:px-0 md:pb-0">
        <div data-aos="zoom-in" className="content-center pb-7 md:pb-0">
          {contactImage ? (
            <Image
              src={contactImage}
              alt="no image"
              width={600}
              height={600}
              className="rounded"
            />
          ) : (
            <p>Image not found</p>
          )}
        </div>
        <div>
          <h1
            data-aos="flip-up"
            className="text-center font-bold md:text-5xl text-3xl text-gray-800 pb-5"
          >
            Contact Now at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              exedu
            </span>
          </h1>
          <div
            data-aos="fade-in"
            className="bg-[#F7F3EE] md:pl-12 md:py-12 rounded p-6 shadow-lg"
          >
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left - Form Section */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-lg font-medium text-gray-800">
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-800">
                      E-mail
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      type="email"
                      className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-800">
                      Phone
                    </label>
                    <input
                      {...register("number", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      type="text"
                      className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm">
                        {errors.number.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-800">
                      Select Interested Course
                    </label>
                    <select
                      {...register("course", {
                        required: "Please select a course",
                      })}
                      className="w-full border-b border-black bg-transparent py-1 focus:outline-none"
                    >
                      <option value="" disabled >
                        Select a course
                      </option>
                      <option value="digital-marketing">
                        AI Advanced Digital Marketing
                      </option>
                      <option value="graphics-design">Graphics Design</option>
                      <option value="robotics">Robotics</option>
                      <option value="robotics">Web/App Development</option>
                      <option value="robotics">Video Editing</option>
                      <option value="robotics">UI/UX Designing</option>
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-sm">
                        {errors.course.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white text-lg font-semibold py-3 mt-3 px-8 rounded-full hover:scale-105 transition-transform"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Contact Us"}
                  </button>
                  {message && (
                    <p className="text-center mt-3 bg-amber-100 p-2 rounded-lg text-lg">{message}</p>
                  )}
                </form>
              </div>

              {/* Right - Contact Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Contact
                  </h2>
                  <ul className="pt-1">
                    <li>Room No: 20/884,</li>
                    <li>Opposite Bus Stand, </li>
                    <li>Ramanattukara, Kozhikode, </li>
                    <li>Kerala 673633, India</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Call/WhatsApp
                  </h2>
                  <p className="text-gray-700">+91 9072123466</p>
                  <h2 className="text-lg font-semibold pt-3 text-gray-900">
                    Email:
                  </h2>
                  <p className="text-gray-700">exeduone@gmail.in </p>
                </div>
                {/* Social Icons */}
                {/* <div className="flex space-x-6 mt-10">
                  <FaFacebook className="text-black text-2xl cursor-pointer hover:opacity-75" />
                  <FaInstagram className="text-black text-2xl cursor-pointer hover:opacity-75" />
                  <FaXTwitter className="text-black text-2xl cursor-pointer hover:opacity-75" />
                  <FaPinterest className="text-black text-2xl cursor-pointer hover:opacity-75" />
                  <FaYoutube className="text-black text-2xl cursor-pointer hover:opacity-75" />
                  <FaLinkedin className="text-black text-2xl cursor-pointer hover:opacity-75" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

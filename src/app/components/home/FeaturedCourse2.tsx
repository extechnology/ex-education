
import Image from "next/image";

const courseDetails = [
  {
    id: 1,
    title: "Digital Marketing",
    sub_title: "exedu for Hybrid AI Digital Marketing",
    description:
      "Kerala’s premier academy, offering an advanced, Hybrid AI  3-month digital marketing course! Tailor your learning experience with Digital Marketing Offline Classes at our institutes in Calicut.Our comprehensive digital marketing program is designed to provide expert-led, hands-on training for professional competency. . It ensures 100% practical exposure to equip you with real-world skills.",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063126.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    features: [
      {
        title: "Live Industry Expert Faculties",
        description:
          "Learn from seasoned professionals with real-world experience.",
      },
      {
        title: "100% Placement Assistance",
        description: "Get support to land your dream job in digital marketing.",
      },
      {
        title: "Soft-Skill Training, Communication & Interview Preparation",
        description: "Master the skills needed to excel in the workplace.",
      },
      {
        title: "Latest Industry Innovations",
        description:
          "Stay ahead with up-to-date knowledge of trends and tools.",
      },
      {
        title: "Live Projects & Campaign Management",
        description: "Work on real campaigns to build your portfolio.",
      },
      {
        title: "Real-Time SEO Experience",
        description: "Learn the art of optimizing and ranking websites.",
      },
      {
        title: "Brand Collaborations",
        description: "Engage with real brands for hands-on experience.",
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Designer",
    sub_title: "Became a Designer with exedu",
    description:
      "Prime Creative Institute, offering a dynamic, Professional, and entrepreneurial-based 06-Month Graphic Design Course! Our Graphics Design courses blend creativity with advanced tools, empowering you to master visual storytelling, branding, and design. Transform your passion into a profession with hands-on training and industry-relevant skills.",
    image:
      "https://img.freepik.com/premium-photo/creative-advertisement-graphic-designing-agency-featuring-laptop-with-colorful-paint_1023514-2552.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",

    features: [
      {
        title: "Live Industry Expert Faculties",
        description:
          "Learn from experienced designers with real-world expertise.",
      },
      {
        title: "100% Placement Assistance",
        description:
          "Get dedicated support to secure your dream job in the design industry.",
      },
      {
        title: "Soft-Skill",
        description:
          "We ensure all the latest and advanced software and real experience to all candidates.",
      },
      {
        title: "Latest Design Tools & Trends",
        description:
          "Stay updated with advanced software and creative innovations.",
      },
      {
        title: "Client Delivery Projects",
        description:
          "Work on real-world projects to create a standout portfolio.",
      },
      {
        title: "Real-Time Design Challenges",
        description: "Tackle live design briefs and gain hands-on experience.",
      },
      {
        title: "Course Overview",
        description:
          "Transform your creativity into a career with our Graphic Design Course and become a sought-after designer in the creative industry!",
      },
    ],
  },
  {
    id: 3,
    title: "Jr.Robotics",
    sub_title: "exedu for Hybrid AI Digital Marketing",
    description:
      "Unlock your child’s potential with ExEdu’s Robotics Courses, designed to inspire young minds and foster innovation! Our program introduces kids to the exciting world of robotics through hands-on learning, interactive projects, and cutting-edge technology. With expert-led sessions, children gain a strong foundation in STEM (Science, Technology, Engineering, and Mathematics) while developing critical thinking, problem-solving, and creativity.",
    image:
      "https://img.freepik.com/free-vector/artificial-intelligence-isometric-flowchart_1284-23752.jpg?t=st=1742275388~exp=1742278988~hmac=7262363ef5d1c59d07eb3a73c3057bd0998c9e6db3fe11c415377b68860e632e&w=826",

    features: [
      {
        title: "Live Industry Expert Faculties",
        description:
          "Learn from seasoned professionals with real-world experience.",
      },
      {
        title: "100% Placement Assistance",
        description: "Get support to land your dream job in digital marketing.",
      },
      {
        title: "Soft-Skill Training, Communication & Interview Preparation",
        description: "Master the skills needed to excel in the workplace.",
      },
      {
        title: "Latest Industry Innovations",
        description:
          "Stay ahead with up-to-date knowledge of trends and tools.",
      },
      {
        title: "Live Projects & Campaign Management",
        description: "Work on real campaigns to build your portfolio.",
      },
      {
        title: "Real-Time SEO Experience",
        description: "Learn the art of optimizing and ranking websites.",
      },
      {
        title: "Brand Collaborations",
        description: "Engage with real brands for hands-on experience.",
      },
    ],
  },
];

function FeaturedCourse2() {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-5 pb-20 md:px-10 lg:px-0">
        <h1 className="font-bold text-3xl text-center md:text-start  pb-3">
          Our <span className="text-fuchsia-700">Featured</span> Courses
        </h1>
        {
          courseDetails.map((course,index) => (
            <div key={index} className="md:flex gap-5">
              <div className="w-1/3">
                <Image src={course.image} alt="no image" height={400} width={400}/>
              </div>
              <div className="w-2/3">
                <h1 className="font-bold text-4xl text-fuchsia-700">{course.title}</h1>
                <h2 className="font-bold text-2xl text-slate-600 py-4">{course.sub_title}</h2>
                <p className="text-slate-600 text-xl">{course.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default FeaturedCourse2
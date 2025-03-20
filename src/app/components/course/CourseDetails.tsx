const Courses = [
  {
    id: 1,
    title: "Hybrid AI Digital Marketing",
    into_para:
      "If you're looking for the best digital marketing institute, your search ends at exedu Hybrid AI education. Renowned as the top choice for mastering the art and science of digital marketing, exedu is the leading institute in Kerala. We provide the best digital marketing courses, featuring a comprehensive curriculum, expert trainers, and industry-aligned training to ensure your success in the digital world.",
    sub_title: "The potential of Digital Marketing",
    image:
      "https://img.freepik.com/premium-photo/design-studio-creativity-ideas-wood-palette-decoration-concept_53876-44964.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    content:
      "A Hybrid AI Digital Marketing with Graphics Design course opens doors to a world of limitless opportunities in the digital age. By combining AI-driven marketing strategies with creative graphics design, this course equips learners with the skills to create impactful campaigns, analyze data for better decision-making, and design visually compelling content. Candidate can pursue careers as digital marketers, AI marketing specialists, graphic designers, content creators, or social media managers. With businesses increasingly relying on AI and visual storytelling, this hybrid skill set is in high demand across industries like e-commerce, advertising, tech, and media, offering lucrative and future-proof career paths",
    pros: [
      {
        "Attainable Ability": [
          "Social Media / Online Marketing",
          "AI Marketing Specialist",
          "Social Media Strategist",
          "Content Creator",
          "Graphic Designer",
          "Branding Initiator",
          "SEO/SEM Expert",
          "Data Analyst",
          "Creative Executer",
          "E-commerce Marketing Specialist",
          "Advertising Executive",
          "Email Marketing Specialist",
          "AI-Powered Campaign Manager",
          "Visual Storyteller",
          "Marketing Automation Expert",
          "Influencer Marketing",
          "Product Marketing",
          "Entrepreneur Skill",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Design",
    into_para: "",
    sub_title: "Breakthroughs for Graphics Designers",
    image: "https://img.freepik.com/premium-photo/design-studio-creativity-ideas-wood-palette-decoration-concept_53876-44964.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",

    content:
      "Skilled graphics designer has vast opportunities across industries like advertising, media, e-commerce, gaming, and tech. They can work as brand designers, UI/UX designers, illustrators, or art directors, creating visuals for websites, apps, marketing campaigns, and more. With the rise of digital platforms, the demand for creative professionals is soaring. Freelancing, remote work, and entrepreneurship also offer flexibility. Mastering tools like Adobe Suite and staying updated with design trends ensures a dynamic, rewarding, and future-proof career in the creative industry.",
    pros: [
      {
        "Obtainable Ability": [
          "Brand Identity Designer",
          "Illustrator",
          "Advertising Designer",
          "Packaging Designer",
          "Motion Graphics Designer",
          "Social Media Content Creator",
          "Print and Publication Designer",
          "Art Direction",
          "Freelance Designer",
          "Product Designer",
          "Marketing Collateral Designer",
          "Game Artist/Designer",
          "Visual Storyteller",
          "Infographic Designer",
          "E-learning Content Designer",
          "Environmental Graphic Designer",
          "3D Designer",
          "Digital Illustrator",
          "UI/UX Designer",
          "Web Designer supporter ",
          "Creative Consultant",
          "Event and Exhibition Designer",
          "Animation Designer",
          "Creative Entrepreneurship ",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Robotics",
    into_para: "",
    sub_title: "Scopes & opportunity ",
    image: "https://img.freepik.com/premium-photo/design-studio-creativity-ideas-wood-palette-decoration-concept_53876-44964.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",

    content:
      "Exedu’s Robotics courses offer a gateway to the future of automation and AI-driven technology. With hands-on training in robotics, students gain expertise in designing, programming, and implementing smart systems. This opens doors to careers in industries like manufacturing, healthcare, aerospace, and entertainment. Opportunities include roles such as Robotics Engineer, AI Specialist, Automation Consultant, and Research Scientist. As industries increasingly adopt robotics for efficiency and innovation, skilled professionals are in high demand. Exedu’s industry-aligned curriculum ensures graduates are equipped to lead in this transformative field, shaping the future of technology and innovation.",
    pros: [
      {
        "Feasible Expertise": [
          "Robotics",
          "Automation",
          "AI Specialist",
          "Mechatronics",
          "Robotics Software Developer",
          "Control Systems",
          "Research Scientist (Robotics)",
          "Drone Operation and Service",
          "Industrial Robotics Technician",
          "Robotics Consultant",
          "Skill in Autonomous Vehicle",
          "Biomedical Robotics",
          "Machine Learning",
          "Robotics Project",
          "Human-Robot Interaction Designer",
          "Robotics Educator/Trainer",
          "Robotics Product Designer",
          "IoT (Internet of Things) Specialist",
          "Robotics Systems Integrator",
          "AI Robotics Entrepreneur",
          "Agricultural Robotics Specialist",
          "Entertainment Robotics",
          "Robotics Maintenance and Repair Expert",
        ],
      },
    ],
  },
];

export default Courses;

// function CourseDetails() {
//   return (
//     <div className="pt-10 md:px-10 lg:px-0 bg-[#F4F7FB]">
//       {Courses.map((course) => (
//         <div key={course.id} className="max-w-7xl mx-auto pb-20 last:pb-7">
//           <div
//             key={course.id}
//             className="relative  h-64 flex items-center justify-center text-white   "
//             style={{
//               backgroundImage: `url(${course.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               borderRadius: "10px",
//               overflow: "hidden",
//             }}
//           >
//             <h2 className="absolute text-2xl font-bold">{course.title}</h2>
//           </div>
//           <div className="pt-5 p-5 bg-slate-200 rounded-2xl mb-4 mt-5">
//             <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-50% to-blue-600 py-2">
//               {course.sub_title}
//             </h1>
//             <p className="text-justify font-medium pb-2">{course.content}</p>
//           </div>
//           <div>
//             {course.pros.map((pro, index) =>
//               Object.entries(pro).map(([Key, values]) => (
//                 <div key={Key + index} className="py-10">
//                   <h1 className="font-bold py-5 text-2xl text-center text-blue-900">
//                     {Key}
//                   </h1>
//                   <ul className="grid grid-cols-5 gap-5 py-5">
//                     {values.map((value, i) => (
//                       <li
//                         key={i}
//                         className="p-3 shadow-md text-center content-center rounded-2xl backdrop-blur-2xl shadow-blue-300"
//                       >
//                         {value}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CourseDetails;

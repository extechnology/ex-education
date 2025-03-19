import CourseDetails from "../components/course/CourseDetails";
import FeaturedCourses from "../components/home/FeaturedCourses";


function Page() {
  return (
    <div className="pt-20 ">
      <div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] bg-no-repeat bg-cover text-slate-100 h-[60vh] content-center">
        {/* <h1 className="text-center text-yellow-400 text-3xl py-8">
          A leading Hybrid AI instate in Kerala
        </h1> */}
        <h1 className="text-center pt-4 pb-2 text-5xl font-bold opacity-90 ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Get Started
          </span>
        </h1>
        <h2 className="text-center text-3xl font-bold opacity-80">
          Build a Professional Career With exedu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl pt-14 mx-auto text-center pb-10 gap-10">
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-slate-100">
            <h1 className="text-xl font-semibold pb-3">
              Advertisements & Promotions
            </h1>
          </div>
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-blue-600 text-slate-100">
            <h1 className="text-xl font-semibold pb-3">
              Grow & Up Skill Your <br /> Creative Skill
            </h1>
          </div>
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-slate-100">
            <h1 className="text-xl font-semibold pb-3">
              Develop Web & Application
            </h1>
          </div>
        </div>
      </div>
      <div>
        <FeaturedCourses />
      </div>
      <div>
        <CourseDetails />
      </div>
    </div>
  );
}
export default Page
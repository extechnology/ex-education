import FeaturedCourses from "../components/home/FeaturedCourses";

function Page() {
  return (
    <div className="pt-20">
      <div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] bg-no-repeat bg-cover text-slate-100 pt-10 pb-4 content-center">
        {/* <h1 className="text-center text-yellow-400 text-3xl py-8">
          A leading Hybrid AI instate in Kerala
        </h1> */}
        <h1 className="text-center pt-4 pb-5 text-5xl font-bold opacity-90 ">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Get Started
          </span>
        </h1>
        <h2 className="text-center px-5 max-w-sm mx-auto md:max-w-2xl md:px-0 text-2xl md:text-3xl font-medium opacity-80">
          Build a Professional Career With exedu
        </h2>
        <div className="flex gap-3 justify-center py-7 text-lg">
          <h1>Advertisements & Promotions , </h1>
          <h1>
             Grow & Up Skill Your Creative Skill , 
          </h1>
          <h1> Develop Web & Application</h1>
        </div>
        
      </div>
      <div>
        <FeaturedCourses />
      </div>
    </div>
  );
}
export default Page;

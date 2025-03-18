import FeaturedCourses from "../components/home/FeaturedCourses";


function Page() {
  return (
    <div className="pt-20 ">
      <div className="bg-gradient-to-r from-violet-500 to-blue-500 text-slate-100 h-[60vh] content-center">
        <h1 className="text-center py-10 text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-gray-200">
          Start To Learn Today
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto text-center pb-10 gap-10">
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-slate-100">
            <h1 className="text-2xl font-bold pb-3">For Advertisers</h1>
            <ul className="text-lg">
              <li>Agency Based Digital Marketing</li>
              <li>Live Online Digital Marketing System</li>
              <li>Evening Weekend Batch</li>
            </ul>
          </div>
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-slate-100">
            <h1 className="text-2xl font-bold pb-3">For Advertisers</h1>
            <ul className="text-lg">
              <li>Agency Based Digital Marketing</li>
              <li>Live Online Digital Marketing System</li>
              <li>Evening Weekend Batch</li>
            </ul>
          </div>
          <div className="p-5 shadow-2xl border-t-2 border-white rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-slate-100">
            <h1 className="text-2xl font-bold pb-3">For Advertisers</h1>
            <ul className="text-lg">
              <li>Agency Based Digital Marketing</li>
              <li>Live Online Digital Marketing System</li>
              <li>Evening Weekend Batch</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <FeaturedCourses />
      </div>
    </div>
  );
}
export default Page
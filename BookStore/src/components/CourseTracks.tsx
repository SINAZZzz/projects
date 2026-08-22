import { Clock, Video, Download, Star } from "lucide-react";

export const CourseTracks = () => {
  const courses = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22hr 30min",
      coursesCount: "34 Courses",
      sales: "250 Sales",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22hr 30min",
      coursesCount: "34 Courses",
      sales: "250 Sales",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22hr 30min",
      coursesCount: "34 Courses",
      sales: "250 Sales",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#1E1E1E]">Our Tracks</h2>
        <p className="text-gray-400 text-xs mt-2 font-medium">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-[24px] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100/80 relative flex flex-col justify-between"
          >
            <div>
              <div className="h-44 rounded-[18px] overflow-hidden mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between px-2 mb-1">
                <span className="text-gray-400 text-[11px] font-medium">
                  {course.category}
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(course.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#FFB800] text-[#FFB800]"
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-[#1E1E1E] text-sm px-2 mb-1">
                {course.title}
              </h3>
              <span className="text-[#FF7A3D] font-bold text-sm px-2 block mb-4">
                {course.price}
              </span>

              <div className="border-t border-dashed border-gray-200 mx-2 my-2" />

              <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-2 pb-8">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3 text-gray-400" />
                  <span>{course.coursesCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-3 h-3 text-gray-400" />
                  <span>{course.sales}</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full px-12">
              <button className="w-full bg-[#FF7A3D] text-white py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#e8692e] transition-colors cursor-pointer">
                Join Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

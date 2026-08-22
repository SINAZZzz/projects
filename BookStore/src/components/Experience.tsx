import { Heart, Puzzle } from "lucide-react";
import expImg from "../assets/experience-img.png";

export const Experience = () => {
  return (
    <section className="w-full bg-[#FDF8EE] py-12 md:py-16 relative my-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 relative flex justify-center items-center w-full max-w-lg">
          <img
            src={expImg}
            alt="Premium Learning Experience"
            className="w-full h-auto object-contain scale-110 md:-mb-12 relative z-10"
          />
        </div>

        <div className="flex-1 max-w-lg z-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] leading-tight mb-8">
            Premium <span className="text-[#FF7A3D]">Learning</span> <br />
            Experience
          </h2>

          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#3B2353] flex items-center justify-center shrink-0 shadow-md">
              <Heart className="w-6 h-6 text-[#FF7A3D] fill-[#FF7A3D]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1E1E] text-base mb-0.5">
                Easily Accessible
              </h4>
              <p className="text-gray-400 text-xs font-medium">
                Learning Will feel Very Comfortable With Courslab.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#3B2353] flex items-center justify-center shrink-0 shadow-md">
              <Puzzle className="w-6 h-6 text-[#7C5CFC]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1E1E] text-base mb-0.5">
                Fun learning expe
              </h4>
              <p className="text-gray-400 text-xs font-medium">
                Learning Will feel Very Comfortable With Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

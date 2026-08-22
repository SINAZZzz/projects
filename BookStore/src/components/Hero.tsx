import { Search } from "lucide-react";
import heroImg from "../assets/hero-img.png";

export const Hero = () => {
  return (
    <section className="w-full bg-transparent px-12 md:px-24 pt-32 pb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border-[40px] border-[#FBEEC1]/40 pointer-events-none -z-0" />

      <div className="flex-1 z-10">
        <h1 className="text-5xl md:text-[64px] font-black text-[#1E1E1E] leading-[1.15] tracking-tight">
          The <span className="text-[#FF7A3D]">Smart</span> <br />
          Choice For <span className="text-[#FF7A3D]">Future</span>
        </h1>

        <p className="text-[#7A7A7A] text-sm mt-6 leading-relaxed max-w-md font-medium">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush
          the...
        </p>

        <div className="mt-10 bg-white p-1.5 pl-6 rounded-full shadow-sm flex items-center justify-between border border-gray-100 max-w-md">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#3B2353]" />
            <input
              type="text"
              placeholder="Search for a location..."
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 font-medium"
            />
          </div>
          <button className="bg-[#3B2353] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:opacity-95 transition-opacity cursor-pointer">
            Continue
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center z-10 w-full max-w-2xl">
        <img
          src={heroImg}
          alt="Online Learning Vector"
          className="w-full h-auto object-contain scale-105"
        />
      </div>
    </section>
  );
};

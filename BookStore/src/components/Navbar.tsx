export const Navbar = () => {
  return (
    <nav className="w-full bg-transparent py-8 px-12 md:px-20 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 bg-[#3B2353] rounded-xl flex items-center justify-center text-white font-extrabold text-2xl">
          B
        </div>
        <span className="font-extrabold text-2xl text-[#1E1E1E] tracking-tight">
          Book Store
        </span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-8 text-[#333333] font-semibold text-sm">
          <li className="hover:text-[#3B2353] cursor-pointer">Home</li>
          <li className="hover:text-[#3B2353] cursor-pointer">About us</li>
          <li className="hover:text-[#3B2353] cursor-pointer">Courses</li>
          <li className="hover:text-[#3B2353] cursor-pointer">Our Service</li>
          <li className="hover:text-[#3B2353] cursor-pointer">Contact us</li>
        </ul>

        <button className="bg-[#3B2353] text-white px-9 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all cursor-pointer">
          Sign in
        </button>
      </div>
    </nav>
  );
};

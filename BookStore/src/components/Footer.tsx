import { BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          <div className="md:col-span-[1.5]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3B2353] flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-black text-[#1E1E1E] text-lg tracking-tight">
                Book Store
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-normal pr-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] text-base mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  How to work?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Populer Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] text-base mb-4">Courses</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Ofline Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Vidio Course
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] text-base mb-4">Support</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF7A3D] transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1E1E1E] text-base mb-4">
              Contac Info
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li>+0913-705-3875</li>
              <li>ElizabethJ@jourrapide.com</li>
              <li className="leading-relaxed">
                4808 Skinner Hollow Road
                <br />
                Days Creek, OR 97429
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/60 text-center">
          <p className="text-gray-400 text-xs font-medium">
            BookStore All Right Reserved, 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

import { Monitor, FileText, Award } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6 text-[#7C5CFC]" />,
      title: "Learn The Latest Skills",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#7C5CFC]" />,
      title: "Get Ready For a Career",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#7C5CFC]" />,
      title: "Earn a Certificate",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="bg-[#3B2353] rounded-xl p-8 md:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

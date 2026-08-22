import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      name: "Finlay Kirk",
      role: "Web Developer",
    },
    {
      id: 2,
      text: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      name: "Dannette P. Cervantes",
      role: "Web Design",
    },
    {
      id: 3,
      text: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      name: "Clara R. Altman",
      role: "UI&UX Design",
    },
    {
      id: 4,
      text: "“Amazing learning experience! The instructors are top-notch and the community support is wonderful throughout the whole journey.”",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      name: "Alex Johnson",
      role: "Frontend Engineer",
    },
    {
      id: 5,
      text: "“This platform completely transformed my career path. The practical projects helped me build a real portfolio in just weeks.”",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      name: "Sarah Jenkins",
      role: "Product Designer",
    },
    {
      id: 6,
      text: "“High quality courses with zero fluff. Direct to the point, structured very well for working professionals seeking career updates.”",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      name: "Michael Chen",
      role: "Fullstack Developer",
    },
  ];

  const slides = [reviews.slice(0, 3), reviews.slice(3, 6)];

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isDragging, slides.length]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const currentOffset = clientX - startX;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset < -50) {
      setActiveTab((prev) => (prev + 1) % slides.length);
    } else if (dragOffset > 50) {
      setActiveTab((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setDragOffset(0);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 select-none">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#1E1E1E]">
          What Student’s Say
        </h2>
        <p className="text-gray-400 text-xs mt-2 font-medium">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
          style={{
            transform: `translateX(calc(-${activeTab * 100}% + ${dragOffset}px))`,
          }}
        >
          {slides.map((slideGroup, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {slideGroup.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[24px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-gray-100/60 flex flex-col justify-between pointer-events-none"
                >
                  <p className="text-gray-400 text-xs leading-relaxed mb-8 font-normal">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1E1E1E] text-sm">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-[11px] font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? "w-7 h-2.5 bg-[#3B2353] rounded-full"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

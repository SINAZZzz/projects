export const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Matthew E. McNatt",
      role: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      tag: "Engineering physics",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Tracy D. Wright",
      role: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      tag: "Engineering physics",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cynthia A. Nelson",
      role: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
      tag: "Engineering physics",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {instructors.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[15px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="w-full aspect-[16/10] rounded-[13px] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="px-2">
                <h3 className="font-extrabold text-[#1E1E1E] text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-[12px] font-medium mb-4">
                  {item.role}
                </p>
                <p className="text-gray-400/90 text-[12px] leading-relaxed font-normal mb-8">
                  {item.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-4 border-t border-dashed border-gray-100/80">
              <span className="text-[#FF7A3D] font-bold text-xs">
                {item.tag}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-7 h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

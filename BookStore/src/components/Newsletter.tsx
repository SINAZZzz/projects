export const Newsletter = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 relative">
      <div className="bg-[#412C57] rounded-[40px] w-full px-6 py-20 md:py-24 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-xl">
        <div className="absolute -top-16 -left-16 w-64 h-64 border-[1.5px] border-white/20 rounded-full pointer-events-none" />
        <div className="absolute -top-8 -left-8 w-48 h-48 border-[1.5px] border-white/20 rounded-full pointer-events-none" />

        <div className="absolute -top-16 -right-16 w-64 h-64 border-[1.5px] border-white/20 rounded-full pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-48 h-48 border-[1.5px] border-white/20 rounded-full pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 z-10">
          Subscribe to our newsletter
        </h2>

        <p className="text-white/70 text-sm md:text-base font-medium mb-12 z-10">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className="w-full max-w-md bg-white p-2 rounded-full flex items-center justify-between z-10 shadow-lg">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent text-sm text-gray-700 px-6 outline-none placeholder:text-gray-400 placeholder:font-medium"
          />
          <button className="bg-[#E97441] hover:bg-[#d66535] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors">
            Send
          </button>
        </div>

        <svg
          className="absolute bottom-10 left-16 md:left-24 w-16 h-16 md:w-20 md:h-20 text-[#E97441] pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20,20 Q30,80 70,80" />
          <path d="M60,65 L70,80 L55,85" />
        </svg>

        <div className="absolute bottom-12 right-16 md:right-32 text-4xl pointer-events-none opacity-90 drop-shadow-lg">
          💡
        </div>
      </div>
    </section>
  );
};

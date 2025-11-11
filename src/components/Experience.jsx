const ExperiencePage = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-[url('/exbk.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-70 backdrop-blur-sm"
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3d0847] mb-4">
        Experience
      </h2>

      <p className="text-lg sm:text-xl font-bold text-[#3d0847] opacity-90 max-w-2xl">
        8+ Years in Music Production & Education
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-[1100px]">

        {/* Card 1 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col items-center text-center">
          <img src="/about11.jpg" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
          <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">
            Music Production
          </h3>
          <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed">
            Worked with rappers, pop singers, and Indian classical artists.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col items-center text-center">
          <img src="/author.jpg" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
          <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">
            Teaching
          </h3>
          <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed">
            Taught at Anhad Music College and guided young musicians.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col items-center text-center">
          <img src="/record.jpg" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
          <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">
            Studio & Live
          </h3>
          <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed">
            Experienced in studio production, live performances, and collaborations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ExperiencePage;

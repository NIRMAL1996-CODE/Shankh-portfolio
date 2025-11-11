const ExperiencePage = () => {
  return (
<section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-[url('/exbk.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-70 backdrop-blur-sm">



      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3d0847] mb-4">
        Experience
      </h2>

      <p className="text-lg sm:text-xl font-bold text-[#3d0847] opacity-90 max-w-2xl">
        8+ Years in Music Production & Education
      </p>

      {/* Timeline Card */}
      <div className="relative mt-6 w-full max-w-[900px] bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-12">
       
        {/* Timeline Item 1 */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-start sm:justify-between relative">

          <div className="flex flex-col items-center sm:items-end sm:w-1/2 sm:pr-8">
            <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">Music Production</h3>
            <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed max-w-sm">
              Worked with rappers, pop singers, and Indian classical artists.
            </p>
          </div>

          <div className="bg-[#FFC4C4]/70 backdrop-blur-s rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 shadow-xl">

            <img src="/about11.jpg" alt="Music Production" className="w-50 h-50 rounded-full"/>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="mb-12 flex flex-col sm:flex-row-reverse items-center justify-start sm:justify-between relative">
          <div className="flex flex-col items-center sm:items-start sm:w-1/2 sm:pl-8">
            <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">Teaching</h3>
            <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed max-w-sm">
              Taught at Anhad Music College and guided young musicians.
            </p>
          </div>
          <div className="bg-[#FFC4C4]/70 backdrop-blur-s rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 shadow-xl">
            <img src="/author.jpg" alt="Teaching" className="w-50 h-50 rounded-full"/>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-start sm:justify-between relative">
          <div className="flex flex-col items-center sm:items-end sm:w-1/2 sm:pr-8">
            <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">Studio & Live</h3>
            <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed max-w-sm">
              Experienced in studio production, live performances, and collaborations.
            </p>
          </div>
          <div className="bg-[#FFC4C4]/70 backdrop-blur-s rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0 shadow-xl">
            <img src="/record.jpg" alt="Studio & Live" className="w-50 h-50 rounded-full"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperiencePage;

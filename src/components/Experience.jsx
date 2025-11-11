
const ExperiencePage = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20 bg-[url('/exx.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">

      <div
        className="bg-[#FFC4C4]/70 backdrop-blur-s min-h-[400px] sm:h-[450px]
 w-full max-w-[850px] rounded-3xl p-16 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#540863] mb-4">
          Experience
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-bold text-[#540863] opacity-90">
          8+ Years in Music Production & Education
        </p>

        {/* Line 1 */}
        <p className="text-[#540863] text-lg sm:text-xl font-bold mt-6 leading-relaxed max-w-2xl mx-auto opacity-90">
          Worked with rappers, pop singers, Indian classical artists, and school
          music projects across different genres.
        </p>

        {/* Line 2 */}
        <p className="text-[#540863] text-lg sm:text-xl font-bold mt-4 leading-relaxed max-w-2xl mx-auto opacity-90">
          Taught at Anhad Music College and conducted music camps, helping young
          artists learn production & performance.
        </p>

        {/* Line 3 */}
        <p className="text-[#540863] text-lg sm:text-xl font-bold mt-4 leading-relaxed max-w-2xl mx-auto opacity-90">
          Experienced in studio production, live performances, and creative
          collaborations.
        </p>
      </div>
    </section>
  );
};

export default ExperiencePage;

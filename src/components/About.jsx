
const AboutPage = () => {
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-6 min-h-screen flex flex-col justify-center items-center text-center bg-[url('/back1.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay ">
      
      <div className="bg-white/50 w-full max-w-[800px] h-[400px] backdrop-blur-s rounded-3xl p-16 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#540863] mb-4">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-bold sm:text-xl text-[#540863]">
          Music Producer • Educator • Performer
        </p>

        {/* Paragraph */}
        <p className="text-[#540863] font-bold text-base sm:text-lg mt-6 leading-relaxed">
          I am Shankh Jaiswal, a music producer creating modern electronic
          and Indian classical fusion. My sound mixes emotion, energy and
          fresh creativity.
        </p>

        <p className="text-[#540863] font-bold text-base sm:text-lg mt-4 leading-relaxed">
          I also run Evolve Academy where I teach and guide new musicians,
          helping them build their own musical identity.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;

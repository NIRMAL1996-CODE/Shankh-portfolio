
const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 py-20 sm:py-24 bg-[url('/bg11.jpg')] bg-cover bg-center bg-no-repeat ">

      <div className="bg-[#FFC4C4]/30 min-h-[350px] sm:h-[400px] p-8 sm:p-16 backdrop-blur-s rounded-3xl shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all">
        {/* Name */}
        <h1 className="head text-4xl sm:text-6xl font-extrabold tracking-wide rounded-3xl p-4 text-[#540863]">
          Shankh Jaiswal
        </h1>

        {/* Subtitle */}
        <p className="paratxt text-xl sm:text-2xl text-[#540863] mt-3">
          Music Producer • Educator
        </p>

        {/* Description */}
        <p className="paratxt max-w-2xl mt-4 mb-8 text-[#540863] text-base sm:text-lg">
          Creating powerful electronic & Indian classical fusion music that blends
          emotion, energy, and innovation.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.instagram.com/shankhjaiswal"
          className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 mt-10 rounded-full font-medium shadow-xl transition-all hover:bg-amber-100 text-[#540863] bg-amber-50"
        >
          Explore My Instagram
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

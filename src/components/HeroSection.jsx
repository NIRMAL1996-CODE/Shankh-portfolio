
const HeroSection = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('/bg11.jpg')] bg-cover bg-center bg-no-repeat">

      <div className="bg-[#FFC4C4]/30 h-[400px] backdrop-blur-s rounded-3xl p-16 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all">
        {/* Name */}
        <h1 className="head text-6xl font-extrabold tracking-wide rounded-3xl p-4 text-[#540863]">
          Shankh Jaiswal
        </h1>

        {/* Subtitle */}
        <p className="paratxt text-2xl text-[#540863] mt-3">
          Music Producer • Educator
        </p>

        {/* Description */}
        <p className="paratxt max-w-2xl mt-4 mb-8 text-[#540863] text-lg">
          Creating powerful electronic & Indian classical fusion music that blends
          emotion, energy, and innovation.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.instagram.com/shankhjaiswal"
          className="mt-10 px-10 py-4 rounded-full text-lg font-medium shadow-xl transition-all hover:bg-amber-100 text-[#540863] bg-amber-50"
        >
          Explore My Instagram
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";

const AboutPage = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-[url('/about2.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay ">
      {/* <div className="bg-linear-to-br from-purple-200 via-red-200 to-orange-200 backdrop-blur-s h-[400px] p-14 rounded-3xl shadow-xl max-w-3xl"> */}
      <div className="bg-white/20  h-[400px] w-[800px] backdrop-blur-s rounded-3xl p-16 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-[#540863] mb-4">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-[#540863]">
          Music Producer • Educator • Performer
        </p>

        {/* Paragraph */}
        <p className="text-[#540863] text-lg mt-6 leading-relaxed">
          I am Shankh Jaiswal, a music producer creating modern electronic
          and Indian classical fusion. My sound mixes emotion, energy and
          fresh creativity.
        </p>

        <p className="text-[#540863] text-lg mt-4 leading-relaxed">
          I also run Evolve Academy where I teach and guide new musicians,
          helping them build their own musical identity.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;

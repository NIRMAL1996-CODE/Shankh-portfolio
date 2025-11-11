const AboutPage = () => {
  return (
    <section id="about"
      className=" w-full py-16 sm:py-20 px-4 sm:px-6 min-h-screen flex flex-col justify-center items-center text-center bg-[url('/back1.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay ">
      
      <div className="bg-white/80 w-full max-w-[800px] h-[520px] sm:h-[480px] backdrop-blur-s rounded-3xl p-16 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all">
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3d0847] mb-4">
          About Me
        </h2>

        <p className="text-lg font-bold sm:text-xl text-[#3d0847]">
          Music Producer • Educator • Performer
        </p>

        <p className="text-[#3d0847] font-bold text-base sm:text-lg mt-6 leading-relaxed">
          I am Shankh Jaiswal, a 26-year-old music producer from Betul (MP), India.
          I began my production journey in 2013, inspired by Martin Garrix and many
          other artists. I create music across genres like Progressive House,
          Big Room, Future House, Future Bounce, Future Bass, and Pop.
        </p>

        <p className="text-[#3d0847] font-bold text-base sm:text-lg mt-4 leading-relaxed">
          I have been playing musical instruments since the age of 10, and I also
          teach music at my own “Evolve Academy.” Starting my journey at a very
          young age, I now aim to continue an endless path of growth, creativity,
          and musical expression.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;

const ExperiencePage = () => {
  const experienceData = [
    {
      img: "/about11.jpg",
      title: "Music Production",
      desc:
        "Producing Progressive House, Big Room, Future House/Bounce, Future Bass & Pop since 2013.",
    },
    {
      img: "/author.jpg",
      title: "Music Educator",
      desc:
        "Founder of Evolve Academy. Teaching music production & helping new artists find their sound.",
    },
    {
      img: "/record.jpg",
      title: "Instruments & Performance",
      desc:
        "Playing multiple instruments since age 10. Experienced in live shows & studio sessions.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-[url('/exbk.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-70 backdrop-blur-sm"
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3d0847] mb-4">
        Experience
      </h2>

      <p className="text-lg font-bold sm:text-xl text-[#3d0847]">
        Multi-Genre Record Producer • Educator • Performer
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-[1100px]">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col items-center text-center"
          >
            <img src={item.img} className="w-32 h-32 rounded-full mb-4 shadow-lg" />
            <h3 className="font-bold text-xl sm:text-2xl text-[#3d0847] mb-2">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;

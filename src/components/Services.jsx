const servicesData = [
  {
    title: "Music Production",
    desc: "Producing electronic and Indian classical fusion tracks.",
    img: "/studio.jpg"
  },
  {
    title: "Teaching",
    desc: "Music education & guidance for beginners and advanced learners.",
    img: "/author.jpg"
  },
  {
    title: "Live Performances",
    desc: "Performing at events, concerts, and online shows.",
    img: "/about11.jpg"
  },
  {
    title: "Sound Design",
    desc: "Creating unique sounds and effects for music projects.",
    img: "/bgg.png"
  },
  {
    title: "Mixing & Mastering",
    desc: "Professional mixing and mastering services for all genres.",
    img: "/record.jpg"
  },
  {
    title: "Consulting",
    desc: "Helping musicians improve workflow and creative process.",
    img: "/bgg1.jpg"
  }
];

const ServicesPage = () => {
  return (
   <section id="services" className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-[url('/exx.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-50 backdrop-blur-md">



      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3d0847] mb-4">
        My Services
      </h2>

      <p className="text-lg sm:text-xl font-bold text-[#3d0847] opacity-90 mb-12 max-w-2xl text-center">
        Offering a wide range of music production & education services.
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-amber-100/70 backdrop-blur-md w-full sm:w-[250px] p-6 rounded-3xl shadow-xl hover:-translate-y-2 hover:scale-105 transition-all text-center">
            <img src={service.img} alt={service.title} className="w-16 h-16 mb-4 mx-auto rounded-full"/>
            <h3 className="font-bold text-xl mb-2 text-[#3d0847]">{service.title}</h3>
            <p className="text-base sm:text-lg text-[#3d0847] font-semibold leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesPage;

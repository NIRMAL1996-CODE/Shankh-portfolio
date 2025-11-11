const Footer = () => {
  return (
    <footer className="w-full bg-amber-100  text-[#3d0847] px-6 py-16 sm:py-24 flex flex-col sm:flex-row justify-between gap-12 bg-linear-to-r from-red-300 via-orange-300 to-blue-600/40">

      {/* Logo and About */}
      <div className="flex flex-col gap-4 sm:w-1/4">
        <h2 className="text-3xl font-bold">Shankh Jaiswal</h2>
        <p className="[#3d0847]">
          Music Producer • Educator • Performer. Bringing emotion and energy to every project.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-3 sm:w-1/4">
        <h3 className="font-bold text-xl mb-2">Quick Links</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-amber-200 transition-all cursor-pointer">Home</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">About</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Services</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Experience</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-3 sm:w-1/4">
        <h3 className="font-bold text-xl mb-2">Services</h3>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-amber-200 transition-all cursor-pointer">Music Production</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Teaching</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Live Performances</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Sound Design</li>
          <li className="hover:text-amber-200 transition-all cursor-pointer">Mixing & Mastering</li>
        </ul>
      </div>

      {/* Contact & Social */}
      <div className="flex flex-col gap-4 sm:w-1/4">
        <h3 className="font-bold text-xl mb-2">Contact Me</h3>
        <p className="text-[#3d0847]">Email: shankh@example.com</p>
        <p className="text-[#3d0847]">Phone: +91 12345 67890</p>

        <div className="flex gap-4 mt-2">
          {/* Dummy Icons */}
          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">IG</div>
          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">FB</div>
          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">YT</div>
          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">TW</div>
        </div>
      </div>

      {/* Copyright */}
      <p className="w-full text-center mt-8 text-sm text-[#3d0847] sm:mt-12">
        © {new Date().getFullYear()} Shankh Jaiswal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

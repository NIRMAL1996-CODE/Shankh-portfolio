import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-amber-100  text-[#3d0847] px-6 py-16 sm:py-24 flex flex-col sm:flex-row justify-between gap-12 bg-linear-to-r from-red-200 via-amber-100 to-red-400/40">

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
        <p className="text-[#3d0847]">Email: shankhjaiswal@gmail.com</p>
        <p className="text-[#3d0847]">Phone: +91 8878192405</p>

       <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/shankhjaiswal" target="_blank">
              <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>
            </a>

            <a href="https://facebook.com" target="_blank">
              <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">
                <FaFacebook />
              </div>
            </a>

            <a href="https://www.youtube.com/@ShankhJaiswal" target="_blank">
              <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </div>
            </a>

            <a href="https://twitter.com" target="_blank">
              <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>
            </a>
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

const Navbar = () => {
  return (
    <nav className="w-full px-4 sm:px-6 py-2 flex justify-between items-center absolute top-0 left-0 bg-transparent">
      <img
        src="/logo4.png"
        alt="Logo"
        className="h-14 sm:h-20 w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-140"
      />

      <ul className="flex gap-3 sm:gap-6 fixed top-5 right-4 sm:right-6 z-50 bg-transparent py-2">
        <li className="text-sm sm:text-base text-purple-900 cursor-pointer hover:scale-110 transform transition-all font-bold">
          <a href="#home">Home</a>
        </li>

        <li className="text-sm sm:text-base text-purple-900 cursor-pointer hover:scale-110 transform transition-all font-bold">
          <a href="#about">About</a>
        </li>

        <li className="text-sm sm:text-base text-purple-900 cursor-pointer hover:scale-110 transform transition-all font-bold">
          <a href="#experience">Experiences</a></li>

        <li className="text-sm sm:text-base text-purple-900 cursor-pointer hover:scale-110 transform transition-all font-bold">
          <a href="#services">Services</a>
        </li>

        <li className="text-sm sm:text-base text-purple-900 cursor-pointer hover:scale-110 transform transition-all font-bold">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

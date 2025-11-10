const Navbar = () => {
  return (
   <nav className="w-full flex justify-between items-center px-6 py-0 absolute top-0 left-0 bg-transparent">
  <img
    src="/logo4.png"
    alt="Logo"
    className="h-20 w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-140"

  />
      <ul className="flex gap-6">
        <li className="cursor-pointer bg-clip-text text-transparent bg-linear-to-r from-purple-800 via-red-800 to-orange-800 hover:scale-110 transform transition-all font-bold">
          Home
        </li>
        <li className="cursor-pointer bg-clip-text text-transparent bg-linear-to-r from-purple-800 via-red-800 to-orange-800 hover:scale-110 transform transition-all font-bold">
          About
        </li>
        <li className="cursor-pointer bg-clip-text text-transparent bg-linear-to-r from-purple-800 via-red-800 to-orange-800 hover:scale-110 transform transition-all font-bold">
          Services
        </li>
        <li className="cursor-pointer bg-clip-text text-transparent bg-linear-to-r from-purple-800 via-red-800 to-orange-800 hover:scale-110 transform transition-all font-bold">
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

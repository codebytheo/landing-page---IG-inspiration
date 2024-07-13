
const Navbar = () => {
  return (
    <nav className="absolute z-20 inset-0 w-full h-max px-8 pt-3 flex justify-between items-start">
      <div className="flex space-x-2 items-center">
        <h1 className="text-2xl font-bold text-pink-700">CLOTH.</h1>
        <img src="/cloth.png" alt="logo image" className="w-10 h-10" />
      </div>
      <ul className="flex flex-col">
        <li className="hover:underline hover:underline-offset-4"><a href="#" className="text-pink-700 font-medium">HOME</a></li>
        <li className="hover:underline hover:underline-offset-4"><a href="#" className="text-pink-700 font-medium">FASHION ITEMS</a></li>
        <li className="hover:underline hover:underline-offset-4"><a href="#" className="text-pink-700 font-medium">ACCESSORIES</a></li>
        <li className="hover:underline hover:underline-offset-4"><a href="#" className="text-pink-700 font-medium">ABOUT US</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
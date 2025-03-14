import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="flex justify-between items-center py-4">          
          <div>
            <Link to="#" className="text-2xl font-bold">
              Ecommerce Project
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Home</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">About Us</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Shop</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Product</Link>            
          </div>

          {/* Login/Signup (Always Visible) */}
          <div className="hidden md:flex gap-2">
            <Link to="/login" className="border border-neutral-300 px-5 py-1 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-500">Log in</Link>
            <Link to="/signup" className="border border-neutral-300 px-5 py-1 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition duration-500">Sign up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Home</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">About Us</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Shop</Link>
            <Link to="#" className="text-neutral-600 hover:text-red-500 transition font-medium">Product</Link>            
            <div className="flex flex-col gap-2">
              <Link to="#" className="text-center border border-neutral-300 px-5 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-500">Log in</Link>
              <Link to="#" className="text-center border border-neutral-300 px-5 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-500">Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
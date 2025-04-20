import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingCart, Search } from "lucide-react";
import SearchBar from "./SerachBar";

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
          <div className="items-center hidden md:flex gap-4">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <div className="absolute -top-3 -right-2">
                <div className="flex w-4 h-4 bg-red-500 rounded-full text-white items-center justify-center text-[10px]">
                  0
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link to="#"><User className="h-5 w-5" /></Link>
              <div className="hidden absolute right-0 transform -translate-y-2 group-hover:block transition-all duration-500">
                <ul className="bg-white p-2 w-40 shadow-lg rounded-lg mt-4">
                  <li>
                    <Link to="/login" className="text-sm inline-flex w-full px-2 py-1 transition-all duration-500 hover:bg-gray-50">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-sm inline-flex w-full px-2 py-1 transition-all duration-500 hover:bg-gray-50">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/forgot-password" className="text-sm inline-flex w-full px-2 py-1 transition-all duration-500 hover:bg-gray-50">
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </div>           

            </div>
            <SearchBar />
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
            <div className="flex flex-row gap-4">
              <div className="relative">
                <ShoppingCart />
                <div className="absolute left-5 -top-3 -right-2">
                  <div className="flex w-4 h-4 bg-red-500 rounded-full text-white items-center justify-center text-[10px]">
                    0
                  </div>
                </div>
              </div>
              <div className="group relative">
                <Link to="#"><User /></Link>
                <div className="hidden absolute left-0 transform -translate-y-2 group-hover:block transition-all duration-500">
                  <ul className="bg-white p-3 w-40 shadow-lg rounded-lg mt-4">
                    <li>
                      <Link to="#" className="text-sm block px-2 py-1 transition-all duration-500 hover:bg-gray-50">Login</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-sm block px-2 py-1 transition-all duration-500 hover:bg-gray-50">Register</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-sm block px-2 py-1 transition-all duration-500 hover:bg-gray-50">Forgot Password</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <SearchBar />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
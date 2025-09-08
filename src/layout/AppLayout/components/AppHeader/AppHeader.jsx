import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Lucide-react icon
import { useCart } from "../../../../hooks/useCart";

const AppHeader = () => {
  const { cart } = useCart()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          BuyNow
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-orange-500 transition"
          >
            About Me
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Contact Us
          </Link>

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cart?.length}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;

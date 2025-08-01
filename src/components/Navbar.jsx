import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [, setPredictDropdownOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    

    setPredictDropdownOpen(false);
  }, [location]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-4 lg:px-12 py-6 ">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* <img alt="Planorama Logo" href='Plana' className="h-16" /> */}
            <h2
              className={`text-3xl font-large ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Planaroma
            </h2>
          </Link>
        </div>

        {/* for desktop menu */}
        <div className="hidden md:flex flex-1 justify-center text-lg">
          <ul className="flex space-x-12">
            {[
              { name: "Home", path: "/" },
              { name: "My Event", path: "/my-event" },
              { name: "View Event", path: "/view-event" },
              { name: "Create Event", path: "/create-event" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`transition ${
                    isScrolled
                      ? "text-primary hover:text-gray-500"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`cursor-pointer transition ${
                  isScrolled
                    ? "text-customTeal hover:text-gray-500"
                    : "text-white hover:text-gray-300"
                } flex items-center`}
              >
              
                
              </div>
              
            </li>
          </ul>
        </div>

      
        <div className="hidden md:flex items-center space-x-3 ml-auto">
          
        </div>

        {/* for mobile starts here */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary focus:outline-none"
          >
            {menuOpen ? <X size={30} className="text-customTeal" /> : <Menu size={40} />}
          </button>
        </div>
      </nav>

     
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-gray-700"
        >
          <X size={30} />
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-6 text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "create events", path: "/" },
            { name: "", path: "/" },
            { name: "", path: "/" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-customTeal font-medium hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

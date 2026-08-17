import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Book, User } from "lucide-react";

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
            className={`fixed top-0 left-0 w-full z-50 ${
                isScrolled
                    ? "bg-white shadow-md"
                    : "bg-transparent"
            } transition duration-300`}
        >
            <nav className="flex justify-between items-center px-4 lg:px-16 py-5">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <Book
                            className="h-8 w-8 text-primary-dull transition-colors duration-300 cursor-pointer"
                        />

                        <h2
                            className={`text-4xl font-large ${
                                isScrolled
                                    ? "text-primary"
                                    : "text-white"
                            }`}
                        >
                            Planaroma
                        </h2>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-center text-lg font-medium">
                    <ul className="flex space-x-12">

                        {/* Home */}
                        <li>
                            <Link
                                to="/"
                                className={`transition ${
                                    isScrolled
                                        ? "text-primary hover:text-gray-500"
                                        : "text-white hover:text-gray-300"
                                }`}
                            >
                                Home
                            </Link>
                        </li>

                        {/* Create Event */}
                        <li>
                            <Link
                                to="/create-event"
                                className={`transition ${
                                    isScrolled
                                        ? "text-primary hover:text-gray-500"
                                        : "text-white hover:text-gray-300"
                                }`}
                            >
                                Create Event
                            </Link>
                        </li>

                        {/* View Event */}
                        <li>
                            <Link
                                to="/view-event"
                                className={`transition ${
                                    isScrolled
                                        ? "text-primary hover:text-gray-500"
                                        : "text-white hover:text-gray-300"
                                }`}
                            >
                                View Event
                            </Link>
                        </li>

                        {/* Event Calendar */}
                        <li>
                            <Link
                                to="/calendar"
                                className={`transition ${
                                    isScrolled
                                        ? "text-primary hover:text-gray-500"
                                        : "text-white hover:text-gray-300"
                                }`}
                            >
                                Event Calendar
                            </Link>
                        </li>

                        {/* Content */}
                        <li>
                            <Link
                                to="/content"
                                className={`transition ${
                                    isScrolled
                                        ? "text-primary hover:text-gray-500"
                                        : "text-white hover:text-gray-300"
                                }`}
                            >
                                Content
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Right Side - User */}
                <div className="hidden md:flex items-center ml-auto">

                    {/* User Dropdown */}
                    <div
                        onClick={() =>
                            setDropdownOpen(!dropdownOpen)
                        }
                        className={`cursor-pointer relative p-2 rounded-full hover:bg-gray-100 transition ${
                            isScrolled
                                ? "text-customTeal"
                                : "text-white"
                        }`}
                    >
                        <User className="w-8 h-8 text-primary" />

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-50">

                                <ul className="py-1">

                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Profile
                                    </li>

                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Logout
                                    </li>

                                </ul>

                            </div>
                        )}
                    </div>

                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-primary focus:outline-none"
                    >
                        {menuOpen ? (
                            <X
                                size={30}
                                className="text-customTeal"
                            />
                        ) : (
                            <Menu size={40} />
                        )}
                    </button>

                </div>

            </nav>

            {/* Mobile Side Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
                    menuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >

                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-5 right-5 text-gray-700"
                >
                    <X size={30} />
                </button>

                <ul className="flex flex-col items-center mt-20 space-y-6 text-lg">

                    {/* Home */}
                    <li>
                        <Link
                            to="/"
                            className="text-customTeal font-medium hover:text-gray-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    {/* Create Event */}
                    <li>
                        <Link
                            to="/create-event"
                            className="text-customTeal font-medium hover:text-gray-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Create Event
                        </Link>
                    </li>

                    {/* View Event */}
                    <li>
                        <Link
                            to="/view-event"
                            className="text-customTeal font-medium hover:text-gray-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            View Event
                        </Link>
                    </li>

                    {/* Event Calendar */}
                    <li>
                        <Link
                            to="/calendar"
                            className="text-customTeal font-medium hover:text-gray-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Event Calendar
                        </Link>
                    </li>

                    {/* Content */}
                    <li>
                        <Link
                            to="/content"
                            className="text-customTeal font-medium hover:text-gray-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Content
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Navbar;
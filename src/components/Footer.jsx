import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-midTeal h-full text-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                        "Events That Speak for You!"
                    </h2>
                    <p className="text-lg md:text-xl mt-2 text-gray-200 max-w-3xl mx-auto">
                        Delivering the best event solutions to ensure unforgettable moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold">Planorama</h2>
                        <p className="mt-4 text-gray-200 flex items-center gap-2 text-lg">
                            <Heart className="text-white" /> Dedicated to your well-being.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2 text-lg">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <p className="mt-2 flex items-center gap-2 text-gray-200">
                            <Mail /> support@planorama.com
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-gray-200">
                            <Phone /> +977- 9811-039223
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-gray-200">
                            <MapPin /> Kathmandu, Nepal
                        </p>
                    </div>
                </div>


                <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-300 text-lg">
                    © {new Date().getFullYear()} MedAhead. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

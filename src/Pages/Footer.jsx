import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#1e1b29] text-gray-400 py-12 mt-20 relative z-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                
                <div>
                    <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                        Jeeten.dev
                    </h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Front-End Developer Portfolio
                    </p>
                    <div className="flex justify-center md:justify-start space-x-5 mt-4 text-xl">
                        <a
                            href="https://github.com/jitenpanchal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-400 hover:scale-110 transition-transform duration-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 hover:scale-110 transition-transform duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:jeetenpanchal84@gmail.com"
                            className="hover:text-pink-400 hover:scale-110 transition-transform duration-300"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
     
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-emerald-400 transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-purple-400 transition duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-pink-400 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaEnvelope className="text-pink-400" />
                            <a href="mailto:jeetenpanchal84@gmail.com" className="hover:text-pink-400 transition duration-300">
                                jeetenpanchal84@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaPhone className="text-emerald-400" />
                            <a href="tel:+918490951618" className="hover:text-emerald-400 transition duration-300">
                                +91 8490951618
                            </a>
                        </li>
                        <li className="flex items-start gap-2 justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-purple-400 mt-1" />
                            <span>
                                C-403, Nirman Homes, Vandemataram, Gota, Ahmedabad, Gujarat, India
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Jeeten Panchal. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleActiveSection = () => {
            const sections = ["home", "skill", "about", "projects", "contact"];
            let current = "home";

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = id;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleActiveSection);
        return () => window.removeEventListener("scroll", handleActiveSection);
    }, []);

    const navItems = ["home", "skill", "about", "projects", "contact"];

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0d0f16] via-[#111827] to-[#1f2937] text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    Jeetens.dev
                </h1>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleScroll(item)}
                            className={`relative transition-colors duration-300 ${activeSection === item
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
                                : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-300 hover:to-orange-400"
                                }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            {activeSection === item && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></span>
                            )}
                        </button>
                    ))}

                    <a
                        href="https://github.com/jitenpanchal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub />
                    </a>

                </nav>
                <button
                    className="md:hidden text-2xl text-gray-300 hover:text-cyan-600"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <nav className="md:hidden flex flex-col items-center gap-4 bg-[#111827] py-4 border-t border-gray-700">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                handleScroll(item);
                                setOpen(false);
                            }}
                            className={`transition-colors duration-300 ${activeSection === item
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
                                : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-300 hover:to-orange-400"
                                }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}

                    <a
                        href="https://github.com/jitenpanchal1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-300 hover:text-orange-400 transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                </nav>
            )
            }
        </header >
    );
}

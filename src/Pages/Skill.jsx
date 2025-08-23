import React, { useEffect } from "react";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiRedux, SiJquery, SiTailwindcss, SiMongodb } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

function Skill() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
    }, []);

    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", size: "w-24 h-24", speed: "animate-spin-slow" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", size: "w-28 h-28", speed: "animate-spin-medium" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", size: "w-32 h-32", speed: "animate-spin-fast" },
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400", size: "w-28 h-28", speed: "animate-spin-slow" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500", size: "w-24 h-24", speed: "animate-spin-medium" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", size: "w-32 h-32", speed: "animate-spin-fast" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-violet-500", size: "w-28 h-28", speed: "animate-spin-medium" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600", size: "w-24 h-24", speed: "animate-spin-slow" },
        { name: "Jquery", icon: <SiJquery />, color: "text-blue-600", size: "w-24 h-24", speed: "animate-spin-slow" },
    ];

    return (
        <section id="skill" className=" text-white pt-0 px-6 sm:pt-10 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
                    data-aos="fade-up"
                >
                    My Skills
                </h2>
                <p
                    className="text-gray-400 mt-2 text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Technologies I use to craft modern and responsive web applications
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="flex flex-col items-center justify-center relative group"
                    >
                       
                        <div
                            className={`relative ${skill.size} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                        >
                            <div className="absolute inset-0 rounded-full border-4 border-gray-700 transition-colors duration-300 group-hover:border-gray-500"></div>
                            <div
                                className={`absolute inset-0 rounded-full border-4 ${skill.color} border-t-transparent ${skill.speed} group-hover:animate-none`}
                            ></div>
                            <span
                                className={`text-4xl ${skill.color} z-10 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]`}
                            >
                                {skill.icon}
                            </span>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-pink-400">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;

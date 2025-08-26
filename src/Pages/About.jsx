import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
    }, []);

    return (
        <section id="about" className="text-white pt-15 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
               
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500 relative inline-block"
                        data-aos="fade-up"
                    >
                        About Me
                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-emerald-400 to-purple-500 animate-pulse rounded-full"></span>
                    </h2>

                    <p
                        className="text-gray-400 mt-10 text-sm md:text-base"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        A curious mind, a love for <span className="text-cyan-400 font-medium">clean code</span>
                        , and a passion for building
                        <span className="text-emerald-400 font-medium"> user-first applications</span>
                    </p>
                </div>

                
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  
                    <div data-aos="fade-right">
                        <h3 className="text-2xl font-semibold mb-4">
                            Front-End Web Developer
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            I’m a passionate developer focused on building
                            <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text font-semibold"> modern, responsive </span>
                            and
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold"> user-friendly web applications</span>.
                        </p>

                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Beyond coding, I stay curious about the latest technologies,
                            enjoy solving problems, and constantly improve my skills to
                            create impactful digital experiences.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div
                            className="p-6 bg-[#1e1b29] rounded-xl shadow-lg transition-all duration-500  hover:shadow-2xl hover:shadow-emerald-500/20"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h4 className="text-xl font-semibold text-emerald-400 mb-2">
                                Education
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Diploma in Computer Science (Government polytechnique)
                                <br /> (2020 - 2023)
                            </p>
                        </div>

                        <div
                            className="p-6 bg-[#1e1b29] rounded-xl shadow-lg transition-all duration-500  hover:shadow-2xl hover:shadow-purple-500/20"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h4 className="text-xl font-semibold text-purple-400 mb-2">
                                Experience
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Front-End Developer (Freelance)
                                <br /> 1+ years building responsive apps
                            </p>
                        </div>

                        <div
                            className="p-6 bg-[#1e1b29] rounded-xl shadow-lg transition-all duration-500  hover:shadow-2xl hover:shadow-pink-500/20"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <h4 className="text-xl font-semibold text-pink-400 mb-2">
                                Location
                            </h4>
                            <p className="text-gray-400 text-sm">Ahmedabad, Gujrat, India</p>
                        </div>

                        <div
                            className="p-6 bg-[#1e1b29] rounded-xl shadow-lg transition-all duration-500  hover:shadow-2xl hover:shadow-cyan-500/20"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                                Interests
                            </h4>
                            <p className="text-gray-400 text-sm">
                                UI/UX Design, Open Source, Problem Solving, Frontend
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Css/Project.css";
import Pg from "../assets/PGfinder.png";
import Htl from "../assets/Logo.png";
import Blog from "../assets/Blog.png";
import Cart from "../assets/Cart.png";
import Jdev from "../assets/Jdev.png";

function Project() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    const projects = [
        {
            id: 2,
            title: "Portfolio Website",
            description: "My personal portfolio showcasing projects, blogs, and contact info.",
            Livepreview: "#home",
            Sourcecode: "https://github.com/jitenpanchal1/Portfolio",
            image: Jdev,
        },
        {
            id: 3,
            title: "Worry free food",
            description: "A responsive web design with bootstrap and can reserve the table.",
            Livepreview: "https://jitenpanchal1.github.io/hotelsite/",
            Sourcecode: "https://github.com/jitenpanchal1/hotelsite",
            image: Htl,
        },
        {
            id: 4,
            title: "Blog App",
            description: "A blogging platform with rich text editor, image upload with fully connected with backend service (Appwrite).",
            Livepreview: "https://jitenpanchal1.github.io/BlogApp/",
            Sourcecode: "https://github.com/jitenpanchal1/BlogApp",
            image: Blog,
        },
        {
            id: 1,
            title: "PG Finder",
            description: "A modern online Pg finder with React, Redux Toolkit, and Tailwind CSS.",
            Sourcecode: "https://github.com/jitenpanchal1/Jeetenpanchal_Raksha-Stack",
            image: Pg,
        },
        {
            id: 5,
            title: "First Add to Cart Project",
            description: "A real-time chat app using WebSockets and React.",
            Sourcecode: "https://github.com/jitenpanchal1/react-work/tree/main/ReduxToolkit-Addtocart",
            image: Cart,
        },
    ];

    return (
        <div id="projects" className="relative pt-20 px-6 sm:px-12 md:px-20 lg:px-32">
            <div className="flex flex-col items-center mb-10">
                <span
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-500 animate-gradient"
                >
                    Featured Projects
                </span>
                <div className="h-1 w-65 sm:w-80 md:w-100 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-500 rounded-full animate-glow mt-4 mb-0"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        className="flex flex-col rounded-2xl bg-gray-900 shadow-xl border border-gray-700/40 overflow-hidden 
                                   transition-all duration-500 relative group
                                   hover:border-transparent hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-center gap-4 p-4 border-b border-gray-800 relative z-10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-20 h-20 rounded-lg object-cover"
                            />
                            <h3 className="text-lg font-bold text-white">
                                {project.title}
                            </h3>
                        </div>

                        <div className="p-5 flex flex-col justify-between flex-grow relative z-10">
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex gap-3 mt-auto">
                                {project.Livepreview && (
                                    <a
                                        href={project.Livepreview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md hover:from-blue-600 hover:to-purple-600 transition-all"
                                    >
                                        Live Preview
                                    </a>
                                )}
                                {project.Sourcecode && (
                                    <a
                                        href={project.Sourcecode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium shadow-md hover:from-indigo-600 hover:to-cyan-600 transition-all"
                                    >
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;

import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import Mypick from "../assets/mypick-3.png"
import "../Css/Home.css"
import Icones from '../animation/Icones';

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true
        })
    }, [])

    return (
        <div id='home'>
            <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto pt-10 pb-0 px-4 sm:pt-0 sm:pb-0 sm:px-6  md:pt-0 md:pb-0 lg:py-0 xl:pt-0 xl:pb-0">
                <Icones />

             
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 relative z-15 pt-10 sm:pt-20 sm:pb-0 md:pb-0 md:pt-0 md:mt-0">
                    <h1
                        data-aos="fade-right"
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-500 animate-gradient leading-snug"
                    >
                        Hi, I’m Jeeten Panchal
                    </h1>
                    <p
                        data-aos="fade-right"
                        className="text-base sm:text-xl md:text-2xl font-bold glow-hover"
                    >
                        Front-End Web Developer
                    </p>
                    <p
                        data-aos="fade-right"
                        className="max-w-md sm:max-w-lg text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                    >
                        Passionate about building responsive and modern user interfaces with React.js & Tailwind CSS.
                    </p>

                
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start relative z-30">
                        <a
                            data-aos="fade-right"
                            href="#contact"
                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform text-sm sm:text-base"
                        >
                            Contact Me
                        </a>

                        <a
                            data-aos="fade-right"
                            href="https://github.com/jitenpanchal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
                
                <div className="relative flex justify-center md:justify-end pb-25 sm:pt-0 sm:pb-0 items-center md:w-1/2">
                    <div className="profile-wrapper relative">
                        <div className="profile-glow absolute rounded-full"></div>
                        <img
                            data-aos="fade-left"
                            src={Mypick}
                            alt="Profile"
                            className="relative z-10 w-100 sm:w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { MdConnectWithoutContact } from "react-icons/md";

function Contact() {
    const [form, setform] = useState({
        name: "",
        email: "",
        testarea: ""
    })
    const formRef = useRef();
    const [msg, setmsg] = useState(false);
    const [err, seterr] = useState("")

    const handchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const sendmail = (e) => {
        e.preventDefault();

        if (form.name === "") {
            seterr("Name is missing");
            return;
        } else if (form.email === "") {
            seterr("Mail is Required");
            return;
        } else if (form.testarea === "") {
            seterr("Explain me about yourself");
            return;
        } else {
            seterr("");
            emailjs
                .sendForm(
                    "service_m0mkp9w",
                    "template_kv08vn4",
                    formRef.current,
                    "_kSOzxWYOS8NrB1CE"
                )
                .then((res) => {
                    setmsg(true);
                    console.log(res);
                    formRef.current.reset(); // 
                    setform({ name: "", email: "", testarea: "" });
                })
                .catch((err) => {
                    console.log(err);
                    setmsg(false);
                });
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <div id="contact" className="pt-20 pb-0 xl:pb-5 xl:pt-25 px-4 sm:px-6 max-w-6xl mx-auto">
            <section className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">


                <div
                    data-aos="fade-right"
                    className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/2 relative z-20"
                >
                    <h1 className="flex items-center justify-center lg:justify-start gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-500 animate-gradient">
                        <MdConnectWithoutContact className="text-emerald-400 drop-shadow-md text-3xl sm:text-4xl md:text-5xl" />
                        Let’s Connect
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300">
                        Get in touch with me
                    </p>
                    <p className="max-w-md sm:max-w-lg text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
                        I’d love to hear from you! Whether you have a question, want to collaborate,
                        or just want to say hi — my inbox is always open.
                    </p>


                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start relative z-30">
                        <a
                            href="mailto:jeetenpanchal84@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you"
                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform text-sm sm:text-base"
                        >
                            Send Email
                        </a>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    className="relative flex justify-center w-full lg:w-1/2 self-center"
                >
                    <form
                        ref={formRef}
                        onSubmit={sendmail}
                        className="w-full sm:w-4/5 md:w-3/4 lg:w-full bg-white dark:bg-[#1e1b29] p-6 sm:p-8 rounded-2xl shadow-lg"
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                                Name
                            </label>
                            <input
                                value={form.name}
                                type="text"
                                onChange={handchange}
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2a2438] text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm sm:text-base"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                                Email
                            </label>
                            <input
                                value={form.email}
                                onChange={handchange}
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2a2438] text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm sm:text-base"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm sm:text-base">
                                Message
                            </label>
                            <input
                                type="text"
                                value={form.testarea}
                                onChange={handchange}
                                name="testarea"
                                placeholder="Write your message..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#2a2438] text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm sm:text-base"
                            ></input>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                        {msg && (
                            <div className="mt-4 text-center text-green-500 font-semibold animate-pulse">
                                ✅ Message sent successfully!
                            </div>
                        )}
                        <p className="mt-2 text-center text-red-500 font-semibold">{err}</p>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
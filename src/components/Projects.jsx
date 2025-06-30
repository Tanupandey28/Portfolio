// import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projectsData = [
        {
            title: "Felhivery Website",
            description: "A seamless online platform for ordering and delivering fresh, delicious meals from local restaurants to your doorstep, just frontend only little bit of functionalities added.",
            tech: "React19, Tailwind CSS",
            link: "https://sensational-dodol-9d225c.netlify.app/",
        },
        {
            title: "resume-npm-package",
            description: "Create a npm package for showing my resume on terminal using my Linkedin Id",
            tech: "Nodejs, Git bash",
            link: "https://www.npmjs.com/package/tanu-pandey",
        },
        {
            title: "3D - Portfolio",
            description: "A website made in 3D design showcasing my resume",
            tech: "Reactjs",
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-violet-900 to-black flex flex-col items-center justify-center lg:px-24 px-10 py-16 relative overflow-hidden">
            {/* Snake-like Background */}
            <div className="absolute inset-0 z-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full h-full opacity-20"
                >
                    <path
                        fill="#6b46c1"
                        fillOpacity="0.5"
                        d="M0,160L60,186.7C120,213,240,267,360,277.3C480,288,600,256,720,213.3C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 20,
                    delay: 0.5,
                    duration: 1.2,
                }}
                className="text-4xl md:text-6xl font-bold text-white mb-10 z-10"
            >
                Projects
            </motion.h2>

            {/* Projects List */}
            <div className="w-full max-w-4xl flex flex-col gap-10 z-10">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 20,
                            delay: index * 0.3,
                            duration: 1.2,
                        }}
                        className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg border border-violet-500 
                                   bg-gradient-to-r from-purple-600 to-violet-900 ${
                                       index % 2 === 0 ? "self-start" : "self-end"
                                   }`}
                    >
                        {/* Text Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="text-sm text-purple-200 mt-2">{project.description}</p>
                            <p className="text-sm text-purple-300 mt-2">Tech Stack: {project.tech}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-white font-semibold border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                            >
                                View Project
                            </a>
                        </div>

                        {/* Placeholder for Image or Icon */}
                        <div className="flex-1 flex justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ type: "spring", stiffness: 40, damping: 20, delay: index * 0.3 }}
                                className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white text-xl font-bold">📌</span>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
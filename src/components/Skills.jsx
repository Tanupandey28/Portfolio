// import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        "React.js",
        "Javascript",
        "Tailwind CSS/CSS3",
        "HTML5",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "ASP .NET",
        "ASP .NET MVC",
        "SQL Server",
        "Git & GitHub",
    ];

    return (
        <section
            id="skills"
            className="min-h-screen relative flex flex-col items-center justify-center px-10 py-16 bg-gradient-to-b from-black to-violet-900 overflow-hidden"
        >
            {/* Snake Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg viewBox="0 0 1440 320" className="w-full h-full">
                    <path
                        fill="#6b46c1"
                        fillOpacity="0.5"
                        d="M0,224L80,192C160,160,320,96,480,96C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
                    ></path>
                </svg>
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-10 z-10"
            >
                Skills
            </motion.h2>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl z-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 20,
                            delay: index * 0.07,
                        }}
                        className="bg-gradient-to-r from-purple-600 to-violet-900 text-white px-6 py-4 rounded-lg shadow-lg text-center text-base font-semibold border border-violet-500"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
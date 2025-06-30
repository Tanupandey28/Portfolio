// import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    const experienceData = [
        {
            role: "Asscoiate Technical Analyst",
            company: "Precision Pyramid Private Limited",
            duration: "July'2023 - Dec'2023",
            description: "Worked on the development and enhancement of the Warehouse Management System using .NET framework for Pyrops software, with robust data handling and reporting features powered by SQL Server.",
        },
        {
            role: "Dot Net Developer",
            company: "Avenir Innovative Solutions",
            duration: "Mar'2024 - Aug'2024",
            description: "Worked as a .NET Developer managing and enhancing the Indian Coast Guard’s official website, ensuring secure, scalable, and responsive web solutions using ASP.NET and SQL Server.",
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-black to-violet-900 flex flex-col items-center justify-center lg:px-24 px-10 py-16 relative overflow-hidden">
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
                className="text-4xl md:text-6xl font-bold text-white mb-10"
            >
                Experience
            </motion.h2>

            {/* Experience Carousel */}
            <div className="w-full max-w-5xl overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    drag="x"
                    dragConstraints={{ left: -500, right: 500 }}
                >
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                damping: 20,
                                delay: index * 0.3,
                                duration: 1.2,
                            }}
                            className="min-w-[300px] md:min-w-[350px] p-6 rounded-lg shadow-lg border border-violet-500 
                                       bg-gradient-to-r from-purple-600 to-violet-900"
                        >
                            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-lg text-purple-200">{exp.company}</p>
                            <p className="text-md text-purple-300">{exp.duration}</p>
                            <p className="text-sm text-purple-400 mt-2">{exp.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
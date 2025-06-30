// import React from "react";
import { motion } from "framer-motion";

const EducationCard = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Guru Gobind Singh Indraprastha University",
            year: "2019 - 2023",
        },
        {
            degree: "Higher Secondary Education",
            institution: "DAV Public School",
            year: "2017 - 2019",
        },
        {
            degree: "Secondary Education",
            institution: "DAV Public School",
            year: "2005 - 2017",
        },
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
                Education
            </motion.h2>

            {/* Education List */}
            <div className="w-full max-w-2xl"> {/* Reduced width */}
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 20,
                            delay: 0.7 + index * 0.3,
                            duration: 1.2,
                        }}
                        className="p-6 rounded-lg shadow-lg mb-6 border border-violet-500 
                                   bg-gradient-to-r from-purple-600 to-violet-900"
                    >
                        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-lg text-purple-200">{edu.institution}</p>
                        <p className="text-md text-purple-300">{edu.year}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationCard;
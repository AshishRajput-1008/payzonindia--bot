"use client";

import { useState, useEffect } from "react";
import { Globe } from "./globecontent";
import { motion } from "framer-motion";

// Animated background particles component
const ParticleBackground: React.FC = () => {
    const [particles, setParticles] = useState<
        Array<{
            id: number;
            x: number;
            y: number;
            size: number;
            duration: number;
        }>
    >([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-blue-200/20 rounded-full blur-sm"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Glowing orbs for ambience
const GlowingOrbs: React.FC = () => {
    return (
        <>
            <motion.div
                className="absolute top-10 left-5 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-100/20 rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-5 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-gray-100/20 rounded-full blur-2xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/20 rounded-full blur-xl"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </>
    );
};

export default function NewComponent() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="relative min-h-screen bg-white/90 overflow-hidden border-t">
            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-white/10 to-gray-100/20"
                animate={{
                    background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(211, 211, 211, 0.1) 100%)",
                        "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, rgba(211, 211, 211, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(211, 211, 211, 0.1) 100%)",
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <ParticleBackground />
            <GlowingOrbs />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22%3E%3Cpath d=%22M0 0h80v80H0z%22 fill=%22none%22/%3E%3Cpath d=%22M0 10h80M0 20h80M0 30h80M0 40h80M0 50h80M0 60h80M0 70h80M10 0v80M20 0v80M30 0v80M40 0v80M50 0v80M60 0v80M70 0v80%22 stroke=%22rgba(0,0,0,0.05)%22/%3E%3C/svg%3E')] opacity-50" />

            <div className="relative  max-w-7xl mx-auto z-10 min-h-screen flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 md:py-12 md:px-0">
                {/* Left Section - Enhanced Text Content */}
                <motion.div
                    className="w-full lg:w-1/2 p-4 sm:p-6 md:p-0 flex flex-col justify-center space-y-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Floating badge */}
                    <motion.div
                        className="w-fit bg-gradient-to-r from-blue-100/20 to-white/20 backdrop-blur-sm border border-blue-300/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-blue-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        ✨ Real-Time News Platform
                    </motion.div>

                    {/* Main heading with gradient text */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight flex flex-col sm:flex-row gap-2 sm:gap-4 items-center bg-white/10 backdrop-blur-2xl shadow-lg border border-gray-200/30 p-4 sm:p-6 rounded-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <div className="flex items-center gap-2 sm:gap-4">
                            <img
                                src="/images/Sadaiv MEDIA 1.png"
                                alt="Sadaiv Media Logo"
                                className="h-12 sm:h-16 md:h-20 w-auto"
                            />
                        </div>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-black to-blue-800 bg-clip-text text-transparent font-black">
                            Sadaiv
                        </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-blue to-blue-800 bg-clip-text text-transparent font-black">
                            Satya
                        </span>
                    </motion.h1>

                    {/* Animated subtitle */}
                    <motion.h2
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Your Trusted Source for Real-Time News
                    </motion.h2>

                    {/* Enhanced description */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        Experience journalism redefined. Sadaiv Satya delivers
                        <span className="text-blue-600 font-semibold"> lightning-fast coverage</span> across India with
                        <span className="text-blue-800 font-semibold"> AI-powered insights</span> and
                        <span className="text-blue-600 font-semibold"> unmatched reliability</span>.
                    </motion.p>

                    {/* Enhanced CTA buttons */}
                    <motion.div
                        className="flex flex-wrap gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <motion.button
                            className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full overflow-hidden group shadow-2xl text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white to-blue-100"
                                initial={{ x: "-100%" }}
                                animate={{ x: isHovered ? "0%" : "-100%" }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">Explore Now</span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Section - Enhanced Globe */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Glowing ring around globe */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-gray-300/30 scale-110"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Pulsing outer ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-black/20 scale-125"
                        animate={{
                            scale: [1.25, 1.35, 1.25],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Enhanced globe container */}
                    <motion.div
                        className="relative z-10 w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-[500px]"
                        whileHover={{
                            scale: 1.1,
                            filter: "brightness(1.2)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Globe colorScheme="black-white" />
                    </motion.div>

                    {/* Floating data points */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-black to-white rounded-full"
                            style={{
                                top: `${20 + Math.sin(i) * 60}%`,
                                left: `${20 + Math.cos(i) * 60}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/50 to-transparent" />
        </div>
    );
}
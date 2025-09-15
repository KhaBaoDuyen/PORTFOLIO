"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlareHover from "../../components/GlareHover";

export default function CreditCard({ date, title, tags = [], organization, image }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="basis-1/3 p-2">
            <div
                className="bg-white/30 relative p-3 rounded-xl cursor-pointer
                hover:scale-[1.02] transition transform duration-300 
                hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
                onClick={() => setOpen(true)}
                title={title}
            >
                <div className="bg-black/80 flex flex-col gap-3 p-5 rounded-xl">
                    <div className="flex flex-col gap-3">
                        <span className="flex gap-2 items-center justify-start">
                            <strong className="text-gray-500">Ngày cấp</strong>
                            <strong className="text-white">{date}</strong>
                        </span>

                        <h1 className="text-2xl text-white line-clamp-2">{title}</h1>

                        <span className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full 
                  text-sm border border-pink-300/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </span>
                    </div>
                    <GlareHover
                        glareOpacity={0.3}
                        glareAngle={-30}
                         transitionDuration={800}
                        playOnce={false}
                    >
                        <img src={image} alt={title} className="rounded-lg" />
                    </GlareHover>
                    <strong className="text-gray-500">bởi {organization}</strong>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

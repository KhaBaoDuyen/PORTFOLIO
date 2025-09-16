import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/project.json";
export function CardProject({
    name = "Dự án tốt nghiệp",
    context = "Dự án được thực hiện",
    date,
    tags = [],
    images = [],
    linkGit = "",
    linkLinked = ""
}) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    const prevImage = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setDirection(1);
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!isOpen || images.length <= 1) return;
        const time = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(time);
    }, [isOpen, images.length, current]);

    return (
        <>
            <div className="border-2 border-white/30 shadow-inner w-full 
        text-white rounded-2xl p-5 bg-gradient-to-bl from-pink-100/20
          flex lg:flex-row flex-col gap-3 justify-between overflow-hidden"
                onClick={() => setIsOpen(true)}>
                <div className="relative  rounded-2xl lg:w-[40%] w-full min-h-[15rem] 
             lg:h-[20rem] overflow-hidden border-2 border-white/30
             lg:min-h-max flex items-center justify-center">
                    <AnimatePresence custom={direction} mode="wait">
                        {images.length > 0 && (
                            <motion.img
                                key={current}
                                src={images[current]}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                                className="w-full h-full rounded-2xl object-cover absolute"
                            />
                        )}
                    </AnimatePresence>
                </div>

                <div className="lg:w-[60%] w-full px-5 flex flex-col  relative ">
                    <div className="flex justify-between flex-col h-full gap-5">
                        <div className="">
                            <h1 className="text-2xl font-bold mb-3 text-pink-400 lg:line-clamp-2 line-clamp-1">{name}</h1>
                            <p className="text-gray-300 mb-4 lg:line-clamp-4 line-clamp-2">{context}</p>
                            {date && <p className="text-sm text-gray-400 mb-2">Thời gian: {date}</p>}
                            {tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full 
                                text-sm border border-pink-300/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="">
                            <div className="flex flex-row gap-3">
                                {linkGit ?
                                    <a
                                        href={linkGit}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-start p-2
                                       h-12 w-12 hover:w-32 
                                       bg-black/40 border border-pink-500/30 
                                       hover:border-pink-500/50 
                                       hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]
                                       transition-all duration-300 
                                       rounded-full overflow-hidden group">
                                        <FaGithub className="w-8 h-8 text-white flex-shrink-0" />
                                        <span
                                            className="ml-3 text-white opacity-0 
                                       group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap" >
                                            Github
                                        </span>
                                    </a>
                                    : " "}
                                {
                                    linkLinked ?
                                        <a
                                            href={linkLinked}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-start p-2
                                       h-12 w-12 hover:w-32 
                                       bg-black/40 border border-pink-500/30 
                                       hover:border-pink-500/50 
                                       hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]
                                       transition-all duration-300 
                                       rounded-full overflow-hidden group">
                                            <FaLinkedin className="w-8 h-8 text-white flex-shrink-0" />
                                            <span
                                                className="ml-3 text-white opacity-0 
                                       group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap" >
                                                Linkedin
                                            </span>
                                        </a> : ""}

                            </div>
                        </div>
                    </div>


                    {images.length > 1 && (
                        <div className="absolute bottom-0 lg:bottom-4 right-0 flex gap-3 z-10">
                            <button
                                onClick={prevImage}
                                className="lg:w-16 lg:h-16 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
                            >
                                <FaChevronLeft className="text-white" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="lg:w-16 lg:h-16 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
                            >
                                <FaChevronRight className="text-white" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white text-3xl hover:text-pink-400"
                        >
                            <FaTimes />
                        </button>

                        <div className="relative w-[90%] h-[80%] flex items-center justify-center">
                            <AnimatePresence custom={direction} mode="wait">
                                {images.length > 0 && (
                                    <motion.img
                                        key={current}
                                        src={images[current]}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.6 }}
                                        className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                                    />
                                )}
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-5 top-1/2 -translate-y-1/2 
                      w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition">
                                        <FaChevronLeft className="text-white text-2xl" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 
                      w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 transition"
                                    >
                                        <FaChevronRight className="text-white text-2xl" />
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    );
}

export function Projects() {
    return (
        <div className="grid grid-cols-1 w-full gap-6 lg:mt-[3rem] mt-[3rem]">
            {projects.map((project) => (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}>
                    <CardProject
                        key={project.id}
                        name={project.name}
                        context={project.context}
                        date={project.date}
                        tags={project.tags}
                        images={project.images}
                        linkLinked={project.linkLinked}
                        linkGit={project.linkGit}
                    />
                </motion.div>
            ))}
        </div>
    );
}

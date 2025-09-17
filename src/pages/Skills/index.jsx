import React, { useState, useEffect } from "react";
import { Heading } from "../../components/Heading";
import { FaGithub, FaLinkedin, FaFacebook, FaNodeJs, FaPhp, FaUser } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import SkillItem from "../../components/Skills";
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiSass, SiTypescript, SiNextdotjs, SiMui, SiSvelte  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiNestjs, SiMysql, SiFirebase, SiPostman, SiFigma, SiWordpress, } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FiMessageCircle, FiUsers, FiBookOpen, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Skills() {
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };

    const [isMobile, setIsMobile] = useState(false);

    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    useEffect(() => {
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);



    return (
        <div className=" w-full">
            <motion.div
                variants={cardVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="flex flex-col justify-center items-center gap-5 p-3 lg:mt-[5rem] w-full mt-[2rem]">
                <span>
                     <Heading text="Kỹ năng " />
                </span>
                <h1 className="text-2xl font-bold lg:text-6xl"> Công nghệ sử dụng</h1>
                <p className="text-gray-300 lg:w-[50%] text-center"> Tôi sử dụng nhiều công nghệ và công cụ hiện đại để xây dựng
                    giao diện web thân thiện, tối ưu trải nghiệm người dùng và
                    dễ dàng mở rộng trong thực tế.</p>
                <div className="flex flex-row gap-3">
                    <a
                        href="https://github.com/KhaBaoDuyen"
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
                    <a
                        href="https://www.linkedin.com/in/bao-duyen-kha-thi-41622736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                    </a>
                    <a
                        href="https://www.facebook.com/kha.bao.duyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-start p-2
                        h-12 w-12 hover:w-32 
                        bg-black/40 border border-pink-500/30 
                        hover:border-pink-500/50 
                        hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]
                        transition-all duration-300 
                        rounded-full overflow-hidden group">
                        <FaFacebook className="w-8 h-8 text-white flex-shrink-0" />
                        <span
                            className="ml-3 text-white opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap" >
                            Facebook
                        </span>
                    </a>


                </div>

                <Link to="/du-an" className="custom-button animate-fade-in-up ">Xem dự án</Link>
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="rounded-xl transition transform duration-300 backdrop-blur-sm min-h-[100%] 
                flex flex-col justify-center items-center lg:mt-[5rem] mt-[3rem] p-3"
            >
                <span>
                    <Heading text="Frontend" />
                </span>
                
                <h1 className="lg:text-4xl text-3xl text-center font-bold">
                    Công nghệ tôi thường sử dụng
                </h1>

                <div className="flex flex-wrap lg:container lg:mt-[3rem] mt-[1rem] gap-6 text-center mx-auto py-5 min-h-[100%] justify-center items-center">
                    <SkillItem name="Tailwind CSS" icon={<SiTailwindcss />} iconPosition="left" />
                    <SkillItem name="HTML5" icon={<FaHtml5 />} iconPosition="left" />
                    <SkillItem name="CSS3" icon={<FaCss3Alt />} iconPosition="left" />
                    <SkillItem name="Sass / SCSS" icon={<SiSass />} iconPosition="left" />
                    <SkillItem name="Bootstrap" icon={<FaBootstrap />} iconPosition="left" />
                    <SkillItem name="JavaScript" icon={<IoLogoJavascript />} iconPosition="left" />
                    <SkillItem name="TypeScript" icon={<SiTypescript />} iconPosition="left" />
                    <SkillItem name="React.js" icon={<FaReact />} iconPosition="left" />
                    <SkillItem name="Angular" icon={<FaAngular />} iconPosition="left" />
                    <SkillItem name="Next.js" icon={<SiNextdotjs />} iconPosition="left" />
                    <SkillItem name="Material-UI" icon={<SiMui />} iconPosition="left" />
                    {/* <SkillItem name="SvelteJs" icon={<SiSvelte />} iconPosition="left" /> */}
                </div>
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="rounded-xl transition transform duration-300 p-3 backdrop-blur-sm min-h-[100%] 
               flex flex-col justify-center items-center lg:mt-[5rem] mt-[3rem]"
            >
                <span>
                   <Heading text="Backend" /> 
                </span>
                
                <h1 className="lg:text-4xl text-3xl text-center font-bold">
                    Công nghệ tôi thường sử dụng
                </h1>

                <h2 className="text-2xl font-semibold mt-[3rem] text-gray-700 dark:text-gray-200">
                   Ngôn ngữ
                </h2>
                <div className="flex flex-wrap lg:container mt-[1rem] gap-6 text-center 
        mx-auto py-5 justify-center items-center">
                    <SkillItem name="Node.js" icon={<FaNodeJs />} iconPosition="left" />
                    <SkillItem name="PHP" icon={<FaPhp />} iconPosition="left" />
                </div>

                <h2 className="text-2xl font-semibold mt-6 text-gray-700 dark:text-gray-200">
                    Frameworks
                </h2>
                <div className="flex flex-wrap lg:container mt-[1rem] gap-6 text-center 
        mx-auto py-5 justify-center items-center">
                    <SkillItem name="Express.js" icon={<SiExpress />} iconPosition="left" />
                    <SkillItem name="NestJS" icon={<SiNestjs />} iconPosition="left" />
                </div>

                <h2 className="text-2xl font-semibold mt-6 text-gray-700 dark:text-gray-200">
                    Tools & Database
                </h2>
                <div className="flex flex-wrap lg:container mt-[1rem] gap-6 text-center 
        mx-auto py-5 justify-center items-center">
                    <SkillItem name="MySQL" icon={<SiMysql />} iconPosition="left" />
                    <SkillItem name="Postman" icon={<SiPostman />} iconPosition="left" />
                    <SkillItem name="Figma" icon={<SiFigma />} iconPosition="left" />
                    <SkillItem name="WordPress" icon={<SiWordpress />} iconPosition="left" />
                    <SkillItem name="Firebase" icon={<SiFirebase />} iconPosition="left" />
                    <SkillItem name="RESTful API" icon={<TbApi />} iconPosition="left" />
                </div>
            </motion.div>

            <motion.div
                variants={cardVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="rounded-xl transform duration-300 backdrop-blur-sm min-h-[100%] 
                 flex flex-col justify-center items-center lg:container mx-auto gap-5 lg:mt-[10rem} mt-[3rem] p-3"
            >
                <span>
                     <Heading text="Kĩ năng mềm" />
                </span>
               
                <h1 className="lg:text-4xl text-3xl text-center font-bold">
                    Những kỹ năng mềm tôi đã rèn luyện
                </h1>

                <section className="!mx-auto p-5 w-full min-h-screen relative ">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="lg:container w-full flex justify-center items-center"
                    >
                        <div className=" bg-black/80
          lg:w-[97%] backdrop-blur-lg z-[9]
          border-5 rounded-3xl p-5 border-white/30 
          shadow-[0_0_0_5px_rgba(255,255,255,0.4)]">
                            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6">

                                <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5
            rounded-2xl shadow-inner shadow-white/20">
                                    <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                        <FiMessageCircle />
                                    </span>
                                    <p className="text-gray-300 text-justify">
                                        <strong className="text-xl text-pink-400">Giao tiếp: </strong>
                                        Tôi có thể diễn đạt ý tưởng, lắng nghe tích cực và
                                        truyền đạt thông tin hiệu quả, tạo sự gắn kết trong công việc.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5 
            rounded-2xl shadow-inner shadow-white/20">
                                    <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                        <FiUsers />
                                    </span>
                                    <p className="text-gray-300 !text-justify">
                                        <strong className="text-xl text-pink-400 ">Làm việc nhóm: </strong>
                                        Tôi biết cách phối hợp, hỗ trợ đồng đội để đạt mục tiêu chung,
                                        đồng thời tôn trọng và thích nghi với phong cách làm việc khác nhau.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5 mt-5 
          rounded-2xl shadow-inner shadow-white/20">
                                    <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                        <FiClock />
                                    </span>
                                    <p className="text-gray-300 !text-justify">
                                        <strong className="text-xl text-pink-400 ">Quản lý thời gian: </strong>
                                        Tôi sẽ sắp xếp công việc hợp lý, ưu tiên nhiệm vụ quan trọng
                                        và duy trì hiệu suất cao trong môi trường áp lực.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5 mt-5 
  rounded-2xl shadow-inner shadow-white/20">
                                    <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                        <FiBookOpen />
                                    </span>
                                    <p className="text-gray-300 !text-justify">
                                        <strong className="text-xl text-pink-400 ">Chủ động học hỏi: </strong>
                                        Tôi luôn tìm tòi và tiếp thu kiến thức mới, sẵn sàng cập nhật công nghệ
                                        và xu hướng hiện đại để nâng cao kỹ năng và phát triển bản thân.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </motion.div>

        </div >
    );
}
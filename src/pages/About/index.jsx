import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShinyText } from "../../components/ShinyText";
import {
    FiUser, FiPhone, FiMail, FiCalendar, FiMapPin, FiZap,
    FiFileText, FiLayers, FiEye, FiTarget, FiTrendingUp
} from "react-icons/fi";
import { Heading } from "../../components/Heading";

export default function About() {
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
        <div className="flex flex-col w-full items-center justify-center">
            <div className="!mx-auto text-center custom-section p-3 flex flex-col gap-3">
                <h1 className="text-6xl !text-bold">
                    Về tôi
                </h1>
                <ShinyText
                    text=" Tôi là Kha Thị Bảo Duyên, sinh năm 2005, chuyên ngành Công nghệ thông tin.
                Tôi đam mê lập trình và thiết kế giao diện người dùng, với mục tiêu tạo ra
                những trải nghiệm số hiện đại, trực quan và hiệu quả."
                    className="text-ml mt-5 text-gray-500 lg:w-[60%]"
                    speed={3} />
            </div>

            <section className="container p-3 lg:p-6 mt-5  overflow-hidden mx-auto 
            grid lg:grid-cols-3 grid-cols-1 gap-6 items-center justify-items-center">
                <div className="space-y-5 w-full">
                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: isMobile ? "none" : 1.02, borderRadius: "10px", boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                        className="p-6 w-full bg-transparent rounded-2xl shadow-inner
                  shadow-white/40 backdrop-blur-md border border-pink-400/30 
                    hover:border-pink-500 transition"
                    >

                        <div className="flex flex-col items-start gap-3 mb-2">
                            <span className="bg-pink-500 text-white p-2 rounded-lg">
                                <FiUser />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Thông tin: </strong>
                                Tôi tên là Kha Thị Bảo Duyên, hiện tại tôi chuyên ngành tôi đang theo đuổi là Front-End devloper.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: isMobile ? 0 : 30 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: isMobile ? "none" : 1.02, borderRadius: "10px", boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                        className="p-6 bg-transparent rounded-2xl shadow-inner
                  shadow-white/40 backdrop-blur-md border border-pink-400/30 
                    hover:border-pink-500 transition"
                    >

                        <div className="flex flex-col items-start gap-3 mb-2">
                            <span className="bg-pink-500 text-white p-2 rounded-lg">
                                <FiCalendar />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Ngày sinh: </strong>
                                Tôi sinh ngày 14 tháng 10 năm 2005, thuộc cung <span className="text-pink-300 font-medium">Thiên Bình</span>,
                                với con số chủ đạo <span className="text-pink-300 font-medium">4</span> – biểu tượng của sự kỷ luật, trách nhiệm và ổn định.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="group before:hover:scale-95   hidden before:hover:h-72 before:hover:w-80 
            before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] 
            before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl
            from-pink-200 via-pink-200 to-pink-700 before:absolute 
            before:top-0 w-80  h-72 relative bg-transparent border-2 border-white/30 lg:flex flex-col 
            items-center justify-start gap-2 text-center rounded-2xl overflow-hidden">
                    <div className=" w-28 h-28 bg-pink-700 mt-8 rounded-full border-4 overflow-hidden border-pink-300 
                z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-10 transition-all duration-500">
                        <img
                            src="/images/logo/z6994431946635_dc851f1abc3a7e11d02fe92134b6cb01.jpg"
                            alt="Kha Thị Bảo Duyên"
                            className="object-cover 
                        shadow-lg transition-all duration-700 ease-in-out
                        hover:scale-105 hover:rotate-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]
                        hidden lg:block" />
                    </div>
                    <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                        <span className="text-2xl font-semibold">Kha Thị Bảo Duyên</span>
                        <p>FrontEnd Devloper</p>
                    </div>
                    {/* <Link to="" className="bg-pink-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-pink-500" href="#">Folow</Link> */}
                </div>

                <div className="space-y-6 w-full">
                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: isMobile ? "none" : 1.02, borderRadius: "10px", boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                        className="p-6 bg-transparent rounded-2xl shadow-inner
                  shadow-white/40 backdrop-blur-md border border-pink-400/30 
                    hover:border-pink-500 transition" >

                        <div className="flex flex-col items-start gap-3 mb-2">
                            <span className="bg-pink-500 text-white p-2 rounded-lg">
                                <FiPhone />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Liên hệ: </strong>
                                Bạn có thể gọi cho tôi qua số
                                <a href="tel:0337019197" className="text-pink-300 hover:underline mx-1 hover:text-pink-400 transition">
                                    0337 019 197
                                </a>
                                hoặc gửi email về địa chỉ
                                <a href="mailto:duyenktb1410@gmail.com" className="text-pink-300 hover:underline mx-1 hover:text-pink-400 transition">
                                    duyenktb1410@gmail.com.
                                </a>
                            </p>

                        </div>
                    </motion.div>


                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: isMobile ? 0 : -30 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: isMobile ? "none" : 1.02, borderRadius: "10px", boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                        className="p-6 bg-transparent rounded-2xl shadow-inner
                  shadow-white/40 backdrop-blur-md border border-pink-400/30 
                    hover:border-pink-500 transition"
                    >

                        <div className="flex flex-col items-start gap-3 mb-2">
                            <span className="bg-pink-500 text-white p-2 rounded-lg">
                                <FiMapPin />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Địa chỉ: </strong>
                                Hiện tại tôi đang sinh sống và làm việc tại Ninh Kiều, Cần Thơ, Việt Nam.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <section className="!mx-auto  custom-section mt-[3rem] w-full min-h-screen relative ">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:container lg:p-5 p-3 flex justify-center items-center">
                    <div className="border-2  bg-black/80
                lg:w-[97%]  backdrop-blur-lg z-[9]
                 border-5 rounded-3xl p-5 border-white/30 shadow-[0_0_0_5px_rgba(255,255,255,0.4)]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                            <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5
                        rounded-2xl shadow-inner shadow-white/20">
                                <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                    <FiTarget />
                                </span>
                                <p className="text-gray-300 text-justify">
                                    <strong className="lg:text-xl md:text-md text-sm text-pink-400">Mục tiêu: </strong>
                                    Tôi là sinh viên vừa tốt nghiệp, định hướng trở thành một Front-End Developer chuyên nghiệp.
                                    Trong 2 năm tới, tôi muốn nâng cao kỹ năng về React, Angular và các công nghệ hiện đại,
                                    đồng thời áp dụng vào những dự án thực tế.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5  rounded-2xl shadow-inner shadow-white/20">
                                <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                    <FiEye />
                                </span>
                                <p className="text-gray-300 !text-justify">
                                    <strong className="lg:text-xl md:text-md text-sm text-pink-400 ">Tầm nhìn: </strong>
                                    Trong 3-5 năm tới, tôi mong muốn đóng góp vào các sản phẩm công nghệ chất lượng,
                                    trở thành một Front-End Developer sáng tạo và có thể đảm nhận vai trò lãnh đạo trong đội ngũ phát triển.
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-start gap-3 mb-2 lg:p-10 p-5 mt-5 rounded-2xl shadow-inner shadow-white/20">
                            <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                <FiTrendingUp />
                            </span>
                            <p className="text-gray-300 !text-justify">
                                <strong className="lg:text-xl md:text-md text-sm text-pink-400 ">Định hướng phát triển: </strong>
                                Trong giai đoạn 2–3 năm tới, tôi hướng đến việc trở thành một Front-End Developer
                                chuyên nghiệp, không chỉ thành thạo các công nghệ như React, Angular, và Svelte,
                                mà còn có khả năng áp dụng các xu hướng mới như Cloud, DevOps và tối ưu hiệu suất ứng dụng.
                                Tôi mong muốn được tham gia nhiều dự án thực tế để tích lũy kinh nghiệm,
                                phát triển kỹ năng giải quyết vấn đề, đồng thời nâng cao khả năng làm việc nhóm
                                và tư duy sáng tạo trong thiết kế giao diện người dùng.
                            </p>
                        </div>


                    </div>
                </motion.div>
                <img src="/images/logo/tiasang.webp" alt="" className="absolute center -z-50" />
            </section>

            <section className="!mx-auto custom-section mt-[2rem] !w-full relative ">
                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:container lg:p-5 p-3 mx-auto flex justify-center items-center">
                    <div className="w-full flex flex-col text-center items-center justify-center">
                        <span>
                            <Heading text="Nguyên tắc Phát triển”" />
                        </span>
                        <p className="text-gray-400 mt-[1rem]">Đối với tôi 3 giá trị cố lỗi để tôi phát triễn & làm việc mỗi ngày dựa vào</p>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">

                            <div className="bg-white/20 rounded-xl backdrop-blur-lg p-2 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,105,180,0.6)]">
                                <div className="bg-black/90 items-center justify-center 
                lg:items-start lg:justify-start flex flex-col gap-2 p-3 rounded-xl">
                                    <span className="text-white bg-pink-600 rounded-xl w-10 h-10 p-2 flex items-center justify-center transition-all duration-300 hover:brightness-125">
                                        <FiZap />
                                    </span>
                                    <strong className="text-xl text-pink-500 mt-2 mb-2">Tư duy sáng tạo</strong>
                                    <p className="text-gray-300 text-center lg:text-justify">
                                        Luôn tìm kiếm giải pháp độc đáo và hiệu quả cho mọi thử thách.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/20 rounded-xl  backdrop-blur-lg p-2 
                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                                <div className="bg-black/90 items-center justify-center 
                lg:items-start lg:justify-start p-3 flex flex-col gap-2 rounded-xl">
                                    <span className="text-white bg-pink-600 rounded-xl w-10 h-10 p-2 flex items-center justify-center transition-all duration-300 hover:brightness-125">
                                        <FiLayers />
                                    </span>
                                    <strong className="text-xl text-pink-400 mt-2 mb-2">Học hỏi không ngừng</strong>
                                    <p className="text-gray-300 text-center lg:text-justify">
                                        Sẵn sàng tiếp thu công nghệ mới và cập nhật xu hướng.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white/20 rounded-xl backdrop-blur-lg p-2 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                                <div className="bg-black/90 items-center justify-center 
                lg:items-start lg:justify-start flex flex-col gap-2 p-3 rounded-xl">
                                    <span className="text-white bg-pink-600 rounded-xl w-10 h-10 p-2 flex items-center justify-center transition-all duration-300 hover:brightness-125">
                                        <FiFileText />
                                    </span>
                                    <strong className="text-xl text-pink-400 mt-2 mb-2">Tinh thần hợp tác</strong>
                                    <p className="text-gray-300 text-center lg:text-justify">

                                        Làm việc nhóm hiệu quả, hỗ trợ và truyền cảm hứng cho đồng đội.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
        </div>)
}
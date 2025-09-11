import { motion } from "framer-motion";
import { ShinyText, ShinyTextArray } from "../../components/ShinyText";
import { FiUser, FiPhone, FiMail, FiCalendar, FiMapPin, FiEye, FiTarget, FiTrendingUp } from "react-icons/fi";
export default function About() {
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };
    return <div>
        <div className="!mx-auto text-center custom-section p-3 flex flex-col gap-3">
            <h1 className="text-6xl">
                Về tôi
            </h1>
            <ShinyText
                text=" Tôi là Kha Thị Bảo Duyên, sinh năm 2005, chuyên ngành Công nghệ thông tin.
                Tôi đam mê lập trình và thiết kế giao diện người dùng, với mục tiêu tạo ra
                những trải nghiệm số hiện đại, trực quan và hiệu quả."
                className="text-xl mt-5 text-gray-500 lg:w-[60%]"
                speed={3}
            />
        </div>

        <section className="p-6 container overflow-hidden mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 items-center justify-items-center">
            <div className="space-y-5 w-full">
                <motion.div
                    variants={cardVariants}
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                    className="p-6 bg-transparent rounded-2xl shadow-inner
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
                    whileInView={{ opacity: 1, x: 30 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
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

            <img
                src="/images/logo/z6994431946635_dc851f1abc3a7e11d02fe92134b6cb01.jpg"
                alt="Kha Thị Bảo Duyên"
                className="w-60 h-70 rounded-2xl object-cover border-4 border-pink-300
                shadow-lg transition-all duration-700 ease-in-out
                hover:scale-105 hover:rotate-1 hover:shadow-[0_0_35px_rgba(236,72,153,0.5)]"
            />

            <div className="space-y-6 w-full">
                <motion.div
                    variants={cardVariants}
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
                    className="p-6 bg-transparent rounded-2xl shadow-inner
                  shadow-white/40 backdrop-blur-md border border-pink-400/30 
                    hover:border-pink-500 transition"
                >

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
                    whileInView={{ opacity: 1, x: -30 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(236,72,153,0.6)" }}
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

        <section className="!mx-auto custom-section mt-[3rem] min-h-screen relative ">
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container flex justify-center items-center">
                <div className="border-2  bg-black/80
                lg:w-[97%]  backdrop-blur-lg z-[9]
                 border-5 rounded-3xl p-5 border-white/30 shadow-[0_0_0_5px_rgba(255,255,255,0.4)]">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div className="flex flex-col items-start gap-3 mb-2 p-10 
                        rounded-2xl shadow-inner shadow-white/20">
                            <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                <FiTarget />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Mục tiêu: </strong>
                                Tôi là sinh viên vừa tốt nghiệp, định hướng trở thành một Front-End Developer chuyên nghiệp.
                                Trong 2 năm tới, tôi muốn nâng cao kỹ năng về React, Angular và các công nghệ hiện đại,
                                đồng thời áp dụng vào những dự án thực tế.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-3 mb-2 p-10   rounded-2xl shadow-inner shadow-white/20">
                            <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                                <FiEye />
                            </span>
                            <p className="text-gray-300">
                                <strong className="text-xl text-pink-400">Tầm nhìn: </strong>
                                Trong 3-5 năm tới, tôi mong muốn đóng góp vào các sản phẩm công nghệ chất lượng,
                                trở thành một Front-End Developer sáng tạo và có thể đảm nhận vai trò lãnh đạo trong đội ngũ phát triển.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col items-start gap-3 mb-2 p-10 mt-5 rounded-2xl shadow-inner shadow-white/20">
                        <span className="bg-pink-500 text-white p-3 rounded-lg text-2xl">
                            <FiTrendingUp />
                        </span>
                        <p className="text-gray-300">
                            <strong className="text-xl text-pink-400">Định hướng phát triển: </strong>
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

    </div>
}
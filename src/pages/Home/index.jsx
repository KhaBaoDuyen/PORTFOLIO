import TextType from "../../components/TextType";
import DecryptedText from "../../components/DecryptedText";
import { Heading, SubHeading } from "../../components/Heading";
import BrandButton from "../../components/BrandButton";
import { FaReact, FaAngular, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiSvelte, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";
import { CardProject1, CardProject2, CardProject0 } from "../../components/CardSwap";
import OverView from "../../components/Overview";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    const animationDuration = '2s';
    return (
        <div className=" mx-auto w-full box-content">
            <section className="custom-section lg:w-full w-full p-3 gap-8 ">
                <span >
                    <Heading text="Bắt đầu khám phá" />
                </span>

                <TextType
                    text={["Tôi là Kha Thị Bảo Duyên – Lập trình viên Front-end"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    loop={false}
                    cursorCharacter="_"
                    className="text-center lg:text-6xl text-3xl lg:w-[70%]"
                />

                <p className="text-center  w-[70%] ">
                    Đam mê tạo ra những trải nghiệm số hiện đại, trực quan và hiệu quả.
                    Tôi chuyên thiết kế giao diện người dùng, xây dựng website tối ưu hiệu suất và luôn hướng tới sự sáng tạo trong từng dự án.
                </p>
                <a href="/CVPORPOLIO.pdf"
                    download={"/CVPORPOLIO.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-button animate-fade-in-up"  >
                    Xem CV Online
                </a>


                <img
                    src="/images/home/bg-sec1.png"
                    alt=""
                    className="w-[90%] object-cover relative -z-50 shadow-lg "
                />
            </section>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="custom-section !w-full p-3 gap-7 ">
                <span>
                    <Heading text="Công nghệ sử dụng" />
                </span>
                <div className="flex flex-wrap justify-center gap-5 pb-[8vw]">
                    <BrandButton icon={<FaReact size={20} />} text="React" />
                    <BrandButton icon={<FaAngular size={20} />} text="Angular" />
                    <BrandButton icon={<SiNextdotjs size={20} />} text="NextJS" />
                    {/* <BrandButton icon={<SiSvelte size={20} />} text="SvelteJs" /> */}
                    <BrandButton icon={<FaGitAlt size={20} />} text="Git" />
                    <BrandButton icon={<FaGithub size={20} />} text="GitHub" />
                    <BrandButton icon={<FaNodeJs size={20} />} text="Node.js" />
                    <BrandButton icon={<SiTailwindcss size={20} />} text="Tailwind CSS" />
                    <BrandButton icon={<SiTypescript size={20} />} text="TypeScript" />
                    <BrandButton icon={<SiFigma size={20} />} text="Figma" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                id="ketqua" className="custom-section w-full gap-7 p-3 ">
                <span>
                    <Heading text="Dự án nổi bật" />
                </span>
                <div className="">
                    <h1 className="text-2xl lg:text-5xl mx-auto text-center lg:w-[60%]">Một số dự án tôi đã thực hiện trong quá trình học tập. </h1>
                    <p className="text-center text-gray-600 mx-auto mt-4 lg:w-[60%]">Trong quá trình học tập, tôi đã tích lũy được nhiều kiến thức và kỹ năng. Dưới đây là một số thành tích nổi bật mà tôi đã đạt được</p>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-items-center mt-10">
                        <CardProject1
                            title="Đặt vé xe tích hợp bản đồ"
                            img="/images/home/duantotnghiep.jpg"
                            context="Ứng dụng đặt vé xe bus tích hợp bản đồ định vị (Mapbox), chọn điểm đón/trả, 
                        xem lộ trình và thời gian dự kiến."
                        />

                        <CardProject2
                            title="Hệ thống bán hàng phụ kiện máy tính trực tuyến"
                            img="/images/home/duan2.jpg"
                            context="Một nền tảng thương mại điện tử chuyên nghiệp, phục vụ nhu cầu mua sắm laptop của người dùng. 
                         "
                        />

                        <CardProject2
                            title="Xây dựng hệ thống Bán vé xe"
                            img="/images/home/duan3.png"
                            context="Dự án Website về đề tài đặt vé xe khách theo tuyến đường, 
                        cho phép người dùng đặt vé xe thanh toán online."/>

                        <CardProject1
                            title="SmartBook – Đọc sách trực tuyến"
                            img="/images/home/duan4.png"
                            context="Dự án SmartBook: ứng dụng web đọc sách online, hỗ trợ danh mục, tìm kiếm và đọc sách." />
                    </div>
                </div>
            </motion.div>

            <section className="flex lg:flex-row lg:justify-between flex-col mt-[5rem] mx-auto
         items-center lg:p-8 container  w-full  " >
                <div className="overflow-x-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" lg:ml-0 flex justify-start flex-col ">
                        <span className="lg:w-[20rem] w-full p-3"><Heading text="Kết quả học tập" left={false} /> </span>
                        <p className="text-xl lg:text-4xl p-3 text-left  animate-shine text-[#dadadae8] bg-clip-text inline-block"
                            style={{
                                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                animationDuration: animationDuration,
                            }}>
                            Một số thành tích tôi đã đạt được trong quá trình học tập.
                        </p>
                    </motion.div>
                </div>


                <div className="overflow-x-hidden  lg:min-w-[50%] p-3">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className=" grid lg:grid-cols-2 justify-items-center grid-cols-1 gap-4 mt-10">
                        <OverView total="7" title="Tín chỉ" context="Đã đạt được thông qua các dự án trong quá trình học tập" />
                        <OverView total="3.75" title="GPA" context="Điểm trung bình tích lũy trong quá trình học tập." />
                        <OverView total="14" title="Dự án" context="Đã hoàn thành, tham gia thực hiện trong quá trình học tập" />
                        <OverView total="1.2" title="Năm" context="Số năm quá trình bắt đầu thựce hiện các dự án." />
                    </motion.div>
                </div>

            </section>

        </div>
    );
};
import TextType from "../../components/TextType";
import DecryptedText from "../../components/DecryptedText";
import { Heading, SubHeading } from "../../components/Heading";
import BrandButton from "../../components/BrandButton";
import { FaReact, FaAngular, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiSvelte, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";
import { CardProject1, CardProject2, CardProject0 } from "../../components/CardSwap";
import OverView from "../../components/Overview";
export default function Home() {
    return <div className=" mx-auto">
        <section className="custom-section p-3 gap-8 ">
            <Heading text="Bắt đầu khám phá" />
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
            <button className="custom-button">
                Xem portfolio
            </button>

            <img
                src="/images/home/bg-sec1.png"
                alt=""
                className="w-full object-cover relative -z-50 shadow-lg "
            />
        </section>

        <section className="custom-section p-3 gap-7 ">
            <Heading text="Công nghệ sử dụng" />
            <div className="flex flex-wrap justify-center gap-5 pb-[8vw]">
                <BrandButton icon={<FaReact size={20} />} text="React" />
                <BrandButton icon={<FaAngular size={20} />} text="Angular" />
                <BrandButton icon={<SiNextdotjs size={20} />} text="NextJS" />
                <BrandButton icon={<SiSvelte size={20} />} text="SvelteJs" />
                <BrandButton icon={<FaGitAlt size={20} />} text="Git" />
                <BrandButton icon={<FaGithub size={20} />} text="GitHub" />
                <BrandButton icon={<FaNodeJs size={20} />} text="Node.js" />
                <BrandButton icon={<SiTailwindcss size={20} />} text="Tailwind CSS" />
                <BrandButton icon={<SiTypescript size={20} />} text="TypeScript" />
                <BrandButton icon={<SiFigma size={20} />} text="Figma" />
            </div>
        </section>

        <section className="custom-section gap-7 p-3 ">
            <Heading text="Dự án nổi bật" />
            <div className="">
                <h1 className="text-2xl lg:text-5xl mx-auto text-center lg:w-[60%]">Một số dự án tôi đã thực hiện trong quá trình học tập. </h1>
                <p className="text-center text-gray-600 mx-auto mt-4 lg:w-[60%]">Trong quá trình học tập, tôi đã tích lũy được nhiều kiến thức và kỹ năng. Dưới đây là một số thành tích nổi bật mà tôi đã đạt được</p>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-items-center mt-10">
                    <CardProject1
                        title="Dự án tốt nghiệp"
                        img="/images/home/duantotnghiep.jpg"
                        context="Create your account in minutes and tailor the platform
                     to meet your company's unique financial needs."/>
                    <CardProject2
                        title="Dự án tốt nghiệp"
                        img="/images/home/duantotnghiep.jpg"
                        context="Create your account in minutes and tailor the platform
                     to meet your company's unique financial needs."/>
                    <CardProject2
                        title="Dự án tốt nghiệp"
                        img="/images/home/duantotnghiep.jpg"
                        context="Create your account in minutes and tailor the platform
                     to meet your company's unique financial needs."/>
                    <CardProject1
                        title="Dự án tốt nghiệp"
                        img="/images/home/duantotnghiep.jpg"
                        context="Create your account in minutes and tailor the platform
                     to meet your company's unique financial needs."/>
                </div>
            </div>

        </section>

        <section className="flex lg:flex-row lg:justify-between flex-col mt-[5vw] mx-auto items-center lg:p-8 container ">
            <div className=" lg:ml-0 flex justify-start flex-col">
                <span className="w-[20rem]"><Heading text="Kết quả học tập" left={false}/> </span>
                 <p className="text-xl lg:text-4xl text-left ">
                    Một số thành tích tôi đã đạt được trong quá trình học tập.
                </p>
            </div>

            <div className="min-w-[50%] grid lg:grid-cols-2 justify-items-center grid-cols-1 gap-5 mt-10">
                <OverView total="20" title="Tín chỉ" context="Đã hoàn thành trong quá trình học tập" />
                <OverView total="3.8" title="GPA" context="Điểm trung bình tích lũy" />
                <OverView total="5" title="Dự án" context="Đã hoàn thành trong quá trình học tập" />
                <OverView total="2" title="Chứng chỉ" context="Đạt được trong quá trình học tập" />
            </div>
        </section>


    </div>;
};
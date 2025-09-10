import Navbar from "../../components/Navbar";
import TextType from "../../components/TextType";
import DecryptedText from "../../components/DecryptedText";
import Heading from "../../components/Heading";
export default function Home() {
    return <div className="lg:container p-3 mx-auto">
        <Navbar />
        <section className="custom-section gap-5 ">
             <Heading text="Bắt đầu khám phá"/>
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
            <button className="bg-white text-black px-3 py-3 font-bold rounded-full 
                shadow-md transition duration-300 ease-in-out 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">   
                Xem portfolio
            </button>

        </section>

        <section className="custom-section mt-10">
             <Heading text="Công nghệ sử dụng"/>
        </section>
    </div>;
};
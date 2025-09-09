import Navbar from "../../components/Navbar";
import TextType from "../../components/TextType";
import DecryptedText from "../../components/DecryptedText";
export default function Home() {
    return <div className="lg:container p-3 mx-auto">
        <Navbar />
        <section className="mx-auto flex justify-center flex-col gap-12 items-center mt-[5vw]">
            <span className="flex gap-2">
                <img src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bb_arrow-left.svg"
                    loading="lazy" alt="" class="badge_right w-full lg:w-[12vw]" />
                <p
                    className="
                  text-white 
                    whitespace-nowrap 
                    px-6 py-3 
                    rounded-full 
                    flex justify-center items-center
                    bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] 
                    shadow-[inset_0_4px_8px_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.5)]
                    border border-white/10"
                >
                    Bắt đầu từ đây
                </p>

                <img src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f54bd_arrow-right.svg"
                    loading="lazy" alt="" class="badge_right w-full lg:w-[12vw]" />
            </span>
            <TextType
                text={["Tôi là Kha Thị Bảo Duyên – Lập trình viên Front-end"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                loop={false}
                cursorCharacter="_"
                className="text-center text-6xl w-[70%]"
            />

            <p className="text-center  w-[70%]">
                Đam mê tạo ra những trải nghiệm số hiện đại, trực quan và hiệu quả.
                Tôi chuyên thiết kế giao diện người dùng, xây dựng website tối ưu hiệu suất và luôn hướng tới sự sáng tạo trong từng dự án.
            </p>
            <button className="bg-white text-black px-3 py-3 font-bold rounded-full 
  shadow-md transition duration-300 ease-in-out 
  hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                Xem portfolio
            </button>

        </section>
    </div>;
};
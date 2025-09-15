import GlareHover from "../../components/GlareHover";
import RotatingText from "../../components/RotatingText";
import CreditCard from "../../components/CreditCard";
import credit from "../../data/credit.json";

export default function Credit() {
    return (
        <div classname="">
            <div className="flex flex-col p-3 items-center gap-3">
                <h1 className="lg:text-6xl text-4xl mt-[5rem] font-bold mb-4 text-center">
                    Chứng Chỉ
                </h1>
                <p className="text-md w-full text-gray-300 !text-center">
                    Chứng chỉ là minh chứng cho sự nỗ lực và cam kết của tôi trong việc phát triển kỹ năng và kiến thức chuyên môn.
                </p>
                <div className="flex flex-row items-center justify-center gap-4 text-center">
                    <h1 className="text-xl ">
                        Chứng chỉ phản ánh
                    </h1>
                    <RotatingText
                        texts={['khối lượng', 'đánh giá', 'tích lũy']}
                        mainClassName=" text-xl text-pink-500 overflow-hidden
                          justify-center rounded-lg"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={3000}
                    />
                </div>

            </div>

            <section className="flex flex-wrap p-3  lg:mt-[5rem] mt-[2rem] lg:container">
                {credit.map((item, index) => (
                    <CreditCard
                        key={index}
                        date={item.date}
                        title={item.title}
                        tags={item.tags}
                        organization={item.organization}
                        image={item.image}
                    />
                ))}
            </section>
        </div>


    );
}
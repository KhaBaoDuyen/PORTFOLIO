import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <div className="flex flex-col lg:mt-[5rem]  mt-[3rem] p-3 items-center justify-center">
            <h1 className="lg:text-5xl text-2xl font-bold">
                Liên Hệ
            </h1>
            <p className="text-gray-300 mt-3 text-center ">
                Rất vui được kết nối và hợp tác cùng bạn. Hãy gửi tin nhắn cho tôi nhé!
            </p>

            <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/30 p-3  lg:mt-[3rem] mt-[1rem] lg:container  rounded-2xl">
                <div className="bg-black/70 relative backdrop-blur-lg rounded-2xl overflow-hidden shadow-inner
     lg:py-10  py-5 px-5 lg:px-20 grid lg:grid-cols-2 gap-10 " >
                    <img src="/images/logo/tiasang.webp" alt="" className="absolute lg:bottom-[-100%] bottom-0 -z-50" />
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Liên Hệ Với Chúng Tôi</h2>
                        <p className="text-gray-300 mb-6">
                            Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua thông tin bên dưới hoặc gửi tin nhắn trực tiếp.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-500 text-white p-3 rounded-full">
                                    <FaMapMarkerAlt />
                                </div>
                                <p>Ninh Kiều, Tph.Cần Thơ</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-500 text-white p-3 rounded-full">
                                    <FaPhoneAlt />
                                </div>
                                <p>+84 370 191 197</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-500 text-white p-3 rounded-full">
                                    <FaEnvelope />
                                </div>
                                <p>duyenktb1410@gmail.com</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold mb-3">Ứng dụng & Mạng xã hội:</h3>
                            <div className="flex gap-3">
                                <Link to="https://www.facebook.com/kha.bao.duyen" target="_blank" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
                                    <FaFacebookF />
                                </Link>
                                <Link to="https://www.linkedin.com/in/bao-duyen-kha-thi-41622736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
                                    <FaLinkedinIn />
                                </Link>
                                <Link to="https://github.com/KhaBaoDuyen" target="_blank" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
                                    <FaGithub />
                                </Link>
                                <Link to="https://zalo.me/0337019197" target="_blank" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
                                    <SiZalo />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 lg:py-10 lg:px-5 rounded-xl shadow-md">
                        <h3 className="text-xl text-pink-600 font-semibold mb-4">Gửi Tin Nhắn</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Họ và tên"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <input
                                type="email"
                                placeholder="Địa chỉ Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <textarea
                                placeholder="Nội dung tin nhắn"
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-pink-500 text-white px-6 py-2 rounded-2xl hover:bg-pink-600 transition"
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>


    );
}

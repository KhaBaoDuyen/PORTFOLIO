import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Path changed:", pathname);
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


export function ButtonScrollToTop() {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="group fixed bottom-5 right-5 z-50 p-3 rounded-full 
                    custom-button animate-fade-in-up"
                >
                    <FaArrowUp
                        size={20}
                        className="transform transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </button>
            )}
        </>
    );
}

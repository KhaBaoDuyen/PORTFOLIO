import CustomCursor from "../../components/CustomCursor";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ButtonScrollToTop } from "../../components/ScrollToTop";
export default function MainLayout() {
  return (
    <div className="relative !mx-auto box-content">
      <Navbar />
      <span className="mt-[7rem] flex items-center  justify-center !mx-auto">
        <Outlet />
      </span>
      <CustomCursor />
      <img
        sizes="100vw"
        srcSet="
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5605_light-left-p-500.png 500w,
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5605_light-left-p-800.png 800w,
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5605_light-left-p-1080.png 1080w,
          https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5605_light-left.webp 1491w
        "
        alt=""
        src="https://cdn.prod.website-files.com/67f70667bbc9554c154f545d/67f70667bbc9554c154f5605_light-left.webp"
        loading="lazy"
        className=" fixed object-cover lg:w-[70%] inset-0 lg:top-[-5rem] -z-50 top-0 w-full"
      />
      <ButtonScrollToTop />
      <Footer />
    </div>
  );
}

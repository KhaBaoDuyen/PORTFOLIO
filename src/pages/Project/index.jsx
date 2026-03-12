import { Link } from "react-router-dom";
import { Projects } from "../../components/CardProject";


export default function Project() {
    return (
        <div className="flex flex-col lg:container lg:mt-[5rem]
         mt-[3rem] p-3 items-center justify-center">
            <h1 className="lg:text-5xl text-3xl font-bold">
                Dự án
            </h1>
            <p className="text-gray-300 mt-3 text-center ">
                Một số dự án tôi đã thực hiện trong quá trình học tập.
            </p>

            <Projects />
        </div>


    );
}

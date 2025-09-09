import CustomCursor from "../../components/CustomCursor";
import { Outlet } from "react-router-dom";

export default function PlainLayout() {
    return (
        <div className="relative">
            <Outlet />
            <CustomCursor />
        </div>
    );
}

import { NavbarRoutes } from "@/app/navbarComponents/Navbar-Routes"
import { MobileSidebar } from "./Mobile-sidebar"

export const Navbar = () => {
    return(
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    )
}
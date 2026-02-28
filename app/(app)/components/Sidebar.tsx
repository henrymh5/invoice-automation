import CurrentUser from "./CurrentUser"
import SidebarLinks from "./SidebarLinks"

export default function Sidebar(){
    return (
        <div className="self-stretch flex justify-between bg-[#0B745B] w-55 border border-[#00000032] rounded-xl flex flex-col p-3 pt-4 pb-4 gap-6">
            <div className="self-stretch flex gap-6 flex-col">
                <SidebarLinks />
            </div>
            <div>
            <CurrentUser /> 
            </div>
        </div>
    )
}
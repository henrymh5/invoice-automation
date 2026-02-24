import CurrentUser from "./CurrentUser"
import SidebarLinks from "./SidebarLinks"

export default function Sidebar(){
    return (
        <div className="self-stretch bg-[#0B745B] w-55 border border-[#00000032] rounded-xl flex flex-col p-3 pt-8 pb-8 gap-6">

            <div>
            <CurrentUser /> 
            </div>
        </div>
    )
}
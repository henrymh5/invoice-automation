interface DraggableItemProps{
    image_url: string;
    selected: string;
}

export default function SelectedDraggable({image_url, selected}: DraggableItemProps){
    return (
        <div
        style={{
            display: `${selected === "none" ? "none" : "flex"}`
        }}
        className="fixed top-0 left-0 flex w-[100px] cursor-grabbing flex-col gap-2 overflow-hidden text-center items-center justify-center aspect-1/1 text-[#ffffffa5] text-sm">
            <div style={{backgroundImage: `url('/${image_url}')`}} className="bg-[#05261e] self-stretch flex-1 bg-no-repeat bg-cover rounded-xl"></div>
        </div> 
    )
}
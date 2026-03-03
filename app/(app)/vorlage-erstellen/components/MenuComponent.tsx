import { useEffect, useState } from "react";

interface MenuComponentProps{
    title: string;
    image_url: string;
    category: string;
    handleDrag: () => void;
    changeSelectedItem: (e: React.PointerEvent) => void; 
    dragging: boolean
}

export default function MenuComponent({title, image_url, category, handleDrag, changeSelectedItem, dragging}: MenuComponentProps) {
    const componentCategory = category;
    
    useEffect(() => {
        if (dragging) window.addEventListener("pointerup", handleDrag)
        return () => {
            window.removeEventListener("pointerup", handleDrag)
        }
    }, [dragging])

    return (
            <div onPointerDown={(e) => {changeSelectedItem(e); handleDrag()}} className="flex cursor-grab click:cursor-grabbing flex-col gap-2 overflow-hidden basis-[48%] text-center flex-none items-center justify-center aspect-1/1 text-[#ffffffa5] text-sm">
                <div style={{backgroundImage: `url('/${image_url}')`}} className="bg-[#05261e] self-stretch flex-1 bg-no-repeat bg-cover rounded-xl"></div>
                {title}
            </div>
    )
}

interface DraggableItemProps{
    selected: { type: string; image_url: string; }; 
    isDragging: boolean;
}

export function SelectedDraggable({selected, isDragging}: DraggableItemProps){
    const [position, setPosition] = useState({ x: 0, y: 0 });


        useEffect(() => {
            const updatePosition = (e:PointerEvent) => {
                setPosition({x: e.clientX, y: e.clientY})
            }

            if(isDragging){
                window.addEventListener("pointerdown", updatePosition)
                window.addEventListener("pointermove", updatePosition)
            } 
            
            return () => {
                window.removeEventListener("pointermove", updatePosition)
            }
        }, [isDragging])

    return (
        <div
        style={{
            display: `${isDragging ? "flex" : "none"}`,
            top: `${position.y}px`,
            left: `${position.x}px`
        }}
        className="fixed pointer-events-none w-[100px] cursor-grabbing flex-col gap-2 overflow-hidden text-center items-center justify-center aspect-1/1 text-[#ffffffa5] text-sm">
            <div style={{backgroundImage: `url('/${selected.image_url}')`}} className="bg-[#05261e] self-stretch flex-1 bg-no-repeat bg-cover rounded-xl"></div>
        </div> 
    )
}
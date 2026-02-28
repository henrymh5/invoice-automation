interface MenuComponentProps{
    title: string;
    image_url: string;
    category: string;
}

export default function MenuComponent({title, image_url, category}: MenuComponentProps) {
    const componentCategory = category;
    
    return (
        <div className="flex cursor-grab flex-col gap-2 overflow-hidden basis-[48%] text-center flex-none items-center justify-center aspect-1/1 text-[#ffffffa5] text-sm">
          <div className={`bg-[#05261e] self-stretch flex-1 bg-[url(/${image_url})] bg-no-repeat bg-cover rounded-xl`}></div>
          {title}
        </div>
    )
}
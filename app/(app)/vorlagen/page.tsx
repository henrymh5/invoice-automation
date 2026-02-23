import Image from "next/image";

export default function Templates() {
  return (
    <div className="grid grid-cols-6 grid-rows-8 flex-1 self-stretch gap-5">
      <div className="col-span-6 row-span-1 flex justify-between items-center py-5">
        <div>
          <span className="text-2xl font-semibold text-[#0B745B]">
            Deine Vorlagen
          </span>
        </div>
        <div className="flex">
          <a href="/vorlage-erstellen" className="font-medium text-sm p-2 pl-4 pr-4 rounded-xl bg-[#0B745B] text-[#fff] cursor-pointer">
            Neue Vorlage +
          </a>
        </div>
      </div>
      <Template title="Dein Vorlagenname #1" />
      <Template title="Dein Vorlagenname #2" />
      <Template title="Dein Vorlagenname #3" />
      <Template title="Dein Vorlagenname #4" />
    </div>
  );
}

interface TemplateProps{
    title: string;
}

function Template({title} : TemplateProps) {
    return (
        <div className="col-span-1 row-span-1 flex flex-col gap-5">
            <div>
                <Image src="/blank-a4.png" className="w-full shadow-sm" width={100} height={300} alt="Blanko Vorlage Template"/>
            </div>
            <div>
                <h2 className="text-md text-[#000000b6]">{title}</h2> 
            </div>
        </div>
    )
}
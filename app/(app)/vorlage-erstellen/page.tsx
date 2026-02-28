import { Menu, Minus, Plus } from "lucide-react";
import MenuComponent from "./components/MenuComponent";

export default function CreateTemplate() {
  return (
    <div className="flex items-center justify-between self-stretch flex-1 gap-5">
      <TemplateCanvas />
      <ComponentMenu />
    </div>
  );
}

function TemplateCanvas() {
  return (
    <div className="flex-1 relative self-stretch">
      <div className="TemplateCanvas absolute top-10 left-[50%] bg-white shadow-md aspect-100/141 h-[95%]">

      </div>
      <div className="Controls absolute bottom-0 right-10 text-2xl flex flex-col gap-2">
        <div className="Plus w-10 h-10 bg-[#0A372C] text-white flex items-center rounded-full justify-center cursor-pointer"><Plus size={15} /></div>
        <div className="Minus w-10 h-10 bg-[#0A372C] text-white rounded-full flex items-center justify-center opacity-25 cursor-pointer"><Minus size={15}/></div>
      </div>
    </div>
  );
}

function ComponentMenu() {
  return (
    <div className="flex flex-col gap-5 self-stretch bg-[#0A372C] w-full max-w-[350px] rounded-2xl py-5 px-3 overflow-scroll">
      <h3 className="text-xl text-white font-semibold">Vorlagen Bausteine</h3>
      <input
        type="text"
        placeholder="Suchen..."
        className="SearchInput text-white border border-[#ffffff50] bg-[#05261e] w-full px-10 py-1 rounded-md"
      />

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Rechtlich notwendig</h4>
        </div>
        <MenuComponent title="Kundendaten" image_url="customer-details-bg.png" category="mandatory" />
        <MenuComponent title="Kundendaten" image_url="customer-details-bg.png" category="mandatory" />
        <MenuComponent title="Kundendaten" image_url="customer-details-bg.png" category="mandatory" />
        <MenuComponent title="Kundendaten" image_url="customer-details-bg.png" category="mandatory" />
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/invoice-details-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Belegverweise
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/business-information-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Unternehmensangaben
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/invoice-items-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Rechnungsposten
        </div>
      </div>

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Layout</h4>
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/rows-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Reihen
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/cols-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Spalten
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/add-page-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Neue Seite
        </div>
        <div className="flex cursor-grab flex-col gap-2 basis-[48%] text-center flex-none items-center justify-center aspect-1/1 rounded-xl text-[#ffffffa5] text-sm">
          <div className="bg-[#05261e] self-stretch flex-1 bg-[url(/tables-bg.png)] bg-no-repeat bg-cover rounded-xl"></div>
          Tabelle
        </div>
      </div>
    </div>
  );
}

'use client'

import { Menu, Minus, Plus } from "lucide-react";
import MenuComponent from "./components/MenuComponent";
import SelectedDraggable from "./components/SelectedDraggable";
import { useState } from "react";

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
  const [itemSelected, setItemSelected] = useState("none");

  return (
    <>
    <SelectedDraggable image_url="customer-details-bg.png" selected={itemSelected} />
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
        <MenuComponent title="Belegverweise" image_url="invoice-details-bg.png" category="mandatory" />
        <MenuComponent title="Unternehmensangaben" image_url="business-information-bg.png" category="mandatory" />
        <MenuComponent title="Rechnungsposten" image_url="invoice-items-bg.png" category="mandatory" />
      </div>

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Layout</h4>
        </div>
        <MenuComponent title="Reihen" image_url="rows-bg.png" category="mandatory" />
        <MenuComponent title="Spalten" image_url="cols-bg.png" category="mandatory" />
        <MenuComponent title="Neue Seite" image_url="add-page-bg.png" category="mandatory" />
        <MenuComponent title="Tabelle" image_url="tables-bg.png" category="mandatory" />
      </div>
    </div>
    </>
  );
}

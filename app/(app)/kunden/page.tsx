"use client";

import {
  ChevronDown,
  Users,
  Sparkles,
  Repeat2,
  CircleSlash2,
  BanknoteArrowDown,
  TrashIcon,
  CircleCheck,
  CircleX,
  Calendar1,
  Eye,
  EyeClosed,
  ChevronFirst,
  ChevronLast,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Kunden() {
  return (
    <div className="grid grid-cols-3 grid-rows-8 flex-1 self-stretch gap-2">
      <div className="col-span-3 row-span-1 flex justify-between items-center py-5">
        <div>
          <span className="text-2xl font-semibold text-[#0B745B]">
            Deine Kunden
          </span>
        </div>
        <div className="flex">
          <div className="font-medium text-sm p-2 pl-4 pr-4 rounded-xl bg-[#0B745B] text-[#fff] cursor-pointer">
            Kunde anlegen +
          </div>
        </div>
      </div>
      <CustomerStatistics />
      <div className="col-span-3 row-span-7 flex flex-col relative">
        <TableSettings />
        <CustomerTable />
      </div>
    </div>
  );
}

function CustomerStatistics() {
  return (
    <div className="flex items-stretch justify-start col-span-3 rounded-xl overflow-hidden border border-[#00000032] divide-x-1 divide-[#00000020]">
      <div className="text-center flex-1 bg-white flex flex-col items-start justify-center p-3 gap-2">
        <div className="flex gap- text-sm text-[#00000065] items-center justify-center gap-3">
          <Users size={15} /> Alle Kunden
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-lg flex items-center justify-center">
            365 <Image width={15} height={15} src="/arrow-up.svg" alt="arrow" />
          </div>
          <div className="flex-1 self-stretch">
            <Image
              src="/graph-placeholder.png"
              className="w-75%"
              width={70}
              height={70}
              alt="Graphen Platzhalter"
            />
          </div>
        </div>
      </div>
      <div className="text-center flex-1 bg-white flex flex-col items-start justify-center p-3 gap-2">
        <div className="flex gap-3 text-sm text-[#00000065] items-center justify-center">
          <Sparkles size={15} /> Neue Kunden
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-lg flex items-center justify-center">
            25 <Image width={15} height={15} src="/arrow-up.svg" alt="arrow" />
          </div>
          <div className="flex-1 self-stretch">
            <Image
              src="/graph-placeholder.png"
              className="w-75%"
              width={70}
              height={70}
              alt="Graphen Platzhalter"
            />
          </div>
        </div>
      </div>
      <div className="text-center flex-1 bg-white flex flex-col items-start justify-center p-3 gap-2">
        <div className="flex gap-3 text-sm text-[#00000065] items-center justify-center">
          <Repeat2 size={15} /> Wiederkehrende Kunden
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-lg flex items-center justify-center">
            3,56%{" "}
            <Image width={15} height={15} src="/arrow-up.svg" alt="arrow" />
          </div>
          <div className="flex-1 self-stretch">
            <Image
              src="/graph-placeholder.png"
              className="w-75%"
              width={70}
              height={70}
              alt="Graphen Platzhalter"
            />
          </div>
        </div>
      </div>
      <div className="text-center flex-1 bg-white flex flex-col items-start justify-center p-3 gap-2">
        <div className="flex gap-3 text-sm text-[#00000065] items-center justify-center">
          <CircleSlash2 size={15} /> Durchschn. Bestellwert
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-lg flex items-center justify-center">
            12.650,- €{" "}
            <Image width={15} height={15} src="/arrow-up.svg" alt="arrow" />
          </div>
          <div className="flex-1 self-stretch">
            <Image
              src="/graph-placeholder.png"
              className="w-75%"
              width={70}
              height={70}
              alt="Graphen Platzhalter"
            />
          </div>
        </div>
      </div>
      <div className="text-center flex-1 bg-white flex flex-col items-start justify-center p-3 gap-2">
        <div className="flex gap-3 text-sm text-[#00000065] items-center justify-center">
          <BanknoteArrowDown size={15} /> Retouren
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="font-semibold text-lg flex items-center justify-center">
            16{" "}
            <Image width={15} height={15} src="/arrow-down.svg" alt="arrow" />
          </div>
          <div className="flex-1 self-stretch">
            <Image
              src="/graph-placeholder.png"
              className="w-75%"
              width={70}
              height={70}
              alt="Graphen Platzhalter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSettings() {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center justify-between gap-5">
          <div className="text-[#000000] py-2 relative active-panel">
            Alle Kunden
          </div>
          <div className="text-[#00000065] p-2">Aktiv</div>
        </div>
        <div
          className="flex items-center justify-center gap-3 opacity-50 hover:opacity-100 text-sm transition cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          Filter ein-/ausblenden{" "}
          {isOpen ? (
            <Eye className="cursor-pointer" size={20} />
          ) : (
            <EyeClosed className="cursor-pointer" size={20} />
          )}
        </div>
      </div>
      <div className={`flex w-full justify-between ${!isOpen ? "hidden" : ""}`}>
        <div className="flex gap-5">
          <form className="flex-1" action="">
            <input
              className="bg-white rounded border border-[#00000032] h-full p-2 text-sm rounded-lg"
              type="text"
              placeholder="Suchen..."
            />
          </form>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-[#00000065]">Sortieren nach:</div>
          <div className="flex-1 flex gap-3 bg-white rounded-lg items-center justify-center border border-[#00000032] p-2 text-sm text-nowrap text-[#00000065] hover:text-[#000000] transition cursor-pointer">
            Datum <ChevronDown size={20} />
          </div>
          <div className="flex-1 flex gap-3 bg-white rounded-lg items-center justify-center border border-[#00000032] p-2 text-sm text-nowrap text-[#00000065] hover:text-[#000000] transition cursor-pointer">
            Bestellvolumen <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerTable() {
  const ExampleCustomers = [
    {
      id: 9534,
      name: "Henry Korte",
      pic_link: "/mock-profil-bild.png",
      order_id: 73450,
      order_value: "7542,35",
      status: "active",
      last_order: "09.09.2025",
    },
    {
      id: 9535,
      name: "Max Mustermann",
      pic_link: "/mock-profil-bild.png",
      order_id: 73451,
      order_value: "7542,35",
      status: "active",
      last_order: "09.09.2025",
    },
    {
      id: 9536,
      name: "Henry Korte",
      pic_link: "/mock-profil-bild.png",
      order_id: 73452,
      order_value: "7542,35",
      status: "active",
      last_order: "09.09.2025",
    },
    {
      id: 9537,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9538,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9539,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9540,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9541,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9542,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9543,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9544,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
    {
      id: 9545,
      name: "Alina Albietz",
      pic_link: "/mock-profil-bild.png",
      order_id: 73453,
      order_value: "7542,35",
      status: "inactive",
      last_order: "09.09.2025",
    },
  ]; // Mockdata before initializing a db
  return (
    <div className="rounded-lg border border-[#00000025] overflow-scroll h-full mt-5 pb-10">
      <div className="flex items-stretch justify-start w-full bg-[#0B745B] p-2  sticky top-0 left-0 z-1000">
        <div className="flex-1 text-[#ffffffd9]">Kundennummer</div>
        <div className="flex-1 text-[#ffffffd9]">Name</div>
        <div className="flex-1 text-[#ffffffd9]">Bestellnummer</div>
        <div className="flex-1 text-[#ffffffd9]">Bestellwert</div>
        <div className="flex-1 text-[#ffffffd9]">Status</div>
        <div className="flex-1 text-[#ffffffd9]">Letzte Bestellung</div>
        <div className="flex-1 text-[#ffffffd9]">Aktionen</div>
      </div>
      {ExampleCustomers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            name={customer.name}
            order_id={customer.order_id}
            order_value={customer.order_value}
            status={customer.status}
            last_order={customer.last_order}
          />
        );
      })}
      <div className="flex items-center justify-end gap-3 h-10 w-full bg-[#0B745B] px-1  absolute bottom-0 left-0 z-1000 text-white">
        <div><ChevronFirst size={17} /></div>
        <div><ChevronLeft size={17} /></div>
        <div className="bg-[#ffffff25] w-6 h-6 flex items-center text-sm justify-center border border-[#ffffff40]">1</div>
        <div><ChevronRight size={17} /></div>
        <div><ChevronLast size={17} /></div> 
      </div>
    </div>
  );
}

interface CustomerProps {
  id: number;
  name: string;
  order_id: number;
  order_value: string;
  status: string;
  last_order: string;
}

function Customer({
  id,
  name,
  order_id,
  order_value,
  status,
  last_order,
}: CustomerProps) {
  return (
    <div className="flex items-center justify-start bg-white w-full Customer p-2 opacity-75 hover:opacity-100 cursor-pointer transition">
      <div className="flex-1">#{id}</div>
      <div className="flex-1 flex justify-start items-center gap-2">
        <Image
          src="/mock-profil-bild.png"
          width={30}
          height={30}
          alt="Profilbild"
        />
        {name}
      </div>
      <div className="flex-1">#{order_id}</div>
      <div className="flex-1">{order_value}€</div>
      <div className="flex-1">
        <Status status={status} />
      </div>
      <div className="flex-1 flex items-center justify-start gap-2">
        <Calendar1 size={17} />
        {last_order}
      </div>
      <div className="flex-1">
        <TrashIcon size={17} />
      </div>
    </div>
  );
}

interface StatusProps {
  status: string;
}

function Status({ status }: StatusProps) {
  if (status === "active") {
    return (
      <div className="bg-[#C0FFB7] w-fit px-2 rounded-2xl text-[#41D315] flex gap-1 items-center justify-center">
        <CircleCheck size={15} /> Aktiv
      </div>
    );
  }

  return (
    <div className="bg-[#FFB8B8] w-fit px-2 rounded-2xl text-[#D31515] flex gap-1 items-center justify-center">
      <CircleX size={15} />
      Inaktiv
    </div>
  );
}

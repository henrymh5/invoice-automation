import {
  ChevronDown,
  Users,
  Sparkles,
  Repeat2,
  CircleSlash2,
  BanknoteArrowDown,
  TrashIcon
} from "lucide-react";

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
      <div className="col-span-3 row-span 7">
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
            3,56% <Image width={15} height={15} src="/arrow-up.svg" alt="arrow" />
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
  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex items-center justify-start gap-5">
        <div className="text-[#000000] py-2 relative active-panel">
          Alle Kunden
        </div>
        <div className="text-[#00000065] p-2">Aktiv</div>
      </div>
      <div className="flex w-full justify-between">
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
          <div className="text-[#00000065]">
            Sortieren nach:
          </div>  
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

function CustomerTable(){
    return (
        <div className="rounded-lg overflow-hidden mt-5">
            <div className="flex items-stretch justify-start w-full bg-[#0B745B] p-2">
                <div className="flex-1 text-[#ffffffd9]">Kundennummer</div>
                <div className="flex-1 text-[#ffffffd9]">Name</div>
                <div className="flex-1 text-[#ffffffd9]">Bestellnummer</div>
                <div className="flex-1 text-[#ffffffd9]">Bestellwert</div>
                <div className="flex-1 text-[#ffffffd9]">Status</div>
                <div className="flex-1 text-[#ffffffd9]">Letzte Bestellung</div>
                <div className="flex-1 text-[#ffffffd9]">Aktionen</div>
            </div>
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </div>
    )
}

function Customer(){
    return (
        <div className="flex items-stretch justify-start bg-white w-full Customer p-2 hover:opacity-50 cursor-pointer transition">
            <div className="flex-1">#9354</div>
            <div className="flex-1">Henry Korte</div>
            <div className="flex-1">#73450</div>
            <div className="flex-1">Aktiv</div>
            <div className="flex-1">3.560,23€</div>
            <div className="flex-1">09.09.2025</div>
            <div className="flex-1"><TrashIcon /></div>
        </div>
    )
}
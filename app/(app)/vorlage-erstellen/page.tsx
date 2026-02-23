export default function CreateTemplate() {
  return (
    <div className="flex items-center justify-between gap-30 self-stretch flex-1">
      <TemplateCanvas />
      <ComponentMenu />
    </div>
  );
}

function TemplateCanvas() {
  return (
    <div className="bg-white shadow-md aspect-100/141 h-[95%] ml-25">
      &nbsp;
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
        className="SearchInput text-white border border-white w-full px-10 py-1 rounded-md"
      />

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Rechtlich notwendige Angaben</h4>
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
      </div>

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Layout Komponenten</h4>
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
      </div>

      <div className="flex flex-wrap justify-start items-start gap-2">
        <div className="w-[100%] mb-2">
          <h4 className="text-md text-white">Vorgefertigte Bausteine</h4>
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
        <div className="flex basis-[48%] flex-none items-center justify-center bg-[#0B745B] aspect-1/1 rounded-xl">
          Item
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 grid-rows-8 flex-1 self-stretch gap-2">
      <div className="bg-white rounded-xl border border-[#00000032] col-span-3 row-span-1 flex justify-between items-center p-5">
        <div>
          <span className="text-2xl font-semibold text-[#0B745B]">
            Korte Software
          </span>
          <span className="font-semibold text-[#00000065] ml-3">
            Henry Korte
          </span>
        </div>
        <div className="flex gap-5">
          <div className="font-medium text-sm p-2 pl-4 pr-4 rounded-xl border-2 border-[#0B745B] text-[#0B745B]">
            Neue Ausgabe erfassen +
          </div>
          <div className="font-medium text-sm p-2 pl-4 pr-4 rounded-xl bg-[#0B745B] text-[#fff]">
            Neue Rechnung +
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-1 row-span-5 p-5 flex overflow-scroll">
        <Tasks />
      </div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-3 p-5 flex">
        <IncomeStream />
      </div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-2 flex overflow-hidden">
        <SoonToCome />
      </div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-1 row-span-2 flex overflow-hidden">
        <SoonToCome />
      </div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-2 flex overflow-hidden">
        <SoonToCome />
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="flex flex-col items-stretch justify-between self-stretch flex-1">
      <h2 className="text-2xl font-semibold text-[#0B745B]">Zusammenfassung</h2>
      <h3 className="text-lg font-semibold text-[#0B745B]">Rechnungen</h3>
      <div className="flex items-center justify-between">
        <div>Muster GmbH</div>
        <div>
          30. Juni 2026{" "}
          <span className="text-[#0B745B] text-xl ml-2 font-semibold">
            +1250,-€
          </span>
        </div>
      </div>

      <hr className="text-[#00000050] w-[50%]" />

      <h3 className="text-lg font-semibold text-[#0B745B]">Ausgaben</h3>
      <div className="flex items-center justify-between">
        <div>Muster GmbH</div>
        <div>
          30. Juni 2026{" "}
          <span className="text-[#c72323] text-xl ml-2 font-semibold">
            -1250,-€
          </span>
        </div>
      </div>

      <hr className="text-[#00000050] w-[50%]" />

      <div className="flex items-center justify-between">
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">
          Einnahmen <br />
          <span className="text-[#0B745B] text-xl">+12.500 €</span>
        </div>
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">
          Ausgaben <br />{" "}
          <span className="text-[#0B745B] text-xl">-2.500 €</span>
        </div>
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">
          Bestand <br />{" "}
          <span className="text-[#0B745B] text-xl">+10.000 €</span>
        </div>
      </div>
    </div>
  );
}

function SoonToCome() {
  return (
    <div className="relative flex-1 self-stretch z-0">
      <Image
        src="/markus-winkler-IrRbSND5EUc-unsplash(1).jpg"
        alt="MockImage"
        width={100}
        height={20}
        className="absolute top-0 left-0 w-full h-auto z-0"
      />
      <div className="absolute z-0 bg-[#ffffff50] top-0 bottom-0 left-0 right-0 backdrop-blur-md flex justify-center items-center font-semibold text-xl text-[#00000085]">
        Kommt bald...
      </div>
    </div>
  );
}

function IncomeStream() {

  const income = [12500, 9500, 2489, 1500, 6498, 15000]

  return (
    <div className="self-stretch flex-1 flex flex-col align-start gap-3">
      <h2 className="text-2xl font-semibold text-[#0B745B] self-stretch">
        Einnahmen
      </h2>
      <div className="Graph flex flex-1 self-stretch">
        <div className="y-axis flex flex-col self-stretch justify-between items-end pr-10 mb-8">
          <div>15.000€</div>
          <div>7.500€</div>
          <div>5.000€</div>
          <div>0€</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="values flex-1 flex gap-5 justify-between items-end">
            <div style={{height: `${Math.round((income[0]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
            <div style={{height: `${Math.round((income[1]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
            <div style={{height: `${Math.round((income[2]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
            <div style={{height: `${Math.round((income[3]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
            <div style={{height: `${Math.round((income[4]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
            <div style={{height: `${Math.round((income[5]/15000) * 100)}%`}} className="bg-gradient-to-b from-[#0B745B] to-[#0B745B40] flex-1 rounded transition">&nbsp;</div>
          </div> 
          <div className="x-axis flex justify-between gap-5 stretch-self pt-2">
            <div className="text-center flex-1">Jan</div>
            <div className="text-center flex-1">Feb</div>
            <div className="text-center flex-1">Mär</div>
            <div className="text-center flex-1">Apr</div>
            <div className="text-center flex-1">Mai</div>
            <div className="text-center flex-1">Jun</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex grid grid-cols-3 grid-rows-8 flex-1 self-stretch gap-2">
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
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-3"></div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-2"></div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-1 row-span-2"></div>
      <div className="bg-white rounded-xl border border-[#00000032] col-span-2 row-span-2"></div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="flex flex-col items-stretch justify-between self-stretch flex-1">
      <h2 className="text-xl font-semibold text-[#0B745B]">
        Zusammenfassung
      </h2>
      <h3 className="text-lg font-semibold text-[#0B745B]">Rechnungen</h3>
      <div className="flex items-center justify-between">
        <div>Muster GmbH</div>
        <div>
          30. Juni 2026 <span className="text-[#0B745B] text-xl ml-2 font-semibold">+1250,-€</span>
        </div>
      </div>

      <hr className="text-[#00000050] w-[50%]" />

      <h3 className="text-lg font-semibold text-[#0B745B]">Ausgaben</h3>
      <div className="flex items-center justify-between">
        <div>Muster GmbH</div>
        <div> 
          30. Juni 2026 <span className="text-[#c72323] text-xl ml-2 font-semibold">-1250,-€</span>
        </div>
      </div>

      <hr className="text-[#00000050] w-[50%]" />

      <div className="flex items-center justify-between">
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">Einnahmen <br /><span className="text-[#0B745B] text-xl">+12.500 €</span></div>
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">Ausgaben <br /> <span className="text-[#0B745B] text-xl">-2.500 €</span></div>
        <div className="text-center flex-1 text-[#00000065] font-semibold text-sm">Bestand <br />  <span className="text-[#0B745B] text-xl">+10.000 €</span></div>
      </div>
    </div>
  );
}

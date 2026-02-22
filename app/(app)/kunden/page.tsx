export default function Kunden() {
    return (
        <div className="grid grid-cols-3 grid-rows-8 flex-1 self-stretch gap-2">
          <div className="col-span-3 row-span-1 flex justify-between items-center p-5">
            <div>
              <span className="text-2xl font-semibold text-[#0B745B]">
                Deine Kunden
              </span>
            </div>
            <div className="flex">
              <div className="font-medium text-sm p-2 pl-4 pr-4 rounded-xl bg-[#0B745B] text-[#fff]">
                Neue Rechnung +
              </div>
            </div>
          </div>
        <CustomerStatistics />
        <TableSettings />
        </div>
    )
}

function CustomerStatistics(){
    return (
        <div className="flex items-stretch justify-start col-span-3 border border-[#00000032] divide-x-1 divide-[#00000032]">
            <div className="text-center flex-1 bg-white flex items-center justify-center">Total Customers</div>
            <div className="text-center flex-1 bg-white flex items-center justify-center">New Customers</div> 
            <div className="text-center flex-1 bg-white flex items-center justify-center">Returning Customer Rate</div>
            <div className="text-center flex-1 bg-white flex items-center justify-center">Average Order Revenue</div>
            <div className="text-center flex-1 bg-white flex items-center justify-center">Refunds</div>
        </div>
    )
} 

function TableSettings(){
    return (
        <div>
            <div>
                <div>All Customers</div>
                <div>Active</div>
            </div>
            <div className="flex gap-5">
                <form className="flex-1" action="">
                    <input type="text" placeholder="Search" />
                </form>
                <div className="flex-1">Date Range</div>
                <div className="flex-1">Order value</div>
                <div className="flex-1">Hide</div>
            </div>
        </div>
    )
}
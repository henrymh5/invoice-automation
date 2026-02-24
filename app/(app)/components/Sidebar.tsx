'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard, 
    IdCard,
    ReceiptText,
    FileCog
} from 'lucide-react'

export default function Sidebar(){
    const pathname = usePathname()
    
    return (
        <div className="self-stretch bg-[#0B745B] w-55 border border-[#00000032] rounded-xl flex flex-col p-3 pt-8 pb-8 gap-6">
            <Link href="/dashboard" className={`${pathname === '/dashboard' ? "text-[#fff]" : "text-[#ffffffa8]"} flex items-center gap-3 hover:text-[#fff] transition`}>
              <LayoutDashboard size="1.1em" />  
              Dashboard
            </Link>
            <Link href="/kunden" className={`${pathname === '/kunden' ? "text-[#fff]" : "text-[#ffffffa8]"} flex items-center gap-3 hover:text-[#fff] transition`}>
                <IdCard size="1.1em" />
                Kunden
            </Link>
            <Link href="/rechnungen" className={`${pathname === '/rechnungen' ? "text-[#fff]" : "text-[#ffffffa8]"} flex items-center gap-3 hover:text-[#fff] transition`}>
                <ReceiptText size="1.1em" />
                Rechnungen
            </Link>
            <hr className="text-[#fff] w-[50%]" />
            <Link href="/vorlagen" className={`${pathname === '/vorlagen' ? "text-[#fff]" : "text-[#ffffffa8]"} flex items-center gap-3 hover:text-[#fff] transition`}>
                <FileCog size="1.1em" /> 
                Vorlagen
            </Link>
        </div>
    )
}
'use client'

import { usePathname } from 'next/navigation'
import {
    LayoutDashboard, 
    IdCard,
    ReceiptText,
    FileCog
} from 'lucide-react'
import Link from "next/link"

export default function SidebarLinks(){
    const pathname = usePathname()

    return (
        <>
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
        </>
    )
}
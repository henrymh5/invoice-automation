import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { BillflowLogo } from "./components/BillflowLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-2 w-full flex-1 self-stretch items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex p-2 flex-col gap-4 w-lg aspect-1/1 bg-[#ffffff10] text-center justify-center items-center rounded-xl border border-[#ffffff20]">
        <BillflowLogo />
        <h1 className="text-3xl text-white font-bold">Erstelle deine Rechnungen online - <br /> <span className="text-[#0B745B]">vollautomatisch, super einfach</span></h1>
        <p className="text-[#ffffffb8] mb-5">Mithilfe unseres Drag & Drop Layout Builder kannst du ganz einfach ansprechende Rechnungsvorlagen erstellen, die es deinen Kunden super einfach machen, zu zahlen</p>
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton>
              <button className="bg-transparent border-2 border-[#0B745B] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Einloggen
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-[#0B745B] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Account erstellen
              </button>
            </SignUpButton>
          </SignedOut>
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </main>
  );
}

import Sidebar from "./components/Sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-3xl">Logge dich ein,<br /> um diese Seite zu sehen</h1>
        <div className="mt-5 flex gap-2">
          <SignInButton>
            <button className="bg-transparent border-2 border-[#0B745B] text-[#0B745B] rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Einloggen
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#0B745B] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Account erstellen
            </button>
          </SignUpButton>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-5 w-screen h-screen p-3">
      <Sidebar />
      <main className="flex-1 self-stretch flex">{children}</main>
    </div>
  );
}

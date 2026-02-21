import Sidebar from "./components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="flex gap-5 w-screen h-screen p-3">
      <Sidebar />  
      <main className="flex-1 self-stretch flex">{children}</main>
  </div>  
  );
}

import Sidebar from "./components/Sidebar";
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isAuthenticated } = await auth();

  if(!isAuthenticated) {
    return <div className="flex items-center justify-center w-screen h-screen">Logge dich ein, um diese Seite zu sehen</div>
  }
  return (
  <div className="flex gap-5 w-screen h-screen p-3">
      <Sidebar />  
      <main className="flex-1 self-stretch flex">{children}</main>
  </div>  
  );
}

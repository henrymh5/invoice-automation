import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function CurrentUser() {
  const user = await currentUser();
  if (!user) return <div>Du bist nicht eingeloggt :(</div>;
  return <div className="flex gap-3 text-white"><Image className="rounded-full" src={user?.imageUrl} alt={`${user?.fullName}'s Profilbild`} width={20} height={20} />{user?.fullName}</div>;
}

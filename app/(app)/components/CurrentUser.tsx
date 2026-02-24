import { currentUser } from "@clerk/nextjs/server";

export default async function CurrentUser() {
  const user = await currentUser();
  if (!user) return <div>Du bist nicht eingeloggt :(</div>;
  return <div>{user?.firstName}</div>;
}

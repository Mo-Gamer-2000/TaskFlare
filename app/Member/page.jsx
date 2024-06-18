import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
      <h1 className="text-purple-accent">Member</h1>
      <p className="text-purple-accent">{session?.user?.email}</p>
      <p className="text-purple-accent">{session?.user?.role}</p>
    </div>
  );
};

export default Member;

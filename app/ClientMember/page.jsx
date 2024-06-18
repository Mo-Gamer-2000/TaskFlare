"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Member = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });

  return (
    <div>
      <h1 className="text-purple-accent">Client Member</h1>
      <p className="text-purple-accent">{session?.user?.email}</p>
      <p className="text-purple-accent">{session?.user?.role}</p>
    </div>
  );
};

export default Member;

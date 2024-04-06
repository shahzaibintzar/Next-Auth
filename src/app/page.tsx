import React from "react";
import LoginForm from "./(compunents)/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions as any);

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}

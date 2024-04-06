import React from "react";
import RegisterForm from "../(compunents)/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  const session = await getServerSession(authOptions as any);

  if (session) redirect("/dashboard");

  return <RegisterForm />;
}

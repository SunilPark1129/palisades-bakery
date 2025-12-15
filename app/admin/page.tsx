"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function page({}: Props) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default page;

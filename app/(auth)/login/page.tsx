"use client";
import { FormEvent, useState } from "react";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

function page() {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const username = formData.get("username");
      const password = formData.get("password");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw Error(data.error);
      }

      router.push("/admin");
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin} className="flex justify-center p-4 py-8">
        <LoginForm error={error} />
      </form>
    </div>
  );
}

export default page;

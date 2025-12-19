"use client";
import { FormEvent, useState } from "react";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

function page() {
  const [isLoginIncorrect, setIsLoginIncorrect] = useState(null);
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const username = formData.get("username");
      const password = formData.get("password");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Your username and password are not matching");
      }

      router.push("/admin");
    } catch (error: any) {
      setIsLoginIncorrect(error.message);
    }
  }

  return (
    <div className="wrapper p-4 pb-16">
      <form onSubmit={handleLogin} className="flex justify-center p-4 py-8">
        <LoginForm />
      </form>
      {isLoginIncorrect && <span>{isLoginIncorrect}</span>}
    </div>
  );
}

export default page;

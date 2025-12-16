"use client";
import React, { FormEvent } from "react";
import Login from "./Login";

type Props = {};

function page({}: Props) {
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const nickname = formData.get("nickname");
      const password = formData.get("password");

      const user = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, password }),
      });

      const data = await user.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="wrapper p-4 pb-16">
      <form onSubmit={handleLogin} className="flex justify-center p-4 py-8">
        <Login />
      </form>
    </div>
  );
}

export default page;

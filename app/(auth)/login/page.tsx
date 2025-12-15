"use client";
import React, { FormEvent } from "react";

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
    <div>
      <form onSubmit={handleLogin}>
        <input
          name="nickname"
          type="text"
          required
          placeholder="Nickname"
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          autoComplete="off"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default page;

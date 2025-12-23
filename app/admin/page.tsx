"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddForm from "./AddForm";
import { IProduct } from "@/models/Product";

type Props = {};

function page({}: Props) {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function handleAddNew() {
    setIsModalOn(true);
  }

  return (
    <div>
      <button onClick={handleAddNew}>Add New</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {isModalOn && (
          <AddForm setProducts={setProducts} setIsModalOn={setIsModalOn} />
        )}
      </div>
    </div>
  );
}

export default page;

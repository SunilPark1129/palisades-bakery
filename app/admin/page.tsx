"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { IProduct } from "@/models/Product";

type Props = {};
type ProductType = "cake" | "bread" | "cookie" | "pie";
const productTitles = ["cake", "bread", "cookie", "pie"];

function page({}: Props) {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function handleAddNew() {
    setIsModalOn(true);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/categories/` + selectedProduct
        );
        const data = await res.json();
        setProducts(data.data as IProduct[]);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [selectedProduct]);

  return (
    <div>
      <button onClick={handleAddNew}>Add New</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {isModalOn && (
          <AddForm setProducts={setProducts} setIsModalOn={setIsModalOn} />
        )}
      </div>
      <div className="flex gap-4">
        {productTitles.map((item) => (
          <button
            key={item}
            className="p-2 bg-[#e8e8e8]"
            onClick={() => setSelectedProduct(item as ProductType)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {products.map((item) => (
          <div key={item._id}>
            <div>{item.title}</div>
            <button>edit</button>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

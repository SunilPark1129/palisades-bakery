"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { IProduct } from "@/models/Product";
import Trash from "../_components/svg/Trash";
import Edit from "../_components/svg/Edit";
import Alert from "../_components/svg/Alert";

type Props = {};
type ProductType = "cake" | "bread" | "cookie" | "pie";
const productTitles = ["cake", "bread", "cookie", "pie"];

function page({}: Props) {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [itemId, setItemId] = useState<string>("");

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function handleAddNew() {
    setIsModalOn(true);
  }

  function handleDeleteItem(id: string) {
    setIsDeleteModalOpen(true);
    setItemId(id);
  }

  async function handleConfirmDelete(id: string) {
    await fetch("/api/categories", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      credentials: "include",
    });
    setIsDeleteModalOpen(false);
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
    <div className="wrapper">
      <div className="flex flex-col gap-4 p-4">
        <div>
          <button onClick={handleAddNew}>Add New</button>
          <button onClick={handleLogout}>Logout</button>
          <div>
            {isModalOn && (
              <AddForm setProducts={setProducts} setIsModalOn={setIsModalOn} />
            )}
          </div>
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

        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((item) => (
            <div key={item._id} className="flex flex-col">
              <div>{item.title}</div>
              <div>
                <button className="cursor-pointer p-1 rounded-full hover:bg-(--clr-accent)">
                  <Edit />
                </button>
                <button
                  onClick={() => handleDeleteItem(item._id!)}
                  className="cursor-pointer p-1 rounded-full hover:bg-(--clr-accent)"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {isDeleteModalOpen && (
          <div className="fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 bg-gray-100 p-10 rounded-xl">
            <Alert />
            <div className="font-semibold">DELETE [삭제]</div>
            <div className="flex flex-col gap-1 text-center">
              <div>Are you sure you want to delete this item?</div>
              <div>이 항목을 삭제하시겠습니까?</div>
            </div>
            <div className="flex gap-8 mt-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-20 bg-gray-300 p-1 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmDelete(itemId)}
                className="w-20 bg-red-500 text-(--clr-background) p-1 rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;

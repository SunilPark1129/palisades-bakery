"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import AddForm from "./add/AddForm";
import { IProduct } from "@/models/Product";
import Trash from "../_components/svg/Trash";
import Edit from "../_components/svg/Edit";
import Alert from "../_components/svg/Alert";
import Link from "next/link";
import Modal from "../_components/shared/Modal";
import Image from "next/image";

type Props = {};
type ProductType = "cake" | "bread" | "cookie" | "pie";
const productTitles = ["cake", "bread", "cookie", "pie"];

function page({}: Props) {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [displayProducts, setDisplayProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [itemId, setItemId] = useState<string>("");

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function handleDeleteItem(id: string) {
    setIsDeleteModalOpen(true);
    setItemId(id);
  }

  async function handleConfirmDelete(id: string) {
    try {
      const res = await fetch("/api/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });
      setProducts((prev) => prev.filter(({ _id }) => _id !== id));
      setDisplayProducts((prev) => prev.filter(({ _id }) => _id !== id));
      if (!res.ok) {
        throw new Error("error");
      }
    } catch (error: any) {
      console.log(error.message);
    }
    setIsDeleteModalOpen(false);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(`http://localhost:3000/api/categories/`);
        const data = await res.json();
        const resProducts = data.data as IProduct[];
        setProducts(resProducts);
        setDisplayProducts(
          resProducts.filter((item) => item.product === selectedProduct)
        );
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    setDisplayProducts(
      products.filter((item) => item.product === selectedProduct)
    );
  }, [selectedProduct]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.trim() === "") {
      setDisplayProducts(
        products.filter((item) => item.product === selectedProduct)
      );
      return;
    }
    const value = e.target.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${value}.*\\b`, "i");
    setDisplayProducts(
      products.filter(
        (product) =>
          regex.test(product.title) && product.product === selectedProduct
      )
    );
  }

  return (
    <div className="wrapper">
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-center text-xl bg-(--clr-primary) text-[#fff]">
          Admin Page (관리자 페이지)
        </h1>
        <div className="flex gap-2 items-center sm:flex-row flex-col-reverse">
          <label className="flex flex-1 gap-2 w-full items-center text-sm">
            Product:
            <select
              name="category"
              required
              className="w-full max-w-full sm:max-w-[10rem] cursor-pointer px-2 py-1 border-1 border-[#b8b8b8] w-full"
              onChange={(e) =>
                setSelectedProduct(e.target.value as ProductType)
              }
            >
              {productTitles.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <div className="flex w-full gap-2 flex-2">
            <input
              type="text"
              className="px-2 py-1 border-1 border-[#b8b8b8] w-full text-sm"
              placeholder="Search Item"
              autoComplete="off"
              onChange={handleChange}
            />
            <Link
              href={"/admin/add"}
              className="bg-(--clr-primary) text-sm text-center text-(--clr-background) py-1 px-2 rounded cursor-pointer min-w-fit"
            >
              Add New
            </Link>
            <button
              onClick={handleLogout}
              className="bg-(--clr-accent) text-sm py-1 px-2 rounded cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {displayProducts.map((item) => (
            <div key={item._id} className="flex gap-4">
              <Image
                src={"/images/custome-cake.png"}
                alt={item.title}
                width={100}
                height={100}
                loading="lazy"
              />
              <div>
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
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen}>
        <Alert />
        <div className="font-semibold">DELETE [삭제]</div>
        <div className="flex flex-col gap-1 text-center">
          <div>Are you sure you want to delete this item?</div>
          <div>이 항목을 삭제하시겠습니까?</div>
        </div>
        <div className="flex gap-8 mt-2">
          <button
            onClick={() => handleConfirmDelete(itemId)}
            className="w-22 bg-red-500 text-(--clr-background) p-1 rounded cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="w-22 bg-gray-300 p-1 rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default page;

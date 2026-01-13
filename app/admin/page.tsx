"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(true);

  const [itemId, setItemId] = useState<string>("");
  const [fileId, setFileId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function handleDeleteItem(id: string, fileId: string) {
    setIsDeleteModalOpen(true);
    setItemId(id);
    setFileId(fileId);
  }

  async function handleConfirmDelete(id: string) {
    try {
      setErrorMessage("");
      const res = await fetch("/api/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });

      await fetch("/api/imagekit-auth", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileId: fileId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }

      const fetchRes = await fetch("http://localhost:3000/api/categories/", {
        cache: "no-store",
      });
      const data = await fetchRes.json();
      const resProducts = data.data as IProduct[];
      setProducts(resProducts);
      setDisplayProducts(
        resProducts.filter((item) => item.product === selectedProduct)
      );
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
    setIsDeleteModalOpen(false);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setErrorMessage("");
        const res = await fetch(`http://localhost:3000/api/categories/`, {
          cache: "no-store",
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error);
        }
        const data = await res.json();
        const resProducts = data.data as IProduct[];
        setProducts(resProducts);
        setDisplayProducts(
          resProducts.filter((item) => item.product === selectedProduct)
        );
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
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

  async function resetOrderHandler() {
    await fetch("/api/resetorder");
    router.refresh();
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
              className="w-full max-w-full sm:max-w-40 cursor-pointer px-2 py-1 border border-[#b8b8b8]"
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
              className="px-2 py-1 border border-[#b8b8b8] w-full text-sm"
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

        <div className="text-[#f00]">{errorMessage}</div>
        <div>{loading && "Loading..."}</div>

        <div className="grid gap-4 sm:grid-cols-2">
          {displayProducts.map((item) => (
            <div key={item._id} className="flex gap-4">
              <div className="ww-[150px] h-[150px] shrink-0">
                <Image
                  src={
                    item.url.includes(".")
                      ? `${item.url}?tr=n-card_thumb`
                      : "/images/custome-cake.png"
                  }
                  alt={item.title}
                  width={150}
                  height={150}
                  loading="lazy"
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  {item.order}. {item.title}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    className="cursor-pointer rounded-full flex text-sm items-center gap-2 w-fit"
                    href={`/admin/edit/${item._id}`}
                  >
                    <Edit /> EDIT
                  </Link>
                  <button
                    onClick={() => handleDeleteItem(item._id!, item.fileId)}
                    className="cursor-pointer rounded-full flex text-sm items-center gap-2 w-fit"
                  >
                    <Trash /> DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={resetOrderHandler}
            className="p-2 border bg-[#ff0a0a] text-white border-[black] cursor-pointer"
          >
            Reset Order
          </button>
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

"use client";
import { IProduct } from "@/models/Product";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Trash from "../_components/svg/Trash";

type AddFormProperty = {
  setIsModalOn: Dispatch<SetStateAction<boolean>>;
};

// const product = ["cakes", "breads", "cookies", "pies"];
const category = {
  cake: ["Whole Cakes", "Slice Cakes", "Roll Cakes", "Mini Cakes", "Cupcakes"],
  bread: [
    "Daily Breads",
    "Pastries",
    "Donuts",
    "Pound Cakes",
    "Loaf Breads & Rolls",
  ],
  cookie: ["Signature Cookies", "Packaged Cookies", "Madelines & Biscotti"],
  pie: ["Pies", "Tarts"],
};

type ProductType = "cake" | "bread" | "cookie" | "pie";

function AddForm({ setIsModalOn }: AddFormProperty) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [isAddModalOn, setIsAddModalOn] = useState<boolean>(false);
  const [sizeCount, setSizeCount] = useState<number[]>([]);
  const sizeIdRef = useRef(1);

  const [newItem, setNewItem] = useState<any>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const product = formData.get("product");
    const category = formData.get("category");
    const title = formData.get("title");
    const description = formData.get("description");
    const price = formData.getAll("price");
    const size = formData.getAll("size");

    const payload = {
      product,
      category,
      title,
      description,
      price,
      size,
      url: "/images/custome-cake.png",
    };

    setNewItem(payload);
    setIsAddModalOn(true);
  }

  async function handlePost() {
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload: newItem }),
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("error");
      }
    } catch (error: any) {
      console.log(error.message);
    }

    setIsModalOn(false);
    setIsAddModalOn(false);
  }

  function handleCancel(cb: Dispatch<SetStateAction<boolean>>) {
    cb(false);
  }

  function handleProductChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedProduct(e.target.value as ProductType);
  }

  function handleAddSize() {
    const id = sizeIdRef.current;
    setSizeCount((prev) => [...prev, id]);
    sizeIdRef.current++;
  }

  function handleDeleteSize(i: number) {
    setSizeCount((prev) => prev.filter((_, idx) => idx !== i));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col gap-4">
          <label>
            Product:
            <select
              name="product"
              required
              onChange={handleProductChange}
              className="w-fit cursor-pointer ml-1"
            >
              {Object.keys(category).map((key) => (
                <option value={key} key={key}>
                  {key}
                </option>
              ))}
            </select>
          </label>

          <label>
            Category:
            <select
              name="category"
              required
              className="w-fit cursor-pointer ml-1"
            >
              {category[selectedProduct].map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              required
              autoComplete="off"
              className="outline rounded ml-2 pl-1"
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              required
              rows={3}
              className="outline rounded ml-2 pl-1"
            ></textarea>
          </label>

          {sizeCount.length === 0 ? (
            <label>
              Price:
              <input
                type="text"
                name="price"
                required
                className="outline rounded ml-2 pl-1"
              />
            </label>
          ) : (
            <div>
              {sizeCount.map((id, idx) => (
                <div key={id} className="flex items-center gap-4">
                  <label>
                    Size:
                    <input
                      type="text"
                      name="size"
                      required
                      autoComplete="off"
                      className="outline rounded ml-2 pl-1"
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="text"
                      name="price"
                      required
                      autoComplete="off"
                      className="outline rounded ml-2 pl-1"
                    />
                  </label>
                  <button
                    onClick={() => handleDeleteSize(idx)}
                    className="cursor-pointer p-1 rounded-full hover:bg-(--clr-accent)"
                  >
                    <Trash />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={handleAddSize}
              className="bg-gray-200 p-1 w-24 rounded cursor-pointer"
            >
              Add Size
            </button>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-(--clr-primary) text-(--clr-background) w-28 p-2 rounded cursor-pointer"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => handleCancel(setIsModalOn)}
              className="bg-(--clr-accent) w-28 p-2 rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      {isAddModalOn && (
        <div className="fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 bg-gray-100 p-10 rounded-xl">
          <div className="font-semibold">ADD [추가]</div>
          <div className="flex flex-col gap-1 text-center">
            <div>Are you sure you want to add this item?</div>
            <div>이 항목을 추가하시겠습니까?</div>
          </div>
          <div className="flex gap-8 mt-2">
            <button
              onClick={handlePost}
              className="w-22 bg-(--clr-primary) text-(--clr-background)  p-1 rounded cursor-pointer"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => handleCancel(setIsAddModalOn)}
              className="w-22 bg-gray-300 p-1 rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddForm;

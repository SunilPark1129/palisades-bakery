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

type AddFormProperty = {
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
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

function AddForm({ setProducts, setIsModalOn }: AddFormProperty) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [sizeCount, setSizeCount] = useState<number[]>([]);
  const sizeIdRef = useRef(1);

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
  }

  function handleCancel() {
    setIsModalOn(false);
  }

  function handleProductChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedProduct(e.target.value as ProductType);
  }

  function handleAddSize() {
    const id = sizeIdRef.current;
    setSizeCount((prev) => [...prev, id]);
    sizeIdRef.current++;
  }

  function handleDeleteSize() {}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select name="product" onChange={handleProductChange}>
          {Object.keys(category).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
        <select name="category">
          {category[selectedProduct].map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <label>
          Title:
          <input type="text" name="title" autoComplete="off" />
        </label>
        <label>
          Description:
          <textarea name="description" rows={4}></textarea>
        </label>
        <div>
          <button type="button" onClick={handleAddSize}>
            Add Size
          </button>
        </div>
        {sizeCount.length === 0 ? (
          <div>
            <input type="text" name="price" placeholder="price" />
          </div>
        ) : (
          <div>
            {sizeCount.map((id) => (
              <div key={id}>
                <input
                  type="text"
                  name="size"
                  autoComplete="off"
                  placeholder="size"
                />
                <input
                  type="text"
                  name="price"
                  autoComplete="off"
                  placeholder="price"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddForm;

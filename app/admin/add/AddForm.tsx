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
import Trash from "../../_components/svg/Trash";
import { useRouter } from "next/navigation";
import Modal from "@/app/_components/shared/Modal";
import UploadImagekit, {
  UploadImagekitHandle,
  UploadResult,
} from "@/app/_components/imagekit/UploadImagekit";

type AddFormProperty = {};

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

function AddForm() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [isAddModalOn, setIsAddModalOn] = useState<boolean>(false);
  const [sizeCount, setSizeCount] = useState<number[]>([]);
  const sizeIdRef = useRef(1);
  const [title, setTitle] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [newItem, setNewItem] = useState<any>({});

  const imagekitRef = useRef<UploadImagekitHandle>(null);
  const [uploadedImage, setUploadedImage] = useState<UploadResult>(null);

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
    };

    setNewItem(payload);
    setIsAddModalOn(true);
  }

  async function handlePost() {
    try {
      setErrorMessage("");
      const imageUrl = await imagekitRef.current?.uploadImage();
      setUploadedImage(imageUrl as UploadResult);
      const payload = {
        ...newItem,
        url: imageUrl?.url,
        fileId: imageUrl?.fileId,
      };

      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }
      router.push("/admin");
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage(error.message);

      if (uploadedImage?.fileId) {
        await fetch("/api/imagekit-auth", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileId: uploadedImage.fileId,
          }),
        });
      }
    } finally {
      setIsAddModalOn(false);
    }
  }

  function handleBack() {
    router.push("/admin");
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
    <div className="wrapper p-4">
      <h1 className="text-center text-xl bg-(--clr-primary) text-white">
        New Item (추가 할 물건)
      </h1>
      <div className="text-[#f00]">{errorMessage}</div>
      <form onSubmit={handleSubmit} className="max-w-120 m-auto py-8">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Product:
            <select
              name="product"
              required
              onChange={handleProductChange}
              className="cursor-pointer px-2 py-1 border border-[#b8b8b8] w-full"
            >
              {Object.keys(category).map((key) => (
                <option value={key} key={key}>
                  {key}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            Category:
            <select
              name="category"
              required
              className="cursor-pointer px-2 py-1 border border-[#b8b8b8] w-full"
            >
              {category[selectedProduct].map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            Title:
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              required
              autoComplete="off"
              className="px-2 py-1 border border-[#b8b8b8]"
              placeholder="Strawberry Cake"
            />
          </label>

          <label className="flex flex-col">
            Description:
            <textarea
              name="description"
              required
              rows={3}
              className="px-2 py-1 border border-[#b8b8b8]"
              placeholder="Fluffy cake layered with sweet strawberry cream..."
            ></textarea>
          </label>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div>Price:</div>
              <button
                type="button"
                onClick={handleAddSize}
                className="bg-gray-200 px-2 py-1 text-sm rounded-full w-6 h-6 flex justify-center items-center"
              >
                +
              </button>
            </div>

            {sizeCount.length === 0 ? (
              <input
                type="text"
                name="price"
                required
                autoComplete="off"
                className="px-2 py-1 border border-[#b8b8b8] w-full"
                placeholder="4.99"
              />
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
                        className="px-2 py-1 border border-[#b8b8b8]"
                        placeholder="7''"
                      />
                    </label>
                    <label>
                      Price:
                      <input
                        type="text"
                        name="price"
                        required
                        autoComplete="off"
                        className="px-2 py-1 border border-[#b8b8b8]"
                        placeholder="4.99"
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
          </div>

          <UploadImagekit
            ref={imagekitRef}
            keepPreviewImage={false}
            previewImage={null}
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-(--clr-primary) text-(--clr-background) w-full p-2 rounded cursor-pointer text-sm"
            >
              Add
            </button>
            <button
              type="reset"
              onClick={handleBack}
              className="bg-(--clr-accent) w-full p-2 rounded cursor-pointer text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      <Modal isOpen={isAddModalOn} setIsOpen={setIsAddModalOn}>
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
            onClick={() => setIsAddModalOn(false)}
            className="w-22 bg-gray-300 p-1 rounded cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AddForm;

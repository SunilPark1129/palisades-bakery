"use client";
import UploadImagekit, {
  UploadImagekitHandle,
  UploadResult,
} from "@/app/_components/imagekit/UploadImagekit";
import Modal from "@/app/_components/shared/Modal";
import Trash from "@/app/_components/svg/Trash";
import { IProduct } from "@/models/Product";
import { useParams, useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type ProductType = "cake" | "bread" | "cookie" | "pie";

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

function page() {
  const params = useParams();

  if (!params || typeof params.id !== "string") {
    return null; // or 에러 처리
  }

  const id = params.id;

  const router = useRouter();
  const [item, setItem] = useState<IProduct | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("cake");
  const [isAddModalOn, setIsAddModalOn] = useState<boolean>(false);
  const [sizeCount, setSizeCount] = useState<number[]>([]);
  const sizeIdRef = useRef(1);
  const [loading, setLoading] = useState<boolean>(true);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [keepPreviewPrice, setKeepPreviewPrice] = useState<boolean>(true);
  const [keepPreviewImage, setKeepPreviewImage] = useState<boolean>(true);

  const [newItem, setNewItem] = useState<any>({});

  const imagekitRef = useRef<UploadImagekitHandle>(null);
  const [uploadedImage, setUploadedImage] = useState<UploadResult>(null);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        setErrorMessage(null);
        const res = await fetch("http://localhost:3000/api/category/" + id);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error);
        }
        const data = await res.json();

        setItem(data.data);
        setSelectedProduct(data.data.product);
      } catch (error: any) {
        setErrorMessage(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const product = formData.get("product");
    const category = formData.get("category");
    const title = formData.get("title");
    const description = formData.get("description");
    const price = keepPreviewPrice ? item?.price : formData.getAll("price");
    const size = keepPreviewPrice ? item?.size : formData.getAll("size");
    const order = formData.getAll("order");

    const payload = {
      _id: item?._id,
      product,
      category,
      title,
      description,
      price,
      size,
      order: Number(order),
    };

    setNewItem(payload);
    setIsAddModalOn(true);
  }

  async function handlePost() {
    try {
      setErrorMessage(null);
      const imageUrl = await imagekitRef.current?.uploadImage();
      setUploadedImage(imageUrl as UploadResult);
      const payload = {
        ...newItem,
        url: keepPreviewImage ? item?.url : imageUrl?.url,
        fileId: keepPreviewImage ? item?.fileId : imageUrl?.fileId,
      };

      const res = await fetch("/api/categories", {
        method: "PUT",
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

      if (!keepPreviewImage) {
        await fetch("/api/imagekit-auth", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileId: item?.fileId,
          }),
        });
      }
      router.push("/admin");
    } catch (error: any) {
      setErrorMessage(error.message);
      console.log(error.message);
      if (uploadedImage?.fileId) {
        await fetch("/api/imagekit-auth", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileId: uploadedImage.fileId,
          }),
        });
      }
    }

    setIsAddModalOn(false);
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

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (item === null) {
    return <div>Loading...</div>;
  }

  if (loading)
    return (
      <div className="min-h-[30rem] w-full flex justify-center items-center">
        Loading...
      </div>
    );

  return (
    <div className="wrapper p-4">
      <h1 className="text-center text-xl bg-(--clr-primary) text-[#fff]">
        Edit Item (수정 할 물건)
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[30rem] m-auto py-8">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Product:
            <select
              name="product"
              required
              onChange={handleProductChange}
              className="cursor-pointer px-2 py-1 border border-[#b8b8b8] w-full"
              defaultValue={item.product}
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
              defaultValue={item.category}
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
              name="title"
              required
              autoComplete="off"
              className="px-2 py-1 border border-[#b8b8b8]"
              placeholder="Strawberry Cake"
              defaultValue={item.title}
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
              defaultValue={item.description}
            ></textarea>
          </label>

          <label className="flex items-center gap-2">
            Keep the preview price (전에 사용한 가격 사용하기)
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={(e) => setKeepPreviewPrice(e.target.checked)}
            />
          </label>

          <div
            className={`${
              keepPreviewPrice
                ? "border border-[#f11d1d] bg-[#fff]"
                : "border border-[transparent] bg-[#e4e4e4] opacity-75 text-[#595959]"
            }`}
          >
            <div>Past Price:</div>
            {item.size.length === 0 ? (
              <div className="w-full">
                <div>{item.price[0]}</div>
              </div>
            ) : (
              <div>
                {item.size.map((id, idx) => (
                  <div key={id} className="flex items-center gap-4">
                    <div className="w-full">
                      Size:
                      <div>{item.size[idx]}</div>
                    </div>
                    <div className="w-full">
                      Price:
                      <div>{item.price[idx]}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={`flex flex-col gap-2 ${
              !keepPreviewPrice
                ? "bg-[#fff]"
                : "bg-[#d8d8d8] opacity-75 text-[#595959]"
            }`}
          >
            <div className="flex justify-between">
              <div>Price:</div>
              <button
                type="button"
                onClick={handleAddSize}
                className="bg-gray-200 px-2 py-1 text-sm rounded-full w-6 h-6 flex justify-center items-center"
                disabled={keepPreviewPrice}
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
                pattern="^\d+(\.\d{1,2})?$"
                readOnly={keepPreviewPrice}
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
                        readOnly={keepPreviewPrice}
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
                        pattern="^\d+(\.\d{1,2})?$"
                        readOnly={keepPreviewPrice}
                      />
                    </label>
                    <button
                      onClick={() => handleDeleteSize(idx)}
                      className="cursor-pointer p-1 rounded-full"
                      disabled={keepPreviewPrice}
                    >
                      <Trash />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="flex flex-col gap-2">
            Order:
            <input
              type="text"
              name="order"
              required
              autoComplete="off"
              placeholder="0"
              defaultValue={item.order}
              pattern="[0-9]+"
              className="px-2 py-1 border w-full border-[#b8b8b8]"
            />
          </label>

          <label className="flex gap-2 items-center">
            Keep last image (전에 사용한 이미지 사용하기)
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={(e) => setKeepPreviewImage(e.target.checked)}
            />
          </label>
          <UploadImagekit
            keepPreviewImage={keepPreviewImage}
            previewImage={item.url}
            ref={imagekitRef}
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-(--clr-primary) text-(--clr-background) w-full p-2 rounded cursor-pointer text-sm"
            >
              Edit
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
        <div className="font-semibold">EDIT [수정]</div>
        <div className="flex flex-col gap-1 text-center">
          <div>Are you sure you want to edit this item?</div>
          <div>이 항목을 수정하시겠습니까?</div>
        </div>
        <div className="flex gap-8 mt-2">
          <button
            onClick={handlePost}
            className="w-22 bg-(--clr-primary) text-(--clr-background)  p-1 rounded cursor-pointer"
          >
            Edit
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

export default page;

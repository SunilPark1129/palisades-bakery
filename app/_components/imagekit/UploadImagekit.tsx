"use client";

import { upload } from "@imagekit/next";
import Image from "next/image";
import {
  useRef,
  useState,
  ChangeEvent,
  useImperativeHandle,
  forwardRef,
  Activity,
} from "react";

export type UploadImagekitHandle = {
  uploadImage: () => Promise<UploadResult>;
};

export type UploadResult = {
  url: string;
  fileId: string;
} | null;

const UploadImagekit = forwardRef<
  UploadImagekitHandle,
  { keepPreviewImage: boolean; previewImage: string | null }
>(({ keepPreviewImage, previewImage }, ref) => {
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const authenticator = async () => {
    const res = await fetch("/api/imagekit-auth");
    if (!res.ok) throw new Error("auth failed");
    return res.json();
  };

  const uploadImage = async (): Promise<UploadResult> => {
    if (!imageFile) return null;
    const file = imageFile;

    const { signature, expire, token, publicKey } = await authenticator();

    const res = await upload({
      file,
      fileName: file.name,
      folder: "/palisades",
      signature,
      expire,
      token,
      publicKey,
      onProgress: (e) => setProgress((e.loaded / e.total) * 100),
      abortSignal: abortController.signal,
    });

    return { url: res.url, fileId: res.fileId! } as UploadResult; // ⭐ 업로드된 이미지 URL 반환
  };

  useImperativeHandle(ref, () => ({
    uploadImage,
  }));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Activity mode={keepPreviewImage ? "visible" : "hidden"}>
        <div>
          <p>Preview:</p>
          <Image
            src={`${previewImage}?tr=n-card_thumb`}
            alt="Preview"
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded border border-[#f11d1d] object-cover"
            unoptimized
          />
        </div>
      </Activity>
      <Activity mode={keepPreviewImage ? "hidden" : "visible"}>
        {preview && (
          <div>
            <p>Preview:</p>
            <img
              src={preview}
              alt="Preview"
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded border border-[#e2e2e2] object-cover"
            />
          </div>
        )}
      </Activity>

      <label
        className={`w-fit border border-[#aeaeae] p-4 py-1 rounded ${
          keepPreviewImage ? "opacity-50" : "cursor-pointer"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          disabled={keepPreviewImage}
        />
        Upload Image
      </label>

      <div className="flex flex-col gap-2">
        Upload progress:{" "}
        <progress className="w-full" value={progress} max={100}></progress>
      </div>
    </div>
  );
});

export default UploadImagekit;

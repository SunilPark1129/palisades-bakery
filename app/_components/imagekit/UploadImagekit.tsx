"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import {
  useRef,
  useState,
  ChangeEvent,
  useImperativeHandle,
  forwardRef,
} from "react";

export type UploadImagekitHandle = {
  uploadImage: () => Promise<UploadResult>;
};

export type UploadResult = {
  url: string;
  fileId: string;
} | null;

const UploadImagekit = forwardRef<UploadImagekitHandle, { title: string }>(
  ({ title }, ref) => {
    const [progress, setProgress] = useState(0);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortController = new AbortController();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setPreview(URL.createObjectURL(file));
    };

    const authenticator = async () => {
      const res = await fetch("/api/imagekit-auth");
      if (!res.ok) throw new Error("auth failed");
      return res.json();
    };

    // ⭐ 부모에서 호출할 업로드 함수
    const uploadImage = async (): Promise<UploadResult> => {
      const file = fileInputRef.current?.files?.[0];
      if (!file) return null;

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
        {/* 3. 미리보기 영역 */}
        {preview && (
          <div>
            <p>Preview:</p>
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        )}

        {/* 4. 파일 입력에 onChange 추가 */}
        <label className="cursor-pointer w-fit">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          ADD IMAGE
        </label>

        {/* <button
        type="button"
        onClick={handleUpload}
        style={{ width: "fit-content" }}
      >
        Upload file
      </button> */}

        <div>
          Upload progress: <progress value={progress} max={100}></progress>{" "}
          {Math.round(progress)}%
        </div>
      </div>
    );
  }
);

export default UploadImagekit;

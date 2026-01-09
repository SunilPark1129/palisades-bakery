"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState, ChangeEvent } from "react";

function UploadImagekit() {
  const [progress, setProgress] = useState(0);
  // 1. 미리보기 URL을 저장할 상태 추가
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();

  // 2. 파일 선택 시 실행될 함수
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 브라우저 메모리에 임시 URL 생성
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // 컴포넌트 언마운트 시 메모리 누수 방지를 위해 cleanup이 필요할 수 있으나,
      // 여기서는 단순 구현을 위해 생략하거나 업로드 후 처리합니다.
    } else {
      setPreview(null);
    }
  };

  const authenticator = async () => {
    try {
      const response = await fetch("/api/imagekit-auth");
      if (!response.ok) throw new Error("Authentication failed");
      const data = await response.json();
      // Route Handler에서 publicKey를 같이 내려주도록 수정했는지 확인하세요!
      return data;
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput?.files?.[0]) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];
    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      return;
    }

    const { signature, expire, token, publicKey } = authParams;

    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey: publicKey || process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY, // 안전장치
        file,
        folder: "/palisades",
        fileName: file.name,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        abortSignal: abortController.signal,
      });

      console.log("Upload response:", uploadResponse);
      alert("업로드 성공!");
    } catch (error) {
      // 에러 처리 로직...
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* 3. 미리보기 영역 */}
      {preview && (
        <div style={{ marginBottom: "10px" }}>
          <p>미리보기:</p>
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
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />

      <button
        type="button"
        onClick={handleUpload}
        style={{ width: "fit-content" }}
      >
        Upload file
      </button>

      <div>
        Upload progress: <progress value={progress} max={100}></progress>{" "}
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default UploadImagekit;

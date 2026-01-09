// "use client";
// import React from "react";
// // 만약 IKUpload가 계속 에러나면 아래처럼 시도해보세요.
// import { ImageKitProvider, IKUpload } from "@imagekit/next";

// const authenticator = async () => {
//   try {
//     const response = await fetch("/api/auth");
//     if (!response.ok) throw new Error("Authentication failed");
//     return await response.json();
//   } catch (error) {
//     throw new Error(`Authentication request failed: ${error}`);
//   }
// };

// export default function UploadPage() {
//   return (
//     <ImageKitProvider
//       publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY}
//       urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
//       authenticator={authenticator}
//     >
//       <IKUpload
//         fileName="test-upload.png"
//         // onError={(err) => console.log("Error", err)}
//         // onSuccess={(res) => console.log("Success", res.url)}
//       />
//     </ImageKitProvider>
//   );
// }

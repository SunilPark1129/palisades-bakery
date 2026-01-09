"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="wrapper min-h-[50vh] py-20 text-center flex flex-col justify-center items-center">
      <p className="text-[1.4em]">Something went wrong...</p>
      <p>Please, try again later</p>
      <div className="text-red-700 rounded p-2">Error: {error.message}</div>
    </div>
  );
}

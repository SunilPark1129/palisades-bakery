import { bread, cakes, cookies, pies, EntryType } from "@/lib/mockData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const data: EntryType[] = await new Promise((res, rej) =>
    setTimeout(() => {
      if (slug === "breads") res(bread);
      else if (slug === "cakes") res(cakes);
      else if (slug === "cookies") res(cookies);
      else if (slug === "pies") res(pies);
      else rej(new Error("Invalid slug"));
    }, 0)
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data,
  });
}

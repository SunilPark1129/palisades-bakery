// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Cake from "@/models/Cake";
import { bread, cakes, cookies, EntryType, pies } from "@/lib/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string; slug: string }> }
) {
  const { id, slug } = await params;

  const data: EntryType = await new Promise((res, rej) =>
    setTimeout(() => {
      let item;
      if (slug === "breads") item = bread;
      else if (slug === "cakes") item = cakes;
      else if (slug === "cookies") item = cookies;
      else if (slug === "pies") item = pies;
      else rej(new Error("Invalid slug"));

      const result = item!.find((entry) => String(entry.id) === id);
      res(result!);
    }, 0)
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data: data,
  });

  // mongoDB
  // try {
  //   await connectDB();
  //   const cake = await Cake.findById(params.id);

  //   if (!cake) {
  //     return NextResponse.json(
  //       { success: false, error: "cannot find page" },
  //       { status: 404 }
  //     );
  //   }

  //   return NextResponse.json({ success: true, data: cake });
  // } catch (error) {
  //   return NextResponse.json(
  //     { success: false, error: "view request failed" },
  //     { status: 500 }
  //   );
  // }
}

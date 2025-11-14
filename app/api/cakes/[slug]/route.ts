// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Cake from "@/models/Cake";
import { cakes, CakeType } from "@/lib/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  console.log(123123, slug);

  const data: CakeType = await new Promise((res, rej) =>
    setTimeout(() => {
      const item = cakes.find(
        (entry) => String(entry.title.toLowerCase()) === slug.toLowerCase()
      );
      res(item!);
    }, 500)
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

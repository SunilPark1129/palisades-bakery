import { cakes, cookies, EntryType } from "@/lib/mockData";
// import connectDB from "@/lib/mongodb";
import Cake from "@/models/Cake";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await new Promise<EntryType[]>((res, rej) =>
    setTimeout(() => res(cookies), 0)
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data: data,
  });

  //   // mongoDB
  // try {
  //   await connectDB();
  //   const cakes = await Cake.find({}).sort({ createdAt: -1 });

  //   return NextResponse.json({ success: true, data: cakes });
  // } catch (error: any) {
  //   return NextResponse.json({
  //     success: false,
  //     message: "view request failed",
  //     error: error.message,
  //     status: 500,
  //   });
  // }
}

// export async function POST(request: Request) {
//   try {
//     await connectDB();
//     const body = await request.json();

//     const cake = await Cake.create(body);

//     return NextResponse.json({ success: true, data: cake }, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }

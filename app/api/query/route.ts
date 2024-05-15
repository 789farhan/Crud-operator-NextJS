import { NextResponse } from "next/server";

export const GET = (req: any) => {
  //   const data = new URL(req.url).searchParams.get("id");
  const data = new URL(req.url).searchParams.get("num");
  return NextResponse.json({ message: "", id: data });
};

// http://localhost:3000/api/query?id=%27Blinders%27

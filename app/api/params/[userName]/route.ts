import { NextResponse } from "next/server";

export const GET = (req: any, route: any) => {
  return NextResponse.json(route.params.userName);
};

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json("GET Request ");
};
export const POST = () => {
  return NextResponse.json("Post Request");
};
export const PUT = () => {
  return NextResponse.json("Put  Request");
};
export const DELETE = () => {
  return NextResponse.json("Delete  Request");
};

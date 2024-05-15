import { NextResponse } from "next/server";

// const array: number[] = [1, 2, 3, 4, 6];

// export const GET = () => {
//   return NextResponse.json(array);
// };

// export const POST = async (req: any) => {
//   array.push(await req.json());
//   return NextResponse.json({ message: "Post successfull" });
// };

// export const DELETE = (req: any) => {
//   const data = new URL(req.url).searchParams.get("id");

//   let object: any = array.find((obj: any) => obj == data);

//   array.splice(array.indexOf(object), 1);
//   return NextResponse.json({ message: array });
// };

// export const PUT = async (req: any) => {
//   const data1: any = new URL(req.url).searchParams.get("id");
//   const data2: any = new URL(req.url).searchParams.get("newdata");
//   const num:number=+data2;
//   console.log(data1, num);
//   const object: any = array.find((obj) => obj == data1);
//   array.splice(array.indexOf(object), 1, num);
//   console.log(array);
//   return NextResponse.json({ updatedData: array });
// };

// use query for PUT method

const array = [1,2,3,4,5,6];
export const GET = async () => {
  return NextResponse.json(array);
};

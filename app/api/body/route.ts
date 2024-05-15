import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({ message: body });
};


// for send data from body (client to sever POST request is used for this method &) 
// function must be async and await is used to get response from  the req in json() form 


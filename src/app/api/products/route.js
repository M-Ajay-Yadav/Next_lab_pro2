import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// GET REQUEST

export async function GET(req) {
  // console.log(req);

  // Headers
  // const requestHeaders = new Headers(req.headers);
  // console.log(requestHeaders);

  // URL Query Params
  const { searchParams } = new URL(req.url);
  // // const searchParams = req.nextUrl.searchParams;
  // console.log(searchParams);
  // console.log(searchParams.get("search"));

  //cookies
  const cook1 = req.cookies;
  console.log("cookie1:", cook1);
  const cook2 = cookies();
  console.log("cookie2:", cook2);

  return NextResponse.json({ msg: "Hello Next js API" });
}

// POST REQUEST

export async function POST(req) {
  // console.log(req);
  // Request Body
  // const res = await req.json();
  // console.log("ResJSON:", res);

  // FormData
  const formData = await req.formData();
  console.log("Form Data: ", formData);
  console.log("Form Data: ", formData.get("name"));
  console.log("Form Data: ", formData.get("title"));
  console.log("Form Data: ", formData.get("body"));

  return NextResponse.json({ msg: "Post Successfull" }, { status: 201 });
}

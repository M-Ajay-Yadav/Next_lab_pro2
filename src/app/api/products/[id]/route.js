import { NextResponse } from "next/server";

// USING CONTEXT
export const GET = async (req, context) => {
  //   console.log("Req:", req);
  console.log("Context: ", context);
  console.log("Context.params: ", context.params);
  console.log("Context.params.id: ", context.params.id);
  return NextResponse.json({ msg: "successfull" }, { status: 200 });
};

// ------------    OR --------------------
// USING PARAMS
// export const GET = async (req, { params }) => {
//   //   console.log("Req:", req);
//   console.log("params: ", params);
//   console.log("params.id: ", params.id);
//   return NextResponse.json({ msg: "successfull" }, { status: 200 });
// };

import { NextResponse } from "next/server";

export async function POST
(req: Request) {
  try {
    
    const body = await req.json();
    const { name, email, cardNumber, expiry, cvc, courseId } = body;

    
    if (!name || !email || !cardNumber || !expiry || !cvc || !courseId) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }
    await new Promise((res) => setTimeout(res, 1500));

    
    return NextResponse.json({
      success: true,
      message: "payment successful",
      courseId,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, inquiryType, message } = body;

  if (!fullName || !email || !inquiryType || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 },
    );
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully",
  });
}

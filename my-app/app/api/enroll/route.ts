// app/api/enroll/route.ts
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { string } from "zod";

export async function POST(req: Request) {
  try {
    const { courseId } = await req.json();
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const existingPurchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (existingPurchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    const purchase = await db.purchase.create({
      data: {
         userId,
          courseId,
        },
    });

    return NextResponse.json({ success: true, purchase });
  } catch (error) {
    console.error("[enroll]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function DELETE (
    req: Request,
    context: { params: { courseId: string, attachmentId: string } }
 ) {
    try {
        const {courseId,attachmentId} = context.params;
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorised", { status: 401 });
        } 

        const courseOwner = await db.course.findUnique({
            where: {
                id: courseId,
                userId: userId
            }
        });

        if(!courseOwner) {
            return new NextResponse("Unauthorised", { status: 401 });
        }


        const attachment = await db.attachment.delete({
            where: {
                courseId: courseId,
                id: attachmentId
            }

        });

         return NextResponse.json(attachment);
    }catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
 }
    

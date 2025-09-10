
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    context: { params: { courseId: string; chapterId: string } }
) {
    try {
        const {courseId, chapterId} = context.params;
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: courseId,
                userId
            }
        });

        if (!ownCourse) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

             const UnpublishedChapter = await db.chapter.update({
            where: {
                id: chapterId,
                courseId: courseId
            },
            data: {
                isPublished: false,
            }
        });

        const publishedChaptersInCourse = await db.chapter.findMany({
            where: {
                courseId: courseId,
                isPublished: true,
            }
        });

        if(!publishedChaptersInCourse.length) {
            await db.course.update({
                where: {
                    id: courseId,
                },
                data: {
                    isPublished: false,
                }
            });
        }

      return NextResponse.json(UnpublishedChapter);
    }catch (error){
        console.log("[CHAPTER_UNPUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
    

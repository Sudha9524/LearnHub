import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getProgress } from "@/actions/get-progress";

const CourseLayout =  async({
    Children,
    params
 }: {
        Children: React.ReactNode;
        params: { courseId: string};
    } ) => {
        const { userId } = await auth();
 
        if (!userId) {
            return redirect("/")
        }
        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
            },
            include: {
                chapters: {
                    where: {
                        isPublished: true,
                    },

                    include: {
                        userProgress: {
                            where: {
                                userId,
                            }
                        }
                    },
                    orderBy: {
                        position: "asc"
                    }
                },
            },
        });

        if (!course) {
            return redirect("/");
        }

        const ProgressCount = await getProgress(userId, course.id);

        return (
            <div className="h-full">
                <div className="hidden md:flex h-full w-80 ">

                </div>
               <main className="md:pl-80 h-full  w-80 flex-col fixed inset-y-0 z-50">
                
            </main>
            </div>
        )
    }
export default CourseLayout;
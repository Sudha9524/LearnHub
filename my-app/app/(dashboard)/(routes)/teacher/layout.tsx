import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TeacherLayout = async ({ Children }: { 
  Children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!isTeacher(userId)) {
    return redirect("/sign-in");
  }

  return <>{Children}</>;
};

export default TeacherLayout;
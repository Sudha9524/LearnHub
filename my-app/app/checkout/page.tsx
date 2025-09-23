// app/checkout/page.tsx
import { db } from "@/lib/db";
import CheckoutClient from "./checkoutclient";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { courseId?: string; price?: string };
}) {
  const courseId = searchParams.courseId;
  const price = searchParams.price;

  let course = null;
  if (courseId) {
    course = await db.course.findUnique({
      where: { id: courseId },
    });
  }

  return (
    <CheckoutClient
      courseId={courseId}
      price={price}
      title={course?.title ?? "Unknown Course"}
    />
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { useRouter } from "next/navigation";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/checkout?courseId=${courseId}&price=${price}`);
  };

  return (
    <Button 
      size="sm"
      className="w-full md:w-auto"
      onClick={handleClick}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

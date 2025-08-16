import { Button } from "@/components/ui/Button"
import Link from "next/link";

const coursesPage = () => {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
            <Button>
                New Course
            </Button>
            </Link>
        </div>
    );
}

export default coursesPage;
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-1items-center justify-center bg-white p-4">
      <div className="bg-fuchsia-150 items-center justify-center">
        <header className="flex justify-between items-center px-4 bg-blue-100">
          <div className="font-bold px-6 py-8 rounded relative -top-6">
            <Image
            src="/lms.png"
            alt="public"
            width={100}
            height={100}
            />
          </div>
          <div className="flex gap-8 font-medium relative -top-10 text-gray-600">
            HOME
            <Link href={'/pages/about-us'}>ABOUT US</Link>
            <Link href={'/pages/courses'}>COURSES</Link>
            <Link href={'/pages/contact-us'}>CONTACT-US</Link>
          </div>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
          <div>
            <h1 className="text-3xl font-bold relative -top-3 text-teal-500 mb-4">
              WELCOME TO LEARNHUB!
            </h1>
            <p className="text-gray-600 font-sans mb-6">
              Empower learners with interactive tools, progress tracking, and accessible resources anytime, anywhere.
            </p>
            <button className="bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600 transition">
              GET STARTED
            </button>
          </div>
          <div className="flex justify-center-safe relative -top-6">
            <Image
              src="/lms1.png"
              alt="public"
              width={250}
              height={250}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

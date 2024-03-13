import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center ">
      <Image
        src="/assets/images/error.png"
        width={400}
        height={400}
        alt="error"
      />

      <Link className="bg-primary p-2 rounded-lg" href="/">
        Return Home
      </Link>
    </div>
  );
}

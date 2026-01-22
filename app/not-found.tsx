import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-8 p-4 my-16">
      <Image
        src="/images/notfound.avif"
        alt="Not Found"
        width={500}
        height={500}
        className="object-cover w-60 aspect-square rounded-full"
      ></Image>
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl">Uh Oh...Page Not Found</h2>
        <span>
          <Link href={"/"} className="text-[#0825e4]">
            Click here to go to Home Page
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NotFound;

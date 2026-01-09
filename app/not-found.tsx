import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-8 p-4 my-16">
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1732333561323-6c9dbe677219?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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

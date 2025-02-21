'use client'

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-[#121212] text-[#af2323] flex flex-col items-center justify-center">
      <p className="text-primaryWhite text-2xl">
        Can't find task you searching for
      </p>
      <h1 className="text-5xl mt-5">404</h1>
      <p className="text-primaryWhite mt-5 cursor-pointer" onClick={() => router.push("/")}>
        Back to previous page
      </p>
    </div>
  );
};

export default NotFound;

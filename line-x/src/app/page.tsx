"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() { 

  const router = useRouter();

  const navigateToDashBoard = () => {
    router.push("/Dashboard")
  }

  return (
    <div className="flex flex-col justify-center mt-24 items-center ">
      <h1 className="text-4xl text-center font-bold tracking-tight">Line X - Version 1 </h1>
        <div className="w-40 mt-9">
          <Button variant="outline" onClick={navigateToDashBoard}>Go to DashBoard</Button>
        </div>
    </div>
  );
}

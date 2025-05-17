import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center mt-24">
    <h1 className="text-4xl font-bold tracking-tight">Hello world</h1>
     <Button variant="outline">Hello World</Button>
    </div>
  );
}

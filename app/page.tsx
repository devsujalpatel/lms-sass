import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full mx-20 h-full">
      <h1 className="text-4xl underline">Welcome to sass app</h1>
      <Button variant={"destructive"}>Let's get started</Button>
    </div>
  );
}

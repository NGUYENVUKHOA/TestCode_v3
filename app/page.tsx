import PhotoEditor from "@/src/components/PhotoEditor";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <main className="min-h-screen bg-black">
        <PhotoEditor />
      </main>
    </TooltipProvider>
  );
}

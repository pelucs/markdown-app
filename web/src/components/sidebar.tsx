import { Button } from "./ui/button";
import { FilePlus, FileSearch, FolderOpen, Star } from "lucide-react";

export function Sidebar() {
  return(
    <div className="w-12 h-screen py-3 flex flex-col items-center gap-2 border-r border-neutral-800">
      <Button 
        size={"icon"} 
        variant={"ghost"}
        className="size-7"
      >
        <FilePlus className="size-4 text-muted-foreground"/>
      </Button>

      <Button 
        size={"icon"} 
        variant={"ghost"}
        className="size-7"
      >
        <FileSearch className="size-4 text-muted-foreground"/>
      </Button>

      <Button 
        size={"icon"} 
        variant={"ghost"}
        className="size-7"
      >
        <FolderOpen className="size-4 text-muted-foreground"/>
      </Button>

      <Button 
        size={"icon"} 
        variant={"ghost"}
        className="size-7"
      >
        <Star className="size-4 text-muted-foreground"/>
      </Button>
    </div>
  );
}
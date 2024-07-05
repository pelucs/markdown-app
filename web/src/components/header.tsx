import { Menu } from "./menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeaderProps {
  name: string;
  setName: (newName: string) => void;
}

export function Header({ name, setName }: HeaderProps) {
  return(
    <div className="w-full h-10 px-3 flex items-center justify-between gap-10 border-b border-neutral-800">
      <div className="flex items-center">
        <Button 
          size={"icon"} 
          variant={"ghost"}
          className="size-6"
        >
          <ArrowLeft className="size-4 text-muted-foreground"/>
        </Button>

        <Button 
          size={"icon"} 
          variant={"ghost"}
          className="size-6"
        >
          <ArrowRight className="size-4 text-muted-foreground"/>
        </Button>
      </div>

      <div className="flex-1">
        <Input
          defaultValue={name}
          onChange={e => setName(e.target.value)}
          placeholder="Insira o nome do arquivo"
          className="w-full max-w-3xl h-6 text-center text-sm border-none outline-none"
        />
      </div>

      <Menu/>
    </div>
  );
}
import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Input } from "./components/ui/input";

export default function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
    
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const [name, setName] = useState<string>("Novo arquivo");

  return (
    <div className="w-full h-screen flex items-start antialiased text-foreground/90">
      <Sidebar/>
      
      <div className="flex-1">
        <Header name={name} setName={setName}/>

        <div className="p-10">
          <Input 
            defaultValue={name}
            placeholder=""
            onChange={e => setName(e.target.value)}
            className="text-2xl font-bold border-none outline-none outline-transparent"
          />

        </div>
      </div>
    </div>
  );
}
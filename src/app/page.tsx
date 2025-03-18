import { Button } from "@/components/ui/button";
import {IoMdArrowForward } from "react-icons/io";
import Feature from "@/components/Feature";
import UserCodeEditor from "@/components/UserCodeEditor";
import { SavedSnippets } from "@/components/SavedSnippets";


export default function Home() {

  return (
    <main className="min-h-screen mt-30 flex flex-col items-center   text-foreground">

      <h1 className="lg:text-7xl dark:text-light  sm:text-6xl text-5xl font-semibold text-center  leading-tight">
        Manage Your <span className="text-primary">Code</span> ,  Effortlessly.
      </h1>


      <p className="mt-4 md:text-lg dark:text-light/50  text-foreground/60 text-center max-w-2xl">
        Save, organize, and access your code snippets anytime, anywhere.
        Say goodbye to lost snippets and messy files—your personal **Code Vault** awaits!
      </p>


      <div className="mt-6 flex gap-4">
        <Button size="lg" className="rounded-lg" >
          Get Started
          <IoMdArrowForward />
        </Button>

        <Button
          size="lg" variant="soft" className="rounded-lg " >
          Learn More
        </Button>

      </div>
      <Feature />
    
     <UserCodeEditor/>
     <SavedSnippets/>
    </main>

  );
}
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="min-h-screen mt-30 flex flex-col items-center   text-foreground">
    {/* Heading */}
    <h1 className="lg:text-7xl dark:text-light  sm:text-6xl text-5xl font-semibold text-center  leading-tight">
      Manage Your <span className="text-primary">Code</span> ,  Effortlessly.
    </h1>
  
    {/* Subheading */}
    <p className="mt-4 md:text-lg text-zinc-500 dark:text-zinc-400 text-center max-w-2xl">
      Save, organize, and access your code snippets anytime, anywhere.  
      Say goodbye to lost snippets and messy files—your personal **Code Vault** awaits!  
    </p>
  
    {/* CTA Buttons */}
    <div className="mt-6 flex gap-4">
      <Button size="lg" >
        🚀 Get Started
      </Button>
      <Button
        variant="outline" size="lg">
        📖 Learn More
      </Button>
    </div>
  
    {/* Additional Selling Points */}
    {/* <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-4xl text-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl text-primary">⚡</span>
        <h3 className="font-semibold text-xl mt-2">Fast & Secure</h3>
        <p className="text-zinc-600 max-w-sm">
          Lightning-fast access to your snippets with **encrypted storage**.
        </p>
      </div>
  
      <div className="flex flex-col items-center">
        <span className="text-4xl text-primary">📂</span>
        <h3 className="font-semibold text-xl mt-2">Organized Workflow</h3>
        <p className="text-zinc-600 max-w-sm">
          Create **folders & tags** to keep your code structured and searchable.
        </p>
      </div>
  
      <div className="flex flex-col items-center">
        <span className="text-4xl text-primary">🌍</span>
        <h3 className="font-semibold text-xl mt-2">Access Anywhere</h3>
        <p className="text-zinc-600 max-w-sm">
          Your snippets sync across all devices—**desktop, mobile & cloud**.
        </p>
      </div>
    </div> */}
  </main>
  
  );
}
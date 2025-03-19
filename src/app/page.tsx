/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import Feature from "@/components/Feature";
import { Card, CardContent } from "@/components/ui/card";
import { MdCode, MdSearch, MdShare } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto text-center mb-24">
        <Badge variant="outline" className="mb-4 px-4 py-1">
          Beta Access Now Available
        </Badge>
        
        <h1 className="lg:text-7xl sm:text-6xl text-5xl font-semibold text-center leading-tight">
          Manage Your <span className="text-primary">Code</span>, Effortlessly.
        </h1>
        
        <p className="mt-6 md:text-lg text-foreground/60 text-center max-w-2xl mx-auto">
          Save, organize, and access your code snippets anytime, anywhere.
          Say goodbye to lost snippets and messy files—your personal <span className="font-medium">Code Vault</span> awaits!
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="rounded-lg font-medium">
            Get Started
            <IoMdArrowForward className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-lg font-medium">
            Learn More
          </Button>
        </div>
        
        {/* Preview Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 rounded-xl h-16 -bottom-1"></div>
          <div className="border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="bg-muted/50 flex items-center px-4 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-background/80 rounded-md px-4 py-1 mx-auto max-w-md text-sm text-foreground/70">
                code-vault.app/dashboard
              </div>
            </div>
            <div className="bg-background p-4 h-64 flex items-center justify-center">
              <p className="text-foreground/70 text-lg">Application Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Everything You Need for <span className="text-primary">Code Management</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MdCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Syntax Highlighting</h3>
              <p className="text-foreground/70">
                Automatic language detection and beautiful syntax highlighting for over 100 programming languages.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MdSearch className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-medium mb-2">Powerful Search</h3>
              <p className="text-foreground/70">
                Find any snippet instantly with our lightning-fast search across titles, tags, and code content.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MdShare className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-medium mb-2">Easy Sharing</h3>
              <p className="text-foreground/70">
                Share snippets with teammates or keep them private. You control who sees what.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Component */}
      <Feature />
      
      {/* Testimonials */}
      <section className="w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Loved by <span className="text-primary">Developers</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <p className="italic text-foreground/70 mb-4">
                &quot;This tool has completely transformed how I manage my code snippets. No more digging through files or searching through chat logs!&ldquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  JS
                </div>
                <div className="ml-3">
                  <p className="font-medium">Jamie Smith</p>
                  <p className="text-sm text-foreground/70">Senior Developer @ TechCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <p className="italic text-foreground/70 mb-4">
                "I use this daily. Being able to organize and access my snippets from anywhere has been a game-changer for my workflow."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  AR
                </div>
                <div className="ml-3">
                  <p className="font-medium">Alex Rivera</p>
                  <p className="text-sm text-foreground/70">Freelance Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto mb-16">
        <Card className="bg-primary/5 border border-primary/20">
          <CardContent className="py-12 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to <span className="text-primary">Organize</span> Your Code?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Join thousands of developers who have streamlined their workflow with our snippet management system.
            </p>
            <Button size="lg" className="rounded-lg font-medium">
              Start For Free
              <IoMdArrowForward className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>
      
      {/* Footer */}
    <Footer/>
    </main>
  );
}
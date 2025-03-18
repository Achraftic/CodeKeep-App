const steps = [
    { step: "1", title: "Create Snippets", description: "Save your favorite code snippets securely." },
    { step: "2", title: "Organize with Tags", description: "Easily categorize and find snippets with tags & folders." },
    { step: "3", title: "Access Anywhere", description: "Sync across devices for seamless workflow." },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="my-20 text-center">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((item) => (
            <div key={item.step} className="bg-muted/50 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-foreground/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
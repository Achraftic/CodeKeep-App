"use client"
const snippets = [
    { title: "React useState Hook", code: "const [state, setState] = useState(0);" },
    { title: "Next.js API Route", code: "export default function handler(req, res) { res.status(200).json({ message: 'Hello' }) }" },
    { title: "Tailwind Button", code: "<button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Click Me</button>" },
  ];
  import { CodeBlock, dracula } from 'react-code-blocks';

  export default function SnippetShowcase() {
    return (
      <section className="my-20 text-center">
        <h2 className="text-3xl font-bold text-primary">Popular Snippets</h2>
        <div className="mt-8 grid grid-cols-1 ">

      
          {snippets.map((snippet, index) => (
              <CodeBlock
              key={index}
              text={snippet.code}
              showLineNumbers={false}
              theme={dracula}
                language="javascript"
            

            />
          ))}
        </div>
      </section>
    );
  }
  
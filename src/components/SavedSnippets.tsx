'use client'
import { Check } from "lucide-react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { GoCopy } from "react-icons/go";




type snippetType = {
    id: number;
    title: string;
    language: string;
    code: string;
};

const SnippetCard = ({ snippet }: { snippet: snippetType }) => {
    const [copy, setCopy] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(snippet.code);
       
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1000);

    };

    return (
        <div className="p-4 border rounded-lg bg-muted shadow-md ">
            <h3 className="text-xl font-semibold text-primary">{snippet.title}</h3>
            <p className="text-sm text-gray-500">{snippet.language}</p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-5 relative  rounded-md text-sm mt-2 overflow-auto">
                <code>{snippet.code}</code>

                {copy ? <Check size={16} className=" text-zinc-500 hover:text-zinc-800 transition-colors  cursor-pointer absolute right-3 top-2" /> : <GoCopy onClick={handleCopy} size={16} className=" text-zinc-500 hover:text-zinc-800 transition-colors  cursor-pointer absolute right-3 top-2" />}

            </pre>

            <button
                onClick={handleCopy}
                className="mt-2 flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm"
            >

            </button>
        </div>
    );
};

const SavedSnippets = () => {
    const savedSnippets = [
        {
            id: 1,
            title: "React Fetch API",
            language: "JavaScript",
            code: `fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => console.log(data));`,
        },
        {
            id: 2,
            title: "Basic Python Function",
            language: "Python",
            code: `def greet(name): 
        return f"Hello, {name}!"`,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Your Saved Snippets</h2>
            <div className="grid grid-cols-2  gap-6">
                {savedSnippets.map((snippet) => (
                    <SnippetCard key={snippet.id} snippet={snippet} />
                ))}
            </div>
        </div>
    );
};


export { SavedSnippets, SnippetCard };

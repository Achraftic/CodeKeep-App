'use client'
import { Check, Search, User } from "lucide-react";
import { useState } from "react";
import { CodeBlock, paraisoLight } from "react-code-blocks";
import { GoCopy } from "react-icons/go";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

type SnippetType = {
    id: number;
    title: string;
    language: string;
    code: string;
    author?: string;
    createdAt?: string;
};

const SnippetCard = ({ snippet }: { snippet: SnippetType }) => {
    const [copy, setCopy] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet.code);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1000);
    };

    return (
        <div
            className="dark:bg-muted-foreground/20 border-primary/30 hover:border-primary transition-colors h-min border rounded-lg shadow-xs"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-4 border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-primary">{snippet.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-foreground border-primary border text-xs px-2 py-1 rounded-full">
                            {snippet.language}
                        </span>
                        {snippet.createdAt && (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                {snippet.createdAt}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                        <User size={14} />
                        <span>{snippet.author || "John Doe"}</span>
                    </div>
                </div>
            </div>

            <div className="relative rounded-md overflow-hidden">
                {/* Wrap the CodeBlock in a div with specific height constraints */}
                <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                    <div className="h-auto">
                        <CodeBlock
                            customStyle={{
                                padding: "16px",
                                borderRadius: "0px",
                                fontSize: "14px",
                                height: "auto",
                                minHeight: "fit-content"
                            }}
                            text={snippet.code}
                            language={snippet.language.toLowerCase()}
                            theme={paraisoLight}
                            showLineNumbers={false}
                            
                        />
                    </div>
                </div>

                <button
                    onClick={handleCopy}
                    className={`absolute right-3 top-3 p-1.5 cursor-pointer rounded-md bg-muted-foreground shadow-xs border border-foreground/10 transition-all duration-200 ${
                        isHovered || copy ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-label="Copy code"
                >
                    {copy ?
                        <Check size={14} className="text-green-500" /> :
                        <GoCopy size={14} className="text-zinc-500 dark:text-zinc-300 dark:hover:text-zinc-50 hover:text-zinc-700 " />
                    }
                </button>
            </div>
        </div>
    );
};

const SavedSnippets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterLanguage, setFilterLanguage] = useState("");

    const savedSnippets = [
        {
            id: 1,
            title: "React Fetch API",
            language: "JavaScript",
            code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`,
            author: "John Doe",
            createdAt: "3 days ago"
        },
        {
            id: 2,
            title: "Basic Python Function",
            language: "Python",
            code: `def greet(name):
    return f"Hello, {name}!"`,
            author: "Jane Smith",
            createdAt: "1 week ago"
        },
        {
            id: 3,
            title: "CSS Flexbox Layout",
            language: "CSS",
            code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}`,
            author: "John Doe",
            createdAt: "2 weeks ago"
        },
        {
            id: 4,
            title: "Express Route Handler",
            language: "JavaScript",
            code: `app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});`,
            author: "Alex Johnson",
            createdAt: "1 month ago"
        },
    ];

    const filteredSnippets = savedSnippets.filter(snippet => {
        const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            snippet.code.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLanguage = filterLanguage === "" || snippet.language === filterLanguage;
        return matchesSearch && matchesLanguage;
    });

    const languages = [...new Set(savedSnippets.map(snippet => snippet.language))];

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8">
                <h2 className="text-3xl font-semibold my-6">Your Saved Snippets</h2>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <div className="relative w-full md:w-64">
                        <Search size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                        <Input
                            type="text"
                            placeholder="Search snippets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-8"
                        />
                    </div>

                    <div className="flex gap-2 items-center w-full md:w-auto">
                        <span className="text-sm text-zinc-500">Filter:</span>
                        <select
                            value={filterLanguage}
                            onChange={(e) => setFilterLanguage(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                            <option value="">All Languages</option>
                            {languages.map(lang => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </select>

                        <Button asChild>
                            <Link href="/new-snippet">
                            
                            Add New Snippet
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {filteredSnippets.length === 0 ? (
                <div className="text-center py-12 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <p className="text-zinc-500 dark:text-zinc-400">No snippets found matching your criteria</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSnippets.map((snippet) => (
                        <SnippetCard key={snippet.id} snippet={snippet} />
                    ))}
                </div>
            )}

            <div className="mt-8 text-center text-sm text-zinc-500">
                Showing {filteredSnippets.length} of {savedSnippets.length} snippets
            </div>
        </div>
    );
};

export { SavedSnippets, SnippetCard };
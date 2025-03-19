import { useState } from "react";
import { SnippetType } from "@/lib/types";
import { Check, User } from "lucide-react";
import { CodeBlock, paraisoLight } from "react-code-blocks";
import { GoCopy } from "react-icons/go";
export const SnippetCard = ({ snippet }: { snippet: SnippetType }) => {
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
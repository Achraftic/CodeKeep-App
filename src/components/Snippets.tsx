'use client'
import { useState } from "react";
import { savedSnippets } from "@/lib/dummy_data";
import { SnippetCard } from "./SnippetCard";
import SnippetToolbar from "./SnippetToolbar";




const Snippets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterLanguage, setFilterLanguage] = useState("");

 

    const filteredSnippets = savedSnippets.filter(snippet => {
        const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            snippet.code.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLanguage = filterLanguage === "" || snippet.language === filterLanguage;
        return matchesSearch && matchesLanguage;
    });

    const languages = [...new Set(savedSnippets.map(snippet => snippet.language))];

    return (
        <div className=" py-8 ">
            <div className="mb-8">
                <h2 className="text-3xl font-semibold my-6">Your Saved Snippets</h2>
                <SnippetToolbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterLanguage={filterLanguage} setFilterLanguage={setFilterLanguage} languages={languages} />
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

export default Snippets;
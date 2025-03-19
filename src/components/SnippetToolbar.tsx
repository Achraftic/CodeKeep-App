import React from 'react';
import { Search } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";


type SnippetToolbarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterLanguage: string;
    setFilterLanguage: (language: string) => void;
    languages: string[];
}
const SnippetToolbar = ({ searchQuery, setSearchQuery, filterLanguage, setFilterLanguage, languages }: SnippetToolbarProps) => {
    return (
        <div>
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
    );
}

export default SnippetToolbar;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { css } from "@codemirror/lang-css";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const languageExtensions: any = {
  javascript: javascript(),
  python: python(),
  css: css(),
};

export default function UserCodeEditor() {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");

  const handleSave = () => {
    localStorage.setItem("savedCode", JSON.stringify({ code, language }));
    
    alert("Code saved successfully!");
  };

  const {theme} = useTheme();
  return (
    <section className="w-full max-w-3xl mx-auto mt-10 p-6 ">
      <h2 className="text-2xl font-semibold  mb-4">Code Editor</h2>

      {/* Language Selector */}
      <div className="mb-3">
        <label className=" mr-2">Language:</label>
        <select
          className="p-2 rounded bg-gray-800 text-white"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="css">CSS</option>
        </select>
      </div>

      {/* Code Editor */}
      <CodeMirror
        value={code}
        height="300px"
        extensions={[languageExtensions[language]]}
        theme={theme ?? "dark"}
     
        onChange={(value) => setCode(value)}
      />

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <Button className="bg-primary px-6 py-2" onClick={handleSave}>
          Save Code
        </Button>
      </div>
    </section>
  );
}

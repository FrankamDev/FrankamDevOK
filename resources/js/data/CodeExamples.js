export const codeExamples = {
  "App.tsx": `import { useState } from "react";
import { Frankamdev } from "@Frankamdev/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await Frankamdev.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}`,
  "Acceuil.tsx": `import { useState, useEffect } from "react";
import { Frankamdev } from "@frankamdev/fullstack";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAISuggestion = async () => {
    const suggestion = await Frankamdev.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isTyping ? "AI-Powered Development" : "Loading..."}
      </h1>
      <button onClick={handleAISuggestion}>
        FrankamDev
      </button>
    </section>
  );
}`,
  "Navbar.tsx": `import { useState } from "react";
import { Frankamdev } from "@Frankamdev/fullstack";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await Frankamdev.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Frankamdev AI</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search code..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`,
};

export const floatingCards = {
  "App.tsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "V/S",
    title: "Compilation intelligente",
    content: "Suggestions de code en temps réel alimentées par l'éditeur de code",
  },
  "Acceuil.tsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Une expérience uniquee",
    content: "Apprendre facilement le code & numerique avec `FrankamDev`",
  },
  "Navbar.tsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Recherche Intelligente",
    content: "Recherche intelligente de code dans votre projet",
  },
};

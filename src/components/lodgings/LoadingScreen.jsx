import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
    const [loadingText, setLoadingText] = useState("Loading...");

    useEffect(() => {
      const originalText = "Loading";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%";
      
      const interval = setInterval(() => {
        setLoadingText(
          originalText
            .split("")
            .map((char, i) =>
              Math.random() > 0.5 ? characters[Math.floor(Math.random() * characters.length)] : char
            )
            .join("")
        );
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex items-center justify-center h-screen bg-transparent text-green-400 text-3xl font-mono tracking-widest">
        <span className="animate-pulse">{loadingText}...</span>
      </div>
    );
  };
  
export default LoadingScreen;

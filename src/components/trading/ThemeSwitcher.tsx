"use client";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  function applyTheme(t:string){
    document.documentElement.dataset.theme = t;
    setTheme(t);
  }

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <button onClick={()=>applyTheme("dark")} className="bg-black w-6 h-6 rounded-full"/>
      <button onClick={()=>applyTheme("blue")} className="bg-blue-500 w-6 h-6 rounded-full"/>
      <button onClick={()=>applyTheme("green")} className="bg-green-500 w-6 h-6 rounded-full"/>
      <button onClick={()=>applyTheme("light")} className="bg-white w-6 h-6 rounded-full border"/>
    </div>
  );
}

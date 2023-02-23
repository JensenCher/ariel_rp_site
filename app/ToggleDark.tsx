"use client";

import { useState } from "react";

export default function ToggleDark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Button
      </button>
    </div>
  );
}

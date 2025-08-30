import React, { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment and get the count
    fetch("https://api.counterapi.dev/v2/portfolio-web/visiter/up")
      .then((res) => res.json())
      .then((data) => setCount(data.data.up_count))
      .catch((error) => console.error("Failed to fetch visitor count:", error));
  }, []);

  return (
    <div className="mt-8 flex justify-center">
        {count !== null ? (
        <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-base rounded-full shadow-lg">
            <span role="img" aria-label="eyes">👀</span>
            Total Visitors: {count}
        </div>
         ) : (
        <div className="text-gray-500 text-sm">Loading visitor count...</div>
        )}
    </div>
  );
}

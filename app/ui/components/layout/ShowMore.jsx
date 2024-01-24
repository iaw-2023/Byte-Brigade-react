"use client";

import { useState } from "react";
import Link from "next/link";

export default function showMore({ hiddenTopics }) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((is) => !is);
  }

  return (
    <>
      <button
        className="text-right px-4 hover:text-red-300 mr-4"
        onClick={handleClick}
      >
        {isShown ? "Menos ▴" : "Más ▾"}
      </button>
      {isShown && <DropdownMenu topics={hiddenTopics} />}
    </>
  );
}

function DropdownMenu({ topics }) {
  return (
    <div className="absolute right-0 origin-top top-full bg-gray-950 rounded-md border border-gray-300 border-opacity-10 mt-2 p-2 min-w-max w-52">
      <ul className="text-gray-100 space-y-2 divide-y divide-opacity-5 divide-red-200">
        {topics.map((topic) => {
          return (
            <li
              key={topic.id}
              className="flex p-2 text-gray-200 hover:text-red-200 justify-end"
            >
              <Link
                className="w-full"
                href={{
                  pathname: "/articulos",
                  query: { topic: topic.id },
                }}
              >
                {topic.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

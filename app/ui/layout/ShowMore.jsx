"use client";

import { useState } from "react";
import Link from "next/link";

export default function showMore({ hiddenTopics }) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  function handleClick() {
    setShowDropdownMenu((sd) => !sd);
  }

  return (
    <div dir="rtl">
      <div className="relative hidden xl:flex flex-col w-44 border-l border-gray-300 ml-10">
        <button
          className="text-right font-light text-2xl px-4 text-red-100 hover:text-inherit mr-4 uppercase"
          onClick={handleClick}
        >
          {showDropdownMenu ? "Menos ▴" : "Más ▾"}
        </button>
        {showDropdownMenu && <DropdownMenu topics={hiddenTopics} />}
      </div>
    </div>

  );
}

function DropdownMenu({ topics }) {
  return (
    <div className="absolute start-0 top-full font-extralight bg-gray-950 rounded-sm border border-gray-200 mt-2 p-2 min-w-max w-52">
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

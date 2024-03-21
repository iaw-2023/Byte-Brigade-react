"use client";

import Link from "next/link";
import ShowMore from "./ShowMore";
import { useState, useEffect } from "react";
import { shuffleArray } from "@/app/lib/utils";
import { fetchTopics } from "@/app/lib/data";
import { merriweather } from "../../fonts";

export default function TopicsRow() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchAndSetTopics() {
      const newTopics = await fetchTopics();
      setTopics(newTopics);
    }
    fetchAndSetTopics();
  }, []);

  const shuffledTopics = shuffleArray(topics);
  const shownTopics = shuffledTopics.slice(0, 5);
  const hiddenTopics = shuffledTopics.slice(5);

  return (
    <div className="hidden xl:flex text-xl justify-end text-gray-200 w-full items-end">
      <div
        className="flex justify-end gap-10 font-extralight"
      >
        {
          shownTopics.map((topic) => {
            return (
              <Link
                key={topic.id}
                href={{
                  pathname: "/articulos",
                  query: { topic: topic.id },
                }}
                className="text-center hover:text-red-200"
              >
                {topic.name}
              </Link>
            );
          })
        }
      </div>
      {hiddenTopics.length > 0 && (
        <div className="relative hidden xl:flex flex-col w-44 border-l border-gray-300 ml-5">
          <ShowMore hiddenTopics={hiddenTopics} />
        </div>
      )}
    </div>
  );
}

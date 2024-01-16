'use client';

import Link from "next/link";
import ShowMore from "./ShowMore";
import { useState, useEffect } from "react";
import { shuffleArray } from "@/app/lib/utils";
import { fetchTopics } from "@/app/lib/data";
import { dosis } from "../fonts";

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
    const shownTopics = shuffledTopics.slice(0,5);
    const hiddenTopics = shuffledTopics.slice(5);

    return (
        <div className={`${dosis.className} hidden grow xl:flex xl:justify-end text-center text-gray-200 gap-12`}>
                {
                    shownTopics.map(topic => {
                        return (
                            <Link
                                key={topic.id}
                                href={
                                    {
                                        pathname: '/articulos',
                                        query: { topic: topic.id }
                                    }
                                }
                                className="text-2xl text-center hover:text-red-200">
                                    {topic.name}
                            </Link>
                        );
                    })
                }
                {
                    hiddenTopics.length > 0 &&
                    <div className="relative hidden text-xl xl:flex flex-col min-w-max w-28 mr-1 border-s-2 border-gray-300 border-opacity-100">
                        <ShowMore hiddenTopics={ hiddenTopics }/>
                    </div>
                }
            </div>
    );
}
'use client';

import requests from '@/utils/requests';
import {useState, useEffect} from 'react';
import getColor from '@/utils/color';
import axios from 'axios';
import Link from 'next/link';

function Page() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            const response = await axios.get(requests.topics);
            setTopics(response.data.data);
        };
        fetchTopics();
    }, []);

    console.log(topics);

    return (
        <main className="container mx-auto space-y-12">
            <h2 className="text-5xl font-extralight text-gray-900 mt-10 p-4">Categorías</h2>
            <div className="flex flex-col lg:grid grid-cols-4 gap-4">
                {
                    topics &&
                    topics.map(topic => {
                        return (
                            <Link
                                key={topic.id}
                                href= {
                                    {
                                        pathname: '/articulos',
                                        query: { topic: topic.id }
                                    }
                                }
                            >
                                <div className="flex border-4 border-white hover:border-red-100  lg:h-full rounded-sm justify-center p-12 items-center" style={{backgroundColor: getColor(topic.id)}}>
                                    <p className="lg:w-96 text-white uppercase text-3xl font-extrabold text-center">{topic.name}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </main>
    );
}

export default Page;
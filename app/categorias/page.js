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
        <main className="container mx-auto px-2">
            <h2>Categorías</h2>
            <div className="grid cols gap-4">
                {
                    topics &&
                    topics.map(topic => {
                        return (
                            <div key={topic.id} className="rounded-xl flex justify-center lg:w-96 w-full p-12" style={{backgroundColor: getColor(topic.id)}}>
                                <Link classNane="text-white text-3xl font-extrabold text-center" href='/'><span className="text-white text-3xl font-extrabold text-center">{topic.name}</span></Link>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );
}

export default Page;
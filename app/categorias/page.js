'use client';

import requests from '@/app/lib/requests';
import {useState, useEffect} from 'react';
import getColor from '@/app/lib/color';
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

    return (
            <>
                <h2 className="text-5xl font-extralight text-gray-900 mb-6 p-2">Categorías</h2>
                <div className="flex flex-col w-full lg:flex-row lg:flex-wrap gap-4 justify-center p-4">
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
                                    <div className="flex grow border-4 border-white hover:border-red-100 rounded-sm justify-center p-12 items-center lg:min-h-80 lg:h-full" style={{backgroundColor: getColor(topic.id)}}>
                                        <p className="lg:w-96 text-white uppercase text-3xl font-extrabold text-center">{topic.name}</p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </>
    );
}

export default Page;
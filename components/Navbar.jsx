'use client';

import axios from 'axios';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import requests from '@/utils/requests';


const Navbar = () => {
    const [topics, setTopics] = useState([]);

    useEffect( () => {
        const fetchTopics = async () => {
            try {
                const response = await axios.get(requests.topics);
                let newTopics = response.data.data;
                setTopics(newTopics);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTopics();
    },[]);

    return (
        <nav className="bg-gray-950
        flex justify-start items-baseline p-4 w-full mb-8 gap-4">
            <Link href='/'>
                <h1 className="text-gray-200 hover:text-red-200 font-serif text-4xl ml-1">
                    El Corchazo
                </h1>
            </Link>
            <div className="uppercase visible lg:hidden text-gray-200 text-2xl font-thin border-2 border-gray-950 hover:border-red-200 hover:text-red-200 px-2 py-1">
                    <Link href="/categorias">Categorías</Link>
            </div>
            <div className="hidden lg:flex lg:visible justify-start font-thin text-center text-gray-100 gap-4">
                {
                    topics.map(topic => {
                        return (
                            <Link
                                key={topic.id}
                                href={
                                    {
                                        pathname: '/articulos',
                                        query: { topic: topic.id }
                                    }
                                }
                                criterion={`de ${topic.name}`}
                                className="text-xl  hover:text-red-200">
                                    {topic.name}
                            </Link>
                        );
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar
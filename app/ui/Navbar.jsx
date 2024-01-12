'use client';

import {useState, useEffect} from 'react';
import { shuffleArray } from '@/app/lib/utils';
import Link from 'next/link';
import { fetchTopics } from '../lib/data';


export default function Navbar() {
    const [topics, setTopics] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    
    useEffect(() => {
        fetchTopics()
            .then((topics) => {
                setTopics(shuffleArray(topics));
            })
            .catch(error => console.log(error));
    }, []);

    const handleClick = () => {
        setShowDropdown(sd => !sd);
    }

    const shownTopics = topics.slice(0,5);
    const hiddenTopics = topics.slice(5);

    return (
        <nav id="nav" className="bg-gray-950 flex justify-start items-baseline p-4 w-full mb-8 gap-4 border-0 border-b-2 border-gray-400">
            <Link href='/'>
                <h1 className="text-gray-200 min-w-max hover:text-red-200 font-serif text-4xl ml-1">
                    El Corchazo
                </h1>
            </Link>
            <div className="flex uppercase w-full justify-end visible xl:hidden text-gray-200 text-lg xs:text-xl font-thin hover:text-red-200 pr-1 py-1">
                    <Link href="/categorias">Categorías</Link>
            </div>
            <div className="hidden grow xl:flex xl:justify-end font-thin text-center text-gray-200 gap-12">
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
                                className="text-xl text-center hover:text-red-200">
                                    {topic.name}
                            </Link>
                        );
                    })
                }
                {
                    hiddenTopics.length > 0 &&
                    <div className="relative hidden text-xl xl:flex flex-col min-w-max w-32 mr-1 border-s-2 border-gray-300 border-opacity-100">
                    {
                        <>
                        <button className="text-right px-4" onClick={handleClick}>
                            {showDropdown? 
                                <p className="hover:text-red-300">Menos ▴</p> :
                                <p className="hover:text-red-300">Más ▾</p>
                            }
                        </button>
                        {
                            showDropdown && <DropdownMenu topics={hiddenTopics} handleClick={handleClick}/>
                        }
                        </>
                    }
                    </div>
                }
            </div>
        </nav>
    )
}

function DropdownMenu({topics, handleClick}) {
    
    return (
        <div className="absolute right-0 origin-top top-full bg-gray-950 rounded-md border border-gray-300 border-opacity-10 mt-2 p-2 min-w-max w-52">
            <ul className="text-gray-100 space-y-2 divide-y divide-opacity-5 divide-red-200">
                { topics.map(topic => {
                    return (
                        <li key={topic.id} onClick={handleClick} className="flex p-2 text-gray-200 hover:text-red-200 justify-end">
                            <Link
                                className="w-full"
                                href={
                                    {
                                        pathname: '/articulos',
                                        query: { topic: topic.id }
                                    }
                                }
                            >
                                {topic.name}
                            </Link>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}
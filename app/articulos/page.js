'use client';

import requests from '@/utils/requests';
import {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation'
import { getNotFound, getSearching } from '@/utils/texts';
import axios from 'axios';
import TopicTag from '@/components/TopicTag';
import Link from 'next/link';

function Page () {
    const [articles, setArticles] = useState([]);
    const [searching, setSearching] = useState(true);
    const searchParams = useSearchParams();

    const fetchArticles = async () => {
            let url = `${requests.articles.index}?`;
            const author = searchParams.get('author');
            const topic = searchParams.get('topic');

            if (author) {
                url = `${url}author=${author}`;
                if (topic) {
                    url = `${url}&topic=${topic}`
                }
            }
            else if (topic) {
                url = `${url}topic=${topic}`;
            }

            try {
                console.log(url);
                const response = await axios.get(url);
                setArticles(response.data.data);
                setSearching(false);
            } catch (error) {
                setSearching(false);
            }
    };

    useEffect(() => {        
        fetchArticles();
    }, []);

    useEffect(() => {        
        fetchArticles();
    }, [searchParams]);


    return (
        <main className="container mx-auto space-y-12">
            <div className="flex flex-col w-full lg:w-3/4 mt-10 p-4 gap-4">
                <p className="text-5xl font-extralight text-gray-900">
                    Resultados de búsqueda
                </p>
                {
                    (searching || articles.length == 0) && (
                        <p className="text-2xl text-gray-900">
                            { searching? getSearching() : getNotFound() }
                        </p>
                    )
                }
                <div className="flex flex-col gap-2 divide-y w-full max-w-3/4">
                {
                    articles.map(article => {
                        return (
                            <Link key={article.id} href={`/articulos/${article.id}`}>
                                <div className="flex flex-col gap-2 my-4">
                                    <div className="text-sm"><TopicTag topic={article.topic} /></div>
                                    <p className="text-3xl text-gray-900">{article.title}</p>
                                </div>
                            </Link>
                        );
                    })
                }
                </div>
            </div>
        </main>
    );
}

export default Page;
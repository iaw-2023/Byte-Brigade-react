'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import TopicTag from '@/components/TopicTag';
import Teaser from '@/components/Teaser';
import requests from "@/utils/requests";
import { getMayLike } from '@/utils/texts';
import axios from "axios";

const Page = ({params}) => {
    
    const articleID = params.id;
    const [article, setArticle] = useState(null);

    article && console.log(article.body);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(requests.articles.fullArticle(articleID));
            setArticle(response.data.data);
        }

        fetchArticle();
    }, []);

    return (
        <main className="container mx-auto mb-12 space-y-2 divide-y">
            {article && (
                <div className="flex pt-8 flex-col gap-2">
                    <Link href={`/categorias/${article.topic.id}`}>
                        <div className="text-2xl mx-4"><TopicTag topic={article.topic}/></div>
                    </Link>
                    <div className="mx-4 text-2xl"><Teaser teaser={article.teaser}/></div>
                    <h1 className="mx-4 text-4xl lg:w-4/5">{article.title}</h1>
                    <p className="font-serif font-light italic text-lg text-gray-500 mx-4 pb-4">por <Link href={`/articles?author=${article.author.id}`}><span className="hover:text-red-300 hover:underline">{article.author.name}</span></Link></p>
                    <div className="mx-6 pb-4 pr-8 font-serif space-y-4 text-lg" dangerouslySetInnerHTML={{__html: article.body}}/>
                </div>
            )}
            <div>
                <p className="font-extralight uppercase pt-4 pb-2 mx-2 text-gray-900 text-xl">También te puede interesar</p>
                {
                    article && 
                    <ul className="list-disc">
                    {getMayLike().map((liking, index) => {
                        return <li className="mx-8 list-item text-gray-900 text-lg font-extralight font" key={index}>{liking}</li>
                    })}
                    </ul>
                }
            </div>
        </main>
    );
}

export default Page;
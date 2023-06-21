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

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await axios.get(requests.articles.fullArticle(articleID));
            setArticle(response.data.data);
        }
        fetchArticle();
    }, []);

    return (
        <main className="container mx-auto my-12">
            {article && (
                <div className="flex flex-col">
                    <article className="flex py-6 flex-col gap-3">
                        <Link href={`/articulos?topic=${article.topic.id}`}>
                            <div className="text-2xl mx-4"><TopicTag topic={article.topic}/></div>
                        </Link>
                        <div className="mx-4 text-2xl"><Teaser teaser={article.teaser}/></div>
                        <h1 className="mx-4 text-4xl lg:w-4/5">{article.title}</h1>
                        <p className="font-serif font-light italic text-lg text-gray-500 mx-4 pb-4">por <Link href={`/articulos?author=${article.author.id}`}><span className="hover:text-red-300 hover:underline">{article.author.name}</span></Link></p>
                        <div className="mx-6 pr-8 font-serif space-y-4 text-lg" dangerouslySetInnerHTML={{__html: article.body}}/>
                    </article>
                    <CommentSection articleID={articleID}/>
                </div>
            )}
            <div className="flex flex-col justify-start w-fit">
                <p className="font-extralight uppercase pt-4 pb-2 mx-2 text-gray-900 text-xl">También te puede interesar</p>
                {
                    article && (
                        <>
                            <ul className="list-disc flex flex-col justify-between">
                                {getMayLike().map((liking, index) => {
                                    return (
                                        <Link key={index} href={liking.href} target="_blank">
                                            <li className="mx-8 list-item max-w-max text-gray-900 text-lg py-1 font-extralight">
                                                <p className="text-gray-900 hover:text-red-500">{liking.text}</p>
                                            </li>
                                        </Link>
                                    );
                                })}
                            </ul>
                        </>
                    )
                }
            </div>
        </main>
    );
}

function CommentSection({articleID}) {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await axios.get(requests.comments(articleID));
        setComments(response.data.data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <>
            <p className="font-extralight uppercase pt-4 pb-2 mt-4 mb-2 mx-2 text-gray-900 text-xl">{comments.length > 0? 'Toda esta gente no puede quedarse callada' : 'Decí algo porque si no es incomodísimo'}</p>
            <div className="text-gray-900 font-light justify-start gap-4 mx-4">
                <div className="divide-y">
                    {
                        comments.map(comment => {
                            return (
                                <div className="space-y-1 py-2 w-full max-w-6xl" key={comment.id}>
                                    <p >{comment.reader.email}</p>
                                    <p className="text-xl">{comment.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <CommentForm articleID={articleID} fetchComments={fetchComments}/>
            </div>
        </>
    );
}

function CommentForm({articleID ,fetchComments}) {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(requests.comments(articleID), {email, text});
            console.log(response);
            setIsLoading(false);
            setEmail('');
            setText('');
            setErrorMessage(null);
            fetchComments();
        } catch (error) {
            setIsLoading(false);
            setErrorMessage("Se produjo un error al procesar la solicitud. Pegale al monitor e intentá nuevamente.");
        }

    }

    return (
        <form onSubmit={handleSubmit} className="my-2 mb-6 flex flex-col w-full max-w-4xl gap-2 justify-between">
            <label className="max-w-fit font-extralight px-1" htmlFor="email">Email</label>
            <input
                className="rounded-md p-2 grow border border-red-200 hover:bg-red-500 focus:outline-none focus:border-red-300 focus:border-2"
                type="email"
                id="email"
                value={email}
                style={{backgroundColor: isLoading? '#94a3b8' : '#f1f5f9'}}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
            />
            <textarea
                className="rounded-md grow border p-2 border-red-200 hover:bg-red-500  focus:outline-none focus:border-red-300 focus:border-2 resize-none"
                name="text"
                id="text"
                value={text}
                cols="30"
                rows="10"
                style={{backgroundColor: isLoading? '#94a3b8' : '#f1f5f9'}}
                disabled={isLoading}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="flex justify-start align-middle gap-2">
                <button className="bg-red-400 hover:bg-red-500 active:bg-red-600 text-white font-medium max-w-fit py-2 px-6 border border-gray-300 rounded-lg" type="submit" disabled={isLoading}>
                    Mandar fruta
                </button>
                {errorMessage && <p className="text-red-600 text-xs italic py-1 font-extralight">{errorMessage}</p>}
            </div>
        </form>
    );
}

export default Page;
'use client';

import CommentForm from './CommentForm';
import { fetchComments } from "@/app/lib/data";
import { useState, useEffect } from 'react';

export default function CommentSection( {articleId} ) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function refreshComments() {
            const newComments = await fetchComments(articleId);
            setComments(newComments);
        }
        refreshComments();
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
                <CommentForm articleId={ articleId } setComments={setComments}/>
            </div>
        </>
    );
}

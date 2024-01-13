'use client';

import { postComment, fetchComments } from "@/app/lib/data";
import { useState } from 'react';

export default function CommentForm({ articleId , setComments }) {
    const [formData, setFormData] = useState({ email: '', text: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            await postComment(requests.comments(articleId), formData);
            setIsLoading(false);
            setFormData({ email: '', text: '' });
            setErrorMessage(null);
            const newComments = await fetchComments(articleId);
            setComments(newComments)
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
                value={formData.email}
                style={{backgroundColor: isLoading? '#94a3b8' : '#f1f5f9'}}
                onChange={ (e) => setFormData({...formData, email: e.target.value }) }
                disabled={isLoading}
                required
            />
            <textarea
                className="rounded-md grow border p-2 border-red-200 hover:bg-red-500  focus:outline-none focus:border-red-300 focus:border-2 resize-none"
                name="text"
                id="text"
                value={formData.text}
                cols="30"
                rows="10"
                style={{backgroundColor: isLoading? '#94a3b8' : '#f1f5f9'}}
                disabled={isLoading}
                onChange={ (e) => setFormData({...formData, text: e.target.value }) }
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
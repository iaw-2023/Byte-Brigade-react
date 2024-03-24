"use client";

import { postComment, fetchComments } from "@/app/lib/data";
import { useState } from "react";
import clsx from "clsx";

export default function CommentForm({ articleId, setComments, user }) {
  const [formComment, setFormComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      name: user.nickname,
      text: formComment,
    };
    if (formComment === '') {
      setErrorMessage("No seas pillo. Escribí algo.");
    }
    else {
      try {
        await postComment(articleId, formData);
        setErrorMessage(null);
        const newComments = await fetchComments(articleId);
        setComments(newComments);
        setFormComment("");
      } catch (error) {
        setErrorMessage(
          "Se produjo un error al procesar la solicitud. Pegale al monitor e intentá nuevamente."
        );
      }
    }
    setIsLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 mb-6 space-y-2 flex flex-col w-full max-w-4xl justify-between"
    >
      <textarea
        className={clsx(
          "rounded-md grow outline outline-1 resize-none p-2",
          {
            "bg-slate-300": isLoading,
            "bg-slate-50 focus:bg-slate-100": !isLoading,
            "outline-red-200 focus:outline-red-300": !errorMessage,
            "outline-red-400 focus:outline-red-500": errorMessage
          }
        )}
        name="text"
        id="text"
        value={formComment}
        rows="4"
        disabled={isLoading}
        onChange={(e) => setFormComment(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <button
          className="bg-red-200 inline-block hover:bg-red-300 text-white font-medium max-w-fit py-2 px-6 rounded-lg
            outline outline-1 outline-gray-200"
          type="submit"
          disabled={isLoading}
        >
          Mandar fruta
        </button>
        {errorMessage && (
          <p className="text-red-600 text-xs italic py-1 font-extralight">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}

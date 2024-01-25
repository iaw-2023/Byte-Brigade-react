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
    try {
      const formData = {
        email: user.email,
        text: formComment,
      };
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
    setIsLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 mb-6 space-y-2 flex flex-col w-full max-w-4xl justify-between"
    >
      <textarea
        className={clsx(
          "rounded-md grow border border-red-200 focus:outline-none p-2 focus:border-red-300 resize-none",
          {
            "bg-slate-300": isLoading,
            "bg-slate-50 focus:bg-slate-100": !isLoading,
          }
        )}
        name="text"
        id="text"
        value={formComment}
        cols="30"
        rows="6"
        disabled={isLoading}
        onChange={(e) => setFormComment(e.target.value)}
        required
      />
      <div className="flex justify-start align-middle gap-2">
        <button
          className="bg-red-400 hover:bg-red-500 active:bg-red-600 text-white font-medium max-w-fit py-2 px-6 border border-gray-300 rounded-lg"
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

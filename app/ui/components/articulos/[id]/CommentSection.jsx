"use client";

import CommentForm from "./CommentForm";
import { fetchComments } from "@/app/lib/data";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState(null);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    async function refreshComments() {
      const newComments = await fetchComments(articleId);
      setComments(newComments);
    }
    refreshComments();
  }, []);

  return (
    <>
      {
        comments
          ? comments.length > 0
            ? <CommentsHeader text={"Toda esta gente no puede quedarse callada"} />
            : user
              ? <CommentsHeader text={"Decí algo porque si no es incomodísimo"} />
              : <p className="text-md mt-4 x-2 xl:mx-0 normal-case italic xl:w-1/2">
                Tenés la chance irrepetible de ser el primero en dejar un comentario. <a href="/api/auth/login" className="text-red-300 inline-block font-semibold underline">Iniciá sesión</a> y dejá tu marca para la posteridad.
              </p>
          : (
            <CommentsHeader text={"Cargando las joyitas que nos regala el libre derecho a la expresión..."} extraClass={'italic'} />
          )
      }
      {comments && (
        <div className="flex flex-col gap-2 text-gray-900 font-light justify-start mx-4">
          <div className="divide-y">
            {comments.map((comment) => {
              return (
                <div className="space-y-1 py-2 max-w-6xl" key={comment.id}>
                  <p>{comment.reader.name}</p>
                  <p className="text-xl">{comment.text}</p>
                </div>
              );
            })}
          </div>
          {user && (
            <CommentForm
              articleId={articleId}
              user={user}
              setComments={setComments}
            />
          )}
        </div>
      )}
    </>
  );
}

function CommentsHeader({ text, extraClass }) {
  const extra = extraClass ? extraClass : '';
  return <p className={`font-extralight uppercase pt-4 pb-2 mt-4 mb-2 mx-2 text-gray-900 text-xl ${extra}`}>{text}</p>;
}
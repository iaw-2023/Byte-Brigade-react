"use client";

import CommentForm from "./CommentForm";
import { fetchComments } from "@/app/lib/data";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Spinner from "../../Spinner";

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
          ? (
            <>
              {
                (comments.length > 0) && <CommentsHeader text="Comentarios" />
              }
              <div className="flex flex-col gap-2 text-gray-900 font-light justify-start mx-4">
                <CommentsList comments={comments} />
                {user && (
                  <CommentForm
                    articleId={articleId}
                    user={user}
                    setComments={setComments}
                  />
                )}
              </div>
              {
                !user && <LoginPrompt length={comments.length} />
              }
            </>
          )
          : (
            <>
              <div className="hidden md:flex items-baseline space-x-2">
                <Spinner dimension="4" />
                <CommentsHeader text="Cargando las joyitas que nos regala el libre derecho a la expresión" />
              </div>
              <div className="flex md:hidden items-center space-x-2">
                <Spinner dimension="10" />
                <CommentsHeader text={`Cargando las joyitas que nos regala el libre derecho a la expresión`} />
              </div>
            </>
          )
      }
    </>
  );
}

function CommentsHeader({ text, extraClass }) {
  const extra = extraClass ? extraClass : '';
  return <p className={`font-extralight text-lg md:text-xl uppercase py-1 mt-4 mb-2 text-gray-900 ${extra}`}>{text}</p>;
}

function CommentsList({ comments }) {
  return (
    <div className="divide-y border-l-2 pl-2">
      {comments.map((comment) => {
        return (
          <div className="space-y-1 py-2 max-w-6xl" key={comment.id}>
            <p>{comment.reader.name}</p>
            <p className="text-xl">{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function LoginPrompt({ length }) {
  const firstSentence = length > 0 ? " No dejes que el marmota de arriba crea que tiene razón." : "Tenés la chance irrepetible de ser el primero en comentar.";
  const secondSentence = length > 0 ? " y mostrale lo que es bueno." : " y dejá tu marca para la posteridad.";
  return (
    <p className="rounded-lg mx-2 px-4 py-2 bg-slate-50 text-md lg:text-lg mt-4 x-2 xl:mx-0 normal-case xl:w-1/2">
      {firstSentence}{" "}<a href="/api/auth/login" className="text-red-300 hover:text-red-500 inline-block font-semibold">Iniciá sesión</a>{secondSentence}
    </p>
  );
}
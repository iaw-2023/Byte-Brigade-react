import Link from "next/link";
import { ClassicTag as TopicTag } from "../../TopicTags";
import Teaser from "../../Teaser";
import { fetchArticleById } from "@/app/lib/data";

export default async function Article({ articleId }) {
  const article = await fetchArticleById(articleId);
  const author = article.author;

  return (
    <article className="flex flex-col gap-y-3 min-h-fit h-26">

      {/* Categoría */}
      <Link href={`/articulos?topic=${article.topic.id}`}>
        <div className="text-2xl">
          <TopicTag topic={article.topic} />
        </div>
      </Link>

      {/* Copete */}
      <div className="text-2xl">
        <Teaser teaser={article.teaser} />
      </div>

      {/* Título */}
      <h1 className="text-4xl">{article.title}</h1>

      {/* Autor */}
      <div className="flex items-center gap-1">
        {
          author.image_url &&
          <img
            src={author.image_url}
            alt={`Foto de ${author.name}`}
            className="h-16 w-16 rounded-full grayscale outline outline-gray-300 outline-1"
          />
        }
        <p className="font-serif font-light italic text-lg text-gray-500 mx-4 pb-4">
          por{" "}
          <Link href={`/articulos?author=${article.author.id}`}>
            <span className="hover:text-red-300 hover:underline">
              {author.name}
            </span>
          </Link>
        </p>
      </div>

      {/* Artículo */}
      <div
        className="pl-6 pr-14 font-serif space-y-4 mt-5 text-lg"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

    </article>
  );
}

import Link from "next/link";
import TopicTag from "../../TopicTag";
import Teaser from "../../Teaser";
import { fetchArticleById } from "@/app/lib/data";

export default async function Article({ articleId }) {
  const article = await fetchArticleById(articleId);

  return (
    <article className="flex flex-col space-y-3 min-h-fit h-26">
      <Link href={`/articulos?topic=${article.topic.id}`}>
        <div className="text-2xl mx-4">
          <TopicTag topic={article.topic} />
        </div>
      </Link>
      <div className="mx-4 text-2xl">
        <Teaser teaser={article.teaser} />
      </div>
      <h1 className="mx-4 text-4xl lg:w-4/5">{article.title}</h1>
      <p className="font-serif font-light italic text-lg text-gray-500 mx-4 pb-4">
        por{" "}
        <Link href={`/articulos?author=${article.author.id}`}>
          <span className="hover:text-red-300 hover:underline">
            {article.author.name}
          </span>
        </Link>
      </p>
      <div
        className="mx-6 pr-8 font-serif space-y-4 text-lg"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </article>
  );
}

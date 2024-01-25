import TopicTag from "./TopicTag";
import Teaser from "./Teaser";
import Link from "next/link";
import getColor from "../../lib/color";

export function MainArticle({ article }) {
  const bgColor = getColor(article.topic.id);

  return (
    <Link
      className="bg-gray-50 hover:bg-gray-100 flex flex-col h-96 min-h-fit p-4 py-14 hover:shadow-lg space-y-2 mx-2"
      href={`/articulos/${article.id}`}
    >
      <div className="text-xl">
        <TopicTag topic={article.topic} />
      </div>
      <div className="text-2xl xl:text-3xl">
        <Teaser teaser={article.teaser} />
      </div>
      <div className=" flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <h2>{article.title}</h2>
      </div>
    </Link>
  );
}

export function SmallerArticles({ articles }) {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap justify-between gap-4 mx-2">
      {articles.map((article) => {
        return (
          <Link key={article.id} href={`/articulos/${article.id}`}>
            <div className="bg-gray-50 hover:bg-gray-100 flex flex-col flex-wrap flex-none w-full xl:w-80 xl:h-full xl:min-h-fit p-4 space-y-1 hover:shadow-md">
              <div className="text-sm">
                <TopicTag topic={article.topic} />
              </div>
              <div className="text-gray-600 uppercase">{article.teaser}</div>
              <h2 className="text-xl lg:text-2xl">{article.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

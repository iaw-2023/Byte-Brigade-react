import Link from "next/link";
import TopicTag from "./TopicTag";

const SmallerArticles = ({articles}) => {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap justify-between gap-4 mx-2">
      {articles.map(article => {
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
  )
}


export default SmallerArticles;
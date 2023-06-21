import Link from "next/link";
import TopicTag from "./TopicTag";
import getColor from "@/utils/color";

const SmallerArticles = ({articles}) => {
  return (
    <div className="flex flex-col lg:w-full space-y-4 lg:space-y-0 lg:flex-row justify-center lg:justify-between mx-2 lg:mx-0">
      {articles.map(article => {
        return (
          <Link key={article.id} href={`/articulos/${article.id}`}>
            <div className="bg-gray-50 hover:bg-gray-100 flex flex-col flex-wrap flex-none w-full lg:min-h-full lg:w-80 p-4 space-y-1 hover:shadow-md">
              <div className="text-sm">
                <TopicTag topic={article.topic} />
              </div>
              <div className="text-gray-600 uppercase">{article.teaser}</div>
              <h2 className="text-2xl min-w-fit">{article.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  )
}


export default SmallerArticles;
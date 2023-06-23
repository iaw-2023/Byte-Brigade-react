import Teaser from "./Teaser";
import TopicTag from "./TopicTag";
import Link from "next/link";

const OtherArticles = ({articles}) => {
  return (
    <div className="flex flex-col w-full divide-y gap-2 lg:w-4/5">
    {
        articles.map(article => {
            return (
                <Link key={article.id} href={`/articulos/${article.id}`}>
                    <div className="space-y-2 w-full p-1 mt-1" >
                        <div className="text-xs"><TopicTag topic={article.topic}/></div>
                        <div className="text-sm"><Teaser teaser={article.teaser} /></div>
                        <h2 className="text-lg sm:text-xl lg:pr-12">{article.title}</h2>
                    </div>
                </Link>
            );
        })
    }
        </div>
  )
}

export default OtherArticles;
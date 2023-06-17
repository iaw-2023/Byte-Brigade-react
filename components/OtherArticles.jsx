import Teaser from "./Teaser";
import TopicTag from "./TopicTag";
import Link from "next/link";

const OtherArticles = ({articles}) => {
  return (
    <div className="flex flex-col divide-y w-full lg:w-3/5">
    {
        articles.map(article => {
            return (
                <Link href={`/articulos/${article.id}`}>
                    <div className="space-y-2 w-full lg:max-w-max p-3" key={article.key}>
                        <div className="text-xs"><TopicTag topic={article.topic}/></div>
                        <div className="text-sm"><Teaser teaser={article.teaser} /></div>
                        <h2 className="text-xl">{article.title}</h2>
                    </div>
                </Link>
            );
        })
    }
        </div>
  )
}

export default OtherArticles;
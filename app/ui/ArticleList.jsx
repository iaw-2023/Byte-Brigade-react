import Link from "next/link";
import { ClassicTag as TopicTag } from "./TopicTags";

export default function ArticleList({ articles }) {
    return (
        <div className="flex flex-col divide-y">
            {
                articles && (
                    articles.map((article, index) => <ArticleListItem key={article.id} article={article} index={index} />)
                )
            }
        </div>
    );
}

function ArticleListItem({ article, index }) {
    return (
        <Link className="flex flex-col space-y-2 hover:bg-gray-50 py-4 px-2" href={`/articulos/${article.id}`}>
            <div className="text-sm"><TopicTag topic={article.topic} /></div>
            <p className="text-lg md:text-xl text-gray-900">{article.title}</p>
        </Link>
    );
}
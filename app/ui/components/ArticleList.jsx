import Link from "next/link";
import TopicTag from "./TopicTag";

export default function ArticleList({ articles }) {
    return (
        <div className="flex flex-col divide-y justify-center">
            {
                articles && (
                    articles.map((article, index) => <ArticleListItem key={article.id} article={article} index={index}/>)
                )
            }
        </div>
    );
}

function ArticleListItem({ article, index }) {
    return (
        <Link className="flex flex-col space-y-2 hover:bg-gray-50 py-4" href={`/articulos/${article.id}`}>
            <div className="text-sm"><TopicTag topic={article.topic} /></div>
            <p className="text-xl text-gray-900">{article.title}</p>
        </Link>
    );
}
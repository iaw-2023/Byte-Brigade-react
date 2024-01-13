import TopicTag from "./TopicTag";
import Link from "next/link";

export default function ArticleListItem({ article }) {
    return (
        <Link href={`/articulos/${article.id}`}>
            <div className="flex flex-col gap-2 my-4">
                <div className="text-sm"><TopicTag topic={article.topic} /></div>
                <p className="text-xl text-gray-900">{article.title}</p>
            </div>
        </Link>
    );
}
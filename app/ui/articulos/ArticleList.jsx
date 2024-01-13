import Link from "next/link";
import TopicTag from "../TopicTag";
import ArticleListItem from "../ArticleListItem";

export default function ArticleList({ articles }) {
    return (
        <div className="flex flex-col gap-1 divide-y w-full justify-center">
            {
                articles && (
                    articles.map(article => <ArticleListItem key={article.id} article={article}/>)
                )
            }
        </div>
    );
}
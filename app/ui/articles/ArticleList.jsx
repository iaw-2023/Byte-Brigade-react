export default function ArticleList({ articles }) {
    return (
        <div className="flex flex-col gap-1 divide-y w-full justify-center">
            {
                articles.map(article => {
                    return (
                        <Link key={article.id} href={`/articulos/${article.id}`}>
                            <div className="flex flex-col gap-2 my-4">
                                <div className="text-sm"><TopicTag topic={article.topic} /></div>
                                <p className="text-xl text-gray-900">{article.title}</p>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}
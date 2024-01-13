import { fetchArticles } from '../lib/data';
import ArticleList from '../ui/articulos/ArticleList';
import { NextButton, PrevButton } from '../ui/articulos/PaginationButtons';

async function Page ({ searchParams }) {
    const {author, topic, page} = searchParams;
    const currentPage = Math.abs(Number(page)) || 1;
    const {articles, totalPages, totalArticles} = await fetchArticles(currentPage, author, topic);
    console.log(currentPage);

    return (
            <div className="flex flex-col md:w-3/4 space-y-6">
                <h2 className="text-5xl font-extralight text-gray-900">
                    {articles.length > 0? (author || topic? "Resultado de búsqueda" : "Todos los artículos") : "Nada de nada de nada de nada de nada"}
                </h2>
                <ArticleList key={currentPage + author + topic} articles={articles} />
                {
                    (totalArticles > articles.length) && (
                        <div className="flex justify-between md:w-4/6 mt-4">
                            <PrevButton totalPages={ totalPages } />
                            <NextButton totalPages={ totalPages } />
                        </div>
                    )
                }
            </div>
    );
}

export default Page;
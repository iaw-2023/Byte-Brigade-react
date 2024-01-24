import { fetchArticles } from '../lib/data';
import ArticleList from '../ui/components/ArticleList';
import { NextButton, PrevButton } from '../ui/components/articulos/PaginationButtons';

async function Page ({ searchParams }) {
    const {author, topic, page} = searchParams;
    const currentPage = Math.abs(Number(page)) || 1;
    const {articles, totalPages, totalArticles} = await fetchArticles(currentPage, author, topic);

    return (
            <div className="flex flex-col px-4 md:px-0 xl:w-3/4 space-y-6">
                <h2 className="text-5xl font-extralight text-gray-900">
                    {articles.length > 0? (author || topic? "Resultado de búsqueda" : "Todos los artículos") : "Nada de nada de nada de nada de nada"}
                </h2>
                <ArticleList key={currentPage + author + topic} articles={articles} />
                {
                    (totalArticles > articles.length) && (
                        <div className="flex justify-between px-4 xl:px-12 mt-4">
                            <PrevButton totalPages={ totalPages } />
                            <NextButton totalPages={ totalPages } />
                        </div>
                    )
                }
            </div>
    );
}

export default Page;
import { fetchArticles } from '../lib/data';
import ArticleList from '../ui/articulos/ArticleList';
import PaginationButton from '../ui/articulos/PaginationButton';

async function Page ({ searchParams }) {
    const {author, topic, page} = searchParams;
    const {articles, totalPages} = await fetchArticles(page, author, topic);
    const currentPage = Number(page) || 1;

    function isNextButtonDisabled() {
        return totalPages == 1 || (currentPage >= totalPages);
    }

    function isPrevButtonDisabled() {
        return totalPages == 1 || (currentPage == 1);
    }

    return (
            <div className="flex flex-col md:w-3/4 space-y-6">
                <h2 className="text-5xl font-extralight text-gray-900">
                    {author || topic? "Resultado de búsqueda" : "Todos los artículos"}
                </h2>
                <ArticleList key={currentPage + author + topic} articles={articles} />
                <div className="flex justify-between md:w-4/6 mt-4">
                    <PaginationButton type={'prev'} currentPage={currentPage} disabled={isPrevButtonDisabled()}/>
                    <PaginationButton type={'next'} currentPage={currentPage} disabled={isNextButtonDisabled()} />
                </div>
            </div>
    );
}

export default Page;
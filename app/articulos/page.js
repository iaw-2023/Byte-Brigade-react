import { fetchArticles } from '../lib/data';
import ArticleList from '../ui/articulos/ArticleList';

async function Page ({ searchParams }) {
    const {author, topic, page} = searchParams;
    const articles = await fetchArticles(page, author, topic);

    function handlePrevClick() {
        const params = new URLSearchParams(searchParams);
        const currentPage = Number(params.get('page'));
        params.set('page', currentPage - 1);
        // router.replace(`/articulos/${params.toString()}`);
    }

    function handleNextClick() {
        const params = new URLSearchParams(searchParams);
        const currentPage = Number(params.get('page'));
        params.set('page', currentPage - 1);
        // router.replace(`/articulos/${params.toString()}`);
    }

    return (
            <>
                <h2 className="text-5xl font-extralight text-gray-900 p-2">
                    {author || topic? "Resultado de búsqueda" : "Todos los artículos"}
                </h2>
                <ArticleList key={page + author + topic} articles={articles} />
                <div>
                    BOTONES
                </div>
            </>
    );
}

export default Page;
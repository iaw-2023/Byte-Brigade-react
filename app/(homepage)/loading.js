import Image from 'next/image';
import sources from '@/app/lib/sources';

export default function Loading() {
  return (
    <div className="flex flex-col space-y-6">
        <div className="flex justify-center items-center gap-4 p-4">
            <div className="w-72 h-72" style={{position: "relative"}}>
            <Image className="object-scale-down" fill={true} src={sources.fullLogo} alt="Logo de El Corchazo"/>
            </div>
            <div className="flex flex-col items-center space-y-2">
            <h1 className="text-gray-950 flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-serif font-semibold">El Corchazo</h1>
            </div>
        </div>
        <MainArticleLoading />
        <div className="flex flex-col space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0 xl:justify-between">
            <SmallArticleLoading />
            <SmallArticleLoading />
            <SmallArticleLoading />
            <SmallArticleLoading />
        </div>
        <OtherArticlesLoading />
    </div>
  );
}

function MainArticleLoading() {
    return (
        <div className="bg-gray-50 flex flex-col w-full h-96 justify-between px-4 py-14">
            <div className="bg-gray-100 rounded-md w-36 h-8"/>
            <div className="bg-gray-100 rounded-xl w-1/4 h-8"/>
            <div className="flex flex-col space-y-2">
                <div className="bg-gray-100 rounded-xl w-4/5 h-12"/>
                <div className="bg-gray-100 rounded-xl w-4/6 h-12"/>
                <div className="bg-gray-100 rounded-xl w-4/5 h-12"/>
            </div>
        </div>
    );
}

function SmallArticleLoading() {
    return (
        <div className="flex flex-col justify-between w-full bg-gray-50 xl:h-80 h-24 px-4 py-8">
            <div className="bg-gray-100 rounded-md w-16 h-6"/>
            <div className="flex flex-col space-y-2">
                <div className="bg-gray-100 rounded-lg w-4/5 h-6"/>
                <div className="bg-gray-100 rounded-lg w-2/5 h-6"/>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="bg-gray-100 rounded-lg w-4/5 h-10"/>
                <div className="bg-gray-100 rounded-lg w-3/5 h-10"/>
                <div className="bg-gray-100 rounded-lg w-4/6 h-10"/>
            </div>
        </div>
    );
}

function OtherArticlesLoading() {
    return (
        <div className="flex flex-col xl:w-4/5 space-y-2">
            <ArticleLoading />
            <ArticleLoading />
            <ArticleLoading />
            <ArticleLoading />
        </div>
    );
}

function ArticleLoading() {
    return (
        <div className="flex flex-col px-4 py-6 space-y-4 justify-between">
            <div className="bg-gray-100 rounded-md w-14 h-6"/>
            <div className="flex flex-col space-y-2">
                <div className="bg-gray-100 rounded-xl w-4/5 h-6"/>
                <div className="bg-gray-100 rounded-xl w-3/5 h-6"/>
            </div>
        </div>
    );
}
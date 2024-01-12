import Link from 'next/link';
import getColor from '@/app/lib/color';
import TopicTag from './TopicTag';
import Teaser from './Teaser';

export function MainArticle ({article}) {

    let bgColor = getColor(article.topic.id);

    return ((
            <div className="bg-gray-50 hover:bg-gray-100 flex flex-col justify-start p-4 py-14 hover:shadow-lg space-y-2 mx-2">
                <div className="text-xl">
                    <TopicTag topic={article.topic}/>
                </div>
                <div className="text-2xl xl:text-3xl">
                    <Teaser teaser={article.teaser}/>
                </div>
                <div className=" flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <Link href={`/articulos/${article.id}`}><h2>{article.title}</h2></Link>
                </div>
            </div>
        )
    );
}

export default MainArticle
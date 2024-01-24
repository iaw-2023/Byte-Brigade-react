import Link from 'next/link';
import { getMayLike } from '@/app/lib/texts';
import Article from '@/app/ui/components/articulos/[id]/Article';
import CommentSection from '@/app/ui/components/articulos/[id]/CommentSection';

export default async function Page ({ params }) {
    
    const articleId = params.id;

    return (
            <>
                <div className="flex flex-col">
                    <Article articleId={articleId}/>
                    <CommentSection articleId={ articleId } />
                </div>
                <div className="flex flex-col py-16 justify-start">
                    <p className="font-extralight uppercase pt-4 pb-2 mx-2 text-gray-900 text-xl">También te puede interesar</p>
                    <ul className="list-disc flex flex-col justify-between">
                        {getMayLike().map((liking, index) => {
                            return (
                                <Link key={index} href={liking.href} target="_blank">
                                    <li className="mx-8 list-item max-w-max text-gray-900 text-lg py-1 font-extralight">
                                        <p className="text-gray-900 hover:text-red-500">{liking.text}</p>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </>
    );
}
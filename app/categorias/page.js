import getColor from '@/app/lib/color';
import Link from 'next/link';
import { fetchTopics } from '../lib/data';

export default async function Page() {

    const topics = await fetchTopics();

    return (
            <>
                <h2 className="text-5xl font-extralight text-gray-900 mb-6 p-2">Categorías</h2>
                <div className="flex flex-col w-full lg:flex-row lg:flex-wrap gap-4 justify-center p-4">
                    {
                        topics.map(topic => {
                            return (
                                <Link
                                    key={topic.id}
                                    href= {
                                        {
                                            pathname: '/articulos',
                                            query: { topic: topic.id }
                                        }
                                    }
                                >
                                    <div className="flex grow border-4 border-white hover:border-red-100 rounded-2xl justify-center p-12 items-center lg:h-30" style={{backgroundColor: getColor(topic.id)}}>
                                        <p className="lg:w-96 text-white uppercase text-2xl font-extrabold text-center">{topic.name}</p>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </div>
            </>
    );
}
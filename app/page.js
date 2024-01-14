'use client';

import Image from 'next/image';
import sources from '@/app/lib/sources';
import { RandomSeeAlso as SeeAlso, RandomSubtitle as Subtitle} from './ui/RandomText';
import MainArticle from '@/app/ui/MainArticle';
import SmallerArticles from '@/app/ui/SmallerArticles';
import OtherArticles from '@/app/ui/OtherArticles';
import { fetchArticles } from './lib/data';
import Link from 'next/link';

export default async function Home() {
  
  const { articles, _ } = await fetchArticles();
  
  const mainArticle = articles.length > 0? articles[0] : null;
  const smallerArticles = articles.slice(1, 5);
  const otherArticles = articles.slice(5);
  
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-center items-center gap-4 p-4">
        <div className="w-72 h-72" style={{position: "relative"}}>
          <Image className="object-scale-down" fill={true} src={sources.fullLogo} alt="Logo de El Corchazo"/>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-gray-950 flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-serif font-semibold">El Corchazo</h1>
          <Subtitle />
        </div>
      </div>
      <MainArticle article={mainArticle}/>
      <SmallerArticles articles={smallerArticles}/>
      <div className="mx-2 py-12 space-y-4">
        <SeeAlso />
        <OtherArticles articles={otherArticles}/>
        <p className="font-extralight uppercase text-gray-900 text-2xl">Sorprendente. Necesito <Link className="text-red-400 underline hover:text-red-600 font-semibold" href='/articulos'>VER MÁS</Link></p>
      </div>
    </div>
  );
}

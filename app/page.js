'use client';

import Image from 'next/image';
import sources from '@/utils/sources';
import requests from '@/utils/requests';
import {getSubtitle, getSeeAlso} from '@/utils/texts';
import {useState, useRef,useEffect} from 'react';
import axios from 'axios';
import MainArticle from '@/components/MainArticle';
import SmallerArticles from '@/components/SmallerArticles';
import OtherArticles from '@/components/OtherArticles';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(requests.articles.index);
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  },[]);

  const mainArticle = articles.length > 0? articles[0] : null;
  const smallerArticles = articles.slice(1, 5);
  const otherArticles = articles.slice(5);
  
  return (
    <main className="container mx-auto space-y-10">
      <div className="flex w-full justify-center items-center gap-4 p-4">
        <div className="w-72 h-72" style={{position: "relative"}}>
          <Image className="object-scale-down" fill={true} src={sources.fullLogo} alt="Logo de El Corchazo"/>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-gray-950 flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-serif font-semibold">El Corchazo</h1>
          <span className="text-gray-900 text-base sm:text-lg md:text-2xl lg:text-4xl text-center font-serif font-semibold">{articles.length > 0 && getSubtitle()}</span>
        </div>
      </div>
      {mainArticle && <MainArticle article={mainArticle}/>}
      {smallerArticles.length > 0 && <SmallerArticles articles={smallerArticles}/>}
      {otherArticles.length > 0 && (
        <div className="mx-2 py-4 space-y-4">
          <div className="font-extralight uppercase text-gray-900 text-3xl">{`${getSeeAlso()}`}</div>
            <OtherArticles articles={otherArticles}/>
        </div>
      )}
    </main>
  )
}

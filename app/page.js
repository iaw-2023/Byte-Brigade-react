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
    <main className="container mx-auto space-y-10 my-12">
      <div className="flex justify-center items-center">
        <Image className="object-contain mr-4 rounded-full min-w-max shadow-xl" src={sources.fullLogo} width={130} height={130} alt="Logo de El Corchazo"/>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-gray-900 text-8xl text-center font-serif font-semibold">El Corchazo</h1>
          <span className="text-gray-900 text-3xl text-center font-serif font-semibold">{articles.length > 0 && getSubtitle()}</span>
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

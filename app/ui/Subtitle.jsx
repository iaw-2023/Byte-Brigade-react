'use client';

import { getSubtitle } from "../lib/texts";
import {useState, useEffect} from 'react';

export default function Subtitle() {
    const [subtitle, setSubtitle] = useState(getSubtitle());

    // useEffect(() => {
    //     const newSubtitle = getSubtitle();
    //     setSubtitle(newSubtitle);
    // }, []);

    return <span key={subtitle[0]} className="text-gray-950 text-base sm:text-lg md:text-2xl lg:text-4xl text-center font-serif font-semibold">{`${subtitle[1]}`}</span>
}
'use client';

import { getSeeAlso, getSubtitle } from '../lib/texts';
import { useState, useEffect } from 'react';

function RandomText({ getText, className }) {
    const [text, setText] = useState(null);

    useEffect(() => {
        setText(getText());
    }, []);

    return <p className={className}>{`${text}`}</p>
}

export function RandomSeeAlso() {
    return <RandomText className="font-extralight uppercase text-gray-900 text-3xl" getText={ getSeeAlso }/>
}

export function RandomSubtitle() {
    return <RandomText className="text-gray-950 text-base sm:text-lg md:text-2xl lg:text-4xl text-center font-serif font-semibold" getText={ getSubtitle } />
}
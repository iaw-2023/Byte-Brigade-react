'use client';

import { useState, useEffect } from 'react';
import { fetchUsdExchange } from '../lib/data';
import { getDolarReaction } from '../lib/texts';
import { usePathname } from 'next/navigation';

export default function DolarHoy() {
    const [usdExchange, setUsdExchange] = useState(0);
    const [dolarReaction, setDolarReaction] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        async function refreshUsdExchange() {
            const newExchange = await fetchUsdExchange('ars');
            setUsdExchange(newExchange);
        }
        setDolarReaction(getDolarReaction());
        refreshUsdExchange();
    }, []);

    return (usdExchange > 0) &&  (pathname === '/') && (
        <div
            className="flex flex-col xl:flex-row xl:gap-2
                xl:text-lg text-md font-light"
        >
            <p>El dolar hoy está a <span className='font-bold'>${ usdExchange }</span></p>
            <p>{dolarReaction}</p>
        </div>
    );
}
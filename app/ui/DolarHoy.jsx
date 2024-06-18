'use client';

import { useState, useEffect } from 'react';
import { fetchUsdExchange } from '../lib/data';
import { getDolarReaction } from '../lib/texts';

export default function DolarHoy() {
    const [usdExchange, setUsdExchange] = useState(null);
    const [dolarReaction, setDolarReaction] = useState("");

    useEffect(() => {
        async function getUsdExchange() {
            const arsExchange = await fetchUsdExchange("ars");
            setUsdExchange(arsExchange);
        }
        getUsdExchange();
        setDolarReaction(getDolarReaction());
    }, []);

    console.log(usdExchange);

    return usdExchange && (
        <div className="flex w-full gap-2">
            <p>El dolar hoy está a {usdExchange}.</p>
            <p>{dolarReaction}</p>
        </div>
    );
}
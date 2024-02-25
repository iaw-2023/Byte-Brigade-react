'use client';

import { getError } from "./lib/texts";
import { useEffect, useState } from 'react';

export default function Error({ error, reset }) {
    const [errorText, setErrorText] = useState("");
    useEffect(() => {
        setErrorText(getError());
    }, []);

    return (
        <div className="flex flex-col h-3/5 items-center justify-center">
            <p className="text-xl uppercase font-bold">
                Error
            </p>
            <p className="text-center space-x-1">
                <span className="inline-block">No se pudo cargar el contenido.</span>
                <span className="inline-block">{`${errorText}`}</span>
            </p>
            <button 
                className="bg-red-300 mt-2 px-4 py-2 hover:bg-red-400 rounded-lg text-gray-100"
                onClick={reset}
            >
                    Reintentar
            </button>
        </div>
    );
}
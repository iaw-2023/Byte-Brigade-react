'use client';

import { getError } from "./lib/texts";
import { useEffect, useState } from 'react';

export default function Error({ error, reset }) {
    const [errorText, setErrorText] = useState("");
    useEffect(() => {
        setErrorText(getError());
    }, []);

    return (
        <div className="flex flex-col h-96 items-center justify-center">
            <p className="text-xl uppercase font-bold mb-2">
                Error
            </p>
            <p className="text-center space-x-1">
                <span className="inline-block">No se pudo cargar el contenido.</span>
                <span className="inline-block">{`${errorText}`}</span>
            </p>
            <button
                className="bg-red-300 mt-8 px-4 py-2 hover:bg-red-400 rounded-lg text-gray-100"
                onClick={reset}
            >
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Reintentar</span>
            </button>
        </div>
    );
}
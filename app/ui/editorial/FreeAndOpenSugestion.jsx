'use client';

import { useState } from 'react';
import { CardBrick } from "@/app/ui/CardBrick";
import clsx from 'clsx';

export default function FreeAndOpenSuggestion() {
    const [status, setStatus] = useState('reading');

    const ifReading = (
        true
    );

    return (
        status === 'reading' ? (
            <div className="flex justify-center w-full">
                <button
                    className="p-4 my-6 bg-red-200 text-gray-50 text-center w-3/4 xl:w-1/2 outline outline-1 outline-gray-200 rounded-lg
                                text:lg sm:text-xl font-light uppercase hover:outline-2 hover:bg-red-300"
                    onClick={() => setStatus('writing')}
                >
                    <span className="drop-shadow-[0_1.2px_2px_rgba(0,0,0,0.4)]">Quiero apoyar la idoneidad</span>
                </button>
            </div>
        ) : <ParticipationTools status={status} setStatus={setStatus} />
    );
}

function ParticipationTools({ status, setStatus }) {
    return (
        <>
            {
                status === 'writing' && (
                    <div className="flex flex-col xl:w-3/4 gap-y-2 font-light">
                        <label className="text-xl" htmlFor="body">Tu comentario desinteresado</label>
                        <textarea
                            className="resize-none grow rounded-lg outline outline-1 p-2 focus:bg-gray-50
                                outline-gray-200 focus:outline-gray-300"
                            id="body"
                            rows="5"
                            placeholder=''
                        />
                        <div className="flex justify-center mx:justify-start">
                            <button
                                className="xl:mx-2 mt-3 w-fit px-6 py-3 bg-red-200 text-gray-50 text-center outline outline-1 outline-gray-200 rounded-lg text-lg
                            uppercase hover:outline-2 hover:bg-red-300"
                                onClick={() => setStatus('briving')}
                            >
                                <span className="drop-shadow-[0_1.2px_2px_rgba(0,0,0,0.4)]">Ya puedo sentir la idoneidad</span>
                            </button>
                        </div>
                    </div>
                )
            }
            {
                status === 'briving' && (
                    <div className="outline outline-1 outline-gray-200 rounded-lg xl:w-3/4">
                        <CardBrick
                            onSubmit={async () => 1}
                            onReady={async () => 1}
                            onError={async () => 1}
                        />
                    </div>
                )
            }
        </>
    );
}


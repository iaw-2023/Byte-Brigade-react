'use client';

import { useState } from 'react';
import { CardBrick } from "@/app/ui/CardBrick";
import clsx from 'clsx';

export default function FreeAndOpenSuggestion() {
    const [status, setStatus] = useState('reading');

    return (
        status === 'reading' ? (
            <div className="flex justify-center xl:justify-start w-full">
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
        <div className="ml-0 xl:ml-6">
            {status === 'writing' && <ParticipationForm setStatus={setStatus} />}
            {status === 'briving' && <Checkout />}
        </div>
    );
}

function ParticipationForm({ setStatus }) {
    return (
        <div className="flex flex-col xl:w-1/2 gap-y-2 font-light">
            <label className="text-sm uppercase" htmlFor="body">Tu comentario desinteresado</label>
            <textarea
                className="resize-none grow rounded-lg outline outline-1 p-3 focus:bg-gray-50
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
    );
}

function Checkout() {
    const [isFillingForm, setIsFillingForm] = useState(true);

    return (
        <div className="w-full xl:w-3/4 font-light">
            {
                isFillingForm &&
                < div className="outline-gray-200 outline outline-1 rounded-lg" >
                    <CardBrick
                        onSubmit={async () => setIsFillingForm(false)}
                        onReady={async () => null}
                        onError={async () => null}
                    />
                </div>
            }
            {
                isFillingForm || (
                    <div className="flex flex-col px-8 py-4 w-full xl:w-3/4 justify-center items-center gap-1 text-md md:text-lg text-center
                        outline outline-1 rounded-md outline-lime-500"
                    >
                        <p className="text-3xl uppercase mb-2">¡Éxito!</p>
                        <p>
                            Tus comentarios fueron enviados. Te prometemos tenerlos <span className="italic">muy pero muy</span> en
                            cuenta.
                        </p>
                        <p>Si tenés más sugerencias, no dudes en hacérnoslas llegar, pero de una a la vez.</p>
                    </div>
                )
            }
        </div>
    );
}
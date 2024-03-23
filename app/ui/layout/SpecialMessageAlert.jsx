'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { fetchEditorial } from '@/app/lib/data';
import isEmptyObject from '@/app/lib/isEmptyObject';
import ElCorchazo from '../ElCorchazoSpan';
import Link from "next/link";

const pathCountThreshold = 5;

export default function SpecialMessageAlert() {
    const [editorial, setEditorial] = useState({});
    const [visitedPathsCount, setVisitedPathsCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        async function fetchAndSetEditorial() {
            const latestEditorial = await fetchEditorial();
            setEditorial(latestEditorial);
            if (latestEditorial && pathname !== '/editorial') {
                setShowMessage(true);
            }
        }
        fetchAndSetEditorial();
    }, []);

    useEffect(() => {
        if (isEmptyObject(editorial)) return;
        if (pathname !== '/editorial') {
            if (!showMessage) {
                if (visitedPathsCount === pathCountThreshold) {
                    setVisitedPathsCount(0);
                    setShowMessage(true);
                } else {
                    setVisitedPathsCount(vpc => (vpc + 1));
                }
            }
        } else {
            setVisitedPathsCount(0);
            setShowMessage(false);
        }
    }, [pathname]);

    function manageClick() {
        setShowMessage(false);
        setVisitedPathsCount(0);
    }

    return showMessage && (
        <div className="bg-red-300 flex py-1 px-2 md:py-2 items-center justify-center border-b border-gray-100 border-opacity-80">
            <Link className="text-gray-800 text-center grow" href="/editorial">
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] uppercase text-gray-100 mr-1 font-bold lg:w-3/4">Importante</span> Un mensaje del editor en jefe de <span className="inline-block"><ElCorchazo /></span>.
            </Link>
            <button
                className="grow-0 mr-2"
                onClick={() => manageClick}
            >
                ✖
            </button>
        </div>
    );
}
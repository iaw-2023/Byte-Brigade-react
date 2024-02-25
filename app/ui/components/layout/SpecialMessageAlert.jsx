'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from "next/link";

export default function SpecialMessageAlert() {
    const [showMessage, setShowMessage] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShowMessage(pathname !== '/idoneidad');
    }, [pathname]);

    return showMessage && (
        <Link className="bg-red-400 flex py-1 px-2 md:py-2 items-center justify-center border-b border-gray-100 border-opacity-80" href="/idoneidad">
            <p className="text-gray-800 text-center">
                <span className="uppercase text-gray-100 mr-1 font-bold lg:w-3/4">Importante</span> Un mensaje del editor en jefe de <span className="font-serif font-semibold inline-block">El Corchazo</span>.
            </p>
        </Link>
    );
}
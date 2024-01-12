'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation';


export default function PaginationButton({ type, disabled }) {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    function handleClick() {
        const params = new URLSearchParams(searchParams);
        params.set('page', (type == 'next'? currentPage + 1 : currentPage - 1).toString());  
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <button disabled={disabled} onClick={handleClick} className="font-serif disabled:text-gray-300 text-gray-950 text-3xl hover:text-red-300">
            {type === "next"? "Siguiente" : "Anterior"}
        </button>
    );
}
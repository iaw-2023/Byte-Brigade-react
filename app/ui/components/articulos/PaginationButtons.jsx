'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function PaginationButton({ onClick, text, disabled }) {
    return (
        <button disabled={disabled} onClick={onClick} className="font-serif disabled:text-gray-200 text-gray-950 text-3xl hover:text-red-300">
            {text}
        </button>
    );
}

export function NextButton({ totalPages }) {
    const { push } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let currentPage = Number(searchParams.get('page')) || 1;
    
    function handleClick() {
        if (!isDisabled()) {
            const params = new URLSearchParams(searchParams);
            params.set('page', currentPage + 1);  
            push(`${pathname}?${params.toString()}`);
        };
    }

    function isDisabled() {
        return (totalPages == 1) || (currentPage >= totalPages) || (currentPage < 1);
    }

    return <PaginationButton onClick={handleClick} text={"Siguiente"} disabled={isDisabled()}/>
}

export function PrevButton({ totalPages }) {
    const { push } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let currentPage = Number(searchParams.get('page')) || 1;
    
    function handleClick() {
        if (!isDisabled()) {
            const params = new URLSearchParams(searchParams);
            params.set('page', currentPage - 1);  
            push(`${pathname}?${params.toString()}`);
        };
    }

    function isDisabled() {
        return (totalPages == 1) || (currentPage <= 1);
    }

    return <PaginationButton onClick={handleClick} text={"Anterior"} disabled={isDisabled()}/>
}
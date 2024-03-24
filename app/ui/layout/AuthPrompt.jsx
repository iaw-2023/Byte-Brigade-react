'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Spinner from '../Spinner';

export default function AuthPrompt() {
    const { user, error, isLoading } = useUser();

    let toRender = '';
    const loadingMessage = 'Cargando como te cargaban en la escuela...';

    if (isLoading)
        toRender = (
            <>
                <div className="hidden md:flex space-x-2 items-center text-sm">
                    <Spinner dimension="4" />
                    <p className="py-1">{loadingMessage}</p>
                </div>
                <div className="flex space-x-2 items-center md:hidden text-sm sm:text-md w-1/2">
                    <Spinner dimension="8" />
                    <div className="flex flex-col items-start px-1">
                        <p>{loadingMessage}</p>
                    </div>
                </div>
            </>
        );
    else if (error)
        toRender = <p>{error.message}</p>;
    else {
        toRender = user ? (
            <div className="flex flex-col md:flex-row items-end md:gap-2 md:items-center">
                <p>Bienvenido, {user.nickname}</p>
                <p className="hidden md:flex">|</p>
                <a href="/api/auth/logout" className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] text-red-300 hover:text-gray-950">
                    Cerrar sesión
                </a>
            </div>
        ) : (
            <a href="/api/auth/login" className="drop-shadow-[0.1px_1.2px_1.2px_rgba(0,0,0,0.2)] text-red-300 hover:text-gray-950">
                Iniciar sesión
            </a>
        );
    }

    return (
        <div className="flex font-light justify-end text-lg xl:text-xl mr-4 md:mr-10">
            {toRender}
        </div>
    );
}

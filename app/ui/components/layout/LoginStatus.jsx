'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Spinner from '../Spinner';

export default function AuthOptions() {
    const { user, error, isLoading } = useUser();

    let toRender = '';

    if (isLoading)
        toRender = (
            <>
                <div className="hidden md:flex space-x-2 items-baseline">
                    <Spinner dimension="6" />
                    <p className="py-1">Cargando como te cargaban en la escuela</p>
                </div>
                <div className="flex space-x-2 items-center md:hidden">
                    <Spinner dimension="8" />
                    <div className="flex flex-col items-start">
                        <p>Cargando como te cargaban</p>
                        <p>en la escuela</p>
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
                <a href="/api/auth/logout" className="font-semibold text-red-300 hover:text-red-500">
                    Cerrar sesión
                </a>
            </div>
        ) : (
            <a href="/api/auth/login" className="font-semibold text-red-300 hover:text-red-500">
                Iniciar sesión
            </a>
        );
    }

    return (
        <div className="flex font-light justify-end text-xl md:text-2xl mr-4 md:mr-10">
            {toRender}
        </div>
    );
}

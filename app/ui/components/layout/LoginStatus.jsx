'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Spinner from '../Spinner';

export default function AuthOptions() {
    const { user, error, isLoading } = useUser();

    let toRender = '';

    if (isLoading)
        toRender = (
            <>
                <Spinner dimension={5} />
                <p className="py-1 ml-2">Cargando como te cargaban en la escuela...</p>
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
                    Logout
                </a>
            </div>
        ) : (
            <a href="/api/auth/login" className="font-semibold text-red-300 hover:text-red-500">
                Login
            </a>
        );
    }

    return (
        <div className="flex font-light items-baseline justify-end text-xl md:text-xl xl:text-2xl mr-4 md:mr-10">
            {toRender}
        </div>
    );
}

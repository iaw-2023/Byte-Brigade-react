'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthOptions() {
    const { user, error, isLoading } = useUser();

    let toRender = '';

    if (isLoading)
        toRender = <p>Cargando como te cargaban en la escuela...</p>;
    else if (error)
        toRender = <p>{error.message}</p>;
    else {
        toRender = user ? (
            <div className="flex flex-col items-end md:gap-2 md:items-center md:flex-row">
                <p>Bienvenido, {user.name}</p>
                <p className="hidden md:flex">|</p>
                <a href="/api/auth/logout" className="font-semibold text-red-300 underline">
                    Logout
                </a>
            </div>
        ) : (
            <a href="/api/auth/login" className="font-semibold text-red-300 underline">
                Login
            </a>
        );
    }

    return (
        <div className="flex justify-end text-lg md:text-xl xl:text-2xl mr-4 md:mr-10">
            {toRender}
        </div>
    );

}

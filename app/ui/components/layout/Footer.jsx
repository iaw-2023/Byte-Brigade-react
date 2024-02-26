import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="flex items-center justify-center">
                <Link href="/" className="text-gray-950 font-serif text-lg md:text-xl lg:text-2xl">
                    El Corchazo
                </Link>
            </div>
            <div className="mt-2 flex justify-center border-0 border-t-2 border-gray-400 items-center bg-gray-950 h-fit w-full">
                <p className="text-white text-xs p-2 font-extralight">Copyright © 2023 - Imaginate reservar los derechos para esto</p>
            </div>
        </>
    );
}
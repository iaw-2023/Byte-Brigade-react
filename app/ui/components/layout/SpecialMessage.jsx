import Link from "next/link";

export default function SpecialMessage() {
    return (
        <Link className="bg-red-400 flex py-1 px-2 md:py-2 items-center justify-center border-b border-gray-100 border-opacity-80" href="/">
            <p className="text-gray-800 text-center">
                <span className="uppercase text-gray-100 mr-1 font-bold lg:w-3/4">Importante</span> Un mensaje del editor en jefe de <span className="font-serif font-semibold inline-block">El Corchazo</span>.
            </p>
        </Link>
    );
}
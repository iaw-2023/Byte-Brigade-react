
import Link from 'next/link';
import TopicsRow from './TopicsRow';

export default function Navbar() {

    return (
        <nav id="nav" className="bg-gray-950 flex justify-start items-baseline p-4 w-full mb-8 gap-4 border-0 border-b-2 border-gray-400">
            <Link href='/'>
                <h1 className="text-gray-200 min-w-max hover:text-red-200 font-serif text-4xl ml-1">
                    El Corchazo
                </h1>
            </Link>
            <div className="flex uppercase w-full justify-end visible xl:hidden text-gray-200 text-lg xs:text-xl font-thin hover:text-red-200 pr-1 py-1">
                    <Link href="/categorias">Categorías</Link>
            </div>
            <TopicsRow />
        </nav>
    )
}
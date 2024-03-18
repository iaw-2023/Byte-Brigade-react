import Link from "next/link";
import TopicsRow from "./TopicsRow";
import { merriweather } from "../../fonts";

export default function Navbar() {
  return (
    <nav
      id="nav"
      className="items-end font-light bg-gray-950 flex py-4 w-full mb-8 gap-4 border-0 border-b-2 border-gray-400"
    >
      <Link href="/">
        <h1 className="ml-4 text-gray-200 min-w-max font-serif text-4xl">
          El Corchazo
        </h1>
      </Link>
      <div
        className={`${merriweather.className} font-light flex uppercase w-full justify-end visible xl:hidden text-gray-200 text-lg xs:text-xl hover:text-red-200 pr-2 py-1`}
      >
        <Link href="/categorias">Categorías</Link>
      </div>
      <TopicsRow />
    </nav>
  );
}

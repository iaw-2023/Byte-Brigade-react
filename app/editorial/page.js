import { fetchLatestEditorial } from "../lib/data";
import ElCorchazo from "../ui/ElCorchazoSpan";
import { SpecialTag as TopicTag } from "../ui/TopicTags";

export default async function Page() {
    const editorial = await fetchLatestEditorial();

    return (
        <div className="flex flex-col gap-2">
            <TopicTag text="Editorial" />
            <h1 className="py-1 text-4xl font-light">Un mensaje especial del editor en jefe de <ElCorchazo /></h1>
            <p className="text-xl font-serif text-gray-400 italic">por Don Maurizio Corchini</p>
            <div
                className="pl-6 pr-14 py-6 font-serif space-y-4 text-lg"
                dangerouslySetInnerHTML={{ __html: editorial.body }}
            />
        </div>
    );
}
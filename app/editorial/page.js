import { fetchEditorial } from "../lib/data";
import isEmptyObject from "../lib/isEmptyObject";
import ElCorchazo from "../ui/ElCorchazoSpan";
import { SpecialTag as TopicTag } from "../ui/TopicTags";
import FreeAndOpenSuggestion from "../ui/editorial/FreeAndOpenSugestion";

export default async function Page() {
    const editorial = await fetchEditorial();

    return (
        <div className="flex flex-col gap-2">
            {
                isEmptyObject(editorial) ? (
                    <>
                        <h1 className="py-2 text-4xl uppercase font-light mb-4">👀 Hoy no hay editorial, mañana sí 👀</h1>
                        <div className="font-light text-2xl space-y-2">
                            <p className="text-2xl">
                                Nuestro editor, el excelentísimo Don Maurizio Corchini, no nos cree merecedor de sus dulces palabras - todavía.
                            </p>
                            <p className="text-2xl">
                                Andá tranquilo, nosotros te avisamos.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <TopicTag text="Editorial" />
                        <h1 className="py-2 text-4xl font-light">Un mensaje especial del editor en jefe de <ElCorchazo /></h1>
                        <p className="text-xl font-serif text-gray-400 italic">por Don Maurizio Corchini</p>
                        <div
                            className="pl-6 pr-14 py-6 font-serif space-y-4 text-lg"
                            dangerouslySetInnerHTML={{ __html: editorial.body }}
                        />
                        <div className="mt-12 mb-32">
                            <FreeAndOpenSuggestion />
                        </div>
                    </>
                )
            }
        </div>
    );
}
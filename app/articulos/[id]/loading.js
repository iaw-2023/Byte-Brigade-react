export default function Page() {

    const baseClass = 'bg-gray-100 animate-pulse'

    const paragraph = (
        <div className="flex flex-col space-y-2">
            <div className={`${baseClass} h-8 w-11/12 rounded-lg`}></div>
            <div className={`${baseClass} h-8 w-3/5 rounded-lg`}></div>
            <div className={`${baseClass} h-8 w-5/6 rounded-lg`}></div>
            <div className={`${baseClass} h-8 w-1/2 rounded-lg`}></div>
        </div>
    );

    const hiddenParagraph = (
        <div className="hidden xl:block">
            {paragraph}
        </div>
    );


    return (
        <div className="flex flex-col gap-2">
            {/* Categoría */}
            <div className={`${baseClass} h-8 w-56 xl:w-1/12 rounded-sm`}></div>
            {/* Copete */}
            <div className={`${baseClass} h-8 w-72 xl:w-1/6 rounded-lg`}></div>
            {/* Título */}
            <div className="flex-col space-y-1">
                <div className={`${baseClass} h-10 w-full xl:w-3/4 rounded-lg`}></div>
                <div className={`${baseClass} h-10 w-48 xl:w-2/5 rounded-lg`}></div>
            </div>

            {/* Artículo */}
            <div className="flex flex-col space-y-3 pl-4 mt-6">
                {paragraph}
                {paragraph}
                {paragraph}
                {hiddenParagraph}
            </div>
            <div
                className="mx-6 pr-8 font-serif space-y-4 text-lg"
            />
        </div>
    );
}
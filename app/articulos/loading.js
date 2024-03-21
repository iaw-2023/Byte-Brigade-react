import { RandomLoading } from "../ui/components/RandomText"

export default function Loading() {
    return (
        <div className="flex flex-col xl:w-3/4 space-y-6">
            <div className="text-3xl md:text-4xl font-extralight text-gray-900">
                <RandomLoading />
            </div>
            <div className="flex flex-col divide-y divide-gray-100 justify-center space-y-2">
                {
                    Array.from({ length: 10 }).map((_, index) => {
                        return (
                            <div key={index} className="flex flex-col py-2 space-y-2">
                                <div className="animate-pulse bg-gray-50 h-6 rounded-sm w-48 xl:w-1/6"></div>
                                <div className="animate-pulse bg-gray-50 h-8 rounded-lg w-96 xl:w-3/4"></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
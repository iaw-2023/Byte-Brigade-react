'use client';

import { CardBrick } from "@/app/ui/components/CardBrick";

export default function Page() {
    return <div className="w-1/2 border-black border-2 rounded-lg">
        <CardBrick
            onSubmit={async () => 1}
            onReady={async () => 1}
            onError={async () => 1}
        />
    </div>;
}
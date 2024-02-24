'use client';

import { CardBrick } from "@/app/ui/components/CardBrick";

export default function Page() {
    return <div className="w-64 h-64">
        <CardBrick
            onSubmit={() => 1}
            onReady={() => 1}
            onError={() => 1}
        />
    </div>;
}
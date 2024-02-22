'use client';

import { CardPayment } from '@mercadopago/sdk-react';
import { initialization, onSubmit, onReady, onError } from '@/app/lib/mpInit';


export function CardBrick() {
    return <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
    />;
}
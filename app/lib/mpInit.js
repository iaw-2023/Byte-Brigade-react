import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago(process.env.MP_PUBLIC_KEY);

export const settings = {
    initialization: {
        amount: 100, // monto a ser pago
        payer: {
            email: "",
        }
    }
}
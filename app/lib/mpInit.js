import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago(process.env.NEXT_PUBLIC_MP_KEY);

export const settings = {
    initialization: {
        amount: 100, // monto a ser pago
        payer: {
            email: "",
        }
    },
    customization: {
        visual: {
            style: {
                customVariables: {
                    textPrimaryColor: "#fffff",
                    baseColor: "#fdc9c7",
                    // buttonTextColor: "#fdc9c7"
                    buttonTextColor: "#fffff"
                }
            }
        }
    }
}
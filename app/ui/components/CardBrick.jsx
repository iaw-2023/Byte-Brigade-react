'use client';

import { CardPayment } from '@mercadopago/sdk-react';
import { settings } from '@/app/lib/mpInit';

// export const onSubmit = async (formData) => {
//     // callback llamado al hacer clic en el botón enviar datos
//     return new Promise((resolve, reject) => {
//         fetch('/process_payment', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => response.json())
//             .then((response) => {
//                 // recibir el resultado del pago
//                 resolve();
//             })
//             .catch((error) => {
//                 // manejar la respuesta de error al intentar crear el pago
//                 reject();
//             });
//     });
// };


// export const onError = async (error) => {
//     // callback llamado para todos los casos de error de Brick
//     console.log(error);
// };


// export const onReady = async () => {
//     /*
//       Callback llamado cuando Brick está listo.
//       Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
//     */
// };


export function CardBrick({ onSubmit, onReady, onError }) {
    const { initialization } = settings;

    return <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
    />;
}
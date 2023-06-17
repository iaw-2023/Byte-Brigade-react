const SUBTITLES = [
    "¿Qué vas a hacer?¿Leer La Brújula?",
    "Un saludo a todos los giles con carrito de compras",
    "ayuda me tienen encerrado escribiendo pavadas",
    `Felicitaciones, <<USER>>, sos el visitante NaN!!`,
    "No es que la realidad sea muy distinta, realmente",
    "Desde el 1 a 1 que no la pasabas tan bien"
];

const SEE_ALSOS = [
    'Más conocimiento Arcano',
    'Reventante las pocas neuronas que te quedan con estas pavadas',
    'Tenés que agarrar la pala, pero también está esto',
    'No scrolleés más que me ponés en evidencia la falta de contenido',
    'Te ganaste más porquerías por ser gauchito',
    'No te vayas que tengo que vender publicidad',
    'PERO AÚN HAY MÁS',
    'La página es pobre, pero un par de giladas más hay'
];

const MAY_LIKE = [
    'Ir a la iglesia',
    'Plantar un niño',
    'Hacer una bolucompra',
    'Pasarme el número de la tarjeta',
    'Abrazar a tu perro',
    'Aflojarle a las pepas',
    'Limpiar la heladera',
    'Ver si te acordás algo de Laravel',
    'Abrir un videoclub',
    'Errarle de grupo de Whatsapp'
]

export function getSubtitle() {
    let index = Math.floor(Math.random() * SUBTITLES.length);
    return SUBTITLES[index];
};

export function getSeeAlso() {
    let index = Math.floor(Math.random() * SEE_ALSOS.length);
    return SEE_ALSOS[index];
}

export function getMayLike(array = MAY_LIKE, elements = 4) {
    if (elements >= array.length)
        return array.slice();

    const randomElements = []
    let index;
    let element;
    for (let inserted = 0; inserted < elements; inserted++) {
        do {
            index = Math.floor(Math.random() * array.length);
            element = array[index];
        } while (randomElements.includes(element))
        randomElements.push(element);
    }

    return randomElements;
}
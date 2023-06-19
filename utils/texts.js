const SUBTITLES = [
    "¿Qué vas a hacer?¿Leer La Brújula?",
    "Un saludo a todos los giles con carrito de compras",
    "ayuda me tienen encerrado escribiendo pavadas",
    `Felicitaciones, <<USER>>, sos el visitante NaN!!`,
    "No es que la realidad sea muy distinta, realmente",
    "Desde el 1 a 1 que no la pasabas tan bien",
    'Llamando a la ignorancia "minimalismo" de la cuna a la tumba'
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
    'Errarle de grupo de Whatsapp',
    'Mejorar la técnica de sentadillas',
    'Sacar al abuelo del lavarropas',
    'Mandar "RATONES" al 8008',
    'Comprar algo en Sprayette'
]

const SEARCHING = [
    'Viendo qué hay en la heladera',
    'Agarrando la pala',
    'Googleando',
    'Mirando en el depósito a ver si quedó algo',
    'Revisando si hay stock',
    'Pidiendo a capital',
]

const NOT_FOUND = [
    'No encontramos nada. Bajón.',
    'No hay resultados. Probá clickear más rápido.',
    'Hoy no hay resultados, mañana sí.',
    'Por ahora, nada. Andá a ver si llueve y probá de nuevo.'
];

const MANIFESTO = `No. No se pudo. Es verdaderamente una lástima, porque podría haber sido diferente. Ahora podrías estar leyendo unos artículos divertidísimos, pero no va a ser ahora. No va a ser dentro de un rato, y posiblemente no sea esta semana, ni este mes, y -siendo honesto- tampoco para fin de año.
Quizás quien debía escribir el artículo tuvo un problema. Quizás no quiso. Quizás faltó tiempo. Quizás, por qué no, el tiempo no alcanzó. O, tal vez, alcanzó, pero no se aprovechó.
No desesperemos. No lloremos por el artículo que no está, y sonriamos pensando en el que podría haber sido.`

function getRandomArray(array, length) {
    if (length >= array.length)
        return array.slice();

    const randomElements = []
    let index;
    let element;
    for (let inserted = 0; inserted < length; inserted++) {
        do {
            index = Math.floor(Math.random() * array.length);
            element = array[index];
        } while (randomElements.includes(element))
        randomElements.push(element);
    }

    return randomElements;
}

function getRandomElement(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

export function getSubtitle() {
    return getRandomElement(SUBTITLES);
};

export function getSeeAlso() {
    return getRandomElement(SEE_ALSOS);
}

export function getSearching() {
    return `${getRandomElement(SEARCHING)}...`;
}

export function getMayLike() {
    return getRandomArray(MAY_LIKE, 4);
}

export function getNotFound() {
    const chance = Math.random() * 100;
    if (chance > 95)
        return MANIFESTO;
    else
     return getRandomElement(NOT_FOUND);
}



const DOLAR_REACTION = [
    'Que lo del corchazo quede en el título',
    'Mamita querida',
    'Esto es culpa de Arjona',
    'Y ni se te ocurra pensar en el blue',
    'De repente vivir a polenta no se ve tan mal',
    '¿Qué vale una pelopincho?',
    'Igual no quería tener gas en casa',
    'Acordate cómo lloraste cuando se puso a 10',
    'Oh yeah Mister Washington',
    'Este verano vacaciones en Médanos'
];


const SUBTITLES = [
    '¿Qué vas a hacer?¿Leer La Brújula?',
    'Un saludo a todos los giles con carrito de compras',
    'ayuda me tienen encerrado escribiendo pavadas',
    'Felicitaciones, <<USER>>, sos el visitante NaN!!',
    'No es que la realidad sea muy distinta, realmente',
    'Desde el 1 a 1 que no la pasabas tan bien',
    'Llamando a la ignorancia "minimalismo" de la cuna a la tumba',
    'Quizás el botón de like son los amigos que hicimos en el camino'
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

class MayLike {
    constructor(text, href) {
        this.text = text;
        this.href = href;
    }
}

const MAY_LIKE = [
    new MayLike('Ir a la iglesia', 'https://youtu.be/ubX_aqXctRk'),
    new MayLike('Plantar un niño', 'https://youtu.be/b3_lVSrPB6w'),
    new MayLike('Hacer una bolucompra', 'https://youtu.be/IqUN4YdQgVQ'),
    new MayLike('Pasarme el número de la tarjeta', 'https://youtu.be/Hk3hdu-dB2c'),
    new MayLike('Abrazar a tu perro', 'https://youtu.be/q6EoRBvdVPQ'),
    new MayLike('Aflojarle a las pepas', 'https://youtu.be/ZZ5LpwO-An4'),
    new MayLike('Limpiar la heladera', 'https://youtu.be/I482t6JhL4g'),
    new MayLike('Ver si te acordás algo de Laravel', 'https://youtu.be/srTqxL_6Ysg'),
    new MayLike('Abrir un videoclub', 'https://youtu.be/iIY5b1JMvGs'),
    new MayLike('Errarle de grupo de Whatsapp', 'https://youtu.be/GmSSUr0ppHg'),
    new MayLike('Mejorar la técnica de sentadillas', 'https://youtu.be/atv8pf0jBNE'),
    new MayLike('Sacar al abuelo del lavarropas', 'https://youtu.be/sk0ARmuGvjY'),
    new MayLike('Mandar "RATONES" al 8008', 'https://youtu.be/8Ht0tWrb3HA'),
    new MayLike('Comprar algo en Sprayette', 'https://youtu.be/8AyVh1_vWYQ'),
    new MayLike('Ir a la esquina a ver si subió el dólar', 'https://youtu.be/9U4Ha9HQvMo'),
    new MayLike('Twittear sin hacerte el copado', 'https://clickhole.com/heartbreaking-the-worst-person-you-know-just-made-a-gr-1825121606/'),
    new MayLike('Preguntarte cómo hiciste para encontrarle un pelo a un huevo', 'https://youtu.be/7MbnSRrwW10?t=693')
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

const ERROR = [
    'Algo tocaste.',
    'SACÁ LA MANO.',
    'Esperá cinco que le damos de comer a los monos.',
    'Imaginate un gráfico gracioso.'
]

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

export function getError() {
    return getRandomElement(ERROR);
}

export function getDolarReaction() {
    return getRandomElement(DOLAR_REACTION);
}

export function getNotFound() {
    const chance = Math.random() * 100;
    if (chance > 95)
        return MANIFESTO;
    else
        return getRandomElement(NOT_FOUND);
}


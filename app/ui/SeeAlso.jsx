'useClient'

import { getSeeAlso } from '../lib/texts';
import { useState } from 'react';

export default function SeeAlso() {
    const [seeAlso, setSeeAlso] = useState(getSeeAlso());

    return <p key={seeAlso[0]} className="font-extralight uppercase text-gray-900 text-3xl">{`${seeAlso[1]}`}</p>
}
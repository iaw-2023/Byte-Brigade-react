export default function MessageFromEditor() {
    return (
        <div className="">
            <h2>Un mensaje del Editor en Jefe de <span>El Corchazo</span>, Maurizio Corchini</h2>
            <p>
                {
                    "Desde sus inicios en 1945, El Corchazo no ha depuesto en instancia alguna su irrenunciable compromiso con la verdad." +
                    "Como lo designara su fundador, Don Vito Corchini, mi abuelo, un medio que cede ante intereses externos, sean estos políticos, monetarios o sensuales, " +
                    "no merece el privilegio de contarse a sí mismo como comunicador social."
                }
            </p>
            <p>
                {
                    "Considerando la naturaleza de los tiempos que corren -vertiginosos, volátiles, violentos-, lejos de renunciar a los ideales que concibieron a la publicación " +
                    "en la que ustedes día a día confía, El Corchazo desea redoblar la apuesta. No perdiendo de vista que sus humildes lectores son tan parte del staff como lo es " +
                    "el conglomerado estelar de redactores (sean los que operan desde este plano existencial o los que lo hacen -prolíficamente, además- desde el otro mundo), hoy " +
                    "hemos decidido dar un paso más hacia alcanzar convertirnos en la publicación popular que estamos destinados a ser."
                }
            </p>
        </div>
    );
}
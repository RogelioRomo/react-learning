/* Creamos el componente en un archivo aparte (normalmente esto
es lo que se hace cuando creamos componentes) y lo exportamos al main
que es el archivo que normalmente se linkea al index.html para
que pueda ser impreso en el navegador
*/

/*
import "./TwitterFollowCard.css"

export function TwitterFollowCard() {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-img"
                src="https://unavatar.io/soundcloud/gorillaz" alt="gorillaz avatar" />
                <div className="tw-followCard-div">
                    <strong>Gorillaz</strong>
                    <span className="tw-followCard-span">@gorillaz</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Follow</button>
            </aside>
        </article>
    )
}
*/

/* Lo anterior es totalmente correcto y podriamos dejarlo asi,
sin embargo lo importante es poder reutilizar nuestros componentes
por lo que la mejor manera es dandole parametros, una funcion que
recibe parametros siempre se puede reutilizar */

import "./TwitterFollowCard.css"

export function TwitterFollowCard({ userName, children, isFollowing }) {
    const imageSrc= `https://unavatar.io/twitter/${userName}`
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-img"
                src={ imageSrc } alt="gorillaz avatar" />
                <div className="tw-followCard-div">
                    <strong>{ children }</strong>
                    <span className="tw-followCard-span">@{ userName }</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Follow</button>
            </aside>
        </article>
    )
}

/* Notese que para la imagen, lo que podemos hacer es dejarlo
declarado como una constante la cual recibira el userName y 
de esa manera el URL se hace dinamico y reutilizable. Podriamos
evitar la linea de creacion de la constante simplemente poniendo
de la siguiente manera entre corchetes (importante eso)
<img className="tw-followCard-img" src={`https://unavatar.io/soundcloud/${userName}`} alt="user name avatar" />*/
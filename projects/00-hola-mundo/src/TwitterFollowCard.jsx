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

import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard ({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const imageSrc = `https://unavatar.io/twitter/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-img'
          src={imageSrc} alt='gorillaz avatar'
        />
        <div className='tw-followCard-div'>
          <strong>{children}</strong>
          <span className='tw-followCard-span'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}

/*
Notese que para la imagen, lo que podemos hacer es dejarlo declarado como una constante la cual recibira el userName y de esa manera el URL se hace dinamico y reutilizable. Podriamos
evitar la linea de creacion de la constante simplemente poniendo de la siguiente manera entre corchetes (importante eso)
<img className="tw-followCard-img" src={`https://unavatar.io/soundcloud/${userName}`}alt="user name avatar" />

Mas puntos a notar.
Las constantes 'text' y 'buttonClassName' las estamos implementando para hacer que la interfaz de usuario
sea mas dinamica, esto pues, estamos queriendo implementar estados en donde dependiendo de este mismo
el texto del boton cambie de Seguir a Siguiendo o viceversa, lo mismo con los estilos que definimos en buttonClassName

El estado que decidimos usar es useState ya que con este hook lo que podemos hacer es nombrar variables que definan
algun estado que nosotros queramos. Por convencion cuando se usa este hook usamos destructuracion para nombrar a las variables
por eso es que en nuestro ejemplo [isFollowing, setIsFollowing] esta entre llaves.

Al final creamos 'handleClick' para declarar con una funcion que cuando el 'onClick' se ejecute,
este ejecute esta funcion y la funcion va a retornar setIsFollowing evaluando lo contrario de 'isFollowing'.

*/

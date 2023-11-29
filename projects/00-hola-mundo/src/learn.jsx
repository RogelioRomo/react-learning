// para crear multiples botones podriamos hacer lo siguiente
/*
root.render(
  <React.Fragment>
    <button>Hola button</button>
    <button>Hola button</button>
    <button>Hola button</button>
  </React.Fragment>
)
*/

/* El problema con esto es que cuando queramos cambiar caracteristicas
a los botones, tendriamos que hacer los cambios para cada uno
y el codigo se expanderia y seguiria haciendolo mientras mas
botones agregaramos entonces lo que necesitamos es crear un componente */

// creamos la funcion para el componente

/*
const createButton = ( {text} ) =>{
  return (
    <button>{text}</button>
  )
}

//ahora utilizamos esa funcion para mostrarlo en la web
// como podemos ver podemos pasarle un atributo para el parametro de la funcion
root.render(
  <React.Fragment>
    {createButton({text: "Button1"})}
    {createButton({text: "Button2"})}
    {createButton({text: "Button3"})}
  </React.Fragment>
)
*/

/* Sin embargo esta no es la manera de crear un componente en react
ya que el codigo si vemos sigue siendo imperativo cuando necesitamos que sea
declarativo */

// entonces lo hacemos de la siguiente manera
// importante mencionar que los nombres de nuestros componentes deben ser PascalCase
const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <>
    <Button text='Button 1' />
    <Button text='Button 2' />
    <Button text='Button 3' />
  </>
)
/* como vemos creamos un boton que se parece a HTML pero
es JavaScript escrito con JSX. Esto es lo interesante de react,
tu creas tus componentes como si se tratara de HTML y eso lo hace
intuitivo */

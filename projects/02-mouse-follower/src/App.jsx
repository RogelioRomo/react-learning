import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (e) => {
      const { clientX, clientY } = e
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    
    //cleanup
    //-> cuando el componente se desmonta
    //-> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log('cleanup') //mostrara en consola cuando se haga la limpieza del evento
      window.removeEventListener('pointermove', handleMove)
    }
}, [enabled])

  return (
    <>
      <main>
        <div style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Deactivate' : 'Activate'} mouse follower
        </button>
      </main>
    </>
  )
}

function App() {
  return (
      <main>
        <FollowMouse />
      </main>
  )
}

export default App

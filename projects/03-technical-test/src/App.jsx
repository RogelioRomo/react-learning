import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ').slice(0, 1).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}// este customHook ya sabemos que devuelve { imageUrl: 'https://...'}

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <p>{fact}</p>
      <img src={`${imageUrl}`} alt='Image extracted using the first word from the fact' />
    </main>
  )
}

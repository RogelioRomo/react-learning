import { useEffect, useState } from 'react'
function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('effect')
  })

  return (
    <>
      <main>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Deactivate' : 'Activate'} mouse follower
        </button>
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import { FollowMouse } from './components/FollowMouse'

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {/* <button onClick={() => setMounted(!mounted)}>
        Toggle mounted followMouse component
      </button> */}
      {mounted && <FollowMouse />}
    </main>
  )
}

export default App

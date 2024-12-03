import { useState } from 'react'

function Versions() {
  const [versions] = useState(window.electron.process.versions)
  const [num, setNum] = useState(0)

  return (
    <>
      <h1>{num}</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setNum(num + 1)}>Increment</button>
        <button onClick={() => setNum(num - 1)}>Decrement</button>
      </div>
      <ul className="versions">
        <li className="electron-version">Electron v{versions.electron}</li>
        <li className="chrome-version">Chromium v{versions.chrome}</li>
        <li className="node-version">Node v{versions.node}</li>
      </ul>
    </>
  )
}

export default Versions

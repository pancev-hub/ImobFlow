import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [status, setStatus] = useState<string>('loading')

  useEffect(() => {
    axios.get('/api/health')
      .then(() => setStatus('ok'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h1>ImobFlow - Web</h1>
      <p>Status do backend: {status}</p>
    </div>
  )
}

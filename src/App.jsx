import { useState } from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('page1')

  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button onClick={() => setCurrentPage('page1')} style={{ marginRight: '10px' }}>Page 1</button>
        <button onClick={() => setCurrentPage('page2')}>Page 2</button>
      </nav>
      {currentPage === 'page1' ? <Page1 /> : <Page2 />}
    </div>
  )
}

export default App

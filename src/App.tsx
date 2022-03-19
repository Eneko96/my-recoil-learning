import { useState } from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import { RecoilRoot } from 'recoil'
import './App.css'

function App() {
  const [page, setPage] = useState(0)

  const getPage = () => {
    if (page === 1) return <Page1 />
    return <Page2 />
  }

  return (
    <RecoilRoot >
      <div className="App">
        <button onClick={() => setPage(1)}>set page 1</button>
        <button onClick={() => setPage(2)}>set page 2</button>
        {getPage()}
      </div>
    </RecoilRoot>
  )
}

export default App

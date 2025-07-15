import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopBar from './Components/TopBar'
import Profile from './Components/profile'
import './App.css'
import SubTopBar from './Components/SubTopBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>BMH DASHBOARD</h1> */}
      <div className="App">
          <TopBar/>
          <SubTopBar/>
        <div className="main-content">
              <Profile />
              <Profile />
               <Profile />
                <Profile />
                 <Profile />
        </div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

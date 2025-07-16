import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopBar from './Components/TopBar'
import Profile from './Components/profile'
import './App.css'
import SubTopBar from './Components/SubTopBar'
import ExecutiveProfile from './Components/ExecutiveProfile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
          <TopBar/>
          <SubTopBar/>
        <div className="main-content">
              <Profile />
              <ExecutiveProfile />
               
            
        </div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

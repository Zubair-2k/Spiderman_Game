import { useState } from 'react'
import './App.css'
import Download from './Components/Download/Download'
import Header from './Components/Header/Header'

function App() {

  const [startDownloadAnimation , setStartDownloadAnimation] = useState(false);

  return (
    <>
      <Header setStartDownloadAnimation={setStartDownloadAnimation}/>
      <Download startDownloadAnimation = {startDownloadAnimation}/>
    </>
  )
}

export default App


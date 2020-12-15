import React from 'react'
import './App.css'
import GameArea from './components/GamePage'

//import GameArea from './components/GameArea'

const App = () => {

  // const startGame = () => {

  // }
  return (
    <div className="page-cont">
      {/* <h1>Welcome to Sort-it!</h1>
      <button>Start game</button> */}
      <GameArea />
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'

import API from '../../utils/API'
//import GameQuestions

const GameArea = () => {
    const [gameQuestion, setGameQuestion] = useState("")

    // const getQuestion = () {

    // }
    console.log(API.getRandomQuestion())
    return (
        <div className="game-cont">
            <div>{gameQuestion}</div>
        </div>
    )
}

export default GameArea
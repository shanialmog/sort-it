import React, { useState, useEffect } from 'react'

import API from '../../utils/API'
//import GameQuestions

const GameArea = () => {
    const [gameQuestion, setGameQuestion] = useState("")

    useEffect(() => {
        const data = API.getRandomQuestion()
        setGameQuestion(data.question)
        // console.log("data", data)
        console.log(gameQuestion)
    }, [])

    console.log(API.getRandomQuestion())
    return (
        <div className="game-cont">
            <h1>{gameQuestion}</h1>
        </div>
    )
}

export default GameArea
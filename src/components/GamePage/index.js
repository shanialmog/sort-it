import React, { useState, useEffect } from 'react'

import AnswerCardsContainer from '../AnswerCardsContainer'
import OptionCardsContainer from '../OptionCardsContainer'

import API from '../../utils/API'

const GameArea = () => {
    const [gameQuestion, setGameQuestion] = useState("")
    const [cardsOptions, setCardsOptions] = useState([])
    const [cardDescription, setCardDescription] = useState("")
    const [cardImg, setCardImg] = useState("")
    //should I save only one state regarding the card info and let AnswerCardsContainer extract the fields?

    useEffect(() => {
        const data = API.getRandomQuestion()
        setGameQuestion(data.question)
        setCardsOptions(data.options)
        //create random cards options array
        // console.log("data", data)
        // console.log("data-options", data.options)
        // console.log(gameQuestion)
    }, [])

    // console.log(API.getRandomQuestion())
    return (
        <div className="game-cont">
            <h1>{gameQuestion}</h1>
            <AnswerCardsContainer
            />
            <OptionCardsContainer
                cardDescription={cardDescription}
                cardImg={cardImg}
                cardsOptions={cardsOptions}
            />
        </div>
    )
}

export default GameArea
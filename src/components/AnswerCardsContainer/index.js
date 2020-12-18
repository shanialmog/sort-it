import React from 'react'

import AnswerCard from '../AnswerCard'

const AnswerCardsContainer = (props) => {
    const cardsOptions = props.cardsOptions
    return (
        <div className="answer-card-cont">
            {
                cardsOptions.map((card, i) => {
                    return (
                        <AnswerCard
                            key={i}
                            //cardImg={}
                            cardDescription={card.description}
                            cardOption={card.id}
                        />
                    // console.log("card", card.description, "id", card.id)
                    )
            })
            }
        </div>
    )
}

export default AnswerCardsContainer

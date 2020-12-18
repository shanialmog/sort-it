import React from 'react'

import AnswerCard from '../AnswerCard'

const OptionCardsContainer = (props) => {
    const cardsOptions = props.cardsOptions
    return (
        <div className="option-cards-cont">
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

export default OptionCardsContainer

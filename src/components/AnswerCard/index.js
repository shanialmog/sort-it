import React from 'react'

const AnswerCard = (props) => {
    const cardDescription = props.cardDescription
    return (
        <div className="answer-card">
            <span>
                {cardDescription}
            </span>
        </div>
    )
}

export default AnswerCard

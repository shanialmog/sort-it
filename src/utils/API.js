const DB = require('./mockDB.json')

const getRandomQuestion = () => {
    const id = 1
    return {
        id,
        question: DB[1].question,
        options: DB[1].options
    }
}

const submitAnswer = ( questionId, answer ) => {
    return {
        answer: DB[questionId].answer,
        score: 90
    }
}

export default { getRandomQuestion }
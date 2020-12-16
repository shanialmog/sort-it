const DB = require('./mockDB.json')

const getRandomQuestion = () => {
    const keys = Object.keys(DB)
    const id =  keys.length * Math.random() +1 << 0
    return {
        id,
        question: DB[id].question,
        options: DB[id].options
    }
}

const submitAnswer = ( questionId, answer ) => {
    return {
        answer: DB[questionId].answer,
        score: 90
    }
}

export default { getRandomQuestion }
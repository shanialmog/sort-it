import React, { useState } from 'react'

import StartPage from '../StartPage'

const GamePage = () => {
    const [openModal, setOpenModal] = useState(true)

    const closeModal = () => {
        console.log("close modal")
        setOpenModal(false)
    }
    return (
        <div className="page-cont">
            <StartPage 
                openModal={openModal}
                closeModal={closeModal}
            />
            <h1>
                this is the game page component
            </h1>
        </div>
    )
}

export default GamePage
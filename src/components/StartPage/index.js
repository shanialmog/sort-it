import React from 'react'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const StartPage = (props) => {

    const handleCloseModal = () => {
        props.closeModal()
    }
    return (
        <div>
            <Modal
                className="modal"
                open={props.openModal}
                // onClose={handleChangeName}
                closeAfterTransition
                BackdropComponent={Backdrop}
                disableBackdropClick
                disableEscapeKeyDown
            >
                <Fade in={props.openModal}>
                    <div
                        className="modal-fade"
                    >
                        <h1>Welcome to Sort-it!</h1>
                        <button onClick={() => {props.closeModal()}}>Start playing</button>
                        {/* <div>
                             <IconButton
                                    type="button"
                                    onClick={handleChangeName}
                                    edge="end"
                                    color="primary"
                                    disabled={!isValidUsername}
                                >
                                    <SendRoundedIcon />
                                </IconButton>
                        </div> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default StartPage
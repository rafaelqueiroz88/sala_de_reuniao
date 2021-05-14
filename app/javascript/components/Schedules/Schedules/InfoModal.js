import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const InfoModal = (props) => {

    return(
        <Modal show={props.infoModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Dados da Agenda - { props.modal_title }
            </Modal.Header>
            <Modal.Body>
                { props.modal_text } <br />
                { props.modal_date }
                {/* owner <- use this for a function*/}
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    <i className="far fa-times-circle"></i> Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InfoModal
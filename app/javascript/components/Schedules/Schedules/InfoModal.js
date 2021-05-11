import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const InfoModal = (props) => {

    return(
        <Modal show={props.infoModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Dados da Agenda
            </Modal.Header>
            <Modal.Body>
                [Dados pertinentes a este agendamento aqui]
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InfoModal
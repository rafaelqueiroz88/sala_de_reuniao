import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CancelModal = (props) => {

    return(
        <Modal show={props.cancelModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Dados da Agenda
            </Modal.Header>
            <Modal.Body>
                Este horário pertence a você <br />
                [Dados pertinente a este agendamento aqui]
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger">
                    Sim
                </Button>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CancelModal
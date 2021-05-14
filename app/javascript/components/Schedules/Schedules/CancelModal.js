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
                <br />
                <small>Caso não for necessário utilizar a sala de reunião, click em Apagar</small>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i> Apagar
                </Button>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    <i className="far fa-times-circle"></i> Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CancelModal
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const CheckModal = (props) => {

    return(
        <Modal show={props.checkModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Período Indisponível
            </Modal.Header>
            <Modal.Body>
                <strong>
                    Este horário já acabou e não pode mais ser alterado
                </strong> <br />
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

export default CheckModal
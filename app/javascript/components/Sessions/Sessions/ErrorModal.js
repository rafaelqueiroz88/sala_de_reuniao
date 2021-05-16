import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ErrorModal = (props) => {

    return(
        <Modal show={props.error} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Falha ao autenticar Usuário
            </Modal.Header>
            <Modal.Body>
                <strong>
                    Usuário e/ou Senha incorretos ou não encontrado
                </strong> <br />
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal
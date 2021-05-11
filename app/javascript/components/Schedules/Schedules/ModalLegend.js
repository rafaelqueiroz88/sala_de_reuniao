import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalLegend = (props) => {

    return(
        <Modal show={props.listModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Legenda
            </Modal.Header>
            <Modal.Body>
                <div className="row pb-1">
                    <div className="col-xs-6 col-md-5">
                        <Button className="btn btn-outline-success btn-block">
                            <i className="fas fa-clipboard-check"></i> Concluído
                        </Button>
                    </div>
                    <div className="col-xs-6 col-md-7">
                        <small>Reuniões encerradas</small>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-xs-9 col-md-5">
                        <Button className="btn btn-warning btn-block">
                            <i className="fas fa-users"></i> Agendado
                        </Button>
                    </div>
                    <div className="col-xs-6 col-md-7">
                        <small>Agendado no nome do usuário atual</small>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-xs-9 col-md-5">
                        <Button className="btn btn-outline-danger btn-block">
                            <i className="fas fa-user-lock"></i> Ocupada
                        </Button>
                    </div>
                    <div className="col-xs-6 col-md-7">
                        <small>Agendado em nome de outro usuário</small>
                    </div>
                </div>
                <div className="row pb-1">
                    <div className="col-xs-9 col-md-5">
                        <Button className="btn btn-outline-primary btn-block">
                            <i className="fas fa-calendar-day"></i> Disponível
                        </Button>
                    </div>
                    <div className="col-xs-6 col-md-7">
                        <small>Disponível</small>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" onClick={props.handleCloseButton}>
                    <i className="far fa-times-circle"></i> Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalLegend
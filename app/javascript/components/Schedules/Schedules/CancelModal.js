import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CancelModal = (props) => {

    return(
        <Modal show={props.cancelModal} onHide={props.handleModalClose} backdrop={true}>
            <Modal.Header>
                Dados da Agenda - { props.modal_title }
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.handleScheduleUpdateSubmit}>
                    <div className="alert alert-success">
                        <i className="fas fa-exclamation-triangle"></i> Este horário pertence a você <br />
                    </div>
                    Assunto: { props.modal_text }
                    <br /><br />
                    <div className="row text-center">
                        <h4>Alterar { props.modal_title }</h4>
                    </div>                
                    <div className="form-group row">
                        <label htmlFor="title" className={"col-sm-2 col-form-label"}>Título: </label>
                        <div className="col-sm-10">
                            <input type="text" onChange={props.handleScheduledChange} className="form-control" name="title" id="title" placeholder={props.modal_title} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className={"col-sm-2 col-form-label"}>Descrição: </label>
                        <div className="col-sm-10">
                            <input type="text" onChange={props.handleScheduledChange} className="form-control" name="description" id="description" placeholder={props.modal_text} />
                        </div>
                    </div>
                    <input type="hidden" value={props.schedule_slug} name="slug" id="target_slug" />
                    <div className="form-group row">
                        <div className="col-sm-12 text-center">
                            <Button type="submit" className="btn btn-warning">
                                <i className="fas fa-edit"></i> Alterar
                            </Button>
                        </div>
                    </div>
                    <br />
                    <div className="alert alert-info">
                        <i className="fas fa-user-edit"></i> <small>Caso não for necessário utilizar a sala de reunião, click em Apagar</small>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" onClick={props.handleCancelerButton( props.schedule_slug )}>
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
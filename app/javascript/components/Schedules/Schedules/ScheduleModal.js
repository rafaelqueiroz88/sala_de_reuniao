import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ScheduleModal = (props) => {

    return(
        <Modal show={props.schedulerModal} onHide={props.handleModalClose} backdrop={true}>
            <form onSubmit={props.handleScheduleSubmit}>
                <Modal.Header>
                    Registrar horário { props.hour }:00
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Deseja agendar este horário? ({ props.hour }:00)<br />
                    </p>                        
                    <div className="form-group row">
                        <label htmlFor="title" className={"col-sm-2 col-form-label"}>Título</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={props.handleScheduleChange} className="form-control" name="title" id="title" placeholder="Resumo do uso da sala" />
                        </div>                            
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className={"col-sm-2 col-form-label"}>Descrição</label>
                        <div className="col-sm-10">
                            <input type="text" onChange={props.handleScheduleChange} className="form-control" name="description" id="description" placeholder="Descrição do uso da sala" />
                        </div>                            
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success">
                        <i className="far fa-save"></i> Agendar
                    </button>
                    <Button className="btn btn-warning" onClick={props.handleCloseButton}>
                        <i className="far fa-times-circle"></i> Cancelar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default ScheduleModal
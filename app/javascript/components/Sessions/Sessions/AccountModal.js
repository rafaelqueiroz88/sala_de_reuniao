import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AccountModal = (props) => {

    return(
        <Modal show={props.modal} onHide={props.handleModalClose} backdrop={true}>
            <form onSubmit={props.newAccountSubmit}>
                <Modal.Header>
                    Novo Usuário?
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group row">
                        <label htmlFor="name" className={"col-xs-3 col-sm-3 col-md-2 col-form-label"}>Nome:</label>
                        <div className="col-xs-7 col-sm-7 col-md-6">
                            <input type="text" onChange={props.handleNewChange} className="form-control" name="name" id="name" placeholder="João..." required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="occupation" className={"col-xs-3 col-sm-3 col-md-2 col-form-label"}>Cargo:</label>
                        <div className="col-xs-7 col-sm-7 col-md-6">
                            <input type="text" onChange={props.handleNewChange} className="form-control" name="occupation" id="occupation" placeholder="Analista de Sistemas" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className={"col-xs-3 col-sm-3 col-md-2 col-form-label"}>E-mail:</label>
                        <div className="col-xs-7 col-sm-7 col-md-6">
                            <input type="text" onChange={props.handleNewChange} className="form-control" name="email" id="email" placeholder="seu_nome@exemplo.com" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className={"col-xs-3 col-sm-3 col-md-2 col-form-label"}>Senha: </label>
                        <div className="col-xs-7 col-sm-7 col-md-6">
                            <input type="password" onChange={props.handleNewChange} className="form-control" name="password" id="newPassword" placeholder="******" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="confirmPassword" className={"col-xs-3 col-sm-3 col-md-2 col-form-label"}>Confirmar: </label>
                        <div className="col-xs-7 col-sm-7 col-md-6">
                            <input type="password" onChange={props.handleNewChange} className="form-control" name="confirmPassword" id="confirmPassword" placeholder="******" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            { props.errorMessage }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success">
                        <i className="far fa-save"></i> Cadastrar
                    </button>                                        
                    <Button className="btn btn-warning" onClick={props.handleCloseButton}>
                        <i className="far fa-times-circle"></i> Cancelar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default AccountModal
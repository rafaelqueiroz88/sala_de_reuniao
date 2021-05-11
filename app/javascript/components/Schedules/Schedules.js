import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Schedule from './Schedules/Schedule'

const Schedules = () => {

    const [schedules, setSchedules] = useState([])
    const [hour, setHour] = useState(0)
    const [schedulerModal, setSchedulerModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    const [listModal, setListModal] = useState(false)

    /**
     * getting week start
     * plus 1 for each day
     */
    let today = new Date()
    let day = today.getDay() || 7
    if(day !== 1)
        today.setHours(-24 * (day - 1))

    useEffect(() => {
        axios.get('/api/v1/schedules.json')
            .then(response => {
                setSchedules(response.data.data)
            })
            .catch(response => {
                console.log(response)
            })
    }, [])

    const handleSchedulerButton = param => e => {
        e.preventDefault()
        setHour(param)
        const hour = {
            hour: param
        }
        setSchedules(Object.assign(schedules, hour))
        setSchedulerModal(true)
    }

    const handleSetListModal = (e) => {
        e.preventDefault()
        setListModal(true)
    }

    const handleCancelModal = (e) => {
        e.preventDefault()
        setCancelModal(true)
    }

    const handleInfoModal = (e) => {
        e.preventDefault()
        setInfoModal(true)
    }

    const handleModalClose = () => {
        setSchedulerModal(false)
        setCancelModal(false)
        setInfoModal(false)
        setListModal(false)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setSchedulerModal(false)
        setCancelModal(false)
        setInfoModal(false)
        setListModal(false)
    }

    const handleScheduleChange = (e) => {
        e.preventDefault()
        setSchedules(Object.assign({}, schedules, {[e.target.name]: e.target.value}))
    }

    const handleScheduleSubmit = (e) => {
        e.preventDefault()

        const status = {
            status: 1
        }
        setSchedules(Object.assign(schedules, status))

        const user_id = {
            user_id: 1
        }
        setSchedules(Object.assign(schedules, user_id))

        /**
         * Preparing token and setup for post request
         */
        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/schedules', schedules)
            .then(response => {
                console.log(response)
            })
            .catch(response => {
                console.log(response)
            })

        setSchedulerModal(false)
    }

    // const lines = schedules.map(item => {

    //     return(
    //         <Book
    //             key={item.id}
    //             attributes={item.attributes}
    //         /> 
    //     )
    // })

    return(
        <div className={"container"}>
            <div className={"row pt-4"}>
                <div className={"col-xs-12 col-sm-12 col-md-10 offset-md-1"}>
                    <h2 className={"pb-3"}>Agenda da Sala de Reunião - { today.getFullYear() }</h2>
                </div>
            </div>
            <div className={"row pt-1"}>
                <div className="col-xs-12 col-sm-12 col-md-2 offset-md-10 pb-2">
                    <Button className="btn btn-info" onClick={handleSetListModal}>Ver Legenda</Button>
                </div>
                <div className={"table-responsive table-striped table-hover"}>
                    <table className={"table"}>
                        <thead>
                            <tr>
                                <th scope="col">Horário</th>
                                <th scope="col">Segunda/{ today.getDate() }</th>
                                <th scope="col">Terça/{ today.getDate() + 1 }</th>
                                <th scope="col">Quarta/{ today.getDate() + 2 }</th>
                                <th scope="col">Quinta/{ today.getDate() + 3 }</th>
                                <th scope="col">Sexta/{ today.getDate() + 4 }</th>
                            </tr>
                        </thead>
                        <Schedule
                            handleSchedulerButton={handleSchedulerButton}
                            handleCancelModal={handleCancelModal}
                            handleInfoModal={handleInfoModal}
                        />
                    </table>
                </div>
            </div>
            
            <Modal show={schedulerModal} onHide={handleModalClose} backdrop={true}>
                <form onSubmit={handleScheduleSubmit}>
                    <Modal.Header>
                        Registrar horário { hour }:00
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Deseja agendar este horário? ({ hour }:00)<br />
                        </p>                        
                        <div className="form-group row">
                            <label htmlFor="title" className={"col-sm-2 col-form-label"}>Título</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={handleScheduleChange} className="form-control" name="title" id="title" placeholder="Resumo do uso da sala" />
                            </div>                            
                        </div>
                        <div className="form-group row">
                            <label htmlFor="description" className={"col-sm-2 col-form-label"}>Descrição</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={handleScheduleChange} className="form-control" name="description" id="description" placeholder="Descrição do uso da sala" />
                            </div>                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-success">
                            Sim
                        </button>
                        <Link className="btn btn-danger" onClick={handleCloseButton} to="#">
                            Cancelar
                        </Link>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={cancelModal} onHide={handleModalClose} backdrop={true}>
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
                    <Button className="btn btn-primary" onClick={handleCloseButton}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={infoModal} onHide={handleModalClose} backdrop={true}>
                <Modal.Header>
                    Dados da Agenda
                </Modal.Header>
                <Modal.Body>
                    [Dados pertinentes a este agendamento aqui]
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-primary" onClick={handleCloseButton}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={listModal} onHide={handleModalClose} backdrop={true}>
                <Modal.Header>
                    Legenda
                </Modal.Header>
                <Modal.Body>
                    <div className="row pb-1">
                        <div className="col-xs-6 col-md-3">
                            <Button className="btn btn-outline-success btn-block">
                                Concluído
                            </Button>
                        </div>
                        <div className="col-xs-6 col-md-7">
                            <small>Reuniões passadas</small>
                        </div>
                    </div>
                    <div className="row pb-1">
                        <div className="col-xs-9 col-md-3">
                            <Button className="btn btn-warning btn-block">
                                Agendado
                            </Button>
                        </div>
                        <div className="col-xs-6 col-md-7">
                            <small>Agendado no nome do usuário atual</small>
                        </div>
                    </div>
                    <div className="row pb-1">
                        <div className="col-xs-9 col-md-3">
                            <Button className="btn btn-outline-danger btn-block">
                                Ocupada
                            </Button>
                        </div>
                        <div className="col-xs-6 col-md-7">
                            <small>Agendado em nome de outro usuário</small>
                        </div>
                    </div>
                    <div className="row pb-1">
                        <div className="col-xs-9 col-md-3">
                            <Button className="btn btn-outline-primary btn-block">
                                Disponível
                            </Button>
                        </div>
                        <div className="col-xs-6 col-md-7">
                            <small>Disponível</small>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-primary" onClick={handleCloseButton}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Schedules
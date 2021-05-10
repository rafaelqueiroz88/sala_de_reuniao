import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap'

import Book from './Books/Book'

const Books = () => {

    const [books, setBooks] = useState([])
    const [schedulerModal, setSchedulerModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/books.json')
            .then(response => {
                setBooks(response.data.data)
            })
            .catch(response => {
                console.log(response)
            })
    }, [])

    const handleSchedulerButton = (e) => {
        e.preventDefault()
        setSchedulerModal(true)
    }

    const handleCancelModal = (e) => {
        e.preventDefault()
        setCancelModal(true)
    }

    const handleInfoModal = (e) => {
        e.preventDefault()
        setInfoModal(true)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setSchedulerModal(false)
        setCancelModal(false)
        setInfoModal(false)
    }

    const handleScheduleButton = (e) => {
        e.preventDefault()
        axios.post('/api/v1/books', books)
            .then(response => {
                console.log(response)
            })
            .catch(response => {
                console.log(response)
            })
    }

    // const lines = books.map(item => {

    //     return(
    //         <Book
    //             key={item.id}
    //             attributes={item.attributes}
    //         /> 
    //     )
    // })

    return(
        <div className={"container"}>
            <div className={"row pt-5"}>
                <div className={"col-xs-12 col-sm-12 col-md-10 offset-md-1"}>
                    <h2 className={"pb-3"}>Agenda da Sala de Reunião</h2>
                    <div className={"table-responsive table-striped table-hover"}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Segunda</th>
                                    <th scope="col">Terça</th>
                                    <th scope="col">Quarta</th>
                                    <th scope="col">Quinta</th>
                                    <th scope="col">Sexta</th>
                                </tr>
                            </thead>
                            <Book
                                handleSchedulerButton={handleSchedulerButton}
                                handleCancelModal={handleCancelModal}
                                handleInfoModal={handleInfoModal}
                            />
                        </table>
                    </div>
                </div>
            </div>
            
            <Modal show={schedulerModal}>
                <Modal.Header>
                    Registrar horário
                </Modal.Header>
                <Modal.Body>
                    Deseja agendar este horário?
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={handleScheduleButton}>
                        Sim
                    </Button>
                    <Button className="btn btn-danger" onClick={handleCloseButton}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={cancelModal}>
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

            <Modal show={infoModal}>
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
        </div>
    )
}

export default Books
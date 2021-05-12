import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Schedule from './Schedules/Schedule'
import ModalLegend from './Schedules/ModalLegend'
import InfoModal from './Schedules/InfoModal'
import CancelModal from './Schedules/CancelModal'
import ScheduleModal from './Schedules/ScheduleModal'
import CheckModal from './Schedules/CheckModal'

const Schedules = (props) => {

    let history = useHistory()

    const user_uri = localStorage.getItem('slug')
    const token = localStorage.getItem('token')

    if(token == null)
        history.push('/')

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    const [schedules, setSchedules] = useState([])
    const [hour, setHour] = useState(0)
    const [schedulerModal, setSchedulerModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    const [checkModal, setCheckModal] = useState(false)
    const [listModal, setListModal] = useState(false)
    const [user, setUser] = useState([])

    /**
     * getting week start
     * plus 1 for each day
     */
    let today = new Date()
    let day = today.getDay() || 7
    if(day !== 1)
        today.setHours(-24 * (day - 1))

    useEffect(() => {
        axios.get(`/api/v1/users/${user_uri}`, config)
            .then(response => {
                setUser(response.data.data)
            })
            .catch(response => {
                console.log(response)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/v1/schedules.json', config)
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
            hour: `2021-05-${param}:00`
        }
        setSchedules(Object.assign(schedules, hour))
        setSchedulerModal(true)
    }

    const handleSetListModal = (e) => {
        e.preventDefault()
        setListModal(true)
    }

    const handleSetCheckModal = param => e => {
        e.preventDefault()
        setCheckModal(true)
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
        setCheckModal(false)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setSchedulerModal(false)
        setCancelModal(false)
        setInfoModal(false)
        setListModal(false)
        setCheckModal(false)
    }

    const handleScheduleChange = (e) => {
        e.preventDefault()
        setSchedules(Object.assign({}, schedules, {[e.target.name]: e.target.value}))
    }

    const handleSignOut = (e) => {
        e.preventDefault()
        localStorage.clear('token')
        localStorage.clear('slug')
        history.push('/')
    }

    const handleScheduleSubmit = (e) => {
        e.preventDefault()

        const status = {
            status: 1
        }
        setSchedules(Object.assign(schedules, status))

        const user_id = {
            user_id: user.id
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
                history.go(0)

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
                <div className={"col-xs-6 col-sm-6 col-md-3 offset-md-6 text-right"}>
                    <h5>Olá [rafael]!</h5>
                </div>
                <div className={"col-xs-6 col-sm-6 col-md-3 text-right"}>
                    <Button className="btn btn-danger" onClick={handleSignOut}>
                        <i className="fas fa-sign-out-alt"></i> Sair
                    </Button>
                </div>
            </div>
            <div className={"row pt-4"}>
                <div className={"col-xs-12 col-sm-12 col-md-10 offset-md-1"}>
                    <h2 className={"pb-3"}>Agenda da Sala de Reunião - { today.getFullYear() }</h2>
                </div>
            </div>
            <div className={"row pt-1"}>
                <div className="col-xs-4 col-sm-4 col-md-2 pb-2">
                    <Button className="btn btn-info" onClick={handleSetListModal}>
                        <i className="fas fa-table"></i> Ver Legenda
                    </Button>
                </div>
            </div>
            <div className={"row pt-1"}>
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
                            handleSetCheckModal={handleSetCheckModal}
                        />
                    </table>
                </div>
            </div>
            
            <ScheduleModal
                schedulerModal={schedulerModal}
                handleModalClose={handleModalClose}
                hour={hour}
                handleScheduleChange={handleScheduleChange}
                handleCloseButton={handleCloseButton}
                handleScheduleSubmit={handleScheduleSubmit}
            />

            <CancelModal
                cancelModal={cancelModal}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
            />

            <CheckModal
                checkModal={checkModal}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
            />

            <InfoModal
                infoModal={infoModal}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
            />

            <ModalLegend
                listModal={listModal}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
            />
        </div>
    )
}

export default Schedules
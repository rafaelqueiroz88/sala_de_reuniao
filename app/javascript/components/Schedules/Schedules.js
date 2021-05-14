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
    const [schedule, setSchedule] = useState([])
    const [user, setUser] = useState([])
    const [hour, setHour] = useState(0)
    const [schedulerModal, setSchedulerModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    const [checkModal, setCheckModal] = useState(false)
    const [listModal, setListModal] = useState(false)
    const [modal_title, setModalTitle] = useState('')
    const [modal_text, setModalText] = useState('')
    const [modal_date, setModalDate] = useState('')
    const [schedule_slug, setScheduleSlug] = useState('')
    const [loaded, setLoaded] = useState(false)

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
                setLoaded(true)
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

    const handleSchedulerButton = (param) => e => {
        e.preventDefault()
        setHour(param)
        let query = param.split(' ')
        let month = query[0].split('/')
        let selectedMonth
        switch(month[1]) {
            case 'Janeiro':
                selectedMonth = '01'
                break
            case 'Fevereiro':
                selectedMonth = '02'
                break
            case 'Março':
                selectedMonth = '03'
                break
            case 'Abril':
                selectedMonth = '04'
                break
            case 'Maio':
                selectedMonth = '05'
                break
            case 'Junho':
                selectedMonth = '06'
                break
            case 'Julho':
                selectedMonth = '07'
                break
            case 'Agosto':
                selectedMonth = '08'
                break
            case 'Setembro':
                selectedMonth = '09'
                break
            case 'Outubro':
                selectedMonth = '10'
                break
            case 'Novembro':
                selectedMonth = '11'
                break
            case 'Dezembro':
                selectedMonth = '12'
                break
        }

        const hour = {
            hour: `2021-${selectedMonth}-${month[0]} ${query[1]}:00:00`
        }

        setSchedules(Object.assign(schedules, hour))
        setSchedulerModal(true)
    }

    const handleCancelerButton = (slug) => (e) => {
        e.preventDefault()
        const url = `/api/v1/schedules/${slug}`
        axios.delete(url, config)
            .then(response => {
                history.go(0)
            })
            .catch(response => {
                console.log(response)
            })
    }

    const handleSetListModal = (e) => {
        e.preventDefault()
        setListModal(true)
    }

    const handleSetCheckModal = (text) => e => {
        setModalText(text)
        e.preventDefault()
        setCheckModal(true)
    }

    const handleCancelModal = (date, title, text, slug) => (e) => {
        setModalDate(date)
        setModalTitle(title)
        setModalText(text)
        setScheduleSlug(slug)
        e.preventDefault()
        setCancelModal(true)
    }

    const handleInfoModal = (title, text) => (e) => {
        e.preventDefault()
        setModalTitle(title)
        setModalText(text)
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

    const handleScheduledChange = (e) => {
        e.preventDefault()
        setSchedule(Object.assign({}, schedule, {[e.target.name]: e.target.value}))
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
                history.go(0)
            })
            .catch(response => {
                console.log(response)
            })

        setSchedulerModal(false)
    }

    const handleScheduleUpdateSubmit = (e) => {

        e.preventDefault()

        const status = {
            status: 1
        }
        setSchedule(Object.assign(schedule, status))

        const user_id = {
            user_id: user.id
        }
        setSchedule(Object.assign(schedule, user_id))

        /**
         * Preparing token and setup for post request
         */
        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const target_slug = document.getElementById('target_slug').value

        const url = `/api/v1/schedules/${target_slug}`
        
        /**
         * preciso de uma lógica para obter o SLUG antes de fazer esse envio
         */
        axios.patch(url, schedule, config)
            .then(response => {
                console.log(response)
                history.go(0)
            })
            .catch(response => {
                console.log(response)
            })

        setCancelModal(false)
    }

    let user_data = []
    let user_id = user.id
    if(loaded) {
        user_id = user.id
        user_data = user.attributes
    }

    return(
        <div className={"container"}>
            <div className={"row pt-4"}>
                <div className={"col-xs-6 col-sm-6 col-md-3 offset-md-6 text-right"}>
                    <h5>Olá { user_data.name }!</h5>
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
                            loaded={loaded}
                            handleSchedulerButton={handleSchedulerButton}
                            handleCancelModal={handleCancelModal}
                            handleInfoModal={handleInfoModal}
                            handleSetCheckModal={handleSetCheckModal}
                            schedules={schedules}
                            current_user={user}
                            current_user_id={user_id}
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
                modal_text={modal_text}
                modal_title={modal_title}
                modal_date={modal_date}
                schedule_slug={schedule_slug}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
                handleCancelerButton={handleCancelerButton}
                handleScheduledChange={handleScheduledChange}
                handleScheduleUpdateSubmit={handleScheduleUpdateSubmit}
            />

            <CheckModal
                modal_text={modal_text}
                checkModal={checkModal}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
            />

            <InfoModal
                infoModal={infoModal}
                modal_title={modal_title}
                modal_text={modal_text}
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
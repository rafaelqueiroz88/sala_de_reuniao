import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import AccountModal from './Sessions/AccountModal'
import ErrorModal from './Sessions/ErrorModal'
import LoginForm from './Sessions/LoginForm'

const Login = () => {

    let history = useHistory()

    if(localStorage.getItem('token') != null)
        history.push('/agenda')

    const [modal, setModal] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [newUser, setNewUser] = useState([])
    const [authUser, setAuthUser] = useState([])

    /**
     * handle form changes for user auth
     */
    const handleNewChange = (e) => {
        if(e.target.name == 'new_password') {
            setNewUser(Object.assign({}, newUser, {['password']: e.target.value}))
        }
        else {
            setNewUser(Object.assign({}, newUser, {[e.target.name]: e.target.value}))
        }
    }

    const authSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/login', authUser)
            .then(response => {
                if(response.status == 200) {                    
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('slug', response.data.user.slug)
                    history.push('/agenda')
                }
                else if(response.status == 208) {
                    setError(true)
                }
            })
            .catch(response => {
                console.log(response)
            })
    }

    const newAccountSubmit = (e) => {

        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.post('/api/v1/users', newUser)
            .then(response => {
                if(response.status == 200 && !response.data.error) {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('slug', response.data.user.slug)
                    history.push('/agenda')
                }
                else if (response.data.error) {
                    setErrorMessage('Este e-mail já foi utilizado')
                }
            })
            .catch(response => {
                console.log(response)
            })
    }

    /**
     * handle form changes for new user modal
     */
    const handleAuthChange = (e) => {
        setAuthUser(Object.assign({}, authUser, {[e.target.name]: e.target.value}))
    }

    const handleModal = (e) => {
        e.preventDefault()
        setModal(true)
    }

    const handleModalClose = () => {
        setModal(false)
        setError(false)
    }

    const handleCloseButton = () => {
        setModal(false)
        setError(false)
    }

    return (
        <Container>
            <Row className="pt-5 pb-3">
                <Col xs={{ span: 8, offset: 2 }} sm={12} md={6}>
                    <h3>Apresente-se!</h3>
                </Col>
            </Row>

            <LoginForm
                authSubmit={authSubmit}
                handleAuthChange={handleAuthChange}
                handleModal={handleModal}
            />

            <AccountModal 
                modal={modal}
                handleNewChange={handleNewChange}
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
                newAccountSubmit={newAccountSubmit}
                errorMessage={errorMessage}
            />

            <ErrorModal
                handleModalClose={handleModalClose}
                handleCloseButton={handleCloseButton}
                error={error}
            />

        </Container>
    )
}

export default Login
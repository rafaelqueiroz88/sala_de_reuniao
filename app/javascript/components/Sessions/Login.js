import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import AccountModal from './Sessions/AccountModal'
import ErrorModal from './Sessions/ErrorModal'

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
        <div className="container">
            <div className="row pt-2 pb-3">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <h3>
                        Autenticação
                    </h3>
                </div>
            </div>
            <form onSubmit={authSubmit}>
                <div className="form-group row">
                    <label htmlFor="email" className={"col-xs-3 col-sm-3 col-md-1 col-form-label"}>E-mail:</label>
                    <div className="col-xs-7 col-sm-7 col-md-4">
                        <input type="text" onChange={handleAuthChange} className="form-control" name="email" id="email" placeholder="seu_nome@exemplo.com" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className={"col-xs-3 col-sm-3 col-md-1 col-form-label"}>Senha:</label>
                    <div className="col-xs-7 col-sm-7 col-md-4">
                        <input type="password" onChange={handleAuthChange} className="form-control" name="password" id="password" placeholder="******" />
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-xs-12 col-sm-12 col-md-6 offset-md-1">
                        <button className="btn btn-primary">
                            <i className="fas fa-unlock-alt"></i> Acessar
                        </button>
                    </div>
                </div>
                <div className="row pt-1">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <Link to={"#"} onClick={handleModal}>Novo por aqui?</Link>
                    </div>
                </div>
            </form>

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

        </div>
    )
}

export default Login
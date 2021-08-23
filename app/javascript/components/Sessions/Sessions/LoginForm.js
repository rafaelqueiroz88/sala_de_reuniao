import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'

const LoginForm = (props) => {

    return(
        <Form onSubmit={props.authSubmit}>

            <Form.Group as={Row} className="mb-3" controlId="authEmail">
                <Form.Label column sm="2" md="1">
                    E-mail
                </Form.Label>
                <Col sm="10" md="3">
                    <Form.Control onChange={props.handleAuthChange} name="email" type="text" placeholder="nome@examplo.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="authPassword">
                <Form.Label column sm="2" md="1">
                    Senha
                </Form.Label>
                <Col sm="10" md="3">
                    <Form.Control onChange={props.handleAuthChange} name="password" type="password" placeholder="******" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="authPassword">
                <Col className="pl-4" xs={{ span: 3, offset: 3 }} sm={{ span: 3, offset: 2 }} md={{ span: 6, offset: 1 }}>
                    <Button type="submit">
                        <i className="fas fa-unlock-alt"></i> Acessar
                    </Button>
                </Col>
            </Form.Group>

            <Row className="row pt-2">
                <Col xs={12} sm={12} >
                    Novo por aqui?
                    <Link to={"#"} className="ml-2" onClick={props.handleModal}>
                        Cadastre-se
                    </Link>
                </Col>
            </Row>
        </Form>
    )
}

export default LoginForm
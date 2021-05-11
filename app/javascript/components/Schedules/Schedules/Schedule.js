import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Schedule = (props) => {

    let newDate = new Date()
    let date = newDate.getDate()

    return(
        <tbody>
            <tr>
                <td>
                    06:00
                </td>
                <td>
                    <Button className={"btn btn-outline-success btn-block"} onClick={props.handleSetCheckModal} >
                        <i className="fas fa-clipboard-check"></i> Concluído
                    </Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date + 1} 06:00`)} >
                        <i className="fas fa-calendar-day"></i> Disponível
                    </Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date + 2} 06:00`)} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date + 3} 06:00`)} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date + 4} 06:00`)} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>07:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date} 07:00`)} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${date + 1} 07:00`)} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>08:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >
                        <i className="fas fa-user-lock"></i> Ocupada
                    </Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>09:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} > 
                        <i className="fas fa-users"></i> Agendado
                    </Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>11:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} >Agendado</Button>
                </td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} >Agendado</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>12:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>13:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} >Agendado</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>14:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} >Agendado</Button>
                </td>
                <td>
                    <Button className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} >Agendado</Button>
                </td>
            </tr>
            <tr>
                <td>15:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>16:00</td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>17:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} >Ocupada</Button>
                </td>
            </tr>
            <tr>
                <td>18:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>19:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>20:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>21:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>22:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>
            <tr>
                <td>23:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} >Disponível</Button>
                </td>
            </tr>             
        </tbody>        
    )
}

export default Schedule
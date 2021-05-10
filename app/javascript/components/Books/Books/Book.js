import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {

    return(
        <tbody>
            <tr>
                <td>06:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>07:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>08:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>09:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>11:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>12:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>13:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>14:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
                <td>
                    <Link className={"btn btn-warning btn-block"} onClick={props.handleCancelModal} to={"#"}>Agendado</Link>
                </td>
            </tr>
            <tr>
                <td>15:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>16:00</td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>17:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-danger btn-block"} onClick={props.handleInfoModal} to={"#"}>Ocupada</Link>
                </td>
            </tr>
            <tr>
                <td>18:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>19:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>20:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>21:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>22:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>
            <tr>
                <td>23:00</td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
                <td>
                    <Link className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton} to={"#"}>Disponível</Link>
                </td>
            </tr>             
        </tbody>        
    )
}

export default Book
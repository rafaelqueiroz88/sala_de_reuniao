import React from 'react'
import Week from './Week'

const Schedule = (props) => {

    /**
     * getting week start
     * plus 1 for each day
     */
    let monday = new Date()
    let day = monday.getDay() || 7
    if(day !== 1)
        monday.setHours(-24 * (day - 1))

    let week = []
    if(props.loaded) {

        /**
         * i = hours
         * k = week
         */
        let i = 6
        
        for(i; i < 24; i ++) {

            week.push(
                <Week
                    hour={i}
                    handleSetCheckModal={props.handleSetCheckModal}
                    handleSchedulerButton={props.handleSchedulerButton}
                    schedules={props.schedules}
                    current_user={props.current_user}
                    current_user_id={props.current_user_id}
                />
            )
        }
    }

    return(
        <tbody>
            
            { week[0] }

            { week[1] }

            { week[2] }

            { week[3] }

            { week[4] }

            { week[5] }

            { week[6] }

            { week[7] }

            { week[8] }

            { week[9] }

            { week[10] }

            { week[11] }

            { week[12] }

            { week[13] }

            { week[14] }

            { week[15] }

            { week[16] }

            { week[17] }
            
            {/* 
                <tr>
                <td>07:00</td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() } 07:00`)} >Disponível</Button>
                </td>
                <td>
                    <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() + 1 } 07:00`)} >Disponível</Button>
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
             */}        
        </tbody>        
    )
}

export default Schedule
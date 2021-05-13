import React from 'react'

import ScheduleButton from './ScheduleButton'

const Week = (props) => {

    let hour = new Date()

    hour.setHours(props.hour)
    hour.setMinutes(0)
    hour.setSeconds(0)

    let now = new Date()

    /**
     * Adjusting time for display
     */
    hour = hour.toString()
    hour = hour.split(' ')
    let display_hour = hour[4].split(':')
    display_hour = `${display_hour[0]}:${display_hour[1]}`

    /**
     * getting week start
     * plus 1 for each day
     */
    let monday = new Date()
    let day = monday.getDay() || 7
    if(day !== 1)
        monday.setHours(-24 * (day - 1))

    return(
        <tr>
            <td>
                { display_hour }
            </td>
            <td>
                {
                    <ScheduleButton 
                        key={0} 
                        status={status}
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        day={monday.getDate()}
                        month={monday.getMonth()}
                        hour={props.hour}
                    />
                }
            </td>
            <td>
                {
                    <ScheduleButton 
                        key={0} 
                        status={status}
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        day={monday.getDate() + 1}
                        month={monday.getMonth()}
                        hour={props.hour}
                    />
                }
                {/* <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() + 1 } 06:00`)} >
                    <i className="fas fa-calendar-day"></i> Disponível
                </Button> */}
            </td>
            <td>
                {
                    <ScheduleButton 
                        key={0} 
                        status={status}
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        day={monday.getDate() + 2}
                        month={monday.getMonth()}
                        hour={props.hour}
                    />
                }
                {/* <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() + 2 } 06:00`)} >
                    <i className="fas fa-calendar-day"></i> Disponível
                </Button> */}
            </td>
            <td>
                {
                    <ScheduleButton 
                        key={0} 
                        status={status}
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        day={monday.getDate() + 3}
                        month={monday.getMonth()}
                        hour={props.hour}
                    />
                }
                {/* <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() + 3 } 06:00`)} >
                    <i className="fas fa-calendar-day"></i> Disponível
                </Button> */}
            </td>
            <td>
                {
                    <ScheduleButton 
                        key={0} 
                        status={status}
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        day={monday.getDate() + 4}
                        month={monday.getMonth()}
                        hour={props.hour}
                    />
                }
                {/* <Button className={"btn btn-outline-primary btn-block"} onClick={props.handleSchedulerButton(`${ monday.getDate() + 4 } 06:00`)} >
                    <i className="fas fa-calendar-day"></i> Disponível
                </Button> */}
            </td>
        </tr>
    )
}

export default Week
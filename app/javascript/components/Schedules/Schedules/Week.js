import React from 'react'

import ScheduleButton from './Buttons/ScheduleButton'

const Week = (props) => {

    let has_data
    let scheduled_date = []
    let scheduled_time = []
    let i = 0
    if(props.schedules.length > 0) {
        has_data = true
        while(i < props.schedules.length) {
            let format = props.schedules[i].attributes.hour
            format = format.split(' ')
            scheduled_date.push(format[0])
            scheduled_time.push(format[1])
            i = i + 1
        }
    }

    let hour = new Date()

    hour.setHours(props.hour)
    hour.setMinutes(0)
    hour.setSeconds(0)

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
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        handleInfoModal={props.handleInfoModal}
                        handleCancelModal={props.handleCancelModal}
                        has_data={has_data}
                        current_user={props.current_user}
                        scheduled_date={scheduled_date}
                        scheduled_time={scheduled_time}
                        schedules={props.schedules}
                        day={monday.getDate()}
                        month={monday.getMonth()}
                        hour={props.hour}
                        current_user_id={props.current_user_id}
                    />
                }
            </td>
            <td>
                {
                    <ScheduleButton
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        handleInfoModal={props.handleInfoModal}
                        handleCancelModal={props.handleCancelModal}
                        has_data={has_data}
                        scheduled_date={scheduled_date}
                        scheduled_time={scheduled_time}
                        schedules={props.schedules}
                        day={monday.getDate() + 1}
                        month={monday.getMonth()}
                        hour={props.hour}
                        current_user_id={props.current_user_id}
                    />
                }
            </td>
            <td>
                {
                    <ScheduleButton
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        handleInfoModal={props.handleInfoModal}
                        handleCancelModal={props.handleCancelModal}
                        has_data={has_data}
                        scheduled_date={scheduled_date}
                        scheduled_time={scheduled_time}
                        schedules={props.schedules}
                        day={monday.getDate() + 2}
                        month={monday.getMonth()}
                        hour={props.hour}
                        current_user_id={props.current_user_id}
                    />
                }
            </td>
            <td>
                {
                    <ScheduleButton
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        handleInfoModal={props.handleInfoModal}
                        handleCancelModal={props.handleCancelModal}
                        has_data={has_data}
                        scheduled_date={scheduled_date}
                        scheduled_time={scheduled_time}
                        schedules={props.schedules}
                        day={monday.getDate() + 3}
                        month={monday.getMonth()}
                        hour={props.hour}
                        current_user_id={props.current_user_id}
                    />
                }
            </td>
            <td>
                {
                    <ScheduleButton
                        hour={display_hour}
                        handleSetCheckModal={props.handleSetCheckModal}
                        handleSchedulerButton={props.handleSchedulerButton}
                        handleInfoModal={props.handleInfoModal}
                        handleCancelModal={props.handleCancelModal}
                        has_data={has_data}
                        scheduled_date={scheduled_date}
                        scheduled_time={scheduled_time}
                        schedules={props.schedules}
                        day={monday.getDate() + 4}
                        month={monday.getMonth()}
                        hour={props.hour}
                        current_user_id={props.current_user_id}
                    />
                }
            </td>
        </tr>
    )
}

export default Week
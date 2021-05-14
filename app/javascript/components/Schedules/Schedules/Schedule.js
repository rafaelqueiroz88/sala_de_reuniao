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
                    handleInfoModal={props.handleInfoModal}
                    handleCancelModal={props.handleCancelModal}
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

        </tbody>        
    )
}

export default Schedule
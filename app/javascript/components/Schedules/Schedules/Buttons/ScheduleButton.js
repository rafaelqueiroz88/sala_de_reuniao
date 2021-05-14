import React from 'react'
import { Button } from 'react-bootstrap'

const ScheduleButton = (props) => {

    let now = new Date()
    now.setMinutes(0)
    now.setSeconds(0)

    let button
    let status

    const monthNames = [
        "Janeiro", 
        "Fevereiro", 
        "Março", 
        "Abril", 
        "Maio", 
        "Junho",
        "Julho", 
        "Agosto", 
        "Setembro", 
        "Outubro", 
        "Novembro", 
        "Dezembro"
    ];

    /**
     * All schedule mount logic is here
     */
    let i = 0
    if(props.has_data) {
        
        if(props.day < now.getDate()) {

            status = 0

            while(i < props.scheduled_date.length) {

                let formated = props.scheduled_date[i].split('-')
                let formated_time = props.scheduled_time[i].split(':')

                if(formated[2] == props.day) {
                    if(formated_time[0] == props.hour) {
                        status = 2
                    }
                    else {
                        status = 0
                    }
                }

                i++
            }
        }
        else if(props.day > now.getDate()) {

            status = 1

            while(i < props.scheduled_date.length) {

                let formated = props.scheduled_date[i].split('-')
                let formated_time = props.scheduled_time[i].split(':')

                if(formated[2] == props.day) {
                    if(formated_time[0] == props.hour) {
                        if(props.current_user_id == props.schedules[i].attributes.user_id) {
                            status = 3
                        }
                        else {
                            status = 4
                        } 
                    }
                }

                i++
            }
        }
        else if(props.day == now.getDate()) {

            status = 1

            if(props.hour < now.getHours()) {

                while(i < props.scheduled_date.length) {

                    let formated = props.scheduled_date[i].split('-')
                    let formated_time = props.scheduled_time[i].split(':')
    
                    if(formated[2] == props.day) {
                        if(formated_time[0] == props.hour) {
                            status = 2
                        }
                        else {
                            status = 0
                        }
                    }
    
                    i++
                }
            }
            else if(props.hour > now.getHours()) {
                status = 1                
            }
            else if(props.hour == now.getHours()) {
                
                while(i < props.scheduled_date.length) {

                    let formated = props.scheduled_date[i].split('-')
                    let formated_time = props.scheduled_time[i].split(':')
    
                    if(formated[2] == props.day) {
                        if(formated_time[0] == props.hour) {
                            status = 2
                        }
                        else {
                            status = 0
                        }
                    }
    
                    i++
                }
            }           
        }
    }

    /**
     * Empty, nothing for this date and not able to register
     */
    if(status == 0) {
        button = 
            <Button onClick={props.handleSetCheckModal(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-outline-success btn-block"} >
                <i className="fas fa-clipboard-check"></i> Concluído
            </Button>
    }
    
    /**
     * This period is empty and able for schedule
     */
    if(status == 1) {
        button = 
            <Button onClick={props.handleSchedulerButton(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-outline-primary btn-block"} >
                <i className="fas fa-calendar-day"></i> Disponível
            </Button>
    }

    /**
     * This period is not able to use, but there's data from schedule
     */
    if(status == 2) {
        button = 
            <Button onClick={props.handleSchedulerButton(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-success btn-block"} >
                <i className="fas fa-calendar-day"></i> Concluído
            </Button>
    }

    /**
     * This period is able to use, and there's data from schedule from current user authenticated
     */
    if(status == 3) {
        button = 
            <Button onClick={props.handleSchedulerButton(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-warning btn-block"} >
                <i className="fas fa-users"></i> Agendado
            </Button>
    }

    /**
     * This period is not able to use, and there's data from schedule and someone else
     */
     if(status == 4) {
        button = 
            <Button onClick={props.handleSchedulerButton(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-outline-danger btn-block"} >
                <i className="fas fa-user-lock"></i> Ocupada
            </Button>
    }

    return(
        <div>
            { button }
        </div>        
    )
}

export default ScheduleButton
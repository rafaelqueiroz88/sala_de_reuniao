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

    if(props.day < now.getDate()) {
        status = 0        
    }
    else if (props.day == now.getDate()) {
        if(props.hour > now.getHours())
            status = 1
        else
            status = 0
    }
    else
        status = 1

    if(props.status == 0) {
        button = 
            <Button onClick={props.handleSetCheckModal(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-outline-success btn-block"} >
                <i className="fas fa-clipboard-check"></i> Concluído
            </Button>
    }
    
    if(status == 1) {
        button = 
            <Button onClick={props.handleSchedulerButton(`${ props.day }/${ monthNames[props.month] } ${ props.hour }`)} className={"btn btn-outline-primary btn-block"} >
                <i className="fas fa-calendar-day"></i> Disponível
            </Button>
    }

    return(
        <div>
            { button }
        </div>        
    )
}

export default ScheduleButton
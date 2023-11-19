import React from 'react';
import {format} from "date-fns";

const DateIcon = (props) => {

    const day = props.dayOfWeek.getDay()
    const date = props.dayOfWeek
    const className = props.className

    function getDayName(day) {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return daysOfWeek[day];
    }

    return (
        <div className={className}>
            {format(date, 'd')}<br/>
            {getDayName(day)}
        </div>
    );
};

export {DateIcon};
import React from 'react';
import styles from '../styles/ScheduleCard.module.scss'
import {ReactComponent as SeminarLine} from '../assets/images/SeminarLine.svg'
import {ReactComponent as TimeRoomLine} from '../assets/images/TimeRoomLine.svg'
import {ReactComponent as TTicon} from '../assets/images/TTicon.svg'
import jsonData from '../lessions.json';

const ScheduleCard = (props) => {

    const id = props.id
    const time = props.time
    const room = props.room
    const type = props.type
    const teacher = props.teacher
    const name = props.name

    return (
        <div className={styles.container}>
            <div className={styles.timeRoom}>
                <div className={styles.time} key={id}>{time}</div>
                <TimeRoomLine />
                <div className={styles.room} key={id}>{room}</div>
            </div>
            <div>
                <SeminarLine />
            </div>
            <div className={styles.nameTypeTeacher}>
                <div className={styles.type} key={id}>{type}</div>
                <div className={styles.name} key={id}>{name}</div>
                <div className={styles.teacher} key={id}><TTicon />{teacher}</div>
            </div>
        </div>
    )
};

export {ScheduleCard};
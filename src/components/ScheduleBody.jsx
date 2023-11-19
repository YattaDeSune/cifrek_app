import React, {useState} from 'react';
import {DateIcon} from "./DateIcon";
import styles from "../styles/ScheduleBody.module.scss";
import stylesAct from "../styles/DateIcon.module.scss";
import {addDays, format, startOfWeek} from "date-fns";
import { ru } from 'date-fns/locale';
import {Link, Routes, Route} from "react-router-dom";
import {ScheduleCard} from "./ScheduleCard";
import jsonData from "../lessions.json";
import {Schedule} from "./Schedule";


const ScheduleBody = () => {

    const today = new Date();

    function getDayName(day) {
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return daysOfWeek[day];
    }

    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
    const weekDays = Array.from({ length: 6 }, (_, index) => {
        return addDays(startOfCurrentWeek, index);
    });

    const [activeLink, setActiveLink] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                {weekDays.map((day, index) => (
                    <Link
                        to={`/schedule/${index + 1}`}
                        onClick={() => setActiveLink(index)}
                    >
                        <DateIcon dayOfWeek={day} className={index === activeLink ? stylesAct.iconActive : stylesAct.icon}/>
                    </Link>
                ))}
            </div>

            <Routes>
                {weekDays.map((day, index) => (
                    <Route
                        path={`${index + 1}`}
                        element={<div className={styles.date}>{getDayName(index + 1)}, {format(day, 'd MMMM', { locale: ru })}</div>}
                    />
                ))}
            </Routes>

            <div className={styles.scheduleContainer}>

                <Routes>
                    <Route path='' element={<b><p style={{textAlign: "center"}}> Выберите нужную дату</p></b>} />
                    {weekDays.slice(0, 5).map((day, index) => (
                        <Route
                            key={index}
                            path={`${index + 1}`}
                            element={
                            jsonData.slice(0, index+1).map((item) => (
                                <ScheduleCard id={item.id} time={item.time} room={item.room} type={item.type} teacher={item.teacher} name={item.name}/>
                            ))}
                        />
                    ))}
                    <Route path='6' element={<p> Пар нет, общага гудит!</p>} />
                </Routes>

            </div>
        </div>
    );
};

export { ScheduleBody };

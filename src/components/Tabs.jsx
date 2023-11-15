import React from 'react';
import styles from '../styles/Tabs.module.scss'
import {NavLink} from "react-router-dom";

import {ReactComponent as Schedule} from '../assets/images/Schedule.svg'
import {ReactComponent as Electives} from '../assets/images/Electives.svg'
import {ReactComponent as Rating} from '../assets/images/Rating.svg'
import {ReactComponent as Teachers} from '../assets/images/Teachers.svg'
import {ReactComponent as Profile} from '../assets/images/Profile.svg'

import {ReactComponent as ScheduleGreen} from '../assets/images/ScheduleGreen.svg'
import {ReactComponent as ElectivesGreen} from '../assets/images/ElectivesGreen.svg'
import {ReactComponent as RatingGreen} from '../assets/images/RatingGreen.svg'
import {ReactComponent as TeachersGreen} from '../assets/images/TeachersGreen.svg'
import {ReactComponent as ProfileGreen} from '../assets/images/ProfileGreen.svg'

const Tabs = (props) => {

    const schedule = props.schedule
    const electives = props.electives
    const rating = props.rating
    const teachers = props.teachers
    const profile = props.profile

    return (
        <div>

            <div className={styles.tabMenu}>

                <NavLink
                    className={styles.tabElement}
                    to={`/schedule`}>
                    {schedule ? <ScheduleGreen /> : <Schedule />}
                    {schedule ? <p className={styles.textActive}>Расписание</p> : <p>Расписание</p>}
                </NavLink>

                <NavLink
                    className={styles.tabElement}
                    to={`/electives`}>
                    {electives ? <ElectivesGreen /> : <Electives />}
                    {electives ? <p className={styles.textActive}>Факльтативы</p> : <p>Факльтативы</p>}
                </NavLink>

                <NavLink
                    className={styles.tabElement}
                    to={`/rating`}>
                    {rating ? <RatingGreen /> : <Rating />}
                    {rating ? <p className={styles.textActive}>Рейтинг</p> : <p>Рейтинг</p>}
                </NavLink>

                <NavLink
                    className={styles.tabElement}
                    to={`/teachers`}>
                    {teachers ? <TeachersGreen /> : <Teachers />}
                    {teachers ? <p className={styles.textActive}>Преподаватели</p> : <p>Преподаватели</p>}
                </NavLink>

                <NavLink
                    className={styles.tabElement}
                    to={`/profile`}>
                    {profile ? <ProfileGreen /> : <Profile />}
                    {profile ? <p className={styles.textActive}>Профиль</p> : <p>Профиль</p>}
                </NavLink>

            </div>

        </div>
    );
};

export {Tabs};
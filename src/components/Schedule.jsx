import React from 'react';
import styles from '../styles/Tabs.module.scss'
import {useNavigate} from "react-router-dom";

import {ReactComponent as ScheduleIcon} from '../assets/images/Schedule.svg'
import {ReactComponent as Electives} from '../assets/images/Electives.svg'
import {ReactComponent as Rating} from '../assets/images/Rating.svg'
import {ReactComponent as Teachers} from '../assets/images/Teachers.svg'
import {ReactComponent as Profile} from '../assets/images/Profile.svg'

import {ReactComponent as ScheduleGreen} from '../assets/images/ScheduleGreen.svg'
import {ReactComponent as ElectivesGreen} from '../assets/images/ElectivesGreen.svg'
import {ReactComponent as RatingGreen} from '../assets/images/RatingGreen.svg'
import {ReactComponent as TeachersGreen} from '../assets/images/TeachersGreen.svg'
import {ReactComponent as ProfileGreen} from '../assets/images/ProfileGreen.svg'

const Schedule = () => {

    const navigate = useNavigate()
    const handleNavigateToElectives = () => navigate('/electives')
    const handleNavigateToRating = () => navigate('/rating')
    const handleNavigateToTeachers = () => navigate('/teachers')
    const handleNavigateToProfile = () => navigate('/profile')

    return (
        <div className={styles.container}>

            Расписание

            <div className={styles.tabMenu}>

                <div className={styles.tabElementActive}><ScheduleGreen /> Расписание </div>
                <div onClick={handleNavigateToElectives} className={styles.tabElement}><Electives /> Факультативы </div>
                <div onClick={handleNavigateToRating} className={styles.tabElement}><Rating /> Рейтинг </div>
                <div onClick={handleNavigateToTeachers} className={styles.tabElement}><Teachers /> Преподаватели </div>
                <div onClick={handleNavigateToProfile} className={styles.tabElement}><Profile /> Профиль </div>

            </div>

        </div>
    );
};

export {Schedule};
import React from 'react'
import styles from '../styles/Header.module.scss';

const Header = (props) => {

    const name = props.name

    return (
        <div className={styles.header}>
            <p className={styles.text}>{name}</p>
        </div>
    );
};

export {Header};
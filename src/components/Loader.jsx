import React from 'react';
import styles from "../styles/Autorization.module.scss";
import {ReactComponent as CifrEk_logo} from "../assets/images/CifrEk_logo.svg";

const Loader = () => {
    return (
        <div className={styles.container}>
            <CifrEk_logo />
        </div>
    );
};

export {Loader};
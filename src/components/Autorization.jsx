import React, {useEffect, useState} from 'react';
import styles from '../styles/Autorization.module.scss'
import {useNavigate} from "react-router-dom";

const Autorization = () => {

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [isValid, setIsValid] = useState(false);

    const navigate = useNavigate()
    const handleNavigateAut = () => navigate('/code')
    const blurHandler = (e) => {
        return setEmailDirty(true)
    }
    const EmailHandler = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email')
        } else {
            setEmailError('')
        }
    }

    useEffect(() => {
        if (emailError) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [emailError]);

    return (
        <div className={styles.container}>

                <div className={styles.text}>Введите вашу почту</div>

                {(emailDirty && emailError) && <div className={styles.textError}>{emailError}</div>}
                <input
                    type="text"
                    className={styles.inputMail}
                    placeholder="Ваш email"
                    onBlur={ e => blurHandler(e)}
                    value={email}
                    onChange={ e => EmailHandler(e)}
                />

                <button className={styles.getCodeBtn} onClick={handleNavigateAut} disabled={!isValid}>
                    Получить код
                </button>

        </div>
    );
};

export {Autorization};
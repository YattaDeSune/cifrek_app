import React, {useEffect, useState} from 'react';
import './autorization.css'
import {useNavigate} from "react-router-dom";

const Autorization = () => {

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [isValid, setIsValid] = useState(false);

    const navigate = useNavigate()
    const goNext = () => navigate('/code')
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
        <div className='container'>
            <div className='autorizationContainer'>

                <div className='text'>Введите вашу почту</div>

                {(emailDirty && emailError) && <div className='textError'>{emailError}</div>}
                <input
                    type="text"
                    className='inputMail'
                    placeholder="Ваш email"
                    onBlur={ e => blurHandler(e)}
                    value={email}
                    onChange={ e => EmailHandler(e)}
                />

                <button className='getCodeBtn' onClick={goNext} disabled={!isValid}>
                        <span className='textBtn'>Получить код</span>
                </button>

            </div>
            <div className='footer'>
                <div className='line'>

                    <svg width="161" height="6" viewBox="0 0 161 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3" y1="3" x2="158" y2="3" stroke="black" stroke-width="6" stroke-linecap="round"/>
                    </svg>

                </div>
            </div>
        </div>
    );
};

export {Autorization};
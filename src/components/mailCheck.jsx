import React, { useState } from 'react';
import './mailCheck.css'

function EmailValidation(props) {

    const email = props.email
    const isValid = props.isValid
    const setEmail = props.setEmail
    const setIsValid = props.setIsValid

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = emailRegex.test(inputEmail);
        setIsValid(isValidEmail);
        setEmail(inputEmail);
    };

    return (
            <input
                type="text"
                placeholder="Ваш email"
                value={email}
                onChange={handleEmailChange}
                className={isValid ? 'inputMail' : 'inputMailError'}
            />
    );
}

export default EmailValidation;
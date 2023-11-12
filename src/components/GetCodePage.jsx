import React, {useState} from 'react';
import codeStyles from '../styles/GetCodePage.module.scss'
import {useNavigate} from "react-router-dom";
import styles from "../styles/Autorization.module.scss";
import {InputCodeElement} from "./InputCodeElement";

const GetCodePage = () => {

    const [finalError, setFinalError] = useState(false)
    const [code0, setCode0] = useState('')
    const [code1, setCode1] = useState('')
    const [code2, setCode2] = useState('')
    const [code3, setCode3] = useState('')
    const [codeError0, setCodeError0] = useState('Есть пустые поля')
    const [codeError1, setCodeError1] = useState('Есть пустые поля')
    const [codeError2, setCodeError2] = useState('Есть пустые поля')
    const [codeError3, setCodeError3] = useState('Есть пустые поля')

    const navigate = useNavigate()
    const handleNavigateCode = () => navigate('/schedule')

    function checkError () {
        return (codeError0 || codeError1 || codeError2 || codeError3) ? true : false;
    }

    const codeHandlerZero = (e) => {
        setCode0(e.target.value)
        if (!e.target.value.length) {
            setCodeError0('Есть пустые поля')
        } else {
            setCodeError0('')
        }
    }

    const codeHandlerFirst = (e) => {
        setCode1(e.target.value)
        if (!e.target.value.length) {
            setCodeError1('Есть пустые поля')
        } else {
            setCodeError1('')
        }
    }

    const codeHandlerSecond = (e) => {
        setCode2(e.target.value)
        if (!e.target.value.length) {
            setCodeError2('Есть пустые поля')
        } else {
            setCodeError2('')
        }
    }

    const codeHandlerThird = (e) => {
        setCode3(e.target.value)
        if (!e.target.value.length) {
            setCodeError3('Есть пустые поля')
        } else {
            setCodeError3('')
        }
    }

    return (
        <div className={styles.container}>

                <p className={styles.text}>Введите 4-значный код</p>

                {finalError && <div className={styles.textError}>Есть пустые поля</div>}

                <div className={codeStyles.codeInput}>

                    <InputCodeElement value={code0} func={(e) => codeHandlerZero(e)} />
                    <InputCodeElement value={code1} func={(e) => codeHandlerFirst(e)} />
                    <InputCodeElement value={code2} func={(e) => codeHandlerSecond(e)} />
                    <InputCodeElement value={code3} func={(e) => codeHandlerThird(e)} />

                </div>

                <button
                    className={codeStyles.getCodeBtnPageCode}
                    onClick={() => checkError() ? setFinalError(true) : handleNavigateCode()}
                >   Далее
                </button>

        </div>
    );
};

export {GetCodePage};
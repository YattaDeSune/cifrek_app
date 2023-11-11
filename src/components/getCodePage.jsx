import React, {useState} from 'react';
import './GetCodePage.css'
import {useNavigate} from "react-router-dom";

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
    const goNext = () => navigate('/schedule')

    function checkError () {
        return (codeError0 || codeError1 || codeError2 || codeError3) ? true : false;
    }
    const codeHandler0 = (e) => {
        setCode0(e.target.value)
        if (!e.target.value.length) {
            setCodeError0('Есть пустые поля')
        } else {
            setCodeError0('')
        }
    }
    const codeHandler1 = (e) => {
        setCode1(e.target.value)
        if (!e.target.value.length) {
            setCodeError1('Есть пустые поля')
        } else {
            setCodeError1('')
        }
    }
    const codeHandler2 = (e) => {
        setCode2(e.target.value)
        if (!e.target.value.length) {
            setCodeError2('Есть пустые поля')
        } else {
            setCodeError2('')
        }
    }
    const codeHandler3 = (e) => {
        setCode3(e.target.value)
        if (!e.target.value.length) {
            setCodeError3('Есть пустые поля')
        } else {
            setCodeError3('')
        }
    }

    return (
        <div className='container'>
            <div className='autorizationContainer'>

                <div className='text'>Введите 4-значный код</div>

                {finalError && <div className='textError'>Есть пустые поля</div>}

                <div className='codeInput'>

                    <input
                        maxLength='1'
                        className='codeElement'
                        placeholder='' value={code0}
                        onChange={(e) => codeHandler0(e)}
                    />
                    <input
                        maxLength='1'
                        className='codeElement'
                        placeholder='' value={code1}
                        onChange={(e) => codeHandler1(e)}
                    />
                    <input
                        maxLength='1'
                        className='codeElement'
                        placeholder='' value={code2}
                        onChange={(e) => codeHandler2(e)}
                    />
                    <input
                        maxLength='1'
                        className='codeElement'
                        placeholder='' value={code3}
                        onChange={(e) => codeHandler3(e)}
                    />

                </div>

                <button
                    className='getCodeBtn_2'
                    onClick={() => checkError() ? setFinalError(true) : goNext()}
                >
                    <span className='textBtn'>Далее</span>
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

export {GetCodePage};
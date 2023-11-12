import React from 'react';
import codeStyles from "../styles/GetCodePage.module.scss";

const InputCodeElement = (props) => {

    const value = props.value
    const onChangeFunc = props.func

    return (
        <input
            maxLength='1'
            className={codeStyles.codeElement}
            value={value}
            onChange={onChangeFunc}
        />
    );
};

export {InputCodeElement};
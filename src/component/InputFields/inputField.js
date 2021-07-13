import React from 'react'
import PhoneNumberInput from './PhoneNumberInput/phoneNumberInput';
import  "./styles.css";
const InputField = ({label,onChange,onSelect,type}) => {
    return (
        <div className='inputField'>
            <label>{label}</label> 
            <PhoneNumberInput onChange={onChange} onSelect={onSelect} />  
        </div>
    )
}

export default InputField



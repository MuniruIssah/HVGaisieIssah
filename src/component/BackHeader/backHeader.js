import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import  "./styles.css";
import back from "../../assets/back.svg"
import { useHistory } from 'react-router-dom';
export const BackHeader = ({text}) => {
    const history=useHistory()

    const handleGoBack=()=>{
        history.goBack();
    }
    return (
        <div className='backHeader'>
            <button onClick={handleGoBack}><div className='backHeaderIcon'></div>{text}</button>
        </div>
    )
}

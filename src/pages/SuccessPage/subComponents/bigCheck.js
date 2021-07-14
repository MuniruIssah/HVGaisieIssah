import React from 'react'
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
export const BigCheck = () => {
    return (
        <FontAwesomeIcon icon={faCheckCircle} className='successIcon' />
    )
}

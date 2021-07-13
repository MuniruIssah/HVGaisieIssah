import { Button } from 'bootstrap'
import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const PasswordField = () => {
    return (
        <InputGroup>
        <InputGroupAddon addonType="append" >
          <InputGroupText>
            <Button><FontAwesomeIcon icon={faEyeSlash} /> </Button>
          </InputGroupText>
        </InputGroupAddon>
        <Input type='password'  placeholder="Enter Number" className='telInput' required />
      </InputGroup>
        
    )
}

export default PasswordField

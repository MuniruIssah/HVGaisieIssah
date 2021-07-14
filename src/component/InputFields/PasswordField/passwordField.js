import React,{useState} from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"
const PasswordField = ({onChange,onSelect}) => {
    const [passwordType, setPasswordType] = useState(true)
    const handleChange=(e)=>{
      onChange(e)
    }
    return (
        <InputGroup>
        <Input  type={passwordType?'password':'text'}  placeholder="New Password"  onChange={handleChange} required />
        <InputGroupAddon addonType='append' >
          <InputGroupText>
            <button type='button' onClick={()=>setPasswordType(!passwordType)}  className='eyeButton'><FontAwesomeIcon className='passwordIcon' icon={passwordType?faEyeSlash:faEye} /></button>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
        
    )
}

export default PasswordField
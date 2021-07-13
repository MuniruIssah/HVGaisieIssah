import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Flag} from "react-bootstrap-icons";
import "./styles.css"
const PhoneNumberInput = ({onChange,onSelect}) => {
    const handleChange=(e)=>{
      onChange(e)
    }
    return (
        <InputGroup>
        <InputGroupAddon addonType="prepend" >
          <InputGroupText>
            <Input addon type='select' onChange={onSelect} required className='numberInput' >
                <option value='+233'>+233</option>
                <option value='+234'>+234</option>
                <option value='+235'>+235</option>
            </Input>
          </InputGroupText>
        </InputGroupAddon>
        <Input type='tel' placeholder="Enter Number" className='telInput' onChange={handleChange} required />
      </InputGroup>
        
    )
}

export default PhoneNumberInput

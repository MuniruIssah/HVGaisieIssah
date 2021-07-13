import React from 'react'
import { FormGroup,Label,Input } from "reactstrap";
import './styles.css'
const StoreRadio = ({data,onSelect}) => {
    const handleSelection=()=>{
        onSelect(data.name)
    }
    return (
        <button onClick={handleSelection} className='storeRadio' style={{background:data.selected?'#553ffb20':'transparent'}}>
            <div className='firstDiv' style={{border:data.selected?'2px solid #553ffb':'2px solid grey',}}>
                {data.selected?<div className="selected"></div>:null}
            </div>
            
            <div className='secondDiv'>
                <div className='innerImage' ></div>
                <div className='innerText'>
                <span>{data.name}</span>
                <br/>
                <span>{data.description}</span>
                </div>
            </div>
        </button>
    )
}

export default StoreRadio;

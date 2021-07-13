import React from 'react'
import StoreRadio from '../StoreRadio/storeRadio';
import './styles.css'

const StoresList = ({list,onSelect}) => {
    return (
        <div className='storesList'>
        {
            list.map(shop=>(
                <StoreRadio data={shop} onSelect={onSelect} key={shop.name} />
            ))
        }
        </div>
    )
}

export default StoresList

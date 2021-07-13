import React from 'react'
import HvHeader from '../component/HVHeader/hvHeader'

export const GreyCenterLayout = ({children}) => {
    return (
        <div className="centeredPage grey">
            <HvHeader/>
            {children}
        </div>
    )
}



export const WhiteCenterLayout = ({children}) => {
    return (
        <div className="centeredPage">
            <HvHeader/>
            {children}
        </div>
    )
}




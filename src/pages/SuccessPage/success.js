import React from 'react'
import { GreyCenterLayout } from '../../layouts/centerLayout'
import SuccessCard from './subComponents/successCard'
import SuccessContent from './subComponents/successContent'
const SuccessPage = () => {
    return (
        <GreyCenterLayout>
                <SuccessCard>
                    <SuccessContent/>
                </SuccessCard>
        </GreyCenterLayout>
    )
}

export default SuccessPage;

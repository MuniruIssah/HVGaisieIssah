import React from 'react'
import { GreyCenterLayout } from '../../layouts/centerLayout'
import SuccessCard from './components/successCard'
import SuccessContent from './components/successContent'
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

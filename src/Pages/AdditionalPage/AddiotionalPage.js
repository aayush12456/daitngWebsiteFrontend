import React from 'react'
import { AdditonalInformation } from '../../Components/common/Form/AdditionalInformation/AdditonalInformation'
import { Header } from '../../Components/common/Header/Header'
import { useLocation } from 'react-router-dom'
export const AddiotionalPage = () => {
    let Data = useLocation();
    let addData=Data.state
  return (
  <>
  <Header add={addData}/>
  <AdditonalInformation additionalData={addData}/>
  </>
  )
}

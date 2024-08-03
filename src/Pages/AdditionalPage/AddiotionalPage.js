import React from 'react'
import { AdditonalInformation } from '../../Components/common/Form/AdditionalInformation/AdditonalInformation'
import { Header } from '../../Components/common/Header/Header'
import { useLocation } from 'react-router-dom'
import ProgressBarData from '../../Components/common/progressBar/progressBar'
import {Helmet} from 'react-helmet'
export const AddiotionalPage = ({resetObj}) => {
  const resetData=resetObj
    let Data = useLocation();
    let addData=Data.state
  return (
  <>
  <Helmet>
            <title>Register for Free - Step 1 - ApnaPan </title>
        </Helmet>
  <Header add={addData}reset={resetData}/>
  <p className="text-center text-2xl font-bold pt-8 text-[#000]">
        Tell us about Yourself
      </p>
      <ProgressBarData/>
  <AdditonalInformation additionalData={addData}/>
  </>
  )
}

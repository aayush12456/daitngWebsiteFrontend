import React from 'react'
import { PersonalProfile } from '../../Components/personalProfile/personalProfile'
import {Helmet} from 'react-helmet'
export const PersonalProfilePage = () => {
  const personalData=sessionStorage.getItem('loginObject')
  const personalDataObject=JSON.parse(personalData)
  const personalSignupData=sessionStorage.getItem('signupObject')
  const personalSignUpDataObject=JSON.parse(personalSignupData)
  // console.log('personal signup',personalSignUpDataObject)
  return (
<>
<Helmet>
            <title>ApnaPan - My Profile</title>
        </Helmet>
<PersonalProfile personalProfile={personalDataObject} personalSignupProfile={personalSignUpDataObject}/>
</>
  )
}

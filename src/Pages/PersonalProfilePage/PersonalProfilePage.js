import React from 'react'
import { PersonalProfile } from '../../Components/personalProfile/personalProfile'

export const PersonalProfilePage = () => {
  const personalData=sessionStorage.getItem('loginObject')
  const personalDataObject=JSON.parse(personalData)
  const personalSignupData=sessionStorage.getItem('signupObject')
  const personalSignUpDataObject=JSON.parse(personalSignupData)
  console.log('personal signup',personalSignUpDataObject)
  return (
<>
<PersonalProfile personalProfile={personalDataObject} personalSignupProfile={personalSignUpDataObject}/>
</>
  )
}

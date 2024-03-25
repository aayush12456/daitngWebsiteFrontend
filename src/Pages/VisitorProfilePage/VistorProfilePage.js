import React from 'react'
import { VisitorProfile } from '../../Components/visitorProfile/visitorProfile'
import { useLocation } from 'react-router-dom'
export const VisitorProfilePage = () => {
  let visitor=useLocation()
  let visitorData=visitor.state
  return (
    <>
    <VisitorProfile visitor={visitorData}/>
    </>
  )
}

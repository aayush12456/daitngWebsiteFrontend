import React from 'react'
import { useLocation } from 'react-router-dom'
import { VisitorProfile } from '../visitorProfile/visitorProfile'
export const NewAndOnlinePageContent = () => {
    let newData=useLocation()
    let newAndOnlineContentData=newData.state
    console.log('new data is',newAndOnlineContentData)
  return (
  <>
<VisitorProfile OnlineContent={newAndOnlineContentData}/>
  </>
  )
}

import React from 'react'
import { MatchesMainContent } from '../../Components/matchesMainContent/matchesMainContent'
import { useLocation } from 'react-router-dom'
import { PersonalProfile } from '../../Components/personalProfile/personalProfile'
export const MatchesMainContentPage = () => {
    let matchesContent=useLocation()
    const matchesMainDataContent=matchesContent.state
    // console.log('matches main content',matchesMainDataContent)
  return (
   <>
   {/* <MatchesMainContent/> */}
   <PersonalProfile  matchesMainContent={matchesMainDataContent}/>
   </>
  )
}

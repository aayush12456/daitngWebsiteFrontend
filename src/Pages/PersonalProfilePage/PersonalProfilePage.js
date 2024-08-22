import React from 'react'
import { PersonalProfile } from '../../Components/personalProfile/personalProfile'
import {Helmet} from 'react-helmet'
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getBollywoodSongsFromSpotifyAsync } from '../../Redux/Slice/getBollywoodSongsFromSpotifySlice/getBollywoodSongsFrom SpotifySlice'
import { getSongAsync } from '../../Redux/Slice/getSongSlice/getSongSlice'
export const PersonalProfilePage = () => {
  const dispatch=useDispatch()
  const personalData=sessionStorage.getItem('loginObject')
  const personalDataObject=JSON.parse(personalData)
  const personalSignupData=sessionStorage.getItem('signupObject')
  const personalSignUpDataObject=JSON.parse(personalSignupData)
  // console.log('personal signup',personalSignUpDataObject)

  const id = sessionStorage.getItem("userId");
  const songsArray=useSelector((state)=>state.getBollywoodSongs.getBollywoodSongUserObj.uploadSongsData)
  const selectSong=useSelector((state)=>state.getSong.getSongObj.selectedObj)
  // console.log('selected song is',selectSong)
useEffect(()=>{
  if(id){
  dispatch(getBollywoodSongsFromSpotifyAsync(id))
  }
  },[id,dispatch])

useEffect(()=>{
if(id){
dispatch(getSongAsync(id))
}
},[id,dispatch])
  return (
<>
<Helmet>
            <title>ApnaPan - My Profile</title>
        </Helmet>
<PersonalProfile personalProfile={personalDataObject} personalSignupProfile={personalSignUpDataObject} allSongs={songsArray} selectedSong={selectSong}/>
</>
  )
}

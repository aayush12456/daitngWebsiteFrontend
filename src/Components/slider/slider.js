import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getMatchesData } from '../../Redux/Slice/getMatchesSlice/getMatchesSlice'
import Matches from '../matches/matches'
import { passDataArraySliceAcions } from '../../Redux/Slice/passDataArraySlice/passDataArraySliice'
export const Sliders = (props) => {
    const dispatch=useDispatch()
    const [searchData,setSearchData]=useState([])
    const id=sessionStorage.getItem('userId')
    const sliderIdData=sessionStorage.getItem('sliderData')

    useEffect(()=>{
        dispatch(getMatchesData(id))
        },[])
    const sliderData=useSelector((state)=>state.matchData.getMatchesArray.interestUsers)

   useEffect(()=>{
    if(sliderData && sliderData.length>0){
        const filteredData = sliderData.filter((item) => {
            const dobArray = item.DOB.split('/');
            // const dobYear = parseInt(dobArray[2]);
            // return dobYear === birthYear;
            const year = dobArray?.[2];
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            const age = year ? currentYear - parseInt(year) : "";
            return age<=sliderIdData
          });
          setSearchData(filteredData)
    }
   },[sliderData])
    console.log('search data is',searchData)
    props.slider(searchData)
    dispatch(passDataArraySliceAcions.passData(searchData))
  return (
<>
{
 searchData?.slice(0,1).map(searchItem=>{
        return (
            <>
            <Matches matches={searchItem}  />
            </>
        )
    })

}
</>
  )
}

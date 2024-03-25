import { useEffect ,useState} from "react"
import Matches from "../../Components/matches/matches"
import { useDispatch, useSelector } from "react-redux"
import { getMatchesData } from "../../Redux/Slice/getMatchesSlice/getMatchesSlice"
const MatchPage=()=>{
    const dispatch=useDispatch()
    const matchesData=useSelector((state)=>state.matchData.getMatchesArray.interestUsers)
    console.log('matches data',matchesData)
    const id=sessionStorage.getItem('userId')
    useEffect(()=>{
        dispatch(getMatchesData(id))
        },[])
return (
    <>
    <div className="flex gap-4 justify-center">

    {
       matchesData && matchesData.length>0? matchesData?.slice(0,1).map(matchesItem=>{
            return (
                <>
<Matches matches={matchesItem}  />
                </>
            )
        }):
        <p className='text-center pt-60 text-2xl font-semibold'>No matches is there</p>

    }
    </div>
    </>
)
}
export default MatchPage
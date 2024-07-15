import { useEffect, useState } from "react";
import Matches from "../../Components/matches/matches";
import { useDispatch, useSelector } from "react-redux";
import { getMatchesData } from "../../Redux/Slice/getMatchesSlice/getMatchesSlice";
import { getDeactivateUserAsync } from "../../Redux/Slice/getDeactivateUser/getDeactivateUser";

const MatchPage = () => {
    const dispatch = useDispatch();
    const matchesData = useSelector((state) => state.matchData.getMatchesArray.interestUsers);
    const [matchArrayData,setMatchArrayData]=useState(matchesData)
    // const matchesData = useSelector((state) => state.matchData.getMatchesArray.interestUsers);
    const matchArray=useSelector((state)=>state.  passMatchArray.passMatchArrayData)
    const crossId=useSelector((state)=>state.  passData. passData)
    console.log('cross id is',crossId)
    console.log('match array in main',matchArray)
    console.log('matches data is',matchesData)
    const [currentIndex, setCurrentIndex] = useState(0);
    const id = sessionStorage.getItem('userId');

    useEffect(() => {
        dispatch(getMatchesData(id));
        dispatch(getDeactivateUserAsync(id))
    }, [dispatch, id]);
    
  useEffect(()=>{
    if(crossId){
        setTimeout(()=>{
            const matchArray=matchArrayData?.filter((item)=>item._id!==crossId)
            setMatchArrayData(matchArray)
        },700)
  
    }
    else{
        setMatchArrayData(matchesData)
    }
  },[crossId,matchesData])
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % matchArrayData?.length);
        }, 60000); // 60000 ms = 1 minute

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [matchArrayData]);

    return (
        <>
            <div className="flex gap-4 justify-center">
                {matchArrayData && matchArrayData.length > 0 ? (
                    <Matches matches={matchArrayData[currentIndex]} />
                ) : (
                    <p className="text-center pt-60 text-2xl font-semibold">No matches is there</p>
                )}
            </div>
        </>
    );
};

export default MatchPage;

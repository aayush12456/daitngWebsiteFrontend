import { useEffect, useState } from "react";
import Matches from "../../Components/matches/matches";
import { useDispatch, useSelector } from "react-redux";
import { getMatchesData } from "../../Redux/Slice/getMatchesSlice/getMatchesSlice";

const MatchPage = () => {
    const dispatch = useDispatch();
    const matchesData = useSelector((state) => state.matchData.getMatchesArray.interestUsers);
    const [currentIndex, setCurrentIndex] = useState(0);
    const id = sessionStorage.getItem('userId');

    useEffect(() => {
        dispatch(getMatchesData(id));
    }, [dispatch, id]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % matchesData.length);
        }, 60000); // 60000 ms = 1 minute

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [matchesData]);

    return (
        <>
            <div className="flex gap-4 justify-center">
                {matchesData && matchesData.length > 0 ? (
                    <Matches matches={matchesData[currentIndex]} />
                ) : (
                    <p className="text-center pt-60 text-2xl font-semibold">No matches is there</p>
                )}
            </div>
        </>
    );
};

export default MatchPage;

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { deleteSkipProfileUserAsync } from "../../Redux/Slice/deleteSkipProfileUser/deleteSkipProfileUser";

const SkipBlockModal = ({ skipModal, skipCloseModal, skipProfile }) => {
    const dispatch = useDispatch();
    const id = sessionStorage.getItem('userId');
    const [localSkipProfile, setLocalSkipProfile] = useState([]);

    useEffect(() => {
        setLocalSkipProfile(skipProfile.skipProfile || []);
    }, [skipProfile]);

    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        animation: 'dropDown 1s ease-out'
    };

    const skipProfileData = (skipId) => {
        // Optimistically update the local state
        setLocalSkipProfile(prevState => prevState.filter(skipItem => skipItem._id !== skipId));

        // Dispatch the async thunk to delete the profile from the backend
        dispatch(deleteSkipProfileUserAsync({ id: id, deleteUserId: skipId }));
    };

    return (
        <>
            <Modal
                open={skipModal}
                onClose={skipCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-center font-semibold text-xl text-[#333]">{skipProfile.title}</p>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {
                            localSkipProfile.length > 0 ? localSkipProfile.map(skipItem => {
                                const dob = skipItem.DOB;
                                const dobBreak = dob?.split("/");
                                const year = dobBreak?.[2];
                                let currentDate = new Date();
                                let currentYear = currentDate.getFullYear();
                                const age = year ? currentYear - parseInt(year) : "";
                                return (
                                    <div className="w-full rounded overflow-hidden shadow-lg mt-4" key={skipItem._id}>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <img src={skipItem.images[0]} className="w-16 rounded-full cursor-pointer h-16 mt-3 mb-3 ml-4" />
                                                <div className="pt-3">
                                                    <p><span className="text-lg font-semibold text-black">{skipItem.firstName}</span> , <span className="text-md text-black">{age}</span></p>
                                                    <p><span className="text-md  text-[#333]">{skipItem.city}</span> <span className="text-sm text-[#333]">{skipItem.profession}</span></p>
                                                </div>
                                            </div>
                                            <div className="mr-5 mt-5 mb-3">
                                                <button className="bg-[#30b21e] hover:bg-[#30b21e] text-[#fff] py-2 px-4 rounded w-28" onClick={() => skipProfileData(skipItem._id)}>
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <p className="text-center pt-4">No Skipped Profiles</p>}
                    </div>
                </Box>
            </Modal>
            <style jsx="true">{`
                @keyframes dropDown {
                    0% {
                        transform: translateY(100vh) translate(-50%, -50%);
                    }
                    100% {
                        transform: translateY(0) translate(-50%, -50%);
                    }
                }
            `}</style>
        </>
    );
};

export default SkipBlockModal;

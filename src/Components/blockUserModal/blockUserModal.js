import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch,useSelector } from "react-redux";
import '../../../src/styles.css'
import { getBlockUserAsync } from "../../Redux/Slice/getBlockUserSlice/getBlockUserSlice";
import { deleteBlockUserAsync } from "../../Redux/Slice/deleteBlockUserSlice/deleteBlockUserSlice";
const BlockUserModal=({blockModal,blockCloseModal})=>{
    const dispatch = useDispatch();
    const id = sessionStorage.getItem('userId');
    const blockUserSelector=useSelector((state)=>state.getBlockUser.getBlockUserObj.blockUserArray)
    const [blockUserArray,setBlockUserArray]=useState([])
    
    console.log('block user array',blockUserSelector)
    useEffect(()=>{
        if(id){
    dispatch(getBlockUserAsync(id))
        }
    },[id,dispatch])
    useEffect(() => {
        setBlockUserArray(blockUserSelector || []);
    }, [blockUserSelector]);
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
        animation: 'dropDown 1s ease-out',
        '@media (min-width: 300px) and (max-width: 350px)': {
            width: 300,
            left:"50%",
            top:"50%",
       
          },
          '@media (min-width: 350px) and (max-width: 400px)': {
            width: 350,
            left:"50%",
            top:"50%"
          },
          '@media (min-width: 400px) and (max-width: 500px)': {
            width: 400,
            left:"50%",
            top:"50%"
          },
          '@media (min-width: 500px) and (max-width: 600px)': {
            width: 450,
            left:"50%",
            top:"50%"
          },
          '@media (min-width: 600px) and (max-width: 700px)': {
            width: 500,
            left:"50%",
            top:"50%"
          },
    };
const deleteBlockUserHandler=(blockItem)=>{
    const deleteBlockObj={
        id:id,
        blockId:blockItem._id
    }
    setBlockUserArray(prevState => prevState.filter(blockItemData => blockItemData._id !== blockItem._id));
    dispatch(deleteBlockUserAsync(deleteBlockObj))
}
return (
    <>
 <Modal
                open={blockModal}
                onClose={blockCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-center font-semibold text-xl text-[#333]">Block Profiles</p>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {
                            blockUserArray?.length > 0 ? blockUserArray?.map(blockItem => {
                                const dob = blockItem.DOB;
                                const dobBreak = dob?.split("/");
                                const year = dobBreak?.[2];
                                let currentDate = new Date();
                                let currentYear = currentDate.getFullYear();
                                const age = year ? currentYear - parseInt(year) : "";
                                return (
                                    <div className="w-full rounded overflow-hidden shadow-lg mt-4" key={blockItem._id}>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <img src={blockItem.images[0]} className="w-16 rounded-full cursor-pointer h-16 mt-3 mb-3 ml-4"  alt="skipItemImage-img" />
                                                <div className="pt-3">
                                                    <p><span className="text-lg font-semibold text-black">{blockItem.firstName}</span> , <span className="text-md text-black">{age}</span></p>
                                                    <p><span className="text-md  text-[#333]">{blockItem.city}</span> <span className="text-sm text-[#333]">{blockItem.profession}</span></p>
                                                </div>
                                            </div>
                                            <div className="sm:mr-5 mt-5 mb-3">
                                                <button className="bg-[#30b21e] hover:bg-[#30b21e] text-[#fff] py-2 px-4 rounded sm:w-28" onClick={()=>deleteBlockUserHandler(blockItem)} >
                                             Unblock
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <p className="text-center pt-4">No Block Profiles</p>}
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
)
}
export default BlockUserModal
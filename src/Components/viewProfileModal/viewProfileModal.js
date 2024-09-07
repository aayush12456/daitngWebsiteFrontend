import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
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

const ViewProfileModal=({openProfile,closeProfileModal,profile})=>{
    // console.log('profile is',profile)
    const dob = profile.DOB;
    const dobBreak = dob?.split("/");
    const year = dobBreak?.[2];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const age = year ? currentYear - parseInt(year) : "";
return (
    <>
     <Modal
                open={openProfile}
                onClose={closeProfileModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div style={{ maxHeight: '35rem', overflowY: 'auto' }}>
                <div>
            <img src={profile.images[0]} alt="profile" className="w-screen "/>
           </div>
           <div className="flex gap-0">
                  <p className="pl-5 pt-4 md:text-lg font-semibold">
                    {profile?.firstName},
                  </p>
                  <p className="pl-3 pt-4 md:text-lg text-[#333] font-semibold">
                    {age},
                  </p>
                  <p className="md:text-lg pt-4 pl-3 text-[#333] font-semibold">
                    {profile?.city}
                  </p>
                </div>
                <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Relationship status</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.relationship}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">I'm looking for</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.looking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Education</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.education}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Drinking</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.drinking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Smoking</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.smoking}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Eating</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.eating}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Zodiac sign</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.zodiac}
                </p>
              </div>
              <div className="pl-5 pt-3">
                <p className="md:text-lg text-[#757575]">Languages I know</p>
                <p className="md:text-lg pt-1 font-semibold">
                  {profile?.language}
                </p>
              </div>
                </div>
                </Box>
</Modal>
    </>
)
}
export default ViewProfileModal
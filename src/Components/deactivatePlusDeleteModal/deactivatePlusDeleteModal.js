import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import deactivatePerson from '../../assets/personalProfileIcons/deactivate.webp'
import deletePerson from '../../assets/personalProfileIcons/deletePerson.png'
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { deactivateAccount } from "../../utils/peronalInfo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProfileUserAsync } from "../../Redux/Slice/deleteProfileUser/deleteProfileUser";
import { deactivateAccountAsync } from "../../Redux/Slice/deactivateAccountSlice/deactivateAccountSlice";
import { useEffect } from "react";
import { getDeactivateUserAsync } from "../../Redux/Slice/getDeactivateUser/getDeactivateUser";
import { activateUserAsync } from "../../Redux/Slice/activateUserSlice/activateUserSlice";
import { useState } from "react";
const DeactivatePlusDeleteModal=({deletePlusDeactivateAccountModal,closeDeletePlusDeactivateAccountModal})=>{
    const navigate=useNavigate()
    const [activates,setActivates]=useState(false)
    const deletePluseDeactivateAccountSelector=useSelector((state)=>state.passDataObj.passDataObj)
    // console.log('delete plus',deletePluseDeactivateAccountSelector)
    const deactivateAccountSelector=useSelector((state)=>state.deactivateAccount.deactivateAccountDataObj.deactivateHeading)
    // console.log('deactivate plus',deactivateAccountSelector)
    const getDeactivateAccountSelector=useSelector((state)=>state.getDeactivateUser.getDeactivateUser.deactivateHeading)
    // console.log('get deactivate user',getDeactivateAccountSelector)
    const activateSelector=useSelector((state)=>state.activateUser.activateUserObj.activateHeading)
    // console.log('activate user',activateSelector)
    // const activateHeading=activateSelector?.deactivation
    const id=sessionStorage.getItem('userId')
    const dispatch=useDispatch()
    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 480,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        animation: 'dropDown 1s ease-out',
        '@media (min-width: 300px) and (max-width: 350px)': {
          width: 300,
          left:"50%",
          top:"45%",
     
        },
        '@media (min-width: 350px) and (max-width: 400px)': {
          width: 350,
          left:"50%",
          top:"45%"
        },
        '@media (min-width: 400px) and (max-width: 500px)': {
          width: 400,
          left:"50%",
          top:"45%"
        },
      }
      const matchesHandler=()=>{
     navigate('/mainContent/matches')
      }
      const deletePersonProfile=()=>{
      dispatch(deleteProfileUserAsync(id))
      navigate('/')
      window.location.reload()
      }
      const deactivateAccountHandler=()=>{
        const deactivateObj={
          id:id,
          deactivate:'deactivated'
        }
        dispatch(deactivateAccountAsync(deactivateObj))
        setActivates(false)
      }
      const activateAccountHandler=()=>{
        // console.log('activate account')
        const activateAccountObj={
          id:id,
        }
        dispatch(activateUserAsync(activateAccountObj))
        setActivates(true)
        // window.location.reload()
      }
    useEffect(()=>{
      if(id){
        dispatch(getDeactivateUserAsync(id))
      }
    },[dispatch,id])
return (
    <>
    <Modal
        open={deletePlusDeactivateAccountModal}
        onClose={closeDeletePlusDeactivateAccountModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
         <p className="text-center font-semibold text-xl text-[#333]">{deletePluseDeactivateAccountSelector?.heading }</p>
         <div className="flex justify-center mt-3 mb-3">

         {deletePluseDeactivateAccountSelector.heading==='Deactivate Account'?<img src={deactivatePerson} className="w-20" alt="deactivatePerson-img"/>
         :<img src={deletePerson} className="w-20" alt="deletePerson-img"/>}
   
         </div>
         <p className="text-[#000] text-md">{deletePluseDeactivateAccountSelector?.title }</p>
       {deletePluseDeactivateAccountSelector.heading==='Deactivate Account'? <div className=" mt-4">

         <FormControl className="w-full   ">
                    <InputLabel id="demo-simple-select-label">
                      select one
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="deactivateAccount"
                      name="deactivateAccount"
                      
                    >
                      {deactivateAccount.map((deactivateItem) => {
                        return (
                          <MenuItem value={deactivateItem.reasonTitle}>
                            {deactivateItem.reasonTitle}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
         </div>:null}
         {deletePluseDeactivateAccountSelector.heading==='Deactivate Account'?<div className="flex justify-between gap-5">
          
         {deactivateAccountSelector!=='deactivated' &&  getDeactivateAccountSelector!=='deactivated' || activates ?<button class="bg-[#bbc5d1] hover:bg-[#bbc5d1] text-white  py-2 px-4 rounded w-52 mt-6 h-14" onClick={deactivateAccountHandler}>
Deactivate Account
</button>:<button class="bg-[#bbc5d1] activateButton hover:bg-[#bbc5d1] text-white  py-2 px-4 rounded w-52 mt-6 h-14 ml-20" onClick={activateAccountHandler}>
Activate Account
</button>}
{deactivateAccountSelector==='deactivated' ||  getDeactivateAccountSelector==='deactivated'   ?null:<button class="bg-[#5394e4] hover:bg-blue-700 text-white  py-2 px-4 rounded  w-52 mt-6 h-14" onClick={matchesHandler}>
  Go To Matches
</button>}
{activates &&<button class="bg-[#5394e4] hover:bg-blue-700 text-white  py-2 px-4 rounded  w-52 mt-6 h-14" onClick={matchesHandler}>
  Go To Matches
</button>}
         </div>:null}
        {deletePluseDeactivateAccountSelector.heading==='Delete Account'? <div className="flex justify-center" onClick={deletePersonProfile}>
         <button class="bg-[#5394e4] hover:bg-blue-700 text-white  py-2 px-4 rounded  w-52 mt-6 h-14" >
Delete Account
</button>
         </div>:null}
         </Box>
      </Modal>
    </>
)
}
export default DeactivatePlusDeleteModal
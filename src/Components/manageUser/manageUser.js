import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { deleteProfileUserAsync } from "../../Redux/Slice/deleteProfileUser/deleteProfileUser";
import leftArrow from '../../assets/adminIcons/leftArrow.svg'
import rightArrow from '../../assets/adminIcons/rightArrow.svg'
import '../../../src/styles.css'
const ManageUser = () => {
  const allRegisterSelector = useSelector((state) => state.getAllRegisterUser.getAllRegisterUserArray.users)
  // console.log('all register user', allRegisterSelector)
  const [open, setOpen] = useState(false);
  const [image,setImage] =useState(null)
  const [allRegister,setAllRegister]=useState(allRegisterSelector)
  const [id,setId]=useState('')
  const [text,setText]=useState('')
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  }
  const handleOpen = (item) => {
    setOpen(true);
    setImage(item)
  };
  const handleClose = () => {
    setOpen(false);
  };
  const moreInfoDetail=(allItem)=>{
navigate('/admin/allDetails',{state:allItem})
  }
  const deleteProfileHandler=(id)=>{
    setId(id)
    dispatch(deleteProfileUserAsync(id))
  }
  useEffect(()=>{
    if(id){
      const allRegisterArray=allRegister?.filter((allItem)=>allItem._id!==id)
      setAllRegister(allRegisterArray)
    }
    else{
     setAllRegister(allRegisterSelector)
 }
     },[id,allRegisterSelector,allRegister])

     const handleNextPage = () => {
      if ((currentPage + 1) * itemsPerPage < allRegister.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const textChangeHandler=(event)=>{
setText(event.target.value)
setCurrentPage(0)
    }
       // Filter data based on the search text
  const filteredData = text
  ? allRegister?.filter((allItem) =>
      allItem.firstName.toLowerCase().includes(text.toLowerCase())
    )
  : allRegister;

// Paginate the filtered data
const currentData = filteredData?.slice(
  currentPage * itemsPerPage,
  (currentPage + 1) * itemsPerPage
);

     return (
    <>
    
      <div className="w-full rounded overflow-hidden shadow-lg mt-3">
        <div className="flex justify-end mr-5 mt-3 mb-3" >
        <input type="text" className="pl-4 pt-2 pb-2 border-none " placeholder="Search " onChange={textChangeHandler}/>
        </div>
        <div className="lg:ml-80">
          {/* <p>Heelo world</p> */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="sm:p-2 text-sm sm:text-base registerText registerFirstName">Name</th>
                <th className="sm:p-2 text-sm sm:text-base registerText">Email</th>
                <th className="sm:p-2 text-sm sm:text-base registerText">Profile Pictures</th>
                <th className="sm:p-2 text-sm sm:text-base registerText">More Info</th>
                <th className="sm:p-2 text-sm sm:text-base registerText">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
               currentData&& currentData.length>0? currentData?.map((allItem) => {
                  return (
                    <>
                       <tr key={allItem.email} className="border-b">
                    <td className="text-center sm:p-2 text-sm sm:text-base registerText registerFirstName">{allItem.firstName}</td>
                    <td className="text-center sm:p-2 text-sm sm:text-base break-all registerText">{allItem.email}</td>
                    <td className="flex justify-center sm:p-2">
                      <img src={allItem.images[0]} alt="profile" className="w-16 rounded-xl cursor-pointer" onClick={()=>handleOpen(allItem)} />
                    </td>
                    <td  className="text-center sm:p-2 cursor-pointer text-sm sm:text-base registerText" onClick={()=>moreInfoDetail(allItem)}>
                      More Info
                    </td>
                    <td className="text-center sm:p-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>deleteProfileHandler(allItem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                    </>
                  )
                }):
                <p className="text-center pt-4 pb-4">No data is there</p>
              }
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-6 mt-6 mb-6">
          <img
            src={leftArrow}
            className={`w-4 cursor-pointer ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            alt="leftArrow"
            onClick={handlePreviousPage}
          />
          <img
            src={rightArrow}
            className={`w-4 cursor-pointer ${(currentPage + 1) * itemsPerPage >= allRegister?.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            alt="rightArrow"
            onClick={handleNextPage}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center">
          {image && image.images && (
              <img src={image.images[0]} alt="imageUrl" />
            )}
          </div>
        </Box>
      </Modal>

    </>
  )
}

export default ManageUser

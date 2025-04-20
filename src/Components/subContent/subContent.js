import { subContentAppImages, subContentImages } from "../../utils/mainContentData"
import { useState } from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Grow } from "@mui/material";
const SubContent=()=>{
    const [imageOpen,setImageOpen]=useState(false)
    const [imageAppOpen,setImageAppOpen]=useState(false)
    const [imageBroad,setImageBroad]=useState('')
    const [imageAppBroad,setImageAppBroad]=useState('')
    const subContentImageHandler=(image)=>{
    setImageOpen(true)
    setImageBroad(image)
    }
    const subContentAppImageHandler=(image)=>{
      setImageAppOpen(true)
      setImageAppBroad(image)
      }
    const closeImageHandler=()=>{
        setImageOpen(false)
    }
    const closeImageAppHandler=()=>{
      setImageAppOpen(false)
  }
    const style = {
        position: "absolute",
        top: "25%",
        left: "28%",
        transform: "translate(-50%, -50%)",
        width: 700,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        '@media (max-width: 300px)': {
          width: 300,
          left:"8%"
        },
        '@media (min-width: 300px) and (max-width: 350px)': {
          width: 300,
          left:"4%"
        },
        '@media (min-width: 350px) and (max-width: 400px)': {
          width: 330,
          left:"6%"
        },
        '@media (min-width: 400px) and (max-width: 500px)': {
          width: 370,
          left:"8%"
        },
        '@media (min-width: 500px) and (max-width: 600px)': {
          width: 450,
          left:"8%"
        },
        '@media (min-width: 600px) and (max-width: 700px)': {
          width: 550,
          left:"8%"
        },
        '@media (min-width: 700px) and (max-width: 850px)': {
          width: 650,
          left:"8%"
        },
        '@media (min-width: 850px) and (max-width: 1000px)': {
          width: 750,
          left:"12%"
        }
      };
      const style1 = {
        position: "absolute",
        top: "15%",
        left: "37%",
        transform: "translate(-50%, -50%)",
        width: 350,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: 24,
        p: 4,
        '@media (max-width: 300px)': {
          width: 290,
          left:"0%"
        },
        '@media (min-width: 300px) and (max-width: 350px)': {
          width: 300,
          left:"4%"
        },
        '@media (min-width: 350px) and (max-width: 400px)': {
          width: 330,
          left:"6%"
        },
        '@media (min-width: 400px) and (max-width: 500px)': {
          width: 330,
          left:"10%"
        },
        '@media (min-width: 500px) and (max-width: 600px)': {
          width: 330,
          left:"18%"
        },
        '@media (min-width: 600px) and (max-width: 700px)': {
          width: 330,
          left:"24%"
        },
        '@media (min-width: 700px) and (max-width: 850px)': {
          width: 330,
          left:"28%"
        },
        '@media (min-width: 850px) and (max-width: 1000px)': {
          width: 330,
          left:"28%"
        }
      };
return (
    <>
    <div className="bg-[#fff]">
<p className="text-[16px] lg:text-[25px] sm:text-[22px] md:text-[25px] text-center text-black font-bold pt-6 lg:pt-12"> Match & Date on most exclusively Dating App</p>
    </div>
    <div className=" lg:flex gap-7 sm:grid grid-cols-2 justify-center mt-6 mb-20">
    {
        subContentImages.map(SubContentItem=>{
            return (
                <>
                <div class="rounded overflow-hidden shadow-lg mt-4 lg:mt-0  lg:w-96 bg-orange-400 " >
                 <p className="text-white text-lg text-center pt-1 pb-1 font-semibold">{SubContentItem.name}</p>
                 <img src={SubContentItem.img} className="cursor-pointer" alt="subcontentImg" onClick={()=>subContentImageHandler(SubContentItem.img)} />
</div>
                </>
            )
        })
    }     
    </div>
    <div className="bg-[#fff] mt-[-5rem]">
<p className="text-[16px] lg:text-[25px] sm:text-[22px] md:text-[25px] text-center text-black font-bold pt-6 lg:pt-12"> Now on Mobile Date Smarter love better</p>
    </div>
    <div className=" lg:flex gap-7 xs:grid grid-cols-2 justify-center  mt-6 mb-20">
    {
        subContentAppImages.map(SubContentAppItem=>{
            return (
                <>
                <div class="rounded overflow-hidden shadow-lg mt-4 lg:mt-0  lg:w-96 bg-orange-400 w-full h-full    " >
                 <p className="text-white text-lg text-center pt-1 pb-1 font-semibold">{SubContentAppItem.name}</p>
                 <img src={SubContentAppItem.img} className="cursor-pointer lg:h-[300px] lg:w-[300px]  w-screen h-screen " alt="subcontentImg" onClick={()=>subContentAppImageHandler(SubContentAppItem.img)} />
</div>
                </>
            )
        })
    }     
    </div>
    <Modal
        open={imageOpen}
        onClose={closeImageHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Grow in={imageOpen} timeout={500}>
          <Box sx={style}>
          <div className="flex justify-center">
            <img src={imageBroad}  alt="imageBroad" />
          </div>
        </Box>
          </Grow>
      </Modal>
      <Modal
        open={imageAppOpen}
        onClose={closeImageAppHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Grow in={imageAppOpen} timeout={500}>
          <Box sx={style1}>
          <div className="flex justify-center ">
            <img src={imageAppBroad}  alt="imageBroad" className="w-96 h-96 " />
          </div>
        </Box>
          </Grow>
      </Modal>
    </>
)
}
export default SubContent
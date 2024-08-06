import React, { useState } from "react";
// import { BACKEND_BASE_URL } from "../../Services/api";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import leftArrow from "../../assets/personalProfileIcons/leftArrow.svg";
import rightArrow from "../../assets/personalProfileIcons/rightArrow.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Eating, Language, relationshipStatus, zodiacSign } from "../../utils/peronalInfo";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../../Redux/Slice/updateUserSlice/updateUserSlice";
import { LookingFor } from "../../utils/peronalInfo";
import { Education } from "../../utils/peronalInfo";
import { profession } from "../../utils/peronalInfo";
import { Drinking } from "../../utils/peronalInfo";
import { Smoking } from "../../utils/peronalInfo";
import { Interest } from "../../utils/peronalInfo";
import rigthtik from '../../assets/personalProfileIcons/rightTik.png'
import playVideo from '../../assets/personalProfileIcons/playVideo.png'
import WatchVideo from "../common/watchVideo/watchVideo";
import '../../styles.css'
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
  '@media (max-width: 300px)': {
    width: 300,
    left:"8%"
  },
  '@media (min-width: 300px) and (max-width: 350px)': {
    width: 200,
    left:"50%",
    top:"30%"
  },
  '@media (min-width: 350px) and (max-width: 400px)': {
    width: 300,
    left:"50%",
    top:"30%"
  },
  '@media (min-width: 400px) and (max-width: 500px)': {
    width: 370,
    left:"50%",
    top:"40%"
  },
  '@media (min-width: 500px) and (max-width: 600px)': {
    width: 450,
    left:"50%",
    top:"42%"
  },
  '@media (min-width: 600px) and (max-width: 700px)': {
    width: 450,
    left:"50%",
    top:"42%"
  },
  '@media (min-width: 700px) and (max-width: 850px)': {
    width: 460,
    left:"50%",
    top:"44%"
  },
  '@media (min-width: 850px) and (max-width: 1000px)': {
    width: 460,
    left:"50%",
    top:"49%"
  }
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  height: 400,
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  height: 400,
  p: 4,
  '@media (min-width: 300px) and (max-width: 350px)': {
    width: 300,
    left:"50%",
    top:"50%",
    height: 800,
  },
  '@media (min-width: 350px) and (max-width: 400px)': {
    width: 400,
    left:"50%",
    height: 800,
  },
  '@media (min-width: 400px) and (max-width: 500px)': {
    width: 400,
    left:"50%",
    height: 800,
  },
  '@media (min-width: 500px) and (max-width: 600px)': {
    width: 500,
    left:"50%",
    height: 800,
  },
  '@media (min-width: 600px) and (max-width: 642px)': {
    width: 500,
    left:"50%",
    height: 800,
    
  },
  '@media (min-width: 642px) and (max-width: 800px)': {
    width: 600,
    left:"50%",
    height: 560,
    
  },
  '@media (min-width: 800px) and (max-width: 1000px)': {
    width: 800,
    left:"50%",
    height: 560,
    
  },
  '@media (min-width: 1000px) and (max-width: 1200px)': {
    width: 700,
    left:"50%",
    height: 560,
    
  },
  '@media (min-width: 1200px) and (max-width: 1400px)': {
    width: 700,
    left:"50%",
    height: 560,
    
  },
  '@media (min-width: 1400px) and (max-width: 1820px)': {
    width: 700,
    left:"50%",
    height: 560,
    
  },
};
export const PersonalProfile = ({
  personalProfile,
  personalSignupProfile,
  matchesMainContent,
}) => {
  const getProfile = () =>
    personalProfile || personalSignupProfile || matchesMainContent || {};
  const dipsatch = useDispatch();
  const dob = getProfile().DOB;
  const dobBreak = dob?.split("/");
  const year = dobBreak?.[2];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const age = year ? currentYear - parseInt(year) : "";
  const id = sessionStorage.getItem("userId");
  const updateData = sessionStorage.getItem("updateUser");
  const updateProfile = JSON.parse(updateData);
  // console.log("update profile", updateProfile);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [openRelationship, setOpenRelationship] = React.useState(false);
  const [looking, setLooking] = useState(false);
  const [interests, setInterests] = useState(false);
  const [citys, setCitys] = useState(false);
  const [about, setAbout] = useState(false)
  const [educations, setEducations] = useState(false)
  const [professions, setProfessions] = useState(false)
  const [drinkings, setDrinkings] = useState(false)
  const [smokings, setSmokings] = useState(false)
  const [eatings, setEatings] = useState(false)
  const [zodiacs, setzodiacs] = useState(false)
  const [languages, setLanguages] = useState(false)
  const [language, setLanguage] = useState([])
  const [aboutText, setAboutText] = useState('')
  const [text, setText] = useState('Hide')
  const [cityName, setCityName] = useState('')
  const [values, setValues] = useState({})
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [watchModalOpen, setWatchModalOpen] = useState(false)
  const [personalProfileObj,setPersonalProfileObj]=useState({})
const watchVideoButton=()=>{
  setWatchModalOpen(true)
  setPersonalProfileObj(personalProfile || personalSignupProfile)

}

  const handleWatchClose = () => {
    setWatchModalOpen(false)
};

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? getProfile().images?.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (getProfile().images?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageUrl = () => {
    // return BACKEND_BASE_URL + (getProfile().images?.[currentImageIndex] || "");
    return  (getProfile().images?.[currentImageIndex] || "");
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const handleClose = () => {
    setOpen(false);
    setOpenRelationship(false);
    setLooking(false);
    setAbout(false)
    setEducations(false)
    setProfessions(false)
    setDrinkings(false)
    setSmokings(false)
    setEatings(false)
    setzodiacs(false)
    setLanguages(false)
    setCitys(false)
    setInterests(false)
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpens = () => {
    setOpenRelationship(true);
  };
  const cityOpen = () => {
    setCitys(true);
  };
  const lookingOpen = () => {
    setLooking(true);
  };
  const aboutMe = () => {
    setAbout(true)
  }
  const education = () => {
    setEducations(true)
  }
  const professionData = () => {
    setProfessions(true)
  }
  const drinkingData = () => {
    setDrinkings(true)
  }
  const smokingData = () => {
    setSmokings(true)
  }
  const eatingData = () => {
    setEatings(true)
  }
  const zodiacData = () => {
    setzodiacs(true)
  }
  const languageData = () => {
    setLanguages(true)
  }
  const interestData = () => {
    setInterests(true)
  }
  const dataChanging = () => {
    setText('Unhide')
  }
  const cityChangeHandler = (event) => {
    setCityName(event.target.value)
  }
  const languageChanges = (event) => {
    const { value } = event.target;
    setLanguage(value); // Update selected languages in local state
    const languageString = value.join(", "); // Convert array of selected languages to comma-separated string
    // console.log('lang is', languageString)
    setValues({ ...values, language: languageString }); // Update Formik values with selected languages
  };
  const relationSubmitHandler = (relation) => {
    const relationObj = {
      id: id,
      relationship: relation,
    };
    // console.log("relation is", relationObj);
    dipsatch(updateUserAsync(relationObj));
  };

  const lookingSubmitHandler = (looking) => {
    const lookingObj = {
      id: id,
      looking: looking,
    };
    dipsatch(updateUserAsync(lookingObj));
  };
  const textChangeHandler = (event) => {
    setAboutText(event.target.value)
  }
  const aboutMeSubmitHandler = () => {
    const aboutMeObj = {
      id: id,
      aboutUser: aboutText
    }
    // console.log('about me', aboutMeObj)
    dipsatch(updateUserAsync(aboutMeObj))
  }
  const educationSubmitHandler = (education) => {
    const educationObj = {
      id: id,
      education: education,
    };
    dipsatch(updateUserAsync(educationObj));
  };
  const professionSubmitHandler = (profession) => {
    const professionObj = {
      id: id,
      profession: profession,
    };
    dipsatch(updateUserAsync(professionObj));
  };
  const drinkingSubmitHandler = (drinking) => {
    const drinkingObj = {
      id: id,
      drinking: drinking,
    };
    dipsatch(updateUserAsync(drinkingObj));
  };

  const smokingSubmitHandler = (smoking) => {
    const smokingObj = {
      id: id,
      smoking: smoking,
    };
    dipsatch(updateUserAsync(smokingObj));
  };
  const eatingSubmitHandler = (eating) => {
    const eatingObj = {
      id: id,
      eating: eating,
    };
    dipsatch(updateUserAsync(eatingObj));
  };
  const zodiacSubmitHandler = (zodiac) => {
    const zodiacObj = {
      id: id,
      zodiac: zodiac,
    };
    dipsatch(updateUserAsync(zodiacObj));
  };
  const submitLanguageHandler = () => {
    const languageObj = {
      id: id,
      language: values.language
    }
    // console.log('values', languageObj)
    dipsatch(updateUserAsync(languageObj));
  };
  const citySubmitHandler = () => {
    const cityObj = {
      id: id,
      city: cityName
    }
    dipsatch(updateUserAsync(cityObj));
  }
  const interestDatas = (interestObj) => {
    
    const index = selectedInterests.indexOf(interestObj);
    if (index === -1) {
      setSelectedInterests((prevSelected) => [...prevSelected, interestObj]);
    } else {
      setSelectedInterests((prevSelected) =>
        prevSelected.filter((item) => item !== interestObj)
      );
    }
  };
  
  const isInterestSelected = (interestObj) => {
    return selectedInterests.includes(interestObj);
  };
  const interestSubmitHandler = () => {
    const interestObj = {
      id: id,
      interest: selectedInterests
    }
    dipsatch(updateUserAsync(interestObj));
  }
  const cancelLanguage=()=>{
    setLanguages(false)
  }
  // personalProfile?.images?.length==1|| personalSignupProfile?.images?.length==1?null
  return (
    <>
      <div className="flex justify-center mt-10">
        <div class="w-screen bg-white md:w-[50rem] cardWidth rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4  ">
            <div className={`flex  ${ personalProfile?.images?.length===1|| personalSignupProfile?.images?.length===1?'justify-center':'justify-between'} bg-black`}>
             {personalProfile?.images?.length===1|| personalSignupProfile?.images?.length===1?null: <img
                src={leftArrow}
                className="w-5 filter invert cursor-pointer "
                onClick={handleLeftArrowClick}
                alt="leftArrow-img"
              />}
              <div className={`flex justify-center ${personalProfile?.videoUrl ||  personalSignupProfile?.videoUrl?'ml-24':''} `}>
                <div>

                <img
                  src={getImageUrl()}
                  className="w-48 h-48 cursor-pointer object-cover personImgData img"
                  onClick={handleOpen}
                  alt="imageUrl"
                />
                </div>
               {personalProfile?.videoUrl || personalSignupProfile?.videoUrl? <div className="mt-4 relative md:left-32 play  ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-28  " onClick={watchVideoButton}> <div className="flex gap-1"><img src={playVideo} className="w-6 invert "/>Play</div>

</button>
                </div>:null}
              </div>
              
             { personalProfile?.images?.length===1|| personalSignupProfile?.images?.length===1?null:<img
                src={rightArrow}
                className="w-5 filter invert cursor-pointer"
                onClick={handleRightArrowClick}
                alt="rightArrow-img"
              />}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-0">

              <p className="pl-5 pt-4 text-lg font-semibold">
                {personalProfile && personalProfile?.firstName
                  ? personalProfile?.firstName
                  : personalSignupProfile && personalSignupProfile?.firstName
                    ? personalSignupProfile?.firstName
                    : matchesMainContent && matchesMainContent?.firstName
                      ? matchesMainContent?.firstName
                      : null}
                ,
              </p>
              <p className="pl-3 pt-4 text-lg text-[#333] font-semibold ">
                {age},
              </p>
              <p className="text-lg pt-4 pl-3 text-[#333] font-semibold">
                {updateProfile && updateProfile?.city // Check if updateProfile.relationship exists
                  ? updateProfile?.city // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.city
                    ? personalProfile?.city
                    : personalSignupProfile && personalSignupProfile?.city
                      ? personalSignupProfile?.city
                      : matchesMainContent && matchesMainContent?.city
                        ? matchesMainContent?.city
                        : null}
              </p>
 <div className="hidden personalDataBtn"><div className="  flex gap-1 mt-4 ml-5  " onClick={watchVideoButton}><img src={playVideo} className="w-6 "/>Play</div></div>
              </div>
             {!matchesMainContent? <p className="text-lg pt-4 pr-4  text-[#5394e4] hover:text-[blue]  cursor-pointer" onClick={cityOpen}>
                Edit
              </p>:null}
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Relationship status</p>
               {!matchesMainContent? <p
                  className="text-lg pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer"
                  onClick={handleOpens}
                >
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.relationship // Check if updateProfile.relationship exists
                  ? updateProfile?.relationship // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.relationship
                    ? personalProfile?.relationship
                    : personalSignupProfile && personalSignupProfile?.relationship
                      ? personalSignupProfile?.relationship
                      : matchesMainContent && matchesMainContent?.relationship
                        ? matchesMainContent?.relationship
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex gap-2 editText ">
                <p className="text-lg text-[#757575]">I'm looking for</p>
                {!matchesMainContent?<p
                  className="text-lg  lg:pl-96 lg:ml-44 pt-[-1rem] text-[#5394e4] hover:text-[blue]  cursor-pointer"
                  onClick={lookingOpen}
                >
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.looking // Check if updateProfile.relationship exists
                  ? updateProfile?.looking // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.looking
                    ? personalProfile?.looking
                    : personalSignupProfile && personalSignupProfile?.looking
                      ? personalSignupProfile?.looking
                      : matchesMainContent && matchesMainContent?.looking
                        ? matchesMainContent?.looking
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Interests</p>
                {!matchesMainContent?<p className="text-lg  pr-4  text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={interestData}>
                  Edit
                </p>:null}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3  ">
                {updateProfile && updateProfile?.interest
                  ? updateProfile?.interest.map((personalInterest) => (
                    <div className="bg-slate-200 rounded mt-3" key={personalInterest}>
                      <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
                        {personalInterest}
                      </p>
                    </div>
                  ))
                  : personalProfile && personalProfile?.interest
                    ? personalProfile?.interest.map((personalInterest) => (
                      <div className="bg-slate-200 rounded mt-3" key={personalInterest}>
                        <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575]">
                          {personalInterest}
                        </p>
                      </div>
                    ))
                    : null}
                {personalSignupProfile
                  ? personalSignupProfile?.interest.map((personalInterest) => {

                    return (
                      <>
                        <div className="bg-slate-200 rounded mt-3">
                          <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                            {personalInterest}
                          </p>
                        </div>
                      </>
                    );
                  })
                  : null}

                {matchesMainContent
                  ? matchesMainContent?.interest.map((mainContentInterest) => {

                    return (
                      <>
                        <div className="bg-slate-200 rounded mt-3">
                          <p className="text-lg pt-3 text-center pl-4 pr-4 pb-3 text-[#757575] ">
                            {mainContentInterest}
                          </p>
                        </div>
                      </>
                    );
                  })
                  : null}


              </div>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575] ">About me</p>
                {!matchesMainContent?<p className="text-lg  pr-4  text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={aboutMe}>
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 text-black font-semibold">
                {updateProfile && updateProfile?.aboutUser // Check if updateProfile.relationship exists
                  ? updateProfile?.aboutUser // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.aboutUser
                    ? personalProfile?.aboutUser
                    : personalSignupProfile && personalSignupProfile?.aboutUser
                      ? personalSignupProfile?.aboutUser
                      : matchesMainContent && matchesMainContent?.aboutUser
                        ? matchesMainContent?.aboutUser
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Education</p>
               {!matchesMainContent? <p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={education}>
                  Edit
                </p>:null}
              </div>
              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.education // Check if updateProfile.relationship exists
                  ? updateProfile?.education // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.education
                    ? personalProfile?.education
                    : personalSignupProfile && personalSignupProfile?.education
                      ? personalSignupProfile?.education
                      : matchesMainContent && matchesMainContent?.education
                        ? matchesMainContent?.education
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Profession</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={professionData}>
                  Edit
                </p>:null}
              </div>
              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.profession // Check if updateProfile.relationship exists
                  ? updateProfile?.profession // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.profession
                    ? personalProfile?.profession
                    : personalSignupProfile && personalSignupProfile?.profession
                      ? personalSignupProfile?.profession
                      : matchesMainContent && matchesMainContent?.profession
                        ? matchesMainContent?.profession
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Drinking</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={drinkingData}>
                  Edit
                </p>:null}
              </div>
              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.drinking // Check if updateProfile.relationship exists
                  ? updateProfile?.drinking // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.drinking
                    ? personalProfile?.drinking
                    : personalSignupProfile && personalSignupProfile?.drinking
                      ? personalSignupProfile?.drinking
                      : matchesMainContent && matchesMainContent?.drinking
                        ? matchesMainContent?.drinking
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Smoking</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={smokingData}>
                  Edit
                </p>:null}
              </div>
              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.smoking // Check if updateProfile.relationship exists
                  ? updateProfile?.smoking // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.smoking
                    ? personalProfile?.smoking
                    : personalSignupProfile && personalSignupProfile?.smoking
                      ? personalSignupProfile?.smoking
                      : matchesMainContent && matchesMainContent?.smoking
                        ? matchesMainContent?.smoking
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575]">Eating</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={eatingData}>
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.eating // Check if updateProfile.relationship exists
                  ? updateProfile?.eating // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.eating
                    ? personalProfile?.eating
                    : personalSignupProfile && personalSignupProfile?.eating
                      ? personalSignupProfile?.eating
                      : matchesMainContent && matchesMainContent?.eating
                        ? matchesMainContent?.eating
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between ">
                <p className="text-lg text-[#757575] ">Zodiac sign</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={zodiacData}>
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.zodiac // Check if updateProfile.relationship exists
                  ? updateProfile?.zodiac // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.zodiac
                    ? personalProfile?.zodiac
                    : personalSignupProfile && personalSignupProfile?.zodiac
                      ? personalSignupProfile?.zodiac
                      : matchesMainContent && matchesMainContent?.zodiac
                        ? matchesMainContent?.zodiac
                        : null}
              </p>
            </div>
            <div className="pl-5 pt-6">
              <div className="flex justify-between  ">
                <p className="text-lg text-[#757575]">languages I know</p>
                {!matchesMainContent?<p className="text-lg  pr-4 text-[#5394e4] hover:text-[blue] cursor-pointer" onClick={languageData}>
                  Edit
                </p>:null}
              </div>

              <p className="text-lg pt-1 font-semibold">
                {updateProfile && updateProfile?.language // Check if updateProfile.relationship exists
                  ? updateProfile?.language // Show updateProfile.relationship if it exists
                  : personalProfile && personalProfile?.language
                    ? personalProfile?.language
                    : personalSignupProfile && personalSignupProfile?.language
                      ? personalSignupProfile?.language
                      : matchesMainContent && matchesMainContent?.language
                        ? matchesMainContent?.language
                        : null}
              </p>
            </div>
          </div>
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
            <img src={getImageUrl()} alt="imageUrl" />
          </div>
        </Box>
      </Modal>

      <Modal
        open={openRelationship}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select relationship status</p>

          {relationshipStatus.map((relationItem) => {
            return (
              <>
              <div className="flex justify-between  ">

                <p
                  className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.relationship===relationItem?.relation?'text-[#5595e4]':'text-[#333]'}`}
                  onClick={() => relationSubmitHandler(relationItem.relation)}
                >
                  {relationItem?.relation}
                </p>
                {updateProfile?.relationship===relationItem?.relation?<img src={rigthtik} className="w-5 h-5 mt-3" alt="righttike-img" />:null}
              </div>
              </>
            );
          })}
        </Box>
      </Modal>

      <Modal
        open={looking}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Looking For</p>
          {LookingFor.map((lookingItem) => {
            return (
              <>
                <div className="flex justify-between  ">

                <p
                className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.looking===lookingItem?.looking?'text-[#5595e4]':'text-[#333]'}`}
                  onClick={() => lookingSubmitHandler(lookingItem.looking)}
                >
                  {lookingItem.looking}
                </p>
                {updateProfile?.looking===lookingItem?.looking?<img src={rigthtik} className="w-5 h-5 mt-3" alt="righttik-img"/>:null}
                </div>
              </>
            );
          })}
        </Box>
      </Modal>

      <Modal
        open={about}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg">About Me</p>

          <textarea class="resize rounded-md border-2 outline-none w-80 h-36 mt-4 pl-2  pt-4 " onChange={textChangeHandler}  >{updateProfile && updateProfile?.aboutUser ? updateProfile?.aboutUser:personalProfile?.aboutUser}</textarea>
          <button className=" bg-orange-600   dark:bg-orange-300 dark:hover:bg-orange-300  text-white font-bold py-2 px-4 rounded w-80 mt- h-12" type="submit" onClick={aboutMeSubmitHandler}>
            SAVE
          </button>
        </Box>
      </Modal>

      <Modal
        open={educations}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Education</p>
          {
            Education.map(educationItem => {
              return (
                <>
                   <div className="flex justify-between  ">

                  <p
                    className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.education===educationItem?.education?'text-[#5595e4]':'text-[#333]'}`}
                    onClick={() => educationSubmitHandler(educationItem.education)}
                  >
                    {educationItem?.education}
                  </p>
                  {updateProfile?.education===educationItem?.education?<img src={rigthtik} className="w-5 h-5 mt-3" alt="righttik-img" />:null}
                   </div>
                </>
              )
            })
          }
        </Box>
      </Modal>

      <Modal
        open={professions}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Profession</p>
          <div className="overflow-y-auto max-h-48 ">
            {profession.map((professionItem, index) =>{
              return (
                <>
                      <div className="flex justify-between  ">

                  <p 
                key={index}
                className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.profession===professionItem?.profession?'text-[#5595e4]':'text-[#333]'}`}
                onClick={() => professionSubmitHandler(professionItem.profession)}
              >
                {professionItem?.profession}
              </p>
              {updateProfile?.profession===professionItem?.profession?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                      </div>
                </>
              )
            })}
          </div>
        </Box>
      </Modal>

      <Modal
        open={drinkings}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Drinking Habit</p>
          {
            Drinking.map(drinkingItem => {
              return (
                <>
                 <div className="flex justify-between  ">

                  <p
                   className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.drinking===drinkingItem?.profession?'text-[#5595e4]':'text-[#333]'}`}
                    onClick={() => drinkingSubmitHandler(drinkingItem.drinking)}
                  >
                    {drinkingItem?.drinking}
                  </p>
                  {updateProfile?.drinking===drinkingItem?.drinking?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                 </div>
                </>
              )
            })
          }
        </Box>
      </Modal>
      <Modal
        open={smokings}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Smoking Habit</p>
          {
            Smoking.map(smokingItem => {
              return (
                <>
                            <div className="flex justify-between  ">

                  <p
                className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.smoking===smokingItem?.smoking?'text-[#5595e4]':'text-[#333]'}`}
                    onClick={() => smokingSubmitHandler(smokingItem.smoking)}
                  >
                    {smokingItem?.smoking}
                  </p>
                  {updateProfile?.smoking===smokingItem?.smoking?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                            </div>

                </>
              )
            })
          }

        </Box>
      </Modal>
      <Modal
        open={eatings}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Eating Habit</p>
          {
            Eating.map(EatingItem => {
              return (
                <>
                <div className="flex justify-between  ">

                  <p
             className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.eating===EatingItem?.eating?'text-[#5595e4]':'text-[#333]'}`}
                    onClick={() => eatingSubmitHandler(EatingItem.eating)}
                  >
                    {EatingItem?.eating}
                  </p>
                  {updateProfile?.eating===EatingItem?.eating?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                </div>

                </>
              )
            })
          }

        </Box>
      </Modal>
      <Modal
        open={zodiacs}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg text-[#333]">Select Zodiac Sign</p>
          {
            zodiacSign.map(zodiacItem => {
              return (
                <>
                     <div className="flex justify-between  ">

                  <p
                       className={`cursor-pointer pt-3 hover:text-[#5595e4] ${updateProfile?.zodiac===zodiacItem?.zodiac?'text-[#5595e4]':'text-[#333]'}`}
                    onClick={() => zodiacSubmitHandler(zodiacItem.zodiac)}
                  >
                    {zodiacItem?.zodiac}
                  </p>
                  {updateProfile?.zodiac===zodiacItem?.zodiac?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                     </div>
                </>
              )
            })
          }

        </Box>
      </Modal>

      <Modal
        open={languages}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <p className="text-center text-lg text-[#333]">Select Languages</p>
          <FormControl className="w-80 ">
            <InputLabel id="demo-multiple-checkbox-label" >
              {updateProfile?.language}
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={language}
              onChange={languageChanges}
              input={<OutlinedInput label="Language" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              name="language" // Add name attribute
              className="mt-4"

            >
              {Language.map((languageItem) => (
                <MenuItem
                  key={languageItem.language}
                  value={languageItem.language}
                >
                  <Checkbox
                    checked={language.includes(languageItem.language)}
                  />
                  <div className="flex justify-between gap-36">

                  <ListItemText primary={languageItem.language} />
                  {updateProfile?.language===languageItem?.language?<img src={rigthtik} className="w-5 h-5 mt-3 mr-3 " alt="righttik-img"/>:null}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className=" mt-12 flex gap-32">
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded  w-24 h-12" type="submit" onClick={cancelLanguage}>
              Cancel
            </button>
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-24   h-12" type="submit" onClick={submitLanguageHandler}>
              SAVE
            </button>
          </div>
        </Box>

      </Modal>

      <Modal
        open={citys}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center text-lg">Basic Info</p>
          <div className="border-2  h-14 mt-4 pl-4 pr-4 pt-4 ">
            <div className="flex justify-between">
              <p className="text-md text-[#8f929a]">First name:</p>
              <p className="text-md text-[#8f929a]">{personalProfile?.firstName}</p>
              <p className="text-md text-[#8f929a]">Can't change</p>
            </div>
          </div>
          <div className="border-2  h-14 mt-4 flex justify-between  pl-4 pr-4  ">
            <p className="text-md text-[#8f929a] pt-4">Age:</p>
            <p className="text-md text-[#8f929a] pt-4">{age}</p>
            <button className="bg-[#df7101] text-white font-bold py-2 px-4 rounded mt-2 w-18 h-10 text-sm" type="submit" onClick={dataChanging}>
              {text}
            </button>
          </div>
          <div className="flex mt-4 h-14">
            <p className="text-[#8f929a] absolute pl-4 pt-4">My city:</p>
            <input class=" appearance-none border-2  rounded w-full py-2 px-4 pl-32 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500" id="inline-full-name" type="text" placeholder={personalProfile?.city} onChange={cityChangeHandler} />
          </div>
          <div className="mt-4">
            <button className="bg-[#5394e4] text-white font-bold py-2 px-4 rounded w-80   h-12" type="submit" onClick={citySubmitHandler}>
              SAVE
            </button>
          </div>
        </Box>
      </Modal>

      <Modal
      open={interests}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style2} >
        <p className="text-center text-lg">
          Select Interests{' '}
          <span className="text-[#5394e4]">
            ({selectedInterests.length} selected)
          </span>{' '}
        </p>
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {Interest.map((item) => (
            <div
              key={item.interest}
              className={`${
                isInterestSelected(item.interest)
                  ? 'bg-green-500'
                  : 'bg-slate-300'
              }  cursor-pointer rounded-lg w-full h-full `}
              onClick={() => interestDatas(item.interest)}
            >
              <p className="text-center pt-2 pb-2">{item.interest}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 ">
          <button
            className="bg-[#5394e4] text-white font-bold py-2 px-4 rounded w-full h-12"
            type="submit"
            onClick={interestSubmitHandler}
          >
            SAVE
          </button>
        </div>
      </Box>
    </Modal>
    <WatchVideo modalOpen={watchModalOpen} handleClose={ handleWatchClose} personalVideoData={personalProfileObj}/>
    </>
  );
};
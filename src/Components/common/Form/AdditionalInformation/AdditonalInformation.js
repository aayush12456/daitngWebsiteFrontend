import React, { useState,useEffect } from "react";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import bag from "../../../../assets/formIcons/bag.png";
import graduate from "../../../../assets/formIcons/graduate.png";
import glass from "../../../../assets/formIcons/glass.png";
import smoke from "../../../../assets/formIcons/smoking .png";
import spoons from "../../../../assets/formIcons/spoons.png";
import relation from "../../../../assets/formIcons/relation.png";
import heart from "../../../../assets/formIcons/heart.png";
import looking from "../../../../assets/formIcons/looking.png";
import zodiac from "../../../../assets/formIcons/zodiac.png";
import languageLogo from "../../../../assets/formIcons/language.png";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  LookingFor,
  Smoking,
  profession,
  relationshipStatus,
  zodiacSign,
} from "../../../../utils/peronalInfo";
import { Education } from "../../../../utils/peronalInfo";
import { Drinking } from "../../../../utils/peronalInfo";
import { Eating } from "../../../../utils/peronalInfo";
import { Interest } from "../../../../utils/peronalInfo";
import { Language } from "../../../../utils/peronalInfo";
import { additonalInformationSchema } from "../../../../schemas";
import { useNavigate } from "react-router-dom";
import { passDataObjSliceAcions } from "../../../../Redux/Slice/passDataSliceObj/passDataSliceObj";
// import ProgressBarData from "../../progressBar/progressBar";
export const AdditonalInformation = ({ additionalData }) => {
  const dispatch=useDispatch()
  // console.log("data is", additionalData);
  const [personName, setPersonName] = React.useState([]);
  const [language,setLanguage]=useState([])
  const navigate = useNavigate();
  const initialValues = {
    profession: "",
    education: "",
    drinking: "",
    smoking: "",
    eating: "",
    interest: [],
    looking:"",
    relation:"",
    zodiac:"",
    language:""
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
  const handleChanges = (event) => {
    const { value } = event.target;
    setPersonName(value); // Update selected interests in local state
    setValues({ ...values, interest: value }); // Update Formik values with selected interests
  };

  const languageChanges = (event) => {
    const { value } = event.target;
    setLanguage(value); // Update selected languages in local state
    const languageString = value.join(", "); // Convert array of selected languages to comma-separated string
    setValues({ ...values, language: languageString }); // Update Formik values with selected languages
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: additonalInformationSchema,
    onSubmit: (values, action) => {

      action.resetForm();
      setPersonName([]);
      setLanguage([])
      const additionalInformation = {
        firstName: additionalData.firstName,
        phone: additionalData.phone,
        email: additionalData.email,
        password: additionalData.password,
        gender: additionalData.gender,
        city: additionalData.city,
        date: additionalData.date,
        profession: values.profession,
        education: values.education,
        drinking: values.drinking,
        smoking: values.smoking,
        eating: values.eating,
        interest: values.interest,
        relation:values.relation,
        looking:values.looking,
        zodiac:values.zodiac,
        language:values.language
      };
      // console.log("information is", additionalInformation);
      dispatch(passDataObjSliceAcions.passDataObj(additionalInformation))
      sessionStorage.setItem('additionalInformation', JSON.stringify(additionalInformation));
      navigate("/step2", { state: additionalInformation });
    },
  });
  useEffect(() => {
    const additionalforms = JSON.parse(sessionStorage.getItem('additionalInformation'));
    if (additionalforms) {
      setValues(additionalforms);
      setPersonName(additionalforms.interest || []);
      setLanguage(additionalforms.language.split(", ").map((lang) => lang.trim()));
    }
  }, [setValues]);
// console.log('values data',values)
  return (
    <>
 
     

   
    
      <div className="flex justify-center mt-4">
        <div class=" rounded overflow-hidden shadow-lg h-full w-96">
          <div class="px-6 py-4  ">
            <form onSubmit={handleSubmit}>
              <div className="  mt-5 ">
                <div className="flex gap-2">
                  <img src={bag} className="w-10 h-9 mt-2" alt="bag-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Profession
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Profession"
                      name="profession"
                      value={values.profession}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.profession && touched.profession)}
                    >
                      {profession.map((professionItem) => {
                        return (
                          <MenuItem value={professionItem.profession}>
                            {professionItem.profession}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.profession && touched.profession ? (
                  <p className="text-red-500 pl-14">{errors.profession}</p>
                ) : null}
                <div className="flex gap-2 mt-5">
                  <img src={graduate} className="w-10 h-9 mt-2" alt="graduate-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Education
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Education"
                      name="education"
                      value={values.education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.education && touched.education)}
                    >
                      {Education.map((educationItem) => {
                        return (
                          <MenuItem value={educationItem.education}>
                            {educationItem.education}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.education && touched.education ? (
                  <p className="text-red-500 pl-14">{errors.education}</p>
                ) : null}
                <div className="flex gap-2 mt-5">
                  <img src={glass} className="w-10 h-9 mt-2" alt="glass-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Drinking
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Drinking"
                      name="drinking"
                      value={values.drinking}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.drinking && touched.drinking)}
                    >
                      {Drinking.map((drinkingItem) => {
                        return (
                          <MenuItem value={drinkingItem.drinking}>
                            {drinkingItem.drinking}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.drinking && touched.drinking ? (
                  <p className="text-red-500 pl-14">{errors.drinking}</p>
                ) : null}
                <div className="flex gap-2 mt-5">
                  <img src={smoke} className="w-10 h-9 mt-2" alt="smoke-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Smoking
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Smoking"
                      name="smoking"
                      value={values.smoking}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.smoking && touched.smoking)}
                    >
                      {Smoking.map((smokingItem) => {
                        return (
                          <MenuItem value={smokingItem.smoking}>
                            {smokingItem.smoking}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.smoking && touched.smoking ? (
                  <p className="text-red-500 pl-14">{errors.smoking}</p>
                ) : null}
                <div className="flex gap-2 mt-5">
                  <img src={spoons} className="w-10 h-9 mt-2" alt="spoons-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Eating
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Eating"
                      name="eating"
                      value={values.eating}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.eating && touched.eating)}
                    >
                      {Eating.map((eatingItem) => {
                        return (
                          <MenuItem value={eatingItem.eating}>
                            {eatingItem.eating}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.eating && touched.eating ? (
                  <p className="text-red-500 pl-14">{errors.eating}</p>
                ) : null}
                <div className="flex gap-2 mt-5">
                  <img src={heart} className="w-10 h-9 mt-4" alt="heart-image" />
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Interest
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChanges}
                      input={<OutlinedInput label="Interest" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                      name="interest" // Add name attribute
                      onBlur={handleBlur} // Add onBlur event to trigger Formik validation
                      error={Boolean(errors.interest && touched.interest)}
                    >
                      {Interest.map((interestItem) => (
                        <MenuItem
                          key={interestItem.interest}
                          value={interestItem.interest}
                        >
                          <Checkbox
                            checked={personName.includes(interestItem.interest)}
                          />
                          <ListItemText primary={interestItem.interest} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {errors.interest && touched.interest ? (
                  <p className="text-red-500 pl-14">{errors.interest}</p>
                ) : null}
                {/* dfldldffdfd */}
                <div className="flex gap-2 mt-5">
                  <img src={relation} className="w-10 h-9 mt-2" alt="relation-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                      Relationship Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Relationship Status"
                      name="relation"
                      value={values.relation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.relation && touched.relation)}
                    >
                      {relationshipStatus.map((relationItem) => {
                        return (
                          <MenuItem value={relationItem.relation}>
                            {relationItem.relation}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.relation && touched.relation ? (
                  <p className="text-red-500 pl-14">{errors.relation}</p>
                ) : null}
                {/* dfldldffdfd */}
                <div className="flex gap-2 mt-5">
                  <img src={looking} className="w-10 h-9 mt-2" alt="looking-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                     Looking For
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Looking For"
                      name="looking"
                      value={values.looking}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.looking && touched.looking)}
                    >
                      {LookingFor.map((lookItem) => {
                        return (
                          <MenuItem value={lookItem.looking}>
                            {lookItem.looking}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.looking && touched.looking ? (
                  <p className="text-red-500 pl-14">{errors.looking}</p>
                ) : null}
                {/* zodiac */}
                <div className="flex gap-2 mt-5">
                  <img src={zodiac} className="w-10 h-9 mt-2" alt="zodiac-image" />
                  <FormControl className="w-80 ">
                    <InputLabel id="demo-simple-select-label">
                    Zodiac Sign
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Zodiac Sign"
                      name="zodiac"
                      value={values.zodiac}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(errors.zodiac && touched.zodiac)}
                    >
                      {zodiacSign.map((zodiacItem) => {
                        return (
                          <MenuItem value={zodiacItem.zodiac}>
                            {zodiacItem.zodiac}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                {errors.zodiac && touched.zodiac ? (
                  <p className="text-red-500 pl-14">{errors.zodiac}</p>
                ) : null}
                {/* language */}
                <div className="flex gap-2 mt-5">
                  <img src={languageLogo} className="w-10 h-9 mt-2" alt="languageLogo-image" />
                  <FormControl className="w-80 ">
                  <InputLabel id="demo-multiple-checkbox-label">
                    Language
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
                      onBlur={handleBlur} // Add onBlur event to trigger Formik validation
                      error={Boolean(errors.language && touched.language)}
                    >
                     {Language.map((languageItem) => (
                        <MenuItem
                          key={languageItem.language}
                          value={languageItem.language}
                        >
                          <Checkbox
                            checked={language.includes(languageItem.language)}
                          />
                          <ListItemText primary={languageItem.language} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {errors.language && touched.language ? (
                  <p className="text-red-500 pl-14">{errors.language}</p>
                ) : null}
                <div class="flex justify-center mt-7 mb-9 ">
                  <button
                    className=" bg-orange-600   dark:bg-orange-300 dark:hover:bg-orange-300  text-white font-bold py-2 px-4 rounded w-96 h-12"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

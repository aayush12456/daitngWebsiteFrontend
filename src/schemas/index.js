import * as Yup from "yup"
export const loginSchema=Yup.object({
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().min(6).required("Please enter password"),
})
export const signUpSchema=Yup.object({
    firstName:Yup.string().min(2).max(25).required("Please enter name"),
    phone:Yup.string().max(10).required("Please enter phone"),
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().min(6).required("Please enter password"),
    gender:Yup.string().min(2).required("Please enter gender"),
    date: Yup.string() .required('Please enter your date'),
    city:Yup.string().min(4).required("Please enter  city"),
})

export const additonalInformationSchema=Yup.object({
    profession:Yup.string().min(2).max(25).required("Please enter profession"),
    education:Yup.string().min(2).required("Please enter education"),
    drinking:Yup.string().min(2).required("Please enter drinking"),
    smoking:Yup.string().min(6).required("Please enter smoking"),
    eating:Yup.string().min(2).required("Please enter eating"),
    interest: Yup.array().min(1, "Please select at least one interest").required("Please select interest"),
    relation:Yup.string().min(2).required("Please enter relationhip status"),
    looking:Yup.string().min(2).required("Please enter looking for"),
    zodiac:Yup.string().min(2).required("Please enter zodiac sign"),
    language:Yup.string().min(2).required("Please enter language"),
})

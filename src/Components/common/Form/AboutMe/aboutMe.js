import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
const AboutMe=({aboutMe})=>{
    const [text,setText]=useState('')
    const [about,setAbout]=useState('')
    // console.log('about me',aboutMe)
    const navigate=useNavigate()
    const textChangeHandler=(event)=>{
   setText(event.target.value)
    }
    const textSubmit=(e)=>{
    e.preventDefault()
    if(!text){
        setAbout('Please describe yourself')
        return 
    }
    const aboutMeData={
        firstName:aboutMe?.firstName,
        phone:aboutMe?.phone,
        email:aboutMe?.email,
        password:aboutMe?.password,
        gender:aboutMe?.gender,
        city:aboutMe?.city,
        date:aboutMe?.date,
        profession:aboutMe?.profession,
        education:aboutMe?.education,
        drinking:aboutMe?.drinking,
        smoking:aboutMe?.smoking,
        eating:aboutMe?.eating,
        interest:aboutMe?.interest,
        relationship:aboutMe?.relation,
        looking:aboutMe?.looking,
        zodiac:aboutMe?.zodiac,
        language:aboutMe?.language,
        aboutUser:text,
        songId:aboutMe.songId
    }
    // console.log('about me',aboutMeData)
    sessionStorage.setItem('aboutMeInformation', JSON.stringify(aboutMeData));
    navigate('/step3',{state:aboutMeData})
    setText('')
    }
    useEffect(() => {
        const aboutMeforms = JSON.parse(sessionStorage.getItem('aboutMeInformation'));
        if (aboutMeforms) {
          setText(aboutMeforms.aboutUser);
        }
      }, [setText]);

return (
    <>
    <div className="flex justify-center  ">
        <form onSubmit={textSubmit}>
        <div className="mt-10 w-full ">
 <textarea class="resize rounded-md border-2 outline-none w-screen sm:w-[40rem]  h-36 pl-4 pt-4 " onChange={textChangeHandler}  value={text} placeholder="Describe yourself. What you currently do? What is quirky abiut you? What makes you smile?..." ></textarea>
 {about && (
                        <div className="flex justify-start mt-2 text-red-500">
                            {about}
                        </div>
                    )}
<div className="mt-4 w-full" >
<button className=" bg-orange-600 w-screen   dark:bg-orange-300 dark:hover:bg-orange-300  sm:w-[40rem]  text-white font-bold py-2 px-4 rounded h-12"  type="submit">
SAVE
</button>
</div>
        </div>
        </form>
    
    
    </div>
    </>
)
}
export default AboutMe
import { Settings } from "../../Components/settings/settings"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getSkipProfileUserAsync } from "../../Redux/Slice/getSkipProfileUser/getSkipProfileUser"
export const SettingsPage=()=>{
    const id=sessionStorage.getItem('userId')
    console.log('id skip is',id)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getSkipProfileUserAsync(id))
    },[dispatch])
return (
    <>
 <p className='text-center font-bold text-2xl pt-6 absolute    '>Settings</p>
<Settings/>
    </>
)
}

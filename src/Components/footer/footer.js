import { SafetyArray, aboutApp } from "../../utils/footerContentData"

const Footer=()=>{
return (
    <>
<div className="w-full bg-[#3c21d1]">
<div className="flex justify-center ">
<div className="grid grid-cols-3 ml-4 lg:ml-0  gap-7 lg:gap-48 mt-20">
    <div >
    <p className="text-[#ff0] lg:text-lg font-semibold">Help For You</p>
    <p className="lg:text-md text-white pt-4 cursor-pointer">FAQ's</p>
    <p className="lg:text-md text-white pt-4 cursor-pointer">Contact Support</p>
</div>
<div>
<p className="text-[#ff0] lg:text-lg font-semibold ">Safety and Privacy</p>
    {
        SafetyArray.map(safetyItem=>{
            return (
                <>
                <div className="pt-4">
                <p className="lg:text-md text-white cursor-pointer">{safetyItem.name}</p>
                </div>
                </>
            )
        })
    }
</div>
<div>
<p className="text-[#ff0] lg:text-lg font-semibold">About Date App</p>
    {
        aboutApp.map(aboutItem=>{
            return (
                <>
                <div className="pt-4">
                <p className="lg:text-md text-white cursor-pointer">{aboutItem.name}</p>
                </div>
                </>
            )
        })
    }
</div>
</div>

</div>
<div className="bg-[#3318c8] ml-4 mr-4 gap-7 lg:ml-0 lg:mr-0 flex justify-center mt-8 lg:gap-60">
    <div>
<p className="text-white pt-3 pb-3">Copyright ©2024. All rights reserved.</p>
    </div>
    <div>
    <p className="text-white pt-3 pb-3">Date App is best to start your love journey</p> 
    </div>
</div>
</div>
    </>
)
}
export default Footer
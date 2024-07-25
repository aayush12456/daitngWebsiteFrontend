import { subContentImages } from "../../utils/mainContentData"
const SubContent=()=>{
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
                 <img src={SubContentItem.img}  />
</div>
                </>
            )
        })
    }     
    </div>
   
    </>
)
}
export default SubContent
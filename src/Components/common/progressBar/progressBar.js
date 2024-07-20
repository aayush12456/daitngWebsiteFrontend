const ProgressBarData=({aboutMe,videoRecord,videoUpload,photoData})=>{
    let  number=30

    if (aboutMe) {
        number +=40;
      }
      else if(videoRecord){
        number += 50;
      }
      else if(videoUpload){
        number += 60;
      }
      else if(photoData){
        number += 70;
      }
return(
    <>
    <div className="flex justify-center -mt-12  md:justify-end md:mr-9 lg:mr-14 xl:mr-24 ">
    <div class="w-52 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
  <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width:`${number}%`}}></div>
</div>
    </div>

    </>
)
}
export default ProgressBarData
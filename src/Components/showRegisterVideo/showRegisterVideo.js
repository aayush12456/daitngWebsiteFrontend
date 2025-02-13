
const ShowRegisterVideo=()=>{
return (
    <>
    <div className="bg-neutral-100">
    <p className="text-[16px] lg:text-[25px] sm:text-[22px] md:text-[25px] text-center text-black font-bold pt-6 lg:pt-12">
  How to Register on Apnapan
      </p>
    <div className="flex justify-center mt-7 ">
  <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
    <div>
      <iframe
       className=" sm:w-[30rem] sm:h-[18rem]"
        src="https://www.youtube.com/embed/kAtdMrxovcI?si=FNXWeOOufdfISTSh"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="mt-12 lg:mt-0">
      <iframe
     className="sm:w-[30rem] sm:h-[18rem]"
        src="https://www.youtube.com/embed/K8mbc7ngn3M?si=nQjRsb9z1FAOYXkG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="mt-12 lg:mt-0">
    <iframe  className="sm:w-[30rem] sm:h-[18rem]" src="https://www.youtube.com/embed/YuUyXGNOmks?si=djHTwN_XoA4im0I7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

    </div>
    </>
)
}
export default ShowRegisterVideo
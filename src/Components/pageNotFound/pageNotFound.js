import errorImage from '../../assets/errorImage/errorImage.jpg'
import { useNavigate } from 'react-router-dom'
const PageNotFound=()=>{
    const navigate=useNavigate()
    const gotoHome=()=>{
        navigate('/')
    }
return (
    <>
    <div className='flex justify-center'>
    <img src={errorImage} className='w-[160px] h-[213px] mt-7' alt='errorImage-img'/>
    </div>
    <p className='text-black text-2xl text-center font-semibold'>Oh! Crap!! No Dates Here!</p>
    <div className='pt-4'>
    <p className='text-center text-lg text-[#626377]'>Looks like you landed</p>
    <p className='text-center text-lg text-[#626377]'>on the wrong page. Let's start afresh!</p>
    </div>
    <div className='flex justify-center mt-4 mb-14'>
    <button class="bg-[#fe771d] hover:bg-[#Fe771d] text-white font-bold py-2 px-4 rounded w-[161px] h-[48px]" onClick={gotoHome}>
Go to Home
</button>
    </div>
    </>
)
}
export default PageNotFound
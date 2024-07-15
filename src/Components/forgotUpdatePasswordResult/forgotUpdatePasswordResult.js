import right from '../../assets/matchIcons/right.png'
import { useNavigate } from 'react-router-dom'
const ForgotUpdatePasswordResult=()=>{
    const navigate=useNavigate()
    const backToLoginHandler=()=>{
  navigate('/')
    }
return (
    <>
    <div>    
    </div>
    <div className='flex justify-center'>
    <img src={right} className='w-20'/>
    </div>
    <div>
        <p className='text-center pt-3 pb-3 text-lg'>Congrats! Your password has been changed</p>
    </div>
    <div className="flex justify-center mt-4">
              <button
                type="button"
                className="text-white bg-[#ff6000] font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-orange-300 dark:hover:bg-orange-300 focus:outline-none dark:focus:ring-blue-800 w-64"
                style={{ width: "20rem", height: '3rem' }}
                onClick={backToLoginHandler}
              >
               Login now
              </button>
            </div>
    </>
)
}
export default ForgotUpdatePasswordResult
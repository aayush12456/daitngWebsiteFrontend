import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { comparePhoneNumberAsync } from '../../Redux/Slice/comparePhoneNumberSlice/comparePhoneNumberSlice'
import heart from '../../../src/assets/mainBodyImage/heart.svg'
import '../../styles.css'

export const Content = ({ mainContentImages,index }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerNow = () => {
    dispatch(comparePhoneNumberAsync('joinNow'))
    navigate('/anotherContent')
  }

  return (
    <>
      <div className='lg:relative lg:w-full lg:h-screen'>
        <img
          src={mainContentImages.img}
          alt="Background"
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute sm:top-32 top-24 text-lg lg:top-36 left-10 text-white flex gap-2 '>
        <p className=' sm:text-2xl lg:text-4xl font-bold'>
          <span>Find Your Perfect Match</span><br />
          <span>and Start Your Love Journey</span>
        </p>
        <img src={heart} className='w-7 mt-5 lg:mt-14' alt='heart-img'/>
      </div>
      <div   className={`absolute top-40 sm:top-52 left-11 lg:top-64 lg:left-16 ${
          index === 1 ? 'move-button' : ''
        }`}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded sm:w-32 sm:h-12 lg:w-44 lg:h-12"
          onClick={registerNow}
        >
          Join Now
        </button>
      </div>
    </>
  )
}

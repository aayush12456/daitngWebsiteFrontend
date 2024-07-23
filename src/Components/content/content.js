import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { comparePhoneNumberAsync } from '../../Redux/Slice/comparePhoneNumberSlice/comparePhoneNumberSlice'
import heart from '../../../src/assets/mainBodyImage/heart.svg'
import '../../index.css'

export const Content = ({ mainContentImages }) => {
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
      <div className='absolute top-36 left-10 text-white flex gap-2 '>
        <p className='text-4xl font-bold'>
          <span>Find Your Perfect Match</span><br />
          <span>and Start Your Love Journey</span>
        </p>
        <img src={heart} className='w-7 mt-14'/>
      </div>
      <div className='absolute top-64 left-16'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-44 h-12"
          onClick={registerNow}
        >
          Join Now
        </button>
      </div>
    </>
  )
}

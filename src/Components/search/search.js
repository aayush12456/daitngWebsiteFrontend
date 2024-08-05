import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Sliders } from '../slider/slider';
function valuetext(value) {
    return `${value}°C`;
  }
export const Search = () => {
  const [ageRange, setAgeRange] = useState(30); 
  const [search,setSearch]=useState([])
  const handleSliderChange=(event )=>{
  setAgeRange(event.target.value)
  }
  const sliderChangeHandler=(e)=>{
  e.preventDefault()
  const sliderData={
    slider:ageRange
  }
  // console.log('slider data is',sliderData)
  sessionStorage.setItem('sliderData',sliderData.slider)
  setAgeRange(30)
  window.location.reload()
  }
 const sliderArray=(search)=>{
setSearch(search)
 }
  return (
<>
<Sliders slider={sliderArray} />
{search.length===0?<div className='flex justify-center mt-24'>
<div class="bg-white w-[40rem] rounded overflow-hidden shadow-lg ">
  <div class="px-6 py-4">
    <div className='flex gap-96'>
    <p>Age Range</p>
    <p className='pl-14'>18 to {ageRange}</p>
    </div>
    <form onSubmit={sliderChangeHandler}>
    <Box sx={{ width: 600 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
        onChange={handleSliderChange}
        value={ageRange}
      />
    </Box>
    <div className='flex justify-center'>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96 mt-9 mb-6">
  Search
</button>     
    </div>
    </form>

 
  </div>
 
</div>
</div>:null}


</>
  )
}

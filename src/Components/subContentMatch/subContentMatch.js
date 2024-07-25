import location from '../../../src/assets/mainBodyImage/Phone Location.png'
import matchImg from '../../../src/assets/mainBodyImage/date5.jpg'
import twoPerson from '../../../src/assets/mainBodyImage/date3.jpg'
import {motion} from 'framer-motion'
import { useInView } from './useInView'
const SubContentMatch=()=>{
    const [ref, isInView] = useInView({ threshold: 0.1 });
return (
<>
<div ref={ref} className="bg-[#ffffae] overflow-x-hidden overflow-y-hidden">
      <p className="text-[16px] lg:text-[25px] sm:text-[22px] md:text-[25px] text-center text-black font-bold pt-6 lg:pt-12">
        Meet genuine singles and find your match!
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 mt-7 gap-8 mb-14">
          <motion.div
            className="w-28 sm:w-48 md:w-60 lg:w-72 rounded overflow-hidden shadow-lg bg-white"
            initial={{ x: -500, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={location} className="" />
            <p className="text-center pt-4 pb-4 sm:text-lg lg:text-lg">
              <span className="text-black font-semibold">Match from anywhere in India,</span>
              <br />
              <span>not just your city</span>
            </p>
          </motion.div>
          <motion.div
            className="w-28 sm:w-48 md:w-60 lg:w-72 rounded overflow-hidden shadow-lg bg-white"
            initial={{ y: 300, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={matchImg} className="" />
            <p className="text-center pt-4 pb-4 sm:text-lg  lg:text-lg">
              <span>it's for everyone</span>
              <span className="font-semibold sm:text-lg  lg:text-lg"> Match or make new Friends via MatchMaker</span>
            </p>
          </motion.div>
          <motion.div
            className="w-28 sm:w-48 md:w-60 lg:w-72 rounded overflow-hidden shadow-lg bg-white"
            initial={{ x: 500, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={twoPerson} className="" />
            <p className="text-center pt-4 pb-4 sm:text-lg  lg:text-lg">
              <span className="text-black font-semibold">Meet with your common destinations </span>
              <span>to know each other</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
</>
)
}
export default SubContentMatch
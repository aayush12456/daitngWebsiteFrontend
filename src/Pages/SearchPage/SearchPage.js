import React from 'react'
import { Search } from '../../Components/search/search'
import {Helmet} from 'react-helmet'
export const SearchPage = () => {
  return (
<>
<Helmet>
            <title>ApnaPan - Search</title>
        </Helmet>
<p className='text-center font-bold text-2xl pt-6 absolute'>Search</p>
<Search/>
</>
  )
}

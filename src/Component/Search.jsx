import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'

const Search = () => {

    const {query,searchPost}=useGlobalContext();

  return (
    <center>
    <h2 className='pt-3 text-3xl font-extrabold text-gray-700'>SEARCH ANYTHING..</h2>
     <form onSubmit={(e)=>e.preventDefault()} className='p-3 md:w-2/4 pl-9 pr-9'>
    <input className='focus:shadow-[7px_7px_5px_gray]  duration-150 p-2 w-full rounded-3xl font-semibold pl-3  focus:outline-none' type="text" value={query} onChange={(e)=>searchPost(e.target.value)} placeholder='search somethings...' />
     </form>
    </center>
  )
}

export default Search
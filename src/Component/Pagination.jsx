import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'

const Pagination = () => {
    const {page,nbPages,getPrevPage,getNextPage}=useGlobalContext();

  return (
    <>
        <div className='p-5 flex flex-row w-full justify-center gap-3'>
        <button onClick={()=>getPrevPage()} className='bg-sky-950 p-1 pl-5 pr-5 font-serif rounded-lg text-white hover:bg-sky-800'>PREV</button>
        <p> {page+1} of {nbPages}</p>
        <button onClick={()=>getNextPage()} className='bg-sky-950 p-1 pl-5 pr-5 font-serif rounded-lg text-white hover:bg-sky-800'>NEXT</button>
        </div>
    </>
  )
}

export default Pagination

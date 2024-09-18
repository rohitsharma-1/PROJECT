import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'
import icon from '../assets/icon.png'
import Loading from './Loading/loading';

const Home = () => {  
  
    const {hits,isLoading}=useGlobalContext();

    if(isLoading){
      return(
        <Loading/> 
      )
    }

    return (
      <div className='flex flex-wrap'>
       {hits.map((post,id)=>{ 
       
       return <div className='p-3 w-2/6 max-sm:w-full  ' key={id}>
     
            <div className='flex flex-col justify-start p-2 bg-slate-200 rounded-t-lg '>
              <img src={icon} className='h-5 w-5' alt="" />
                <p className='ml-5 font-bold text-xl'>{post.title}</p>
                <p>{post.about}</p>
                <p className='ml-5 font-semibold'>By {post.author}</p>
                <div className='flex justify-end pr-2'><p className=' bg-slate-300 rounded-md pr-2 pl-2 font-mono font-semibold'>{post.points}</p></div>
              </div>
             
              <div  className=' bg-slate-300 flex justify-center rounded-b-lg p-1 underline '>
                  <a href={post.url}  target='_blank' className='visited:text-blue-500 hover:font-bold duration-100'>Read More</a>
                  </div>
          </div>
          
  
       })} 
      </div>
    )
}

export default Home

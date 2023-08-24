import React from 'react'
import { SearchBox } from './SearchBox'
import { FeedBox } from './FeedBox'

export const Main = () => {
  return (
    <>
     <div className='main_cont_box1'><SearchBox/></div>

     <div  style={{height:"auto",width:"auto"}}><FeedBox/></div>
     </>
   
  )
}

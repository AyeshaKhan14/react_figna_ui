import React from 'react'
import feedStyle from "../../Style/FeedBox.module.css"
import {BiSolidChevronDown} from "react-icons/bi";
import {BsFillImageFill} from "react-icons/bs"
import {BsCameraVideo} from "react-icons/bs"
import {TiTick} from "react-icons/ti"

import user from "../../assets/user.jpg"
import image from "../../assets/Image.png"
import LinkdinDiv from './LinkdinDiv';
import { Message } from './Message';
import { Banner } from './Banner';
import { Post } from './Post';


export const FeedBox = () => {

  return (
    <div className={feedStyle.fedd_cont}>

         {/* user profile */}
      <div className={feedStyle.fedd_cont_section1}>
          <Banner/>

      {/* current working */}
<div className={feedStyle.become_a_member}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus</p>
  <div className={feedStyle.become_button}>
  <p> Become a member</p> 
    </div>
</div>

   {/* done working */}
<div className={feedStyle.today_new_div}>
  <div className={feedStyle.today_inner_div} >
  <div className={feedStyle.today_heading}>
    <h2>Todays's News</h2>
  </div>
  <div className={feedStyle.today_last_div}>
    <div  className={feedStyle.lorewu_div}>
      <p>Lorem Ipsum: Dolor Sit </p>
      <p className={feedStyle.lorewu_div_span}>1hr ago . Public</p>
      </div>

      <div  className={feedStyle.lorewu_div}>
      <p>Lorem Ipsum: Dolor Sit </p>
      <p className={feedStyle.lorewu_div_span}>1hr ago . Public</p>
      </div>

      <div  className={feedStyle.lorewu_div}>
      <p>Lorem Ipsum: Dolor Sit </p>
      <p className={feedStyle.lorewu_div_span}>1hr ago . Public</p>
      </div>

      <div  className={feedStyle.lorewu_div}>
      <p>Lorem Ipsum: Dolor Sit </p>
      <p className={feedStyle.lorewu_div_span}>1hr ago . Public</p>
      </div>

      <div className={feedStyle.read_div}>
        <h3>Read more</h3>
      </div>
  </div>
</div>
</div>
</div>

   {/* <div className={feedStyle.parent_two_div}> */}
    <div className={feedStyle.feed_cont_div2}>
          <Post/>
      </div>

      <div className={feedStyle.fedd_cont_section3}>
        <Message/>
      </div>
      {/* </div> */}
    </div>
   
  )
}

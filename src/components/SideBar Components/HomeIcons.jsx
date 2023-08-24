import React from 'react'
import sideICons from "../../Style/Sidebar.module.css"
import set from "../../assets/setting.png"
import home from "../../assets/home.jpg"
import discover from  "../../assets/Discover.jpg"
import pro from "../../assets/pro.jpg"
import book from "../../assets/book.jpg"
import mssg from "../../assets/mssg.jpg"


export const HomeIcons = () => {
  return (
    <>
      <div className={sideICons.home_iconsdiv1}>
        <div className={sideICons.homediv}> 
        <div><img className={sideICons.iconss} src={home} alt="" />
        </div>
         <p>Home</p>
         </div>
        </div> 
       <div className={sideICons.home_iconsdiv2}>
        <div className={sideICons.discover_icons}>
       <div><img className={sideICons.iconss_discover} src={discover} alt="" /> </div>
        <p>Discover</p>
        </div> 
        </div>
        <div className={sideICons.home_iconsdiv3}>
          <div className={sideICons.prfile_div}>
        <div ><img className={sideICons.iconss_profile} src={pro} alt=""/>
        </div>
        <p>Profile</p>
        </div>
        </div>
        <div className={sideICons.home_iconsdiv4}>
          <div className={sideICons.learning_div}>
        <div> <img  className={sideICons.iconss_learn} src={book} alt="" />
         </div>
        <p>Learning</p>
        </div>
        </div>
        <div className={sideICons.home_iconsdiv5}>
         
          <div className={sideICons.message_div}>
        <div> <img className={sideICons.iconss_message} src={mssg} alt="" /></div>
        <p>Message</p>
        </div>
        </div>
        <div className={sideICons.home_iconsdiv6}>
          <div className={sideICons.setting_div}>
          <div> <img className={sideICons.iconss_setting} src={set} alt="" /></div>
        <p>Settings</p>
        </div>
        </div>
    </>
  
  )
}

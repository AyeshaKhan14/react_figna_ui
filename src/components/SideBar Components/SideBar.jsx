import React from 'react'
import sideStyle from "../../Style/Sidebar.module.css";
import { HomeIcons } from './HomeIcons';
import logout from "../../assets/logout.jpg"
import logo from "../../assets/logo.png"

export const SideBar = () => {
  return (
    <div className={sideStyle.side_box}>
        <div className={sideStyle.company_logo}>
          <img src={logo} alt="" className={sideStyle.logo_icon} />
        </div>
        
        <div className={sideStyle.home_sidebar}>
         <HomeIcons/>
        </div>

        <div className={sideStyle.logout_container}>
          <div className={sideStyle.log_div}>
          <div>
            <img src={logout} alt="" className={sideStyle.logout_icon}  />
            </div>
          <p>Logout</p>
       
    </div>
    </div>
    </div>
  )
}
